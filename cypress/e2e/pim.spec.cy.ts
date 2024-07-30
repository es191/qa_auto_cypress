import { f } from '../support/functions';
import { d } from '../fixtures';

describe('Tests for PIM part from the main menu', () => {
	beforeEach(() => {
		f.login_Admin.loginApp();
		f.dashboard.goToPIM();
	});

	it('TC: 1 - Search for a contact information', () => {
		const empName = d.data.users.empName;
		const id = d.data.users.empID;
		f.pim.searchEmp(empName, id);
	});
});
