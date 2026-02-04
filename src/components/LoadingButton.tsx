"use client"
import React from 'react'
import { Spinner } from '.';
import { useFormStatus } from 'react-dom'

export default function LoadingButton({ content }: { content: string }) {
    
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium text-sm transition flex justify-center items-center">
            {pending ? <Spinner/> : content}
        </button>
    )
}
