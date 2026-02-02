import conf from "@/conf/conf"
import mongoose from "mongoose"

let connection: mongoose.Connection

export default function getLibraryConnection() {
    if (!connection) {
        const uri = conf.MONGO_DB_LIBRARY_URI
        if (!uri) {
            throw new Error("MONGO_DB_LIBRARY_URI is not defined");
        }
        connection = mongoose.createConnection(uri)
    }
    return connection
}
