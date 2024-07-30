import { d } from '../../fixtures';
import { e } from '../elements';

export const admin = {
	searchForRole(username: string, name: string, role: string): void {
		cy.get(e.adminUI.username).type(username);
		cy.get(e.adminUI.userRole).eq(0).click();
		cy.contains(role).click();
		cy.get(e.sharedUI.empName).type(name, { delay: 100 });
		cy.wait(1000);
		cy.get(e.sharedUI.dropdownName).click();
		cy.get(e.sharedUI.status).eq(1).click();
		cy.contains(d.data.userRole.statusEnabled).click();
		cy.get(e.sharedUI.btnSearch).click();

		cy.get(e.sharedUI.status).should('contain', username);
		cy.get(e.sharedUI.status).should('contain', name);
	},
};
