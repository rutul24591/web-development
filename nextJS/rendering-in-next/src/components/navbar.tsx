/** Adding a state for search over here, we will have to make this a client component,
 * but doing so it makes all components in the heirarchy(NavLinks and NavSearch) as client components as well.
 * So instead of making this component a client component, move the search state to NavSearch component, so only NavSearch component will become client
 * component and Navbar , Navlinks will remain as server components. The idea is keeping client components as lower as possible in the heirarchy, as this means sending more code
 * to the browser and losing the benefits of server components.
 */
// 'use client';

// import { useState } from 'react';
import NavLinks from './nav-links';
import NavSearch from './nav-search';

const Navbar = () => {
	// const [search, setSearch] = useState('');
	console.log(`Navbar rendering`);
	return (
		<div>
			<NavLinks />
			<NavSearch />
		</div>
	);
};

export default Navbar;
