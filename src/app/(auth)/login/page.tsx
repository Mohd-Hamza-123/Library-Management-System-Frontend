
import Image from 'next/image'
import { GoToHome } from '@/components'
import LoginForm from './LoginForm'

export default function Login() {

    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <GoToHome />
            <div className='w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]'>
                <div className="flex flex-col items-center mb-6">
                    <Image src='/images/ms-academy.png' width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-semibold text-gray-800">Log In to Your Account</h2>
                </div>

                <LoginForm />

            </div>
        </div>
    )
}