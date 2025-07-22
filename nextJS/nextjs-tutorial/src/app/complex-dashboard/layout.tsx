// No imports are needed for slots/ parallel routes. Instead they come in props
// import UserAnalytics from '';
// import RevenueMetrics from '';
// import Notifications from '';

import { ReactNode } from 'react';

const ComplexDashboardLayout = ({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
	login: ReactNode;
}) => {
	const isLoggedIn: boolean = true;

	return isLoggedIn ? (
		<>
			<div>{children}</div> {/* Contents from page.tsx */}
			{/* Contents from user analytics */}
			{/* <UserAnalytics /> */}
			{/* Contents from revenue metrics */}
			{/* <RevenueMetrics /> */}
			{/* Contents from Notifications */}
			{/* <Notifications />  */}
			<div style={{ display: 'flex' }}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
			</div>
		</>
	) : (
		login
	);
};

export default ComplexDashboardLayout;
