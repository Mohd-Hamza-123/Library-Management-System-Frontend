import React from 'react'

export default function Title({
    title,
    className = ""
}: { title: string, className?: string }) {
    return (
        <span className={`absolute z-50 text-[11px] px-1.5 py-0.5 rounded-xl text-gray-800 select-none -top-2 left-[30px] shadow-sm shadow-gray-600 ${className}`}>
        {title}
        </span>
    )
}
