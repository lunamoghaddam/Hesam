const NOTION_API_SECRET = 'secret_41I3gTloT39TVX1eSPSwaQdGMk7YKAkNBLgR2HeWmDg';
export const API = {
	BASE_URL: 'https://api.notion.com',
	VERSION: 'v1',
	HEADERS: {
		'Notion-Version': '2022-06-28',
		Authorization: `Bearer ${NOTION_API_SECRET}`,
		'content-type': 'application/json'
	}
};

export const TABLES = {
	SERVICES: '0ac3f55d-b5bc-462c-96b3-6144e5be9a4b',
	CONSULTATION: 'a4011a8a-ba09-4f6f-a223-d3f37caeabc5'
};

export default {
	API,
	TABLES
};
