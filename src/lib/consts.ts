const NOTION_API_SECRET = 'secret_41I3gTloT39TVX1eSPSwaQdGMk7YKAkNBLgR2HeWmDg';
export const API = {
	BASE_URL: 'https://api.notion.com',
	VERSION: 'v1',
	HEADERS: {
		'Notion-Version': '2022-06-28',
		Authorization: `Bearer ${NOTION_API_SECRET}`
	}
};

const TABLE_PREFIX = 'databases';
export const TABLES = {
	SERVICES: `${TABLE_PREFIX}/0ac3f55d-b5bc-462c-96b3-6144e5be9a4b`
};

export default {
	API,
	TABLES
};
