import getLibraryConnection from "@/database/library.connection"

import { Schema, InferSchemaType, HydratedDocument, Model } from "mongoose"

const libraryStudentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Student name is required"],
        trim: true,
    },
    father_name: {
        type: String,
        trim: true,
    },
    seat: {
        type: String,
        required: [true, "Assign a seat"],
        trim: true,
        match: [/^[A-Z]\d{1,2}$/, "Seat must be like A1 or C34"],
    },
    shift: {
        type: String,
        enum: ["morning", "evening", "both"],
        required: [true, "Assign a shift"],
        trim: true,
    },
    joining_date: {
        type: Date,
    },
    is_hidden: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true,
})

libraryStudentSchema.index({ seat: 1, shift: 1 }, { unique: true })

export type LibraryStudent = InferSchemaType<typeof libraryStudentSchema>
export type LibraryStudentDocument = HydratedDocument<LibraryStudent>

const connection = getLibraryConnection()

const LibraryStudent: Model<LibraryStudent> = connection.models.LibraryStudent ?? connection.model<LibraryStudent>("LibraryStudent", libraryStudentSchema)

export default LibraryStudent