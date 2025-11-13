
import conf from "@/conf/conf";
import { MongoClient } from "mongodb";
import { cookies } from "next/headers";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";


const client = new MongoClient(conf.MONGO_DB_URI);
const db = client.db(conf.MONGO_DB_DATABASE_1);

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
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
        // console.log("session : ")
        // console.log(session)
        return session
    } catch (error) {
        console.log(error)
        return null
    }
}

