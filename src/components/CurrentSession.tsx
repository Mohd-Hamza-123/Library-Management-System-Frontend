'use client'

import Link from 'next/link'
import { Icons } from './Icons'
import { NavItem } from './Sidebar'
import React, { useEffect, useState } from 'react'
import { getSession } from '@/utils/sessionClient'
import { apiResponse } from '@/types/api'

export default function CurrentSession() {

    const [user, setUser] = useState<apiResponse | null>(null)
    console.log(user)

    useEffect(() => {
        (async () => {
            const session = await getSession()
            setUser(session)
        })()
    }, [])

    if (!user) return null

    return (
        <>
            {user?.success ? <NavItem title='logout' >
                <Icons.logout className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger hover:scale-110 text-xl' />
            </NavItem > :
                <Link href="/login">
                    <NavItem title='login'>
                        <Icons.login
                            className='text-gray-800 cursor-pointer hover:text-red-800  transition-colors duration-500 show-title-trigger text-xl hover:scale-110'
                        />
                    </NavItem>
                </Link>
            }
        </>
    )
}
