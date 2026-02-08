"use client"

import Link from 'next/link'
import { toast } from 'sonner'
import { register } from './actions'
import { FcGoogle } from 'react-icons/fc'
import { redirect } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { FiMail, FiLock } from 'react-icons/fi'
import useAuthentication from '@/hooks/useAuthentication'
import { GoToHome, LoadingButton, Icons } from '@/components/index'

export default function SignUpPage() {

    const { signInWithGoogle } = useAuthentication()
    const submit = async (formData: FormData) => {
        const result = await register(formData)
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
                <Label className="block text-sm font-medium text-gray-700 mb-1">Name</Label>
                <div className="relative">
                    <Icons.user className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        name='name'
                        type="text"
                        placeholder="Your name"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>
            <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
                <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        name='email'
                        type="email"
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
                <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        name='password'
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                    />
                </div>
            </div>

            <LoadingButton content='Sign Up' />

            <div className="flex items-center justify-center mt-1">
                <div className="h-px w-20 bg-gray-200" />
                <span className="mx-3 text-gray-400 text-sm">or</span>
                <div className="h-px w-20 bg-gray-200" />
            </div>

            <button
                onClick={signInWithGoogle}
                type="button"
                className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                <FcGoogle size={18} /> SignIn with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
            </p>
        </form>

    )
}