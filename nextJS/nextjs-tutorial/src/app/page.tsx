import React from 'react';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<h1>Welcome to Home page</h1>
			<Link href='/blog'>Blog</Link>
			<Link href='/products'>Products</Link>
			<Link href='/articles/breaking-news-123?lang=en'>English</Link>
			<Link href='/articles/breaking-news-123?lang=fr'>French</Link>
		</>
	);
};

export default Home;
