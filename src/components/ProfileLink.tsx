'use client'

import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks'

export default function ProfileLink({ children }: { children: React.ReactNode }) {

    const userData = useAppSelector((state) => state.authSlice.userData)
   
    if (!userData) return null
    
    return (
        <Link
            href={"/profile/" + userData.id} className="cursor-pointer">
            {children}
        </Link>
    )
}
