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

export interface ObjectInput {
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
	getListOfObjects: (): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'GET',
			url: Cypress.env('BASE_API'),
			headers: {
				'User-Agent': 'PostmanRuntime/7.42.0',
			},
		});
	},

	getSingleObject: (): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		const id = custom.generateRandomNumber();
		return cy.request({
			method: 'GET',
			url: `${Cypress.env('BASE_API')}/${id}`,
			headers: {
				'User-Agent': 'PostmanRuntime/7.42.0',
			},
		});
	},

	postAddObject: (payload: ObjectInput): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy
			.request({
				method: 'POST',
				url: Cypress.env('BASE_API'),
				body: payload,
				headers: {
					'User-Agent': 'PostmanRuntime/7.42.0',
				},
			})
			.then((res: Cypress.Response<any>) => {
				const idNewRecord = res.body.id;
				Cypress.env('id', idNewRecord);
				cy.log(`My id is: ${idNewRecord}`);
			});
	},

	deleteObject: (id: string): Cypress.Chainable<Cypress.Response<UserRecord>> => {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env('BASE_API')}/${id}`,
			headers: {
				'User-Agent': 'PostmanRuntime/7.42.0',
			},
		});
	},
};
