'use client';

import { useState } from 'react';

const AboutPage = () => {
	const [name, setName] = useState('');
	console.log(`Dashboard client component`);
	return (
		<div>
			<h1>Dashboard page</h1>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			<p>Hello, {name}!</p>
		</div>
	);
};

export default AboutPage;
