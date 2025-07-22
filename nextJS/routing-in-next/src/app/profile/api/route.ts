/** How to deal with headers in next */
import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

/** Older code just to keep. */
// export async function GET() {
// 	return new Response('Profile API Data');
// }

// export async function GET(request: NextRequest) {
// 	const requestHeaders = new Headers(request.headers);
// 	console.log(requestHeaders.get('Authorization'));

// 	return new Response('Profile API data');
// }

export async function GET(request: NextRequest) {
	const headerList = await headers();
	console.log(headerList.get('Authorization'));

	/** Option1 to read cookies */
	const theme = request.cookies.get('theme');
	console.log(theme);

	/** Option2 to set cookies */
	const cookieStore = await cookies();
	cookieStore.set('resultsPerPage', '20');

	/** Option 2 to read cookies */
	console.log(cookieStore.get('resultsPerPage'));
	/** This will go as plain/text for response headers. Check network tab in browser*/
	// return new Response('Profile API data');

	/** This will still go as plain/text for response headers.*/
	return new Response('<h1>Profile API data</h1>');

	/** This will go as text/html and will be interpreted by browser as html and display as html tag*/
	return new Response('<h1>Profile API data</h1>', {
		headers: {
			'Content-Type': 'text/html',
			/** Setting cookies Option 1 */
			'Set-Cookie': 'theme=dark',
		},
	});
}
