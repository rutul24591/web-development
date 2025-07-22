import React from 'react';

const getRandomInteger = (count: number) => {
	return Math.floor(Math.random() * count);
};

const ProductsDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	const random = getRandomInteger(2);

	/** Explicitly throwing error to showcase error handling
	 *
	 * This will not be handled gracefully by error.tsx as Layout falls above ErrorBoundary in component heirarchy
	 * Solution is to move the error.tsx file to layouts' parent segment(ie. products).
	 */
	if (random === 1) {
		throw new Error('Error loading product');
	}

	return (
		<>
			{children}
			<h2>Feature products</h2>
			{/** Carousal for recommedations for other products */}
		</>
	);
};

export default ProductsDetailsLayout;
