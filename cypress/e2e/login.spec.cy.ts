import { f } from '../support/functions';

describe('Tests for login logic', () => {
	it('TC:1 - Successfull login', () => {
		f.login_Admin.loginApp();
	});

	it('TC:2 - Login fails with incorrect credentials', () => {
		f.login_Admin.loginAppIncorrect();
	});
});
