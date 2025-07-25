type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

const Author = async ({ userId }: { userId: number }) => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`,
	);
	const user: User = await response.json();

	return (
		<div className='text-sm text-gray-500'>
			Written by:{' '}
			<span className='font-semibold text-gray-700 hover:text-gray-900 transition-colors'>
				{user.name}
			</span>
		</div>
	);
};

export default Author;
