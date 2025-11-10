import React from 'react'
import { getDateTime } from '@/utils/dates'

export default function Dashboard() {
   
    return (
        <main className='bg-gray-100/90 w-full rounded-tl-xl px-5 py-5'>
            <h3 className='text-xl text-gray-800 font-bold'>Welcome to Dashboard</h3>
            <span className='text-sm text-gray-600'>{getDateTime()}</span>
        </main>
    )
}
