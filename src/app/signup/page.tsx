import Link from 'next/link'
import Image from 'next/image'
import { register } from './actions'
import { FcGoogle } from 'react-icons/fc'
import { Icons } from '@/components/Icons'
import { FiMail, FiLock } from 'react-icons/fi'
import { Label } from '@/components/ui/label'
import { GoToHome } from '@/components/index'

export default function SignUpPage() {

    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className='w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]'>
                <div className="flex flex-col items-center mb-6">
                    <Image src='/images/ms-academy.png' width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800">Create New Account</h2>
                </div>


                <form className="space-y-5" action={register}>

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

                    <button
                        type="submit"
                        className="w-full bg-red-700 hover:bg-red-800 text-white py-2.5 rounded-lg font-medium text-sm transition cursor-pointer">
                        Sign In
                    </button>

                    <div className="flex items-center justify-center mt-1">
                        <div className="h-px w-20 bg-gray-200" />
                        <span className="mx-3 text-gray-400 text-sm">or</span>
                        <div className="h-px w-20 bg-gray-200" />
                    </div>

                    <button
                        type="button"
                        className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                        <FcGoogle size={18} /> SignIn with Google
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-red-700 font-medium hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}