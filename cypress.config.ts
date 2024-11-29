import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		},
		viewportWidth: 1920,
		viewportHeight: 1200,
		chromeWebSecurity: false,
		requestTimeout: 20000,
		responseTimeout: 20000,
		experimentalRunAllSpecs: true,
		projectId: '1',
	},
	screenshotOnRunFailure: true,
	video: false,
});
