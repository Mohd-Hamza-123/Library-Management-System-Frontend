import React from 'react'
type ProfilePageProps = {
    params: {
        id: string
    }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const { id } = await params
    console.log(id)
    return (
        <div>ProfilePage {id}</div>
    )
}
