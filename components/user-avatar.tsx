import { useUser } from '@clerk/nextjs';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export const UserAvatar = (): React.ReactNode => {
	const { user } = useUser();

	return (
		<Avatar className='h-10 w-10'>
			<AvatarImage src={user?.imageUrl} width={80} />
			<AvatarFallback>
				{user?.firstName?.charAt(0)}
				{user?.lastName?.charAt(0)}
			</AvatarFallback>
		</Avatar>
	);
};
