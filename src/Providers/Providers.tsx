'use client'
import StoreProvider from '@/Providers/StoreProviders'
import React from 'react'
import QueryProvider from './Queryprovider'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StoreProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </StoreProvider>
    )
}
