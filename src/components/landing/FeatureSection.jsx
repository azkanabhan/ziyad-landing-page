import { landingContent } from "../../constants/content/landingPage";
import { SectionTitle } from "../common/SectionTitle";
import { colors, radii } from "../../constants/theme";

export function FeatureSection() {
	return (
		<section className="my-8">
			<SectionTitle title={landingContent.why.title} align="center" />
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
				{landingContent.why.items.map((item, idx) => (
					<div
						key={idx}
						className="p-4 text-center"
						style={{ backgroundColor: colors.white, border: `1px solid ${colors.gray200}`, borderRadius: radii.md }}
					>
						<div className="text-2xl">{item.icon}</div>
						<div className="mt-2 font-semibold">{item.title}</div>
						<div className="mt-1 text-sm text-gray-600">{item.desc}</div>
					</div>
				))}
			</div>
		</section>
	);
}

