'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import { Icons, Title } from "./index"
import { apiResponse } from '@/types/api'
import { authClient } from '@/lib/auth-client'
import { login } from '@/lib/features/authSlice'
import React, { useEffect, useState } from 'react'
import useAuthentication from '@/hooks/useAuthentication'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

type NavItemProps = {
    title: string;
    children: React.ReactNode;
    onClick?: () => void
}

export function NavItem({ title, children, onClick }: NavItemProps) {
    return <button
        onClick={onClick}
        className="p-2 rounded-md hover:bg-slate-100 active:scale-95 transition relative">
        {children}
        <Title className='title' title={title} />
    </button>
}

export default function CurrentSession() {

    const { signout, verifyEmail } = useAuthentication();
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.authSlice.userData);
    // console.log(userData?.email)
    const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading")

    useEffect(() => {
        (async () => {
            try {
                const session = await authClient.getSession()
                const user = session?.data?.user
                // console.log("session", session.data?.user)
                if (session.error || !user) {
                    setStatus("unauthenticated")
                    return
                }
                setStatus("authenticated")
                dispatch(login({
                    userData: {
                        ...user,
                        createdAt: user.createdAt ? new Date(user.createdAt).toISOString() : null,
                        updatedAt: user.updatedAt ? new Date(user.updatedAt).toISOString() : null,
                    }
                }))

            } catch (error) {
                console.log(error)
                setStatus("unauthenticated")
            }
        })()
    }, [])

    useEffect(() => {
        if (userData && !userData?.emailVerified) {
            toast("Verify your email", {
                duration: 10000,
                action: {
                    label: "verify",
                    onClick: () => verifyEmail(userData?.email as string),
                },
            })
        }
    }, [userData])

    if (status === "loading") return null;

    return (
        <>
            {status === "authenticated" ? <NavItem
                onClick={signout}
                title='logout'>
                <Icons.logout className='text-gray-800 cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger hover:scale-110 text-xl' />
            </NavItem > :
                <Link href="/login">
                    <NavItem title='login'>
                        <Icons.login
                            className='text-gray-800 cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110'
                        />
                    </NavItem>
                </Link>
            }
        </>
    )
}
