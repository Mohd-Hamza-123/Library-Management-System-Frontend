'use server'

import { toast } from "sonner"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const loginUser = async (formData: FormData) => {

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log(email, password)
    let result;
    try {
        result = await auth.api.signInEmail({
            body: { email, password }
        });
        // console.log("user login", result);
    } catch (error : unknown) {
        console.log("error action.ts",error)
        redirect("/login");
    }

    if (result) {
        // toast("Login Successfully", {
        //     duration: 2500,
        //     description: "Sunday, December 03, 2023 at 9:00 AM",
        //     action: {
        //         label: "Undo",
        //         onClick: () => console.log("Undo"),
        //     },
        // })
        redirect("/")
    } else {
        redirect("/login")
    }


} 