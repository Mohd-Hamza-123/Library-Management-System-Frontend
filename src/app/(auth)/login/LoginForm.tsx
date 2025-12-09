"use client"

import React from 'react'
import Link from 'next/link'
import { loginUser } from './actions'
import { FcGoogle } from 'react-icons/fc'
import { LoadingButton } from '@/components'
import { Input } from '@/components/ui/input'
import { FiMail, FiLock } from 'react-icons/fi'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

export default function LoginForm() {

    const submit = async (data: FormData) => {
        const result = await loginUser(data)
        console.log(result)
        if (result.success) {
            toast(result.message, {
                duration: 2500,
            })
            redirect("/")
        } else {
            toast(result.error, {
                style: { backgroundColor: '#fdecea', color: 'red' },
                duration: 4000,
            })
        }
    }

    return (
        <form className="space-y-5" action={submit}>
            
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        required
                        name='email'
                        type="email"
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        required
                        minLength={8}
                        name='password'
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end mt-1">
                    <Link
                        href="/forgot-password"
                        className="text-xs font-medium text-indigo-600 hover:underline mt-2"
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>

            <LoadingButton content='signIn' />

            <div className="flex items-center justify-center mt-1">
                <div className="h-px w-20 bg-gray-200" />
                <span className="mx-3 text-gray-400 text-sm">or</span>
                <div className="h-px w-20 bg-gray-200" />
            </div>

            <button
                type="button"
                className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
                <FcGoogle size={18} /> Login with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account?{' '}
                <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
                    Register
                </Link>
            </p>

        </form>
    )
}
