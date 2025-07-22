/** Adding a reset prop and providing a button to recover.
 * If we click on Try again, we will face same error because retry will try to attempt to rerender client side.
 * Converting reviewId component to client component is an overkill.
 * So we make use of useRouter and startTransition from next/navigation & react respectively.
 */

'use client';

import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
const ErrorBoundary = ({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) => {
	const router = useRouter();

	/** This reload function ensures that the refresh is deferred until the next render phase
	 *  allowing react to handle any pending state updates before proceeding.
	 * Check the browser now refresing and try again click. It will attempt to reload.*/
	const reload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};
	return (
		<>
			{/* <h1>Error in review Id</h1> */}

			{/* Will display error passed/thrown from page.tsx*/}
			<div>
				<p>{error.message}</p>
				<button onClick={() => reload()}>Try again</button>
			</div>
		</>
	);
};

export default ErrorBoundary;
