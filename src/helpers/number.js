export const toLocaleID = (num) => num.toLocaleString('id-ID');
export const toLocaleIDCurrency = (num) =>
	num.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	});
