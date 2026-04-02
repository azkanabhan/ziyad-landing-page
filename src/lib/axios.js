import axios from "axios";
import { storage } from "../utils/storage";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
	baseURL,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
});

api.interceptors.request.use(
	(config) => {
		const tokenFromStorage = storage.getToken();
		const tokenFromEnv = process.env.NEXT_PUBLIC_BEARER_TOKEN;
		const bearerToken = tokenFromStorage || tokenFromEnv;

		if (bearerToken) {
			config.headers.Authorization = `Bearer ${bearerToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const normalizedError = {
			status: error?.response?.status || null,
			message:
				error?.response?.data?.message ||
				error?.message ||
				"Unexpected error occurred",
			data: error?.response?.data || null
		};
		return Promise.reject(normalizedError);
	}
);

export default api;

