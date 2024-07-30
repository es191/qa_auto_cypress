import { e } from '../elements';

export const time = {
	searchEmp(empName: string): void {
		cy.get(e.sharedUI.empName).eq(0).type(empName, { delay: 100 });
		cy.wait(1000);
		cy.get(e.sharedUI.dropdownName).click();
		cy.get(e.sharedUI.btnSearch).click();

		cy.get(e.timeUI.timesheetFor).contains(empName);
		cy.get(e.timeUI.alertText).should('exist');
	},
};
