const base = 'https://opensource-demo.orangehrmlive.com/web/index.php';

export const data = {
	url: {
		login: `${base}/auth/login`,
		dashboard: `${base}/dashboard/index`,
		admin: `${base}/admin/viewSystemUsers`,
		leave: `${base}/leave/viewLeaveList`,
	},
	users: {
		employeeNameESS: 'manda akhil use',
		usernameAdmin: 'Admin',
		usernameESS: 'FMLName',
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
};
