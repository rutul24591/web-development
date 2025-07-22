/** Server-only indicates this function should be used in server components and not in client */
import 'server-only';

export const serverSideFunction = () => {
	console.log(
		`use multiple libraries, use environmental variables, interact with database, process confidential information`,
	);
	return 'server results';
};
