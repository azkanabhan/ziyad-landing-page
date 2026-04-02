import { colors, radii } from "../../constants/theme";

export function Button({ variant = "primary", fullWidth = false, className = "", children, ...rest }) {
	const base = "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
	const width = fullWidth ? "w-full" : "";
	const padding = "px-4 py-2";
	const rounded = "rounded-md";

	let variantClass = "text-white";
	let style = {};

	if (variant === "primary") {
		style = { backgroundColor: colors.primary, borderRadius: radii.md };
	} else if (variant === "secondary") {
		style = { backgroundColor: colors.secondary, borderRadius: radii.md };
	} else {
		variantClass = "text-gray-700 border";
		style = { backgroundColor: "transparent", borderColor: colors.gray200, borderRadius: radii.md };
	}

	return (
		<button className={`${base} ${padding} ${rounded} ${variantClass} ${width} ${className}`} style={style} {...rest}>
			{children}
		</button>
	);
}

