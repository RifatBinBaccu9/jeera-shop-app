import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log("Middleware triggered for:", request.nextUrl.pathname);

    // Check if user is authenticated (example: check cookie or localStorage)
    const isLoggedIn = request.cookies.get("authToken"); // Assuming authToken is stored in cookies

    if (!isLoggedIn) {
        // If not authenticated, redirect to login page
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If authenticated, allow access
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*', // Protect all dashboard routes
};
