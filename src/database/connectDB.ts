
import { env } from "@/env";
import mongoose from "mongoose";


let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDB() {
    try {


        if (cached.conn) return cached.conn;

        if (!cached.promise) {
            cached.promise = mongoose
                .connect(env.MONGODB_URI, {
                    dbName: "LibraryDB",
                })
                .then((mongoose) => mongoose)
                .catch((err) => {
                    console.error("❌ MongoDB connect failed:", err);
                    throw err;
                });
        }

        cached.conn = await cached.promise;
        (global as any).mongoose = cached;

        return cached.conn;
    } catch (error) {
        console.error("❌ connectDB() error:", error);
        throw error; // rethrow so API returns 500
    }
}
