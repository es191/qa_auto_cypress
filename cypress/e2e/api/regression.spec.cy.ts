import { apiCalls } from '../../functions/apiCalls';
import { data } from '../../fixtures/data';
import { UserRecord } from '../../functions/apiCalls';

describe('Regression Tests For api.restful-api.dev', () => {
	it('GET the list of all records', () => {
		apiCalls.getListOfObjects().then((res: Cypress.Response<UserRecord>) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.be.an('array');
			expect(res.body[0]).to.have.property('id').that.is.a('string').and.not.empty;
			expect(res.body[0]).to.have.property('data').that.is.an('object');
		});
	});

	it('GET single record', () => {
		apiCalls.getSingleObject().then((res: Cypress.Response<UserRecord>) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('id').that.is.a('string').and.not.empty;
			expect(res.body).to.have.property('data').that.is.an('object');
		});
	});

	it('POST add new record', () => {
		apiCalls.postAddObject(data.payloadAddRecord).then((res: Cypress.Response<UserRecord>) => {
			cy.log(data.payloadAddRecord.name);
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('createdAt');
			expect(res.body.name).to.eq(data.payloadAddRecord.name);
			expect(res.body.data.year).to.eq(data.payloadAddRecord.data.year);
			expect(res.body.data.price).to.eq(data.payloadAddRecord.data.price);
		});
	});

	it('DELETE delete specific record', () => {
		apiCalls.deleteObject(Cypress.env('id')).then((res: Cypress.Response<UserRecord>) => {
			console.log(JSON.stringify(res));
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('message').that.is.a('string').and.not.empty;
		});
	});
});
