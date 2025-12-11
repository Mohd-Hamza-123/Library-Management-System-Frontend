import React from 'react'
import Image from 'next/image'
import SidebarLinks from './SidebarLinks'
import { CurrentSession, ProfileLink } from "../index"

export default async function Sidebar() {

    return (
        <aside className='fixed bottom-0 h-fit w-full flex flex-row md:static md:w-[13dvh] md:h-full md:flex md:flex-col justify-evenly items-center py-3 bg-white border-t-2 border-indigo-600 md:border-none'>
            
            <SidebarLinks/>

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
