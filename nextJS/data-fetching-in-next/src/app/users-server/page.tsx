type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
};

const UsersServer = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3500));
	const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Provide an invalid url like users123 to simulate error.
	const users: User[] = await response.json();
	console.log(`users: `, users);

	return (
		<ul className='space-y-4 p-4'>
			{users.map((user) => (
				<li
					key={user.id}
					className='p-4 bg-white shadow-md rounded-lg text-gray-700'
				>
					<div className='font-bold'>{user.name}</div>
					<div className='text-sm'>
						<div>Username: {user.username}</div>
						<div>Email: {user.email}</div>
						<div>Phone: {user.phone}</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default UsersServer;
