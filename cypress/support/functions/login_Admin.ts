import { d } from '../../fixtures';
import { e } from '../elements';

export const login_Admin = {
	loginApp(): void {
		cy.visit(d.data.url.login);
		cy.get(e.loginUI.username).type(Cypress.env('USERNAME'));
		cy.get(e.loginUI.password).type(Cypress.env('PASSWORD'));
		cy.get(e.loginUI.btn_submit).click();

		cy.url().should('eq', d.data.url.dashboard);
		cy.get(e.dashboardUI.search).should('exist');
	},
	loginAppIncorrect(): void {
		cy.visit(d.data.url.login);
		cy.get(e.loginUI.username).type(Cypress.env('INCORRECT_USERNAME'));
		cy.get(e.loginUI.password).type(Cypress.env('INCORRECT_PASSWORD'));
		cy.get(e.loginUI.btn_submit).click();

		cy.get(e.loginUI.invalidCredentials).should('exist');
	},
};
