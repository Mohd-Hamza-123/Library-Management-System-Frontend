"use server"

import { redirect } from 'next/navigation';
import { authClient } from "@/lib/auth-client";

export const register = async (formData: FormData) => {
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log(name)
    console.log(email)
    console.log(password)

    const { data, error } = await authClient.signUp.email({
        email,
        password, // user password -> min 8 characters by default
        name,
    }, {
        onRequest: (ctx) => {
            console.log(ctx)
        },
        onSuccess: (ctx) => {
            console.log(ctx)
            redirect('/')
        },
        onError: (ctx) => {
            console.log(ctx.error.message)
        },
    })

    console.log(error)
    console.log(data)

}