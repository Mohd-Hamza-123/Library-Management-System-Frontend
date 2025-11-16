'use server'

import { toast } from "sonner"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const loginUser = async (formData: FormData) => {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result = await auth.api.signInEmail({
        body: { email, password }
    });
    // console.log("user login",result);
    if (result) {
        toast("Login Successfully", {
            duration: 2500,
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })
        redirect("/")

    }
    toast("Login Failed", {
        duration: 2500,
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
    redirect("/login");
} 