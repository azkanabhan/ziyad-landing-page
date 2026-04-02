import { SectionTitle } from "../common/SectionTitle";
import { ProductCard } from "./ProductCard";
import { landingContent } from "../../constants/content/landingPage";

export function ProductGrid({ products, onProductClick }) {
	return (
		<section>
			<SectionTitle title={landingContent.featured.title} subtitle={landingContent.featured.subtitle} />
			{products.length === 0 ? (
				<p className="text-center text-gray-500">{landingContent.featured.empty}</p>
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
					{products.map((p) => (
						<ProductCard key={p.id || p.slug} product={p} onClick={onProductClick} />
					))}
				</div>
			)}
		</section>
	);
}

