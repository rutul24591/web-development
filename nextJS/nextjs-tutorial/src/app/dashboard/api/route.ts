/** This should be in route.ts in dashboard, as per tutorial but due to conflict as seen below moving into api folder
 *
 * ERROR:
 *
 * src/app/dashboard/page.tsx
 * You cannot have two parallel pages that resolve to the same path.
 * Please check /dashboard/page and /dashboard/route.
 * Refer to the route group docs for more information: https://nextjs.org/docs/app/building-your-application/routing/route-groups
 */

export async function GET() {
	return new Response('Dashboard data');
}
