import React from 'react'
import '@/styles/dashboard.css'
import { getDateTime } from '@/utils/dates'

export default function Dashboard() {

    return (
        <main className='bg-gray-100/90 w-full rounded-tl-xl overflow-x-hidden'>
            <section className='dashboard-bg-image px-5 py-5'>
                <h3 className='text-2xl text-gray-300 font-md'>Welcome to Dashboard</h3>
                <span className='text-sm text-gray-200'>{getDateTime()}</span>
            </section>

        </main>
    )
}
