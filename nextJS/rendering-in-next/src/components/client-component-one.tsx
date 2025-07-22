'use client';

import { useState } from 'react';

/** Old simple flow */
// const ClientComponentOne = () => {
// 	const [name, setName] = useState('Iron man');
// 	return (
// 		<>
// 			<h1>Client component one</h1>
// 		</>
// 	);
// };

/** To accomodate passing server component as children */
const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [name, setName] = useState('Iron man');
	return (
		<>
			<h1>Client component one</h1>
			{children}
		</>
	);
};

export default ClientComponentOne;
