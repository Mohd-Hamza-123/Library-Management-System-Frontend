'use server'

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const loginUser = async (formData: FormData) => {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result = await auth.api.signInEmail({
        body: { email, password }
    });
    console.log("user login",result);
    if (result) redirect("/");
    redirect("/login");
} 