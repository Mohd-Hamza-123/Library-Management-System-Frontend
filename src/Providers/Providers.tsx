'use client'
import React from 'react'
import QueryProvider from './Queryprovider'
import StoreProvider from '@/Providers/StoreProviders'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StoreProvider >
            <QueryProvider>
                {children}
            </QueryProvider>
        </StoreProvider>
    )
}
