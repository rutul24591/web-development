/** You don't need to set it to true, it is by default
 * We only set it when we want Next.js to disable dynamicParams, which will lead to showing 404 page not found.
 */
export const dynamicParams = false;

export const generateStaticParams = async () => {
	// The below id's could also be fetched from an API.
	return [{ id: '1' }, { id: '2' }, { id: '3' }];
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	return (
		<h1>
			Product {id} details rendered at {new Date().toLocaleTimeString()}
		</h1>
	);
};

export default ProductPage;
