import { e } from '../elements';
import { d } from '../../fixtures';

export const pim = {
	searchEmp(empName: string, id: string): void {
		cy.get(e.sharedUI.empName).eq(0).type(empName);
		cy.get(e.sharedUI.empID).eq(1).type(id);
		cy.get(e.sharedUI.btnSearch).click();

		cy.get(e.sharedUI.tableCells).should('contain', empName);
		cy.get(e.sharedUI.tableCells).should('contain', id);
	},
};
