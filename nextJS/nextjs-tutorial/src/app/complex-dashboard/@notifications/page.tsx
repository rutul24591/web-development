import Card from '@/components/card';
import Link from 'next/link';

const NotificationsPage = () => {
	return (
		<Card>
			<div>Default Notifications</div>
			<Link href='/complex-dashboard/archived'>Archived</Link>
		</Card>
	);
};

export default NotificationsPage;
