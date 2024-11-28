declare namespace Cypress {
	interface Chainable {
		retryRequest(options: Retryoptions): Chainable<Cypress.Response<Object>>;
	}
}

interface Retryoptions {
	method: string;
	url: string;
	body?: object;
	headers?: object;
	retries: number;
	interval: number;
	assertion: (response: any) => void;
}

Cypress.Commands.add('retryRequest', (options: Retryoptions) => {
	const method = options.method;
	const url = options.url;
	const body = options.body;
	const headers = options.headers || {};
	const retries = options.retries || 3;
	const interval = options.interval || 1000;
	const assertion = options.assertion;

	function makeRequest(attempt = 0) {
		cy.wait(interval);
		cy.request({
			method: method,
			url: url,
			body: body,
			headers: headers,
			failOnStatusCode: false,
		}).then((response) => {
			try {
				assertion(response);
			} catch (error) {
				if (attempt < retries) {
					cy.wait(interval);
					makeRequest(attempt + 1);
				} else {
					throw new Error(`Max retries reached. Condition not met: ${error.message}`);
				}
			}
		});
	}
});
