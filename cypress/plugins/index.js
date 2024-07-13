/// <reference types="cypress" />

module.exports = (on, config) => {
	on('before:browser:launch', (browser = {}, launchOptions) => {
		console.log('Launching browser:', browser.name);
		return launchOptions;
	});
	return config;
};
