import { useEffect, useState } from "react";
import { productService } from "../services/product.service";

export function useProducts({ page = 1, limit = 12, category } = {}) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;
		setLoading(true);
		setError(null);

		console.info("[useProducts] fetching...", { page, limit, category });

		productService
			.getProducts({ page, limit, category })
			.then((data) => {
				if (!isMounted) return;
				// Normalize response shape strictly to an array
				let items = [];
				if (Array.isArray(data)) {
					items = data;
				} else if (Array.isArray(data?.items)) {
					items = data.items;
				} else if (Array.isArray(data?.data)) {
					items = data.data;
				} else if (Array.isArray(data?.results)) {
					items = data.results;
				} else {
					items = [];
				}
				if (items.length > 0) {
					console.info("[useProducts] success", { count: items.length });
				} else {
					console.warn("[useProducts] success but empty");
				}
				setProducts(items);
			})
			.catch((err) => {
				if (!isMounted) return;
				console.error("[useProducts] error", { status: err?.status, message: err?.message });
				setError(err?.message || "Failed to fetch products");
			})
			.finally(() => {
				if (!isMounted) return;
				setLoading(false);
			});

		return () => {
			isMounted = false;
		};
	}, [page, limit, category]);
	console.debug("[useProducts] state", { loading, error, productsCount: products.length });

	return { products, loading, error };
}

