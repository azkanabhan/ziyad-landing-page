import { landingContent } from "../../constants/content/landingPage";
import { Button } from "../common/Button";
import { colors, radii } from "../../constants/theme";

export function PromoSection({ onCTA }) {
	return (
		<section className="my-8">
			<div
				className="p-6 sm:p-8 text-center"
				style={{ backgroundColor: colors.gray50, borderRadius: radii.lg, border: `1px solid ${colors.gray200}` }}
			>
				<h3 className="text-xl sm:text-2xl font-bold">{landingContent.preorder.title}</h3>
				<p className="mt-2 text-gray-600">{landingContent.preorder.desc}</p>
				<div className="mt-4">
					<Button variant="secondary" onClick={onCTA}>
						{landingContent.preorder.cta}
					</Button>
				</div>
			</div>
		</section>
	);
}

