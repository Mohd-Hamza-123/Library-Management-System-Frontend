"use server"

import { env } from "@/env";
import { auth } from "@/lib/auth";


export const forgotPassword = async (data: FormData) => {

    try {
        const email = data.get('email') as string
        console.log(email)
        const response = await auth.api.requestPasswordReset({
            body: {
                email: email, 
                redirectTo: `${env.BASE_URL}/reset-password`
            },
        });
        console.log(response);
        return {
            success: true,
            message: "Password reset link sent to your email."
        }
    } catch (error) {
        return {
            success: false,
            error: "Failed to send reset link. Please try again."
        }
    }

}