'use client';

import { useState } from 'react';

const NavSearch = () => {
	console.log(`NavSearch rendered`);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = useState('');
	return (
		<>
			<div>Nav Search</div>
		</>
	);
};

export default NavSearch;
