import conf from "@/conf/conf";
import mongoose from "mongoose";

const MONGODB_URI = conf.MONGO_DB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDB() {
  try {
    if (!MONGODB_URI) {
      throw new Error("❌ MONGO_DB_URI is missing");
    }

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
      cached.promise = mongoose
        .connect(MONGODB_URI, {
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
