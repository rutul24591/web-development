import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** Seed or create data is not exists in DB */
const seedProducts = async () => {
	const count = await prisma.product.count();

	if (count === 0) {
		await prisma.product.createMany({
			data: [
				{ title: 'Product 1', price: 500, description: 'Description 1' },
				{ title: 'Product 2', price: 700, description: 'Description 2' },
				{ title: 'Product 3', price: 1000, description: 'Description 3' },
			],
		});
	}
};

// run seed if needed
seedProducts();

/** CRUD OPS */

/** READ ALL */
export async function getProducts(query?: string) {
	/** Adding delays to simulate latency. No effect in production */
	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (query) {
		return prisma.product.findMany({
			where: {
				OR: [
					{ title: { contains: query } },
					{ description: { contains: query } },
				],
			},
		});
	}
	return prisma.product.findMany();
}

/** READ ONE */
export async function getProduct(id: number) {
	/** Adding delays to simulate latency. No effect in production */
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return prisma.product.findUnique({
		where: { id },
	});
}

/** CREATE */
export async function addProduct(
	title: string,
	price: number,
	description: string,
) {
	/** Adding delays to simulate latency. No effect in production */
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return prisma.product.create({
		data: {
			title,
			price,
			description,
		},
	});
}

/** UPDATE */
export async function updateProduct(
	id: number,
	title: string,
	price: number,
	description: string,
) {
	/** Adding delays to simulate latency. No effect in production */
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return prisma.product.update({
		where: { id },
		data: {
			title,
			price,
			description,
		},
	});
}

/** DELETE */
export async function deleteProduct(id: number) {
	/** Adding delays to simulate latency. No effect in production */
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return prisma.product.delete({
		where: { id },
	});
}
