import fs from 'fs';
import ClientComponentOne from './client-component-one';
import ClientComponentTwo from './client-component-two';

const ServerComponentOne = () => {
	fs.readFileSync('src/components/server-component-one.tsx', 'utf-8');
	return (
		<>
			<h1>Server component one</h1>
			<ClientComponentOne> </ClientComponentOne>
			<ClientComponentTwo />
		</>
	);
};

export default ServerComponentOne;
