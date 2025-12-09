import Image from 'next/image'
import { GoToHome } from '@/components'

export default function ForgotPasswordLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className="w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]">
                <div className="flex flex-col items-center mb-6">
                    <Image src="/images/ms-academy.png" width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                        Forgot Password
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 text-center">
                        Enter the email associated with your account and we&apos;ll send you a reset link.
                    </p>
                </div>

                {children}
            </div>
        </div>
    )
}
