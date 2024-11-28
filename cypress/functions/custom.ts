export const custom = {
	generateRandomNumber(): number {
		return Math.floor(Math.random() * 10) + 1;
	},

	generateRandomString(): string {
		const length = Math.floor(Math.random() * 11) + 5;
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			result += characters[randomIndex];
		}
		return result;
	},
};
