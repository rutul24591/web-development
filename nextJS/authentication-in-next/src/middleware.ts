import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

/** The below logic can also be inverted to use public routes. This is useful if most of the pages of your application requires authentication */
// const isProtectedRoute = createRouteMatcher(['/user-profile']);
const isPublicRoute = createRouteMatcher([
	'/',
	'/sign-in(.*)',
	'/sign-up(.*)',
	// '/forgot-password(.*)',
	// '/reset-password(.*)',
]);

/** For admin route, for which requirement is to be 1. have admin role 2. Should be SignedIn */
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
	/** More can be accomplised by adding a middleware. If you more control was your application does based on the authentication status
	 *  use auth argument in middleware*/
	const { userId, redirectToSignIn } = await auth();

	if (
		isAdminRoute(req) &&
		(await auth()).sessionClaims?.metadata?.role !== 'admin'
	) {
		const url = new URL('/', req.url);
		return NextResponse.redirect(url);
	}

	if (!userId && !isPublicRoute(req)) {
		// Add custom logic before redirecting to sign in Eg logging the user's IP address, user agent, logging unauthorized access attempts for security monitoring,
		// routing users to region specific signin pages, handle maintainence windows for specific routes etc
		return redirectToSignIn();
	}
	// if (isProtectedRoute(req)) {
	// 	await auth.protect();
	// }
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};
