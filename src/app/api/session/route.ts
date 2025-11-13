import { getCurrentUserServer } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {

        const session = await getCurrentUserServer()

        if (!session) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Not logged in",
                    error: "UNAUTHORIZED",
                },
                { status: 401 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "logged in",
            data: session
        }, { status: 200 })

    } catch (error: unknown) {

        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Internal server error",
            error: "SERVER_ERROR"
        }, { status: 500 });

    }
}