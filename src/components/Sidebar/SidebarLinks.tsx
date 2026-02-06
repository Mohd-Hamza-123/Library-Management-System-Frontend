"use client"

import React from 'react'
import { Icons, Title } from '..'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks'
import { usePathname } from 'next/navigation'

export default function SidebarLinks() {
    const path = usePathname()
    // console.log(path)
    const userData = useAppSelector((state) => state.authSlice.userData)


    const links = [
        {
            name: 'Home',
            href: '/',
            icon: <Icons.home className={`${path === "/" ? "text-indigo-600" : "text-gray-800"}  cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110`} />,
            visible: true,
        },
        {
            name: 'Admin',
            href: '/admin',
            icon: <Icons.admin className={`${path.includes('/admin') ? "text-indigo-600" : "text-gray-800"} cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110`} />,
            visible: userData?.role === "admin" ? true : false,
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: <Icons.gear className={`${path === "/settings" ? "text-indigo-600" : "text-gray-800"} cursor-pointer hover:text-indigo-600  transition-colors duration-500 show-title-trigger text-xl hover:scale-110`} />,
            visible: false,
        }
    ]

    return (
        <div className='flex flex-row md:flex-col items-center md:gap-4 gap-10 h-1/2 justify-around'>
            {links.map((link) => (
                <Link key={link.name} href={link.href} className={`relative ${link.visible ? "" : "hidden"}`}>
                    {link.icon}
                    <Title className="title" title={link.name} />
                </Link>
            ))}
        </div>
    )
}
