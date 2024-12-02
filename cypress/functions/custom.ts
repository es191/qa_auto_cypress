export const custom = {
	generateRandomNumber(): number {
		return Math.floor(Math.random() * 10) + 1;
	},

	/*generateRandomString(length: number = 12): string {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		const randomArray = new Uint8Array(length);
		crypto.getRandomValues(randomArray);
		randomArray.forEach((number) => {
			result += chars[number % chars.length];
		});
		return result;
	},*/

	generateRandomString(length: number = 12): string {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return result;
	},
};
