"use client"
import React from 'react'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/hooks'
import { authClient } from '@/lib/auth-client'
import { logout } from '@/lib/features/authSlice'

export default function useSignout() {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const signout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    dispatch(logout())
                    router.push('/login')
                    toast("Logout Successfully", {
                        duration : 2500,
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            },
        })
    }

    return { signout }

}
