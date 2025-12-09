"use client"

import React from 'react'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { LoadingButton } from '@/components'
import { forgotPassword } from './action'

export default function ForgotPassword() {

    const submit = async (data: FormData) => {
        const result = await forgotPassword(data)

        if (result?.success) {
            toast(result.message ?? "Password reset link sent to your email.", {
                duration: 3000,
            })
        } else {
            toast(result?.error ?? "Something went wrong. Please try again.", {
                style: { backgroundColor: '#fdecea', color: 'red' },
                duration: 4000,
            })
        }
    }

    return (
        <form className="space-y-5" action={submit}>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        required
                        name="email"
                        type="email"
                        placeholder="email"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <LoadingButton content="Send reset link" />

            <p className="text-center text-sm text-gray-500 mt-4">
                Remember your password?{' '}
                <Link href="/login" className="text-indigo-600 font-medium hover:underline">
                    Back to login
                </Link>
            </p>
        </form>
    )
}
