import Link from 'next/link'
import Image from 'next/image'
import { loginUser } from './actions'
import { FcGoogle } from 'react-icons/fc'
import { FiMail, FiLock } from 'react-icons/fi'
import { GoToHome, LoadingButton } from '@/components'

export default function Login() {

    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className='w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]'>
                <div className="flex flex-col items-center mb-6">
                    <Image src='/images/ms-academy.png' width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800">Log In to Your Account</h2>
                </div>

                <form className="space-y-5" action={loginUser}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
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
                            <input
                                required
                                minLength={8}
                                name='password'
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                            />
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
                        className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                        <FcGoogle size={18} /> Login with Google
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-indigo-600 font-medium hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}