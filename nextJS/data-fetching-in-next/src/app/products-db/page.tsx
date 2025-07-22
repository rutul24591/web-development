import { getProducts } from '@/prisma-db';
import ProductsDetail from './product-detail';

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string | null;
};

const ProductsDBPage = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) => {
	const { query = '' } = await searchParams;
	const products: Product[] = await getProducts(query);

	/** Takes in 2 params. first is initial state that we want to optimistically update i.e products
	 * Second param is function that determines how to update the state optimistically. This function takes 2 arguments
	 * 1st is the current state(of products) and 2nd is the action that we want to perform on the state(additional argument to help create the new state)
	 * useOptimistic returns an array of 2 values. 1st is the current state(reuslting optimistic state which will show to user) and 2nd is the function that updates the state optimistically
	 */
	// const [optimisticProducts, setOptimisticProducts] = useOptimistic(
	// 	products,
	// 	(currentProducts, productId) => {
	// 		return currentProducts.filter((product) => product.id !== productId);
	// 	},
	// );

	// const removeProductById = async (productId: number) => {
	// 	setOptimisticProducts(productId);
	// 	await removeProduct(productId);
	// };

	return <ProductsDetail products={products} />;
};

export default ProductsDBPage;
