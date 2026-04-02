import Image from "next/image";
import { landingContent } from "../../constants/content/landingPage";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { colors } from "../../constants/theme";
import { formatCurrency } from "../../utils/currency";

export function HeroSection({ onPrimaryCTA, heroImage = "/next.svg", product, overrideSubtitle }) {
	return (
		<section className="pt-6 sm:pt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="order-2 md:order-1">
					<div className="mb-4">
						{product ? (
							<div className="flex gap-2 flex-wrap">
								{product.discountPercentage > 0 ? (
									<Badge color="secondary">Diskon {product.discountPercentage}%</Badge>
								) : null}
								{Number.isFinite(product.stock) && product.stock <= 10 ? (
									<Badge color="warning">Stok menipis ({product.stock})</Badge>
								) : null}
								<Badge color="primary">{landingContent.hero.badge}</Badge>
							</div>
						) : (
							<Badge color="primary">{landingContent.hero.badge}</Badge>
						)}
					</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: colors.black }}>
						{product?.name || landingContent.hero.title}
					</h1>
					<p className="mt-3 text-base sm:text-lg" style={{ color: colors.gray500 }}>
						{overrideSubtitle || landingContent.hero.subtitle}
					</p>
					<p className="mt-2 text-sm" style={{ color: colors.secondary }}>
						{landingContent.hero.urgency}
					</p>
					<div className="mt-6 flex gap-3">
						<Button onClick={onPrimaryCTA}>
							{product ? `Beli • ${formatCurrency(product.finalPrice)}` : landingContent.hero.cta}
						</Button>
						<Button variant="ghost">Pelajari Lebih Lanjut</Button>
					</div>
				</div>
				<div className="relative order-1 md:order-2 w-full aspect-square">
					<Image src={heroImage} alt="Hero Product" fill className="object-contain" priority />
				</div>
			</div>
		</section>
	);
}

