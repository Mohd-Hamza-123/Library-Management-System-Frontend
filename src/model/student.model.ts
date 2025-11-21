import { Schema, InferSchemaType, HydratedDocument, models, Model, model } from "mongoose"

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
    },
    shift: {
        type: String,
        enum: ["morning", "evening", "both"],
        required: [true, "Assign a shift"],
        trim: true,
    },
}, {
    versionKey: false
})

libraryStudentSchema.index({ seat: 1, shift: 1 }, { unique: true })

export type LibraryStudent = InferSchemaType<typeof libraryStudentSchema>
export type LibraryStudentDocument = HydratedDocument<LibraryStudent>

const LibraryStudent = (models.LibraryStudent as Model<LibraryStudent> | undefined) || model<LibraryStudent>("LibraryStudent", libraryStudentSchema)

export default LibraryStudent