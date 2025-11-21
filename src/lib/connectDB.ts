import conf from "@/conf/conf";
import mongoose from "mongoose";

const MONGODB_URI = conf.MONGO_DB_URI

if (!MONGODB_URI) throw new Error("❌ Please define MONGODB_URI in .env.local");

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "LibraryDB",
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    (global as any).mongoose = cached;

    return cached.conn;
}
