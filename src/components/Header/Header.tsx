import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {

  return (
    <header
      className="w-full bg-white/95 backdrop-blur-sm h-[10dvh] flex items-center">
      <div className="mx-auto w-full px-4 flex items-center gap-4">
        <Link href='/'>
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="text-lg font-semibold text-slate-800">MS-Lib</div>
              <div className="text-xs text-slate-400 tracking-wider">LIBRARY-MANAGEMENT</div>
            </div>
          </div>
        </Link>
      </div>
    </header>

  )
}


function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src='/images/ms-academy.png' width={42} height={42} alt="logo" />
    </div>
  )
}
