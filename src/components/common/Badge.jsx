import { colors, radii } from "../../constants/theme";

export function Badge({ children, color = "neutral", className = "" }) {
	const colorMap = {
		primary: { bg: colors.gray100, fg: colors.primary },
		secondary: { bg: colors.gray100, fg: colors.secondary },
		success: { bg: "#ecfdf5", fg: colors.success },
		error: { bg: "#fef2f2", fg: colors.error },
		warning: { bg: "#fffbeb", fg: colors.warning },
		info: { bg: "#eff6ff", fg: colors.info },
		neutral: { bg: colors.gray100, fg: colors.gray700 }
	};
	const palette = colorMap[color] || colorMap.neutral;
	return (
		<span
			className={`inline-flex items-center px-2 py-1 text-xs font-medium ${className}`}
			style={{ backgroundColor: palette.bg, color: palette.fg, borderRadius: radii.full }}
		>
			{children}
		</span>
	);
}

