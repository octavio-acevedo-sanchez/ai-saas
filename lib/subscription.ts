import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

const DAYS_IN_MS = 86_400_000;

export const checkSubscription = async (): Promise<boolean> => {
	const { userId } = auth();

	if (!userId) {
		return false;
	}

	const userSubscription = await prismadb.userSubscription.findUnique({
		where: {
			userId
		},
		select: {
			stripeSubscriptionId: true,
			stripeCurrentPeriodEnd: true,
			stripeCustomerId: true,
			stripePriceId: true
		}
	});

	if (!userSubscription) {
		return false;
	}

	const isValid =
		userSubscription.stripePriceId &&
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
		userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAYS_IN_MS >
			Date.now();

	return !!isValid;
};
