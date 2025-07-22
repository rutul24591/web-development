'use client';

import { useState } from 'react';

const ClientComponentTwo = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [name, setName] = useState('Iron man');
	return (
		<>
			<h1>Client component two</h1>
		</>
	);
};

export default ClientComponentTwo;
