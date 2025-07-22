/** Here we are able to await as this component is a server side component.
 * Making it client component by injecting 'use client' will throw an exception.
 * If we want to access params and searchParams in client component
 * we will need to do it by use hook from react and remove async await from below
 *
 * Basically async/await for server components and use hook for client components
 */
// 'use client';
import Link from 'next/link';
// import { use } from 'react';

const NewsArticle = async ({
	params,
	searchParams,
}: {
	params: Promise<{ articleId: string }>;
	searchParams: Promise<{ lang?: 'es' | 'en' | 'fr' }>;
}) => {
	const { articleId } = await params;
	const { lang = 'es' } = await searchParams;

	// const { articleId } = use(params);
	// const { lang } = use(searchParams);

	return (
		<div>
			<h1>News Article {articleId}</h1>
			<p>Reading in {lang}</p>
			<Link href={`/articles/${articleId}?lang=en`}>English</Link>
			<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
			<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
		</div>
	);
};

export default NewsArticle;
