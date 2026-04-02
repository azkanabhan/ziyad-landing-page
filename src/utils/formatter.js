import { labels } from "../constants/content/labels";

export function getDiscountPercentage(original, final) {
	if (!original || !final || final >= original) return 0;
	const pct = Math.round(((original - final) / original) * 100);
	return pct > 0 ? pct : 0;
}

export function getStockLabel(stock, isPreorder) {
	if (isPreorder) return labels.preorder;
	return stock > 0 ? labels.inStock : labels.outOfStock;
}

