'use client';
import { useOptimistic } from 'react';
import Link from 'next/link';
import { removeProduct } from '@/actions/products';
import Form from 'next/form';

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string | null;
};

const ProductsDetail = ({ products }: { products: Product[] }) => {
	/** Takes in 2 params. first is initial state that we want to optimistically update i.e products
	 * Second param is function that determines how to update the state optimistically. This function takes 2 arguments
	 * 1st is the current state(of products) and 2nd is the action that we want to perform on the state(additional argument to help create the new state)
	 * useOptimistic returns an array of 2 values. 1st is the current state(reuslting optimistic state which will show to user) and 2nd is the function that updates the state optimistically
	 */
	const [optimisticProducts, setOptimisticProducts] = useOptimistic(
		products,
		(currentProducts, productId) => {
			return currentProducts.filter((product) => product.id !== productId);
		},
	);

	const removeProductById = async (productId: number) => {
		setOptimisticProducts(productId);
		await removeProduct(productId);
	};

	return (
		<ul className='space-y-4 p-4'>
			{optimisticProducts.map((product) => {
				return (
					<li
						key={product.id}
						className='p-4 bg-white shadow-md rounded-lg text-blue-700'
					>
						<h2 className='text-xl font-semibold'>
							<Link href={`/products-db/${product.id}`}>{product.title}</Link>
						</h2>
						<p>{product.description}</p>
						<p className='text-lg font-medium'>${product.price}</p>
						{/** This makes the product.id available to removeProduct as first argument */}{' '}
						{/** removeProduct.bind(null, product.id) */}
						{/* <form action={removeProductById.bind(null, product.id)}>
							<button
								type='submit'
								className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600'
							>
								Delete
							</button>
						</form> */}
						<Form action={removeProductById.bind(null, product.id)}>
							<button
								type='submit'
								className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600'
							>
								Delete
							</button>
						</Form>
					</li>
				);
			})}
		</ul>
	);
};

export default ProductsDetail;
