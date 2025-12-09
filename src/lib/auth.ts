import conf from "@/conf/conf";
import { MongoClient } from "mongodb";
import { cookies } from "next/headers";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { resetPasswordEmail } from "./mail";

const client = new MongoClient(conf.MONGO_DB_URI);
const db = client.db(conf.MONGO_DB_DATABASE_1);

export const auth = betterAuth({
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
    plugins: [nextCookies()]
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
    } catch (error) {
        console.log(error)
        return null
    }
}


