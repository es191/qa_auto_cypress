import { f } from '../support/functions';
import { d } from '../fixtures';

describe('Tests for PIM part from the main menu', () => {
	beforeEach(() => {
		f.login_Admin.loginApp();
		f.dashboard.goToTime();
	});

	it('TC: 1 - Search for a contact information', () => {
		f.time.searchEmp(d.data.userRole.empNameEss);
	});
});
