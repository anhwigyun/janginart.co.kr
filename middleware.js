import {NextResponse} from "next/server";
export function middleware(request){
    const user = request.cookies.get('user') ? JSON.parse(request.cookies.get('user').value) : null;

    const { pathname } = request.nextUrl;

    if(pathname === "/login" || pathname === '/admin/login')
        return NextResponse.next();

    if (pathname.startsWith('/admin')) {
        if (!user || !user.admin)
            return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    if (!user)
        return NextResponse.redirect(new URL('/students/login', request.url));

    return NextResponse.next();
}

export const config = {
    matcher: [ // 해당 url들은 검사 대상자들
        "/admin",
        "/admin/:path*", // "/admin/programs", "/admin/programs/create"

        "/owners/programs/:path*", // "/owners/programs/1"

        "/students/programs",
        "/students/certifications/create",
    ],
};