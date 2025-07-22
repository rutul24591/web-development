'use server';
import { addProduct, updateProduct, deleteProduct } from '@/prisma-db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type Errors = {
	title?: string;
	price?: string;
	description?: string;
};

export type FormState = {
	errors: Errors;
};

export const createProduct = async (
	prevState: FormState,
	// prevState: Promise<FormState | undefined>,
	formData: FormData,
): Promise<FormState> => {
	// 'use server';
	const title = formData.get('title') as string;
	const description = formData.get('description') as string;
	const price = formData.get('price') as string;

	const errors: Errors = {};

	if (!price) {
		errors.price = 'Price is required!';
	}

	if (!title) {
		errors.title = 'Title is required!';
	}

	if (!description) {
		errors.description = 'Description is required!';
	}

	if (Object.keys(errors)?.length > 0) {
		return { errors };
	}

	await addProduct(title, parseInt(price), description);
	redirect('/products-db');
	// return { errors: {} };
};

export const editProduct = async (
	id: number,
	prevState: FormState,
	// prevState: Promise<FormState | undefined>,
	formData: FormData,
): Promise<FormState> => {
	// 'use server';
	const title = formData.get('title') as string;
	const description = formData.get('description') as string;
	const price = formData.get('price') as string;

	const errors: Errors = {};

	if (!price) {
		errors.price = 'Price is required!';
	}

	if (!title) {
		errors.title = 'Title is required!';
	}

	if (!description) {
		errors.description = 'Description is required!';
	}

	if (Object.keys(errors)?.length > 0) {
		return { errors };
	}

	updateProduct(id, title, parseInt(price), description);
	await redirect('/products-db');
	return { errors: {} };
};

export const removeProduct = async (id: number) => {
	await deleteProduct(id);
	/** Once delete action completes, nothing happens on UI. Once page refreshes then only we are able to see the refreshed content
	 * Adding the below line to revalidate the path so that the UI is updated immediately
	 */
	revalidatePath('/products-db');
};
