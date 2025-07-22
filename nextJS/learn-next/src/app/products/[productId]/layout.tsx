import React from 'react';

const ProductsDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<h2>Feature products</h2>
			{/** Carousal for recommedations for other products */}
		</>
	);
};

export default ProductsDetailsLayout;
