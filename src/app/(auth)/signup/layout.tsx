import React from 'react'
import Image from 'next/image'
import { GoToHome } from '@/components/index'

export default function SignUpLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className='w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]'>
                <div className="flex flex-col items-center mb-6">
                    <Image src='/images/ms-academy.png' width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800">Create New Account</h2>
                </div>
                {children}
            </div>
        </div>
    )
}
