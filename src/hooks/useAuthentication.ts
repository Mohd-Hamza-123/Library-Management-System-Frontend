"use client"
import React from 'react'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/hooks'
import { authClient } from '@/lib/auth-client'
import { logout } from '@/lib/features/authSlice'

export default function useAuthentication() {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const signout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    dispatch(logout())
                    router.push('/login')
                    toast("Logout Successfully", {
                        duration: 2500,
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
    
    const verifyEmail = async (email: string) => {
        try {
            // console.log(email)
            const emailVerify = await authClient.sendVerificationEmail({
                email: email,
                callbackURL: "/verified-user" // The redirect URL after verification
            })
            console.log(emailVerify)
            if (emailVerify.error) {
                console.error(emailVerify.error)
                toast.error("Failed to send verification email.")
                return
            }
            if (emailVerify.data.status) toast.success("Verification email sent successfully.")
        } catch (error: unknown) {
            console.log(error)
            toast.error("Failed to send verification email.")
        }


    }
    const signInWithGoogle = async () => {
        try {
            const response = await authClient.signIn.social({
                provider: "google",
            });
            console.log(response)
            if (response.error) {
                console.log(response.error)
                toast.error("Something went wrong. Please try again.")
                return
            }


        } catch (error) {
            console.log(error)
            toast.error("Something went wrong. Please try again.")
        }

    }

    return { signout, verifyEmail, signInWithGoogle }

}
