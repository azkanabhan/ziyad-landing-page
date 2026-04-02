import { colors } from "../../constants/theme";

export function SectionTitle({ title, subtitle, className = "", align = "center" }) {
	return (
		<div className={`mb-8 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
			<h2 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.black }}>
				{title}
			</h2>
			{subtitle ? (
				<p className="mt-2 text-sm sm:text-base" style={{ color: colors.gray500 }}>
					{subtitle}
				</p>
			) : null}
		</div>
	);
}

