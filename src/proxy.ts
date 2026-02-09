
import { getCurrentUserServer } from './lib/auth';
import { type NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {

    const { pathname } = request.nextUrl

    const token = request.cookies.get('better-auth.session_token')?.value ||  request.cookies.get('__Secure-better-auth.session_token')?.value
    
    console.log("token : ",token)
    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    const session = await getCurrentUserServer()
    // console.log(session?.user)
    const role = session?.user?.role
    const emailVerified = session?.user.emailVerified

    console.log("proxy.ts : role : " + role)
    console.log("proxy.ts : emailVerified : " + emailVerified)

    if (role !== 'admin' || !emailVerified) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

}

export const config = {
    matcher: ['/admin/:path*']
}

