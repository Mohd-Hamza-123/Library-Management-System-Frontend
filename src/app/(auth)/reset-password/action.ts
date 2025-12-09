"use server"

import { auth } from "@/lib/auth";


export const resetPassword = async (newPassword: string, token: string) => {
    try {

        const data = await auth.api.resetPassword({
            body: {
                newPassword, // required
                token, // required
            },
        });
        console.log(data)
        return {
            success: true,
            message: "Password reset successfully. You can now log in."
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error : error instanceof Error ? error.message : "something went wrong",
            message: "Unable to reset password. Please try again."
        }
    }
}