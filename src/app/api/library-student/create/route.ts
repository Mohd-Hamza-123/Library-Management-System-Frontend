import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import { LibraryStudentSchema } from "@/lib/validation/libraryStudentSchema";
import LibraryStudent, { LibraryStudent as LibStudentType } from "@/model/student.model";

export async function POST(request: NextRequest) {
    try {

        await connectDB()
        const body = await request.json();
        const { name, father_name, seat, shift, joining_date, is_hidden } = body as LibraryStudentSchema

        const student = await LibraryStudent.create({
            seat,
            name,
            shift,
            is_hidden,
            father_name,
            joining_date,
        })

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

    } catch (error : unknown) {
        const env = process.env.NODE_ENV;
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