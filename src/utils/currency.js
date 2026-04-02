export function formatCurrency(value, locale = "id-ID", currency = "IDR") {
	try {
		return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
	} catch {
		return `Rp ${Number(value || 0).toLocaleString("id-ID")}`;
	}
}

