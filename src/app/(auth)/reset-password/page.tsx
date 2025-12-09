import Image from 'next/image'
import { GoToHome } from '@/components'
import ResetPasswordForm from './ResetPasswordForm'
import { redirect } from 'next/navigation'

export default async function ResetPassword({ searchParams }: { searchParams: { token?: string } }) {
  const { token } = await searchParams
  console.log(token)
  if (!token) {
    redirect("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-gray-50">
      <GoToHome />
      <div className="w-[90%] sm:w-[80%] md:w-[50%] xl:w-[35%]">
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/ms-academy.png" width={50} height={50} alt="logo" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Reset Password
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Choose a new password for your account.
          </p>
        </div>

        <ResetPasswordForm token={token} />
      </div>
    </div>
  )
}
