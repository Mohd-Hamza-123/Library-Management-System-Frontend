import Link from 'next/link'
import Image from 'next/image'
import { GoToHome } from '@/components'

export default function Login({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className='w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]'>
                <div className="flex flex-col items-center mb-4 gap-2">
                    <Image src='/images/ms-academy.png' width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800">Log In to Your Account</h2>
                </div>

                {children}

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}