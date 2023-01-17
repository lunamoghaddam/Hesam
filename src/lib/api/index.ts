import { API, TABLES } from '$consts';

export const services = async () => {
	const body = '';
	const r = await fetch(`${API.BASE_URL}/${API.VERSION}/databases/${TABLES.SERVICES}/query`, {
		method: 'POST',
		headers: API.HEADERS,
		body,
		redirect: 'follow'
	}).catch((e) => e.response);
	if (!r?.ok) return;
	const res = await r.json();
	return res.results
    .map((i) => ({
      title: i.properties.Title.title,
      subtitle: i.properties.Subtitle.rich_text,
      color: i.properties.Color.rich_text,
      icon: i.properties.Icon.rich_text
    }))
    .filter((i) => i.title?.length && i.icon?.length);
};

export const consult = async (fullName, phoneNumber) => {
	const body = JSON.stringify({
		parent: {
			database_id: TABLES.CONSULTATION
		},
		properties: {
			'Full Name': {
				title: [
					{
						text: {
							content: fullName
						}
					}
				]
			},
			'Phone Number': {
				phone_number: phoneNumber
			}
		}
	});
	const r = await fetch(`${API.BASE_URL}/${API.VERSION}/pages`, {
		method: 'POST',
		headers: API.HEADERS,
		body,
		redirect: 'follow'
	});
	if (!r?.ok) return;
	return r.json();
};

export default {
	services,
	consult
};
