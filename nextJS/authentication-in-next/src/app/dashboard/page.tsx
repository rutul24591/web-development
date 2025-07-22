import { auth, currentUser } from '@clerk/nextjs/server';

const DashboardPage = async () => {
	/** The auth() helper returns the auth object of the currently active user */
	const authObj = await auth();

	console.log(`authObj`, authObj);

	/** The currentUser() helper returns the backend user object of the currently active user */
	const userObj = await currentUser();

	console.log(`userObj`, userObj);

	return (
		<div>
			<h1>Dashboard</h1>
			{/* <p>Welcome, {currentUser.firstName}!</p>
			<button onClick={() => auth.signOut()}>Sign out</button> */}
		</div>
	);
};

export default DashboardPage;
