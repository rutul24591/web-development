import fs from 'fs';

const ServerComponentTwo = () => {
	fs.readFileSync('src/components/server-component-one.tsx', 'utf-8');
	return (
		<>
			<h1>Server component two</h1>
		</>
	);
};

export default ServerComponentTwo;
