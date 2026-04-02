import axios from "axios";
import { storage } from "../utils/storage";

const baseURL = "https://api-dev.ziyadbooks.com/api/v1"

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
		const tokenFromEnv = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNiIsImVtYWlsIjoiZXNwbG9yYW1lZGlhQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAwMzYwMCwiZXhwIjoxNzc1MTMzMjAwfQ.QUJXtxQMd8FSQ38B1LTncQ2dgNQd_8Tv1YPB121u7W4";
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

