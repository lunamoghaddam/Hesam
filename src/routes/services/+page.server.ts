import { API, TABLES } from '$consts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let body = '';
	const r = await fetch(`${API.BASE_URL}/${API.VERSION}/databases/${TABLES.SERVICES}/query`, {
		method: 'POST',
		headers: API.HEADERS,
		body,
		redirect: 'follow'
	}).catch((e) => e.response);
	if (!r?.ok) return {};
	const res = await r.json();
	return {
		items: res.results
			.map((i) => ({
				title: i.properties.Title.title,
				subtitle: i.properties.Subtitle.rich_text,
				color: i.properties.Color.rich_text,
				icon: i.properties.Icon.rich_text
			}))
			.filter((i) => i.title?.length && i.icon?.length)
	};
}
