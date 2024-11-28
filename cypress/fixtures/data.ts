import { custom } from '../functions/custom';

export const data = {
	url: {
		login: `${Cypress.env('BASE')}/auth/login`,
		dashboard: `${Cypress.env('BASE')}/dashboard/index`,
		admin: `${Cypress.env('BASE')}/admin/viewSystemUsers`,
		leave: `${Cypress.env('BASE')}/leave/viewLeaveList`,
		pim: `${Cypress.env('BASE')}/pim/viewEmployeeList`,
		time: `${Cypress.env('BASE')}/time/viewEmployeeTimesheet`,

		//API TESTING
		listOfObjects: `${Cypress.env('BASE_API')}`,
	},
	users: {
		employeeNameESS: 'manda akhil use',
		usernameAdmin: 'Admin',
		usernameESS: 'FMLName',
		empName: 'Tom',
		empID: '36479',
	},
	userRole: {
		admin: 'Admin',
		ESS: 'ESS',
		empNameEss: 'Qwerty LName',
		empNameAdmin: 'omkar nagwe',
		statusEnabled: 'Enabled',
		statusDisabled: 'Disabled',
	},
	leaveType: {
		bereavementCAN: 'CAN - Bereavement',
		fmlaCAN: 'CAN - FMLA',
		matternityCAN: 'CAN - Matternity',
		personalCAN: 'CAN - Personal',
		vacationCAN: 'CAN - Vacation',
		bereavementUS: 'US - Bereavement',
		fmlaUS: 'US - FMLA',
		matternityUS: 'US - Matternity',
		personalUS: 'US - Personal',
		vacationUS: 'US - Vacation',
	},

	//API TESTING
	payloadAddRecord: {
		name: custom.generateRandomString(),
		data: {
			year: 2019,
			price: 1849.99,
			'CPU model': 'Intel Core i9',
			'Hard disk size': '1 TB',
		},
	},
};
