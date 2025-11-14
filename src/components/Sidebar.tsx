import React from 'react'
import Title from './Title'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from './Icons'
import { CurrentSession, ProfileLink } from "./index"

type NavItemProps = {
    title: string;
    children: React.ReactNode;
}

export function NavItem({ title, children }: NavItemProps) {
    return <button
        className="p-2 rounded-md hover:bg-slate-100 active:scale-95 transition relative">
        {children}
        <Title className='title' title={title} />
    </button>
}

export default async function Sidebar() {

    return (
        <aside className='w-[11dvh] h-full flex flex-col justify-evenly items-center'>

            <div className='flex flex-col items-center gap-4'>

                <NavItem title='mail'>
                    <Icons.mail className="text-gray-800 hover:text-red-800 hover:scale-110 transition-colors duration-500 show-title-trigger show-title-trigger text-xl" />
                </NavItem>

                <NavItem title='toggle'>
                    <Icons.toggleOff className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger hover:scale-110 not-visited:text-xl' />
                </NavItem>

                <NavItem title='admin'>
                    <Icons.admin
                        className="text-gray-800 hover:text-red-800 hover:scale-110 transition-colors duration-500 show-title-trigger show-title-trigger text-xl"/>
                </NavItem>

                <NavItem title='settings'>
                    <Icons.gear
                        className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger hover:rotate-10 hover:scale-110 text-xl'/>
                </NavItem>
            </div>


            <div className="relative flex flex-col items-center gap-4">
                <ProfileLink>
                    <button
                        className="flex items-center gap-3 rounded-full px-2 py-1 hover:bg-slate-50 transition cursor-pointer"
                        aria-haspopup="true">
                        <div className="h-9 w-9 rounded-full ring-1 ring-slate-200 overflow-hidden">
                            <Image
                                className="h-full w-full object-cover"
                                src='/images/logo.png'
                                alt="profile"
                                height={20}
                                width={20}
                            />
                        </div>
                    </button>
                </ProfileLink>
                <CurrentSession />
            </div>
        </aside>
    )
}
