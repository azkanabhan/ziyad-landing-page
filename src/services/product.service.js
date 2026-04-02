import api from "../lib/axios";
import { API_ENDPOINTS } from "./api-endpoints";

export const productService = {
	async getProducts({ page = 1, limit = 10, category } = {}) {
		const params = {
			page,
			limit
		};
		if (category) params.category = category;

		const response = await api.get(API_ENDPOINTS.PRODUCTS, { params });
		const raw = response.data;
		// API shape example:
		// { status, message, code, data: { current_page, data: [ ... ] } }
		const list =
			Array.isArray(raw)
				? raw
				: Array.isArray(raw?.data?.data)
					? raw.data.data
					: Array.isArray(raw?.data)
						? raw.data
						: Array.isArray(raw?.items)
							? raw.items
							: [];

		const mapped = list.map((item) => ({
			id: item.id,
			slug: item.slug,
			name: item.name,
			image: item.image_url || item.image || null,
			thumbnail: item.image_url || item.image || null,
			price: item.price,
			finalPrice: item.final_price ?? item.price,
			stock: typeof item.sisastok === "number" ? item.sisastok : 0,
			isPreorder: Boolean(item.preorder),
			discountPercentage:
				typeof item.potongan === "number" && item.jenispotongan === "persen"
					? item.potongan
					: Number(item.diskon) || 0
		}));

		return mapped;
	},

	async getProductBySlug(slug) {
		if (!slug) {
			throw new Error("Slug is required");
		}
		const response = await api.get(`${API_ENDPOINTS.PRODUCT_DETAIL}/${encodeURIComponent(slug)}`);
		const item = response.data?.data || response.data;
		if (!item) return null;
		return {
			id: item.id,
			slug: item.slug,
			name: item.name,
			image: item.image_url || item.image || null,
			thumbnail: item.image_url || item.image || null,
			price: item.price,
			finalPrice: item.final_price ?? item.price,
			stock: typeof item.sisastok === "number" ? item.sisastok : 0,
			isPreorder: Boolean(item.preorder),
			discountPercentage:
				typeof item.potongan === "number" && item.jenispotongan === "persen"
					? item.potongan
					: Number(item.diskon) || 0
		};
	}
};

