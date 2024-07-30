import { d } from '../../fixtures';
import { e } from '../elements';

export const leave = {
	takeLeave(): void {
		cy.get(e.leaveUI.assignLeave).eq(6).click();
		cy.get(e.leaveUI.assignLeaveUI.title).should('exist');

		cy.get(e.leaveUI.assignLeaveUI.employeeName).type(d.data.users.employeeNameESS, { delay: 100 });
		cy.wait(5000);
		cy.get(e.sharedUI.dropdownName).click();

		cy.get(e.leaveUI.assignLeaveUI.selectType).click();
		cy.contains(d.data.leaveType.personalCAN).click();
	},
};
