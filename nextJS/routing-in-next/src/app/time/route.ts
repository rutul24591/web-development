/** This will ensure that the response is cached and served to all users.
 * Will work on building the application.
 */
export const dynamic = 'force-static';

/** App will revalidate data after every 10 seconds. Build is still required once.
 * So after the build for every request made within 10 seconds timeframe will serve same time.
 */
export const revalidate = 10;

// Only this doesn't work in dev, only in prod mode so build it first
export async function GET() {
	return Response.json({ time: new Date().toLocaleTimeString() });   // toLocaleDateString was there bfr so no time display
}

