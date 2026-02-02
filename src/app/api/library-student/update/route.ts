import LibraryStudent from "@/model/student.model";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json()
        const { id , data } = body
        console.log(body)
        const update = await LibraryStudent.updateOne({ _id: id }, {
            ...data
        })
        
        return NextResponse.json(
            { success: true, message: "Student updated", data: id },
            { status: 200 }
        );

    } catch (error: unknown) {
        console.log("error updating library student", error)

        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Internal Server Error",
                success: false,
                message: "Something went wrong"
            },
            { status: 500 }
        );
    }
}