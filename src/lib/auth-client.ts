import conf from "@/conf/conf"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NODE_ENV === "production" ? conf.NEXT_PUBLIC_BETTER_AUTH_URL : "http://localhost:3000/"
})

