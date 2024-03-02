import { UserButton } from '@clerk/nextjs';

export default function DashboardPage(): React.ReactNode {
	return (
		<div>
			<p>Dashboard Page</p>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
}
