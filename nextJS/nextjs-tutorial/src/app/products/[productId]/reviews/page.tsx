import React from 'react';

// const ReviewList = () => {
// 	return (
// 		<>
// 			<h1>Review Lists</h1>
// 			<h2> Review 1</h2>
// 			<h2> Review 2</h2>
// 			<h2> Review 3</h2>
// 		</>
// 	);
// };

const ReviewList = async ({
	params,
}: {
	params: Promise<{ productId: string }>;
}) => {
	const productId = (await params).productId;
	return <>Reviews for product {productId}</>;
};

export default ReviewList;
