import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		absolute: 'Blog', // This will override the template in root layout for title.
	},
};

/** Normal flow */
// const Blog = () => {
// 	return <h1>My Blog</h1>;
// };

/** To execute a loading and display content of loading */
const Blog = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve('Delay');
		}, 3000);
	});
	return <h1>My Blog</h1>;
};

export default Blog;
