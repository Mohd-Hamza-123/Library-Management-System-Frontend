'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link'

type HeaderProps = {

  avatarUrl?: string
  productName?: string
}

export default function Header({
  avatarUrl = '/avatar-placeholder.jpg', // replace with real URL
  productName = 'MS-Lib',
}: HeaderProps) {


  const d = useAppSelector((state) => state.booleanSlice.value)
  // console.log(d)


  return (

    <motion.header
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/95 backdrop-blur-sm h-[10dvh] flex items-center">
      <div className="mx-auto w-full px-4 flex items-center gap-4">
        <Link href='/'>
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="text-lg font-semibold text-slate-800">{productName}</div>
              <div className="text-xs text-slate-400 tracking-wider">LIBRARY-MANAGEMENT</div>
            </div>
          </div>
        </Link>
      </div>
    </motion.header>

  )
}


function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src='/images/ms-academy.png' width={42} height={42} alt="logo" />
    </div>
  )
}
