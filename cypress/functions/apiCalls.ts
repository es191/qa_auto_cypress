import { custom } from './custom';

export interface UserRecord {
	id: string;
	name: string;
	message?: string;
	data: {
		year: number;
		price: number;
		cpuModel: string;
		hardDiskSize: string;
	};
}

export interface InputRecord {
	name: string;
	data: {
		year: number;
		price: number;
		cpuModel?: string;
		hardDiskSize?: string;
		color?: string;
	};
}

export const apiCalls = {
	getListOfRecords: (): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'GET',
			url: Cypress.env('BASE_API'),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	getSingleRecord: (): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		const id = custom.generateRandomNumber();
		return cy.request({
			method: 'GET',
			url: `${Cypress.env('BASE_API')}/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	postAddRecord: (payload: InputRecord): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy
			.request({
				method: 'POST',
				url: Cypress.env('BASE_API'),
				body: payload,
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((res: Cypress.Response<UserRecord>) => {
				const idNewRecord = res.body.id;
				Cypress.env('id', idNewRecord);
				return res;
			});
	},

	updateRecord: (id: string, payload: InputRecord): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'PUT',
			url: `${Cypress.env('BASE_API')}/${id}`,
			body: payload,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	deleteRecord: (id: string): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env('BASE_API')}/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
};
