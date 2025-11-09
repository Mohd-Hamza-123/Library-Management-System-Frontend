'use client'
import StoreProvider from '@/Providers/StoreProviders'
import React from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}
