// For intercepting routes, consider this as destination folder for same segment level example
// and consider this as source folder for 2 level up segment matching.

import Link from 'next/link';

const Folder2 = () => {
	return (
		<>
			<h1>Folder 2</h1>
			<Link href={'/folder4'}>Folder 4</Link>
		</>
	);
};

export default Folder2;
