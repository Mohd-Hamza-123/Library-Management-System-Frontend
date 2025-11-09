import React from 'react'
import { Book, User } from 'lucide-react'
import Header from '@/components/Header/Header'
import Card from '@/components/Card'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex h-[90dvh]'>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}
