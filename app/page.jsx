"use client";

import Link from "next/link";
import { useProducts } from "../src/hooks/useProducts";
import { Container } from "../src/components/common/Container";
import { HeroSection } from "../src/components/landing/HeroSection";
import { ProductGrid } from "../src/components/landing/ProductGrid";
import { PromoSection } from "../src/components/landing/PromoSection";
import { FeatureSection } from "../src/components/landing/FeatureSection";
import { CTASection } from "../src/components/landing/CTASection";
import { landingContent } from "../src/constants/content/landingPage";
import { colors } from "../src/constants/theme";
import { formatCurrency } from "../src/utils/currency";

export default function LandingPage() {
	const { products, loading, error } = useProducts({ page: 1, limit: 12 });

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-gray-500">Loading products...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-red-600">Error: {error}</p>
			</div>
		);
	}

	// Pick featured product: highest discount first, then lowest stock
	const featured = [...products].sort((a, b) => {
		const dA = Number(a?.discountPercentage || 0);
		const dB = Number(b?.discountPercentage || 0);
		if (dB !== dA) return dB - dA;
		const sA = Number.isFinite(a?.stock) ? a.stock : Number.MAX_SAFE_INTEGER;
		const sB = Number.isFinite(b?.stock) ? b.stock : Number.MAX_SAFE_INTEGER;
		return sA - sB;
	})[0];

	const heroSubtitle =
		featured
			? `Diskon hingga ${featured.discountPercentage || 0}% • ${formatCurrency(featured.finalPrice)}`
			: landingContent.hero.subtitle;

	return (
		<div className="min-h-screen" style={{ backgroundColor: colors.white }}>
			<Container>
				<HeroSection
					onPrimaryCTA={() => {}}
					heroImage={featured?.thumbnail || featured?.image || "/next.svg"}
					product={featured}
					overrideSubtitle={heroSubtitle}
				/>
				<ProductGrid products={products} />
				<PromoSection />
				<FeatureSection />
				<CTASection onCTA={() => {}} />
				<footer className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
					<p>{landingContent.footer.rights}</p>
					<p className="mt-1">
						<Link href="/" className="underline">Kebijakan Privasi</Link> · <Link href="/" className="underline">Syarat & Ketentuan</Link>
					</p>
				</footer>
			</Container>

			<div className="fixed bottom-0 left-0 right-0 md:hidden border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
				<div className="mx-auto max-w-7xl px-4 py-3">
					<Link href="/shop" className="block w-full text-center font-semibold py-3 rounded-md" style={{ backgroundColor: colors.primary, color: colors.white }}>
						{landingContent.hero.cta}
					</Link>
				</div>
			</div>
		</div>
	);
}

