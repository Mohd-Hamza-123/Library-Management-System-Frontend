import React from 'react'
import Link from 'next/link'
import { Icons } from './Icons'

export default function GoToHome() {
  return (
    <Link href="/">
      <div className='fixed top-3 left-3'>
        <Icons.home />
      </div>
    </Link>
  )
}
