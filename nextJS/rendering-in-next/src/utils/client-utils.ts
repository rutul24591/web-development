/** Client-only indicates this function should be used in client components and not in server */
import 'client-only';

export const clientSideFunction = () => {
	console.log(`use window object, use localStorage`);
	return 'client results';
};
