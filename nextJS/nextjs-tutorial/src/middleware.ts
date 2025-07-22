import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Method 1: Via custom matcher config */

// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL('/', request.url));
// }

/** Method 2: Via conditional rendering */
// When we hit localhost:3000/profile it will redirect to /hello
export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/profile') {
		return NextResponse.redirect(new URL('/hello', request.nextUrl));

		/** This will keep the url same(legacy url or better SEO). Helpful to server different content */
		return NextResponse.rewrite(new URL('/hello', request.nextUrl));

		/** Using cookies in middleware. Eg. Handle user preference for themes */
		const response = NextResponse.next();
		const themePreference = request.cookies.get('theme');
		if (!themePreference) {
			response.cookies.set('theme', 'dark');
		}

		/** Using headers in middleware. Eg. Handle user preference for themes.
		 * Custom headers are super useful for passing extra information which can be used by client side scripts or for debugging
		 */
		response.headers.set('custom-header', 'custom-value');

		return response;
	}
}

// Uncomment below for method 1
// export const config = {
// 	matcher: '/profile',
// };
