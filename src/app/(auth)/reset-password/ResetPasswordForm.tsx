"use client"

import React from 'react'
import Link from 'next/link'
import { FiLock } from 'react-icons/fi'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { LoadingButton } from '@/components'
import { resetPassword } from './action'
import { redirect } from 'next/navigation'

type Props = {
    token: string
}

export default function ResetPasswordForm({ token }: Props) {

    const submit = async (data: FormData) => {
      
        const password = data.get('password') as string
        const confirmPassword = data.get('confirmPassword') as string

        if (password !== confirmPassword) {
            toast("Passwords do not match.", {
                style: { backgroundColor: '#fdecea', color: 'red' },
                duration: 4000,
            })
            return
        }

        const result = await resetPassword(password,token)
        console.log(result)
        if (result?.success) {
            toast(result.message ?? "Password reset successfully. You can now log in.", {
                duration: 3000,
            })
            redirect("/login")
        } else {
            toast(result?.error ?? "Unable to reset password. Please try again.", {
                style: { backgroundColor: '#fdecea', color: 'red' },
                description : "unable to reset password",
                duration: 4000,
            })
        }
    }

    return (
        <form className="space-y-5" action={submit}>
            {/* hidden token field (for server) */}
            <input type="hidden" name="token" value={token} />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                </label>
                <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        required
                        minLength={8}
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                </label>
                <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        required
                        minLength={8}
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <LoadingButton content="Reset password" />

            <p className="text-center text-sm text-gray-500 mt-4">
                Remembered your password?{' '}
                <Link href="/login" className="text-indigo-600 font-medium hover:underline">
                    Back to login
                </Link>
            </p>
        </form>
    )
}
