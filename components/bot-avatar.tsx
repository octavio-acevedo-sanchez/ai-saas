import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

export const BotAvatar = (): React.ReactNode => {
	return (
		<Avatar className='h-10 w-10'>
			<AvatarImage className='p-1' src='/logo.png' width={80} />
		</Avatar>
	);
};
