import Image from "next/image";
import Link from "next/link";

export default function VerifiedUser() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        
        <Image src={'/images/ms-academy.png'} alt="ms academy logo"  height={50} width={50} className="block mx-auto my-2" />

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Email Is Verified
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for verifying your email. Your account is now active and ready to use.
        </p>

        <Link
          href="/"
          className="inline-block w-full py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
        >
          Go to Dashboard
        </Link>

      </div>
    </div>
  );
}
