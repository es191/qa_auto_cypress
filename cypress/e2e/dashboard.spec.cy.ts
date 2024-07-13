import { f } from '../support/functions';

describe('Tests for login logic', () => {
	beforeEach(() => {
		f.login_Admin.loginApp();
	});
	it('Assign Leave', () => {
		f.dashboard.goToLeave();
		f.leave.takeLeave();
	});
});
