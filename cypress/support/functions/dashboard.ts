import { d } from '../../fixtures';
import { e } from '../elements';

export const dashboard = {
	goToAdmin(): void {
		cy.get(e.dashboardUI.admin).eq(0).click();
		cy.url().should('eq', d.data.url.admin);
	},

	goToLeave(): void {
		cy.get(e.dashboardUI.leave).eq(2).click();
		cy.url().should('eq', d.data.url.leave);
	},
};
