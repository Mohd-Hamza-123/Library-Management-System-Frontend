import conf from "@/conf/conf"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NODE_ENV === "production" ? conf.BETTER_AUTH_URL : "http://localhost:3000/"
})

