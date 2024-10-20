import { d } from '../../fixtures';
import { e } from '../elements';

export const dashboard = {
	goToAdmin(): void {
		cy.get(e.dashboardUI.admin).eq(0).click();
		cy.url().should('eq', d.data.url.admin);
	},

	goToPIM(): void {
		cy.get(e.dashboardUI.pim).eq(1).click();
		cy.url().should('eq', d.data.url.pim);
	},

	goToLeave(): void {
		cy.get(e.dashboardUI.leave).eq(2).click();
		cy.url().should('eq', d.data.url.leave);
	},
	goToTime(): void {
		cy.get(e.dashboardUI.time).eq(3).click();
		cy.url().should('eq', d.data.url.time);
	},
};
