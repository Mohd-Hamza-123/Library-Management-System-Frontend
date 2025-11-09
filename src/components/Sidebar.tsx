import React from 'react'
import Title from './Title'
import { Icons } from './Icons'
import Image from 'next/image'

export default function Sidebar() {

    return (
        <aside className='w-[11dvh] h-full flex flex-col justify-evenly items-center'>

            <div className='flex flex-col items-center gap-4'>

                <button
                    className="p-2 rounded-md hover:bg-slate-100 active:scale-95 transition relative">
                    <Icons.mail
                        className="text-red-800 hover:text-red-900 hover:scale-105 transition-colors duration-500 show-title-trigger show-title-trigger text-xl"
                    />
                    <Title className='title' title='Mail' />
                </button>

                <button
                    className="p-2 rounded-md hover:bg-slate-100 active:scale-95 transition relative">
                    <Icons.gear
                        className='text-red-800 cursor-pointer hover:text-red-900  transition-colors duration-500 show-title-trigger hover:rotate-10
                        text-xl'
                    />
                    <Title className='title' title='Settings' />
                </button>

                <button
                
                >
                    <Icons.toggleOff
                        className='text-red-800 cursor-pointer hover:text-red-900  transition-colors duration-500 show-title-trigger hover:scale-105
                        text-xl'
                    />
                </button>

            </div>

            <div className="relative">
                <button
                    className="flex items-center gap-3 rounded-full px-2 py-1 hover:bg-slate-50 transition"
                    aria-haspopup="true">
                    <div className="h-9 w-9 rounded-full ring-1 ring-slate-200 overflow-hidden">
                        <Image
                            className="h-full w-full object-cover"
                            src='/images/logo.png'
                            height={20}
                            width={20}
                            alt={`j`}
                        />
                    </div>
                </button>
            </div>


        </aside>
    )
}
