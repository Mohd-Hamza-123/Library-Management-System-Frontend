'use server'

import { auth } from "@/lib/auth"

export const loginUser = async (formData: FormData) => {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
        const result = await auth.api.signInEmail({
            body: { email, password }
        });
        console.log(result)
        return {
            success: true,
            message: "Login Successfully",
            data: result.user
        }
    } catch (error: unknown) {
        console.log("error action.ts", error);
        return {
            success: false,
            error:  error instanceof Error ? error.message : "Login Failed" ,
        }
    }
} 