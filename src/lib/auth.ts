import { env } from "@/env";
import { MongoClient } from "mongodb";
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins"
import { cookies, headers } from "next/headers";
import { nextCookies } from "better-auth/next-js";
import { resetPasswordEmail, verifyEmail } from "./mail";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(env.MONGODB_URI);

const db = client.db(env.MONGODB_AUTH_DATABASE);

export const auth = betterAuth({
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
            }
        }
    },
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url, token, }, request) => {
            void resetPasswordEmail({
                to: user.email,
                subject: "RESET YOUR PASSWORD",
                text: `Click the link to reset your password: ${url}`,
                resetLink: url,
            });
        },
        onPasswordReset: async ({ user }, request) => {
            // your logic here
            console.log(`Password for user ${user.email} has been reset.`);
        },
        resetPasswordTokenExpiresIn: 60 * 5, // 5 minutes
    },
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            void verifyEmail({
                to: user.email,
                subject: 'Verify your email address',
                verifyLink: url,
            })
        },
        sendOnSignUp: true
    },
    session: {
        expiresIn: 60 * 60 * 24 * 2, // 2 days
        updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
    },
    plugins: [nextCookies(), admin()]
});


export const getCurrentUserServer = async () => {
    try {
        const cookie = cookies()
        const session = await auth.api.getSession({
            headers: {
                cookie: (await cookie).toString()
            }
        })
        return session
    } catch (error: unknown) {
        console.log(error instanceof Error ? error.message : error)
        return null
    }
}

export const changeUserRole = async (userId: string, role: string) => {
    try {
        const data = await auth.api.adminUpdateUser({
            body: {
                userId: userId,
                data: { role },
            },
            // This endpoint requires session cookies.
            headers: await headers(),
        });
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}




