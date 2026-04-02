import { colors, spacing } from "../../constants/theme";

export function Container({ children, className = "" }) {
	return (
		<div
			className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
			style={{ backgroundColor: "transparent", color: colors.black, paddingTop: spacing.lg, paddingBottom: spacing.lg }}
		>
			{children}
		</div>
	);
}

