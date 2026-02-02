import { joining_date } from "@/lib/validation/libraryStudentSchema";
import LibraryStudent from "@/model/student.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {

        const { searchParams } = new URL(request.url);

        const seat = searchParams.get("seat");
        const pageParam = searchParams.get("pageParam") ? parseInt(searchParams.get("pageParam") as string) : 0


        const payload = await LibraryStudent.aggregate([
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
                            seat : "$seat",
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
                    students : 1,
                    block : "$_id",
                    _id : 0
                }
            }
        ])


        return NextResponse.json(
            { success: true, data: payload, nextCursor: pageParam + 1 },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.log("error getting library student", error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "Internal Server Error : Failed to get student",
            message: "Failed to get Student List"
        }, { status: 500 })
    }
}