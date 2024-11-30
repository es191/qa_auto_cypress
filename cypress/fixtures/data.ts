import { custom } from '../functions/custom';

export const data = {
	BASE_URL: 'https://api.restful-api.dev/objects',

	payload: {
		addRecord: {
			name: custom.generateRandomString(),
			data: {
				year: 2019,
				price: 1849.99,
				'CPU model': 'Intel Core i9',
				'Hard disk size': '1 TB',
			},
		},

		updateRecord: {
			name: custom.generateRandomString(),
			data: {
				year: 2024,
				price: 1999.99,
				'CPU model': '3.3 GHz i9 chip',
				'Hard disk size': '2 TB',
			},
		},

		patchRecord: {
			name: `${custom.generateRandomString()}_Patched`,
		},
	},
};
