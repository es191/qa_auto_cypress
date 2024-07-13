import { f } from '../support/functions';
import { d } from '../fixtures';

describe('Tests for admin part from the main menu', () => {
	beforeEach(() => {
		f.login_Admin.loginApp();
	});

	it('TC:1 - Search for user ESS user', () => {
		const username = d.data.users.usernameESS;
		const empName = d.data.userRole.empNameEss;
		const role = d.data.userRole.ESS;

		f.dashboard.goToAdmin();
		f.admin.searchForRole(username, empName, role);
	});

	it('TC:2 - Search for user Admin user', () => {
		const username = d.data.users.usernameAdmin;
		const empName = d.data.userRole.empNameAdmin;
		const role = d.data.userRole.admin;

		f.dashboard.goToAdmin();
		f.admin.searchForRole(username, empName, role);
	});
});
