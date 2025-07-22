/** This will ensure that the response is cached and served to all users
 * This is helpful when content is static
 * Won't be able to test here as there is no dynamic data. Test it in time route handler.
 */
export const dynamic = 'force-static';

export async function GET() {
	const categories = [
		{ id: 1, name: 'Electronics' },
		{ id: 2, name: 'Books' },
		{ id: 3, name: 'Clothing' },
		{ id: 4, name: 'Home & Garden' },
	];

	return Response.json(categories);
}
