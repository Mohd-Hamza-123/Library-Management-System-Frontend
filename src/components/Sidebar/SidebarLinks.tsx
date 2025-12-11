"use client"

import React from 'react'
import { Icons, Title } from '..'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks'

export default function SidebarLinks() {
    const userData = useAppSelector((state) => state.authSlice.userData)
    // const userStatus = useAppSelector((state) => state.authSlice.userStatus)
   
    const links = [
        {
            name: 'Home',
            href: '/',
            icon: <Icons.home className='text-gray-800 cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110' />,
            visible: true,
        },
        {
            name: 'Admin',
            href: '/admin',
            icon: <Icons.admin className='text-gray-800 cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110' />,
            visible: userData?.role === "admin" ? true : false,
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: <Icons.gear className='text-gray-800 cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110' />,
            visible: true,
        }
    ]

    return (
        <div className='flex flex-row md:flex-col items-center md:gap-4 gap-10 h-1/2 justify-around'>
            {links.map((link) => (
                <Link key={link.name} href={link.href} className='relative'>
                    {link.icon}
                    <Title className='title' title={link.name} />
                </Link>
            ))}
        </div>
    )
}
