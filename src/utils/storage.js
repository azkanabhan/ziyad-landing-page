const TOKEN_KEY = "app_bearer_token";

export const storage = {
	getToken() {
		if (typeof window === "undefined") return null;
		try {
			return window.localStorage.getItem(TOKEN_KEY);
		} catch {
			return null;
		}
	},
	setToken(token) {
		if (typeof window === "undefined") return;
		try {
			if (token) {
				window.localStorage.setItem(TOKEN_KEY, token);
			} else {
				window.localStorage.removeItem(TOKEN_KEY);
			}
		} catch {
			// ignore storage write errors
		}
	},
	clear() {
		if (typeof window === "undefined") return;
		try {
			window.localStorage.removeItem(TOKEN_KEY);
		} catch {
			// ignore
		}
	}
};

