import { NextRequest, NextResponse } from "next/server"
import LibraryStudent from "@/model/student.model"
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json()
        const result = await LibraryStudent.deleteOne({ _id: id })
        // console.log(result)
        if (!result.acknowledged || result.deletedCount === 0) {
            return NextResponse.json(
                { success: false, message: "Deletion Failed" },
                { status: 400 }
            )
        }

        return NextResponse.json(
            { success: true, message: "student removed", result },
            { status: 200 }
        )

    } catch (error: unknown) {
        console.log("error deleting library student", error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "Internal Server Error : Failed to delete student",
            message: "Failed to delete Student"
        }, { status: 500 })
    }
}