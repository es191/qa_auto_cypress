import { apiCalls } from '../../functions/apiCalls';
import { data } from '../../fixtures/data';
import { UserRecord } from '../../functions/apiCalls';

describe('Regression Tests For api.restful-api.dev', () => {
	it('GET the list of all records', () => {
		apiCalls.getListOfRecords().then((res: Cypress.Response<UserRecord>) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.be.an('array');
			expect(res.body[0]).to.have.property('id').that.is.a('string').and.not.empty;
			expect(res.body[0]).to.have.property('data').that.is.an('object');
		});
	});

	it('GET single record', () => {
		apiCalls.getSingleRecord().then((res: Cypress.Response<UserRecord>) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('id').that.is.a('string').and.not.empty;
			expect(res.body).to.have.property('data').that.is.an('object');
		});
	});

	it('POST add new record', () => {
		apiCalls.postAddRecord(data.payload.addRecord).then((res: Cypress.Response<UserRecord>) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('createdAt');
			expect(res.body.name).to.eq(data.payload.addRecord.name);
			expect(res.body.data.year).to.eq(data.payload.addRecord.data.year);
			expect(res.body.data.price).to.eq(data.payload.addRecord.data.price);
		});
	});

	it('PUT update current record', () => {
		apiCalls
			.updateRecord(Cypress.env('id'), data.payload.updateRecord)
			.then((res: Cypress.Response<UserRecord>) => {
				expect(res.status).to.eq(200);
				expect(res.body).to.have.property('updatedAt');
				expect(res.body.name).to.eq(data.payload.updateRecord.name);
				expect(res.body.data.year).to.eq(data.payload.updateRecord.data.year);
				expect(res.body.data.price).to.eq(data.payload.updateRecord.data.price);
			});
	});

	it('DELETE delete specific record', () => {
		apiCalls.deleteRecord(Cypress.env('id')).then((res: Cypress.Response<UserRecord>) => {
			console.log(JSON.stringify(res));
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('message').that.is.a('string').and.not.empty;
		});
	});
});
