import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const examinationFeeSchema = new Schema(
    {
        fees: {
            type: Number,
            required: true,
            min: 0,
        },
        reason: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: false } // prevents auto _id for each fee object
);

const courseSchema = new Schema({
    name: {
        type: String,
        required: [true, "course name is required"],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,
        trim: true,
    },
    registration_fees: {
        type: Number,
    },
    monthly_fees: {
        type: Number,
        min: 0,
    },
    examination_fees: {
        type: [examinationFeeSchema],
        min: 0
    },
    total_fees: {
        type: Number,
        required: [true, "total fees is required"],
        min: 0,
    },
    is_active: {
        type: Boolean,
        default: true,
    },

}, {
    timestamps: true,
})


export type CourseType = InferSchemaType<typeof courseSchema>
const Course: Model<CourseType> = mongoose.models.Course || mongoose.model("Course", courseSchema)
export default Course