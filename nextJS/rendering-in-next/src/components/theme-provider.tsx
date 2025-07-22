'use client';

import { createContext, useContext } from 'react';

type Theme = {
	colors: {
		primary: string;
		secondary: string;
	};
};

const defaultTheme: Theme = {
	colors: {
		primary: '#007bff',
		secondary: '#6c757d',
	},
};

/** Instead of useTheme hook we can make use of ThemeContext via useContext hook if we have exported like below */
// export const ThemeContext = createContext<Theme>(defaultTheme);
const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeContext.Provider value={defaultTheme}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
