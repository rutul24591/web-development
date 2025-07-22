import { Suspense } from 'react';

import Product from '@/components/product';
import Reviews from '@/components/reviews';

const ProductReviews = () => {
	return (
		<div>
			<h1>Product reviews</h1>
			<Suspense fallback={<p>Loading product details..</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading reviews details..</p>}>
				<Reviews />
			</Suspense>
		</div>
	);
};

export default ProductReviews;
