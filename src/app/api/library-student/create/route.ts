import { NextRequest, NextResponse } from "next/server";
import LibraryStudent, { LibraryStudent as LibStudentType } from "@/model/student.model";
import connectDB from "@/lib/connectDB";

export async function POST(request: NextRequest) {
    try {
        await connectDB()
        const body = await request.json();
        const { name, father_name, seat, shift, joining_date } = body;

        const student = await LibraryStudent.create({
            name,
            father_name,
            seat,
            shift,
            joining_date
        })

        if (!student) return NextResponse.json(
            { message: "Student not created", success: false },
            { status: 400 }
        )

        return NextResponse.json(
            { success: true, message: "Student created", data: student },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "something went wrong", success: false,
                message : "Something went wrong"
            },
            { status: 500 }
        );
    }
}
