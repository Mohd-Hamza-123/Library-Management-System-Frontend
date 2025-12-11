import conf from "@/conf/conf"
import { createAuthClient } from "better-auth/react"
console.log(conf.BETTER_AUTH_URL)
export const authClient = createAuthClient({
    baseURL: process.env.NODE_ENV === "production" ? conf.BASE_URL : "http://localhost:3001/"
})

