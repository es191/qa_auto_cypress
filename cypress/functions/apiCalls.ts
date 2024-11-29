import { custom } from './custom';
import { data } from '../fixtures/data';

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
			url: data.BASE_URL,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	getSingleRecord: (): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		const id = custom.generateRandomNumber();
		return cy.request({
			method: 'GET',
			url: `${data.BASE_URL}/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	postAddRecord: (payload: InputRecord): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy
			.request({
				method: 'POST',
				url: data.BASE_URL,
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
			url: `${data.BASE_URL}/${id}`,
			body: payload,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},

	deleteRecord: (id: string): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'DELETE',
			url: `${data.BASE_URL}/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
};
