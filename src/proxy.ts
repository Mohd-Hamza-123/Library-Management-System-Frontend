import { NextRequest, NextResponse } from 'next/server';


export function proxy(request: NextRequest) {
    console.log("user going to proxy")
}

export const config = {
    matcher: ['/admin/:path*']
}