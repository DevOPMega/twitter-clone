import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const url = request.url.slice(request.url.lastIndexOf("/"));
    // const token = request.cookies.get("token");

    // console.log("Middleware");
    // console.log(request.url);

    // if (url === "/auth") {
    //     return NextResponse.next();
    // }

    // if(!token) {
    //     return NextResponse.redirect("http://localhost:3000/auth");
    // }

    // const response = NextResponse.next();


    // console.log(response.cookies.getAll());
    // return response;
    // return NextResponse.next();
}
 
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }