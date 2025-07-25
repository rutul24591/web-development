type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type Album = {
	userId: number;
	id: number;
	title: string;
};

const getUserPosts = async (userId: string) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
	);
	return res.json();
};

const getUserAlbums = async (userId: string) => {
	await new Promise((resolve) => setTimeout(resolve, 3500));
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
	);
	return res.json();
};

const UserProfile = async ({
	params,
}: {
	params: Promise<{ userId: string }>;
}) => {
	const { userId } = await params;

	/** Due to the nature of async/await, an await request in a component will block any request below it.  */
	// const postsData = await getUserPosts(userId);
	const postsData = getUserPosts(userId);
	const albumsData = getUserAlbums(userId);

	/** Due to blocking nature we initiate both request at same time */
	const [posts, albums] = await Promise.all([postsData, albumsData]);
	return (
		<div className='p-4 max-w-7xl mx-auto'>
			<h1 className='text-3xl font-extrabold mb-8'>User Profile</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<h2 className='text-2xl font-bold mb-4'>Posts</h2>
					<div className='space-y-4'>
						{posts.map((post: Post) => (
							<div key={post.id} className='bg-white shadow-md rounded-lg p-6'>
								<h3 className='text-lg font-bold mb-3 text-gray-800 leading-tight'>
									{post.title}
								</h3>
								<p className='text-gray-600 mb-4 leading-relaxed'>
									{post.body}
								</p>
							</div>
						))}
					</div>
				</div>

				<div>
					<h2 className='text-2xl font-bold mb-4'>Albums</h2>
					<div className='space-y-4'>
						{albums.map((album: Album) => (
							<div key={album.id} className='bg-white shadow-md rounded-lg p-6'>
								<p className='text-gray-700'>{album.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
