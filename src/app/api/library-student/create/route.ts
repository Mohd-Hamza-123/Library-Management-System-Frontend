import { auth } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import { getRole } from "@/middlewares/auth.middleware";
import { NextRequest, NextResponse } from "next/server";
import LibraryStudent, { LibraryStudent as LibStudentType } from "@/model/student.model";
import {
    LibraryStudentSchema,
    libraryStudentSchema as LibraryStudentValidation
} from "@/lib/validation/libraryStudentSchema";

export async function POST(request: NextRequest) {
    try {

        await connectDB()
        const role = await getRole(request)
        if (role !== "admin") {
            return NextResponse.json({
                success: false,
                message: "You are not authorize"
            }, { status: 300 })
        }

        const body = await request.json();

        const result = LibraryStudentValidation.safeParse(body)

        if (!result.success) {
            const errorArray = result.error.flatten()
            // console.log(errorArray)
            let field = "";
            let message = "";

            for (const [key, value] of Object.entries(errorArray.fieldErrors)) {
                // console.log(key , value)
                field = key
                message = value[0]
                break
            }

            return NextResponse.json({
                success: false,
                message: `${field} : ${message}`
            }, { status: 300 })
        }

        const { name, father_name, seat, shift, joining_date, is_hidden } = body as LibraryStudentSchema

        const student = await LibraryStudent.create({
            seat,
            name,
            shift,
            is_hidden,
            father_name,
            joining_date,
        })

        // console.log("created Student", student)

        if (!student) return NextResponse.json(
            {
                message: "Student not created",
                success: false,
                error: "Something went wrong"
            },
            { status: 400 }
        )


        return NextResponse.json(
            { success: true, message: "Student created", data: student },
            { status: 200 }
        );

    } catch (error: unknown) {
        const env = process.env.NODE_ENV;
        // console.log("Error : ", error)
        return NextResponse.json(
            {
                error: env === "development" ? error instanceof Error ? error.message : "Internal Server Error" : "Something went wrong",
                success: false,
                message: "Something went wrong"
            },
            { status: 500 }
        );
    }
}