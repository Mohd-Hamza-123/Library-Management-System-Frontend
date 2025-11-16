'use client'

import Link from 'next/link'
import { Icons } from './Icons'
import { NavItem } from './Sidebar'
import { apiResponse } from '@/types/api'
import { useAppDispatch } from '@/lib/hooks'
import { login } from '@/lib/features/authSlice'
import React, { useEffect, useState } from 'react'
import { getSession } from '@/utils/sessionClient'
import useSignout from '@/hooks/useSignout'

export default function CurrentSession() {

    const dispatch = useAppDispatch()
    const [user, setUser] = useState<apiResponse | null>(null)
    const { signout } = useSignout()

    useEffect(() => {
        (async () => {
            const session = await getSession()
            setUser(session)
            if (!session.success) return
            const user = session.data.user
            console.log(user)
            dispatch(login({ userData: user }))
        })()
    }, [])

    if (!user) return null;

    return (
        <>
            {user?.success ? <NavItem
                onClick={signout}
                title='logout'>
                <Icons.logout className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger hover:scale-110 text-xl' />
            </NavItem > :
                <Link href="/login">
                    <NavItem title='login'>
                        <Icons.login
                            className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger text-xl hover:scale-110'
                        />
                    </NavItem>
                </Link>
            }
        </>
    )
}
