// For intercepting routes, consider this as source folder.
import Link from 'next/link';

const Folder1 = () => {
	return (
		<>
			<h1>Folder 1</h1>
			<div>
				<Link href={'/folder1/folder2'}>Folder 2</Link>
				<Link href={'/folder3'}>Folder 3</Link>
			</div>
		</>
	);
};

export default Folder1;
