"use server"

import { auth } from "@/lib/auth";
import conf from "@/conf/conf";

export const forgotPassword = async (data: FormData) => {

    try {
        const email = data.get('email') as string
        console.log(email)
        const response = await auth.api.requestPasswordReset({
            body: {
                email: email, 
                redirectTo: `${conf.BASE_URL}/reset-password`
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