import React from 'react';

// import {notFound} from 'next/navigation';
import { redirect } from 'next/navigation';

// const ReviewDetails = ({
// 	params,
// }: {
// 	params: { productId: string; reviewId: string };
// }) => {
// 	if (parseInt(params.reviewId) > 1000) {
// 		notFound();
// 	}
// 	return (
// 		<>
// 			<h1>
// 				Review {params.reviewId} for product {params.productId}
// 			</h1>
// 		</>
// 	);
// };

const getRandomInteger = (count: number) => {
	return Math.floor(Math.random() * count);
};

const ReviewDetails = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	// const productId = (await params).productId;
	// const reviewId = (await params).reviewId;

	const { productId, reviewId } = await params;
	const random = getRandomInteger(2);

	/** Explicitly throwing error to showcase error handling */
	if (random === 1) {
		throw new Error('Error loading review');
	}

	if (parseInt(reviewId) > 1000) {
		// notFound();

		redirect('/');
	}
	return (
		<>
			<h1>
				Review {reviewId} for product {productId}
			</h1>
		</>
	);
};

export default ReviewDetails;
