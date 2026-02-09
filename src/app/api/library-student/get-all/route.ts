
import connectDB from "@/database/connectDB";
import { StudentBlock } from "@/types/models.type";
import LibraryStudent from "@/model/student.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {


        await connectDB()
        // throw new Error("Testing error handling") // Remove this line after testing error handling

        const { searchParams } = new URL(request.url);

        const seat = searchParams.get("seat");

        if (!seat) {
            return NextResponse.json({
                success: false,
                message: "Seat parameter is required"
            }, { status: 400 })
        }

        const pageParam = searchParams.get("pageParam") ? parseInt(searchParams.get("pageParam") as string) : 0

        const payload = await LibraryStudent.aggregate<StudentBlock[]>([
            {
                $match: {
                    seat: { $regex: `^${seat}` }
                }
            },
            {
                $group: {
                    _id: seat,
                    students: {
                        $push: {
                            _id: "$_id",
                            name: "$name",
                            shift: "$shift",
                            seat: "$seat",
                            is_hidden: "$is_hidden",
                            joining_date: "$joining_date",
                            father_name: "$father_name",
                            createdAt: "$createdAt",
                            updatedAt: "$updatedAt"
                        }
                    }
                }
            },
            {
                $project: {
                    students: 1,
                    block: "$_id",
                    _id: 0
                }
            }
        ])


        return NextResponse.json(
            { success: true, data: payload, nextCursor: pageParam + 1 },
            { status: 200 }
        );

    } catch (error: unknown) {

        console.error("Error getting library student", error)

        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "Internal Server Error",
        }, { status: 500 })
    }
}