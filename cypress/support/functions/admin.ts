import { d } from '../../fixtures';
import { e } from '../elements';

export const admin = {
	searchForRole(username: string, name: string, role: string): void {
		cy.get(e.adminUI.username).type(username);
		cy.get(e.adminUI.userRole).eq(0).click();
		cy.contains(role).click();
		cy.get(e.adminUI.employessName).type(name, { delay: 100 });
		cy.wait(1000);
		cy.get(e.sharedUI.dropdownName).click();
		cy.get(e.adminUI.status).eq(1).click();
		cy.contains(d.data.userRole.statusEnabled).click();
		cy.get(e.adminUI.btnSearch).click();

		cy.get(e.adminUI.tableCells).should('contain', username);
		cy.get(e.adminUI.tableCells).should('contain', name);
	},
};
