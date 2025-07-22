import React from 'react';
import Link from 'next/link';

const ProductList = () => {
	const productId = 100; // This is be dynamic coming from as prop
	return (
		<>
			<Link href='/'>Home</Link>
			<h1>Product Lists</h1>
			<h2>
				{' '}
				<Link href='/products/1'>Product 1</Link>
			</h2>
			<h2>
				{' '}
				<Link href='/products/2'>Product 2</Link>
			</h2>
			{/** Check the replace below,
			 * what it essentially does is replaces the current history instead of adding the url to stack.
			 * So if user goes clicks product 3 and then clicks back he will be routed to Home page.
			 * All other routes will navigate back to products list page */}
			<h2>
				{' '}
				<Link href='/products/3' replace>
					Product 3
				</Link>
			</h2>
			<h2>
				{' '}
				<Link href={`/products/${productId}`}>Product {productId}</Link>
			</h2>
		</>
	);
};

export default ProductList;
