
import { env } from "@/env";
import mongoose from "mongoose"

let connection: mongoose.Connection

export default function getLibraryConnection() {
    if (!connection) {
        const uri = env.MONGODB_LIBRARY_URI
        connection = mongoose.createConnection(uri)
    }
    return connection
}
