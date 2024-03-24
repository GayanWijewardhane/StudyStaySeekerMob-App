// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async (events: Parameters<PageServerLoad>[0]) => {
	return {
		user: events.locals.user
	};
};
