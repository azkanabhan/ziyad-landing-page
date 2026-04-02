import { landingContent } from "../../constants/content/landingPage";
import { Button } from "../common/Button";
import { colors, radii } from "../../constants/theme";

export function CTASection({ onCTA }) {
	return (
		<section className="my-10">
			<div
				className="p-8 text-center"
				style={{ backgroundColor: colors.gray50, borderRadius: radii.lg, border: `1px solid ${colors.gray200}` }}
			>
				<h3 className="text-2xl font-bold">{landingContent.cta.title}</h3>
				<p className="mt-2 text-gray-600">{landingContent.cta.subtitle}</p>
				<div className="mt-4">
					<Button onClick={onCTA}>{landingContent.cta.cta}</Button>
				</div>
			</div>
		</section>
	);
}

