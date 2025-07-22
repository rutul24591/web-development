'use client';
import { useRouter, redirect } from 'next/navigation';

const OrderProduct = () => {
	const router = useRouter();

	const handleClick = () => {
		console.log(`Placing your order`);
		/** Redirect to home page */
		// router.push('/');
		/** Go back in history */
		// router.back();

		/** Go forward in history */
		// router.forward();

		/** To replace instead of adding entry to history stack*/
		router.replace('/');

		/** We can also use redirect instead of useRouter. Check for example in products -> reviews */
		redirect('/');
	};
	return (
		<>
			<div>OrderProduct</div>
			<button onClick={handleClick}>Place Order</button>
		</>
	);
};

export default OrderProduct;
