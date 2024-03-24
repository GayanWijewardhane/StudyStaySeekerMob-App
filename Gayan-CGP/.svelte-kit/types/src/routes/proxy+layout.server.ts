// @ts-nocheck
import { loginstat } from '$lib/stores';

export const ssr = false;
let login = 0;

loginstat.subscribe((value) => {
	login = value;
});

/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export async function load(event) {
	return {
		login,
		user: event.locals.user
	};
}
