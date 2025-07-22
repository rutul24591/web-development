import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<h2>Inner Layout</h2>
			{children}
			{/** Carousal for recommedations for other products */}
		</>
	);
};

export default AuthLayout;
