import React from 'react';

// const Docs = ({
// 	params,
// }: {
// 	params: {
// 		slug: string[];
// 	};
// }) => {
// 	if (params.slug.length === 2) {
// 		return (
// 			<h1>
// 				Viewing docs for feature: {params.slug[0]} and concept: {params.slug[1]}
// 			</h1>
// 		);
// 	} else if (params.slug.length === 1) {
// 		return <h1>Viewing docs for feature: {params.slug[0]}</h1>;
// 	}
// 	return <h1>Docs Home page</h1>;
// };

const Docs = async ({
	params,
}: {
	params: Promise<{
		slug: string[];
	}>;
}) => {
	const { slug } = await params;
	console.log(`slug: ${slug}`);

	if (slug?.length === 2) {
		return (
			<>
				<h1>
					Viewing docs for feature: {slug[0]} and concept: {slug[1]}
				</h1>
			</>
		);
	} else if (slug?.length === 1) {
		return <h1>Viewing docs for feature: {slug[0]}</h1>;
	}
	// This statement will get rendered when navigated to localhost:3000/docs while using [[...slug]]
	return <h1>Docs Home page</h1>;
};

export default Docs;
