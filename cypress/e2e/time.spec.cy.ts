import { f } from '../support/functions';
import { d } from '../fixtures';

describe('Tests for TIME part from the main menu', () => {
	beforeEach(() => {
		f.login_Admin.loginApp();
		f.dashboard.goToTime();
	});

	it('TC: 1 - Search for a timesheet', () => {
		f.time.searchEmp(d.data.userRole.empNameEss);
	});
});
