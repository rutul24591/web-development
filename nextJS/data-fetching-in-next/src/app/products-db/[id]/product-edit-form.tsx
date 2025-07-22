'use client';

import { useActionState } from 'react';
import { FormState, editProduct } from '@/actions/products';
import { Product } from '@/app/products-db/page';

// import Submit from '@/components/submit';

/** Compare this with form in react-form */
const EditProductForm = ({ product }: { product: Product }) => {
	const initialState: FormState = {
		errors: {},
	};

	/** Using JS bind to bind the product.id */
	const editProductWithId = editProduct.bind(null, product.id);

	/** useActionState takes 2 params, i.e serverAction and initialFormState and returns 3 items state, formAction, isPending */
	const [state, formAction, isPending] = useActionState(
		editProductWithId, //editProduct
		initialState,
	);

	return (
		<form action={formAction} className='p-4 space-y-4 max-w-96'>
			{/** Bad way as it could expose the id in html  */}
			{/* <input type="hidden" name="id" value={product.id} /> */}
			<div>
				<label className='text-blue'>
					Title
					<input
						type='text'
						className='block w-full p-2 text-black border rounded'
						name='title'
						defaultValue={product.title}
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
						defaultValue={product.price}
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
						defaultValue={product.description ?? ''} // This could be empty so making using of nullish coalesce(-ing) operator
					/>
				</label>
				{state?.errors.description && (
					<p className='text-red-500'>{state?.errors.description}</p>
				)}
			</div>
			{/* IMP -- useFormStatus() hook cannot be used in server component as server components doesn't support hooks. 
      So instead of making this entire file as client component, we move the button to a separate client component.
      Uncomment below to make use of isPending from useServerAction
      For now we will make use of pending from useFormStatus by enabling Submit component */}
			<button
				type='submit'
				className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500'
				disabled={isPending}
			>
				Add Product
			</button>
			{/* <Submit /> */}
		</form>
	);
};

export default EditProductForm;
