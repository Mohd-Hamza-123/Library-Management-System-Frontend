"use client"

import { useAppSelector } from '@/lib/hooks'
import React from 'react'

export default function DataFetchError({ error }: { error: unknown }) {

    const userData = useAppSelector((state) => state.authSlice.userData)
    return (
        <div className="flex flex-col items-center justify-center border border-red-200 bg-red-50 rounded-lg p-6 text-center">
            <div className="text-red-600 text-lg font-semibold mb-2">
                Unable to load library students
            </div>

            <p className="text-sm text-red-500 mb-4 max-w-md">
                Something went wrong while fetching the student list.
                This could be due to a network issue or a temporary server problem.
                {(process.env.NODE_ENV === "development" || userData?.role === "admin") && error instanceof Error && (
                    <span className="block mt-2 text-xs text-red-400">
                        Error Details: {error.message}
                    </span>
                )}
            </p>

            {/* Suggestions */}
            <ul className="text-sm text-red-500 text-left mb-5 list-disc list-inside max-w-md">
                <li>Check your internet connection</li>
                <li>Refresh the page and try again</li>
                <li>Wait a few minutes if the server is busy</li>
                <li>Contact support if the problem persists</li>
            </ul>

            <div className="flex gap-3">
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition">
                    Retry
                </button>

                <button
                    onClick={() => console.log("Contact support")}
                    className="px-4 py-2 text-sm font-medium text-red-600 border border-red-300 rounded-md hover:bg-red-100 transition">
                    Contact Support
                </button>
            </div>
        </div>
    )
}
