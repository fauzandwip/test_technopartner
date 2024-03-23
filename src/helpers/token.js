export const getToken = () => {
	const token = localStorage.getItem('access_token');
	const expired_token = localStorage.getItem('expired_token');

	if (!token || !expired_token) {
		return null;
	}

	const currentTime = new Date().getTime();

	if (currentTime > +expired_token) {
		return null;
	}

	return token;
};
