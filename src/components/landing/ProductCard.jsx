import Image from "next/image";
import { formatCurrency } from "../../utils/currency";
import { getDiscountPercentage, getStockLabel } from "../../utils/formatter";
import { Badge } from "../common/Badge";
import { colors, radii, shadows } from "../../constants/theme";

export function ProductCard({ product, onClick }) {
	const { name, image, thumbnail, price, finalPrice, stock, isPreorder } = product;
	const discount = getDiscountPercentage(price, finalPrice);
	const stockLabel = getStockLabel(stock, isPreorder);

	return (
		<div
			className="group cursor-pointer overflow-hidden transition-shadow"
			style={{ backgroundColor: colors.white, borderRadius: radii.md, boxShadow: shadows.card, border: `1px solid ${colors.gray200}` }}
			onClick={() => onClick?.(product)}
		>
			<div className="relative w-full aspect-[4/5]">
				<Image
					src={thumbnail || image || "/next.svg"}
					alt={name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
					priority={false}
				/>
				<div className="absolute top-2 left-2 flex gap-2">
					{discount > 0 ? <Badge color="secondary">-{discount}%</Badge> : null}
				</div>
				<div className="absolute top-2 right-2">
					<Badge color={stock > 0 || isPreorder ? "success" : "error"}>{stockLabel}</Badge>
				</div>
			</div>
			<div className="p-4">
				<p className="text-sm text-gray-500 line-clamp-2">{name}</p>
				<div className="mt-2 flex items-center gap-2">
					<span className="text-base font-bold" style={{ color: colors.black }}>
						{formatCurrency(finalPrice)}
					</span>
					{discount > 0 ? (
						<span className="text-sm line-through text-gray-400">{formatCurrency(price)}</span>
					) : null}
				</div>
			</div>
		</div>
	);
}

