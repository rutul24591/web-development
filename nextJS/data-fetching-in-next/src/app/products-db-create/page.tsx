'use client';

import { useActionState } from 'react';
import { FormState, createProduct } from '@/actions/products';
/** Moved to actions/products.ts as part of keeping separating Server action */
// import { addProduct } from '@/prisma-db';
// import { redirect } from 'next/navigation';

import Submit from '@/components/submit';

/** Moved to actions/products.ts as part of keeping separating Server action */
// type Errors = {
// 	title?: string;
// 	price?: string;
// 	description?: string;
// };

// type FormState = {
// 	errors: Errors;
// };

/** Compare this with form in react-form */
const AddProductPage = () => {
	const initialState: FormState = {
		errors: {},
	};

	/** Moved to actions/products.ts as part of keeping separating Server action */
	// const createProduct = async (formData: FormData) => {
	// 	'use server';
	// 	const title = formData.get('title') as string;
	// 	const description = formData.get('description') as string;
	// 	const price = formData.get('price') as string;

	// 	const errors: Errors = {};

	// 	if (!price) {
	// 		errors.price = 'Price is required!';
	// 	}

	// 	if (!title) {
	// 		errors.title = 'Title is required!';
	// 	}

	// 	if (!description) {
	// 		errors.description = 'Description is required!';
	// 	}

	// 	if (Object.keys(errors)?.length > 0) {
	// 		return { errors };
	// 	}

	// 	addProduct(title, parseInt(price), description);
	// 	await redirect('/products-db');
	// };

	/** useActionState takes 2 params, i.e serverAction and initialFormState */
	const [state, formAction] = useActionState(
		// isPending should be third return value
		createProduct,
		initialState,
	);

	return (
		<form action={formAction} className='p-4 space-y-4 max-w-96'>
			<div>
				<label className='text-blue'>
					Title
					<input
						type='text'
						className='block w-full p-2 text-black border rounded'
						name='title'
					/>
				</label>
				{state?.errors.title && (
					<p className='text-red-500'>{state?.errors.title}</p>
				)}
			</div>
			<div>
				<label className='text-blue'>
					Price
					<input
						type='number'
						className='block w-full p-2 text-black border rounded'
						name='price'
					/>
				</label>
				{state?.errors.price && (
					<p className='text-red-500'>{state?.errors.price}</p>
				)}
			</div>
			<div>
				<label className='text-blue'>
					Description
					<textarea
						className='block w-full p-2 text-black border rounded'
						name='description'
					/>
				</label>
				{state?.errors.description && (
					<p className='text-red-500'>{state?.errors.description}</p>
				)}
			</div>
			{/* IMP -- useFormStatus() hook cannot be used in server component as server components doesn't support hooks. 
      So instead of making this entire file as client component, we move the button to a separate client component. Uncomment below to make use of isPending from useServerAction
			For now we will make use of pending from useFormStatus by enabling Submit component */}
			{/* <button
				type='submit'
				className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500'
				disabled={isPending}
			>
				Add Product
			</button> */}
			<Submit />
		</form>
	);
};

export default AddProductPage;
