"use client";
import Link from "next/link";
import { useState } from "react";
import { colors, radii } from "../../constants/theme";
import { routes } from "../../constants/routes";
import { Button } from "./Button";

export function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3">
					<Link href={routes.landing} className="flex items-center gap-2">
						<div
							className="h-8 w-8 grid place-items-center text-white text-sm font-bold"
							style={{ backgroundColor: colors.primary, borderRadius: radii.md }}
							aria-label="ZiyadBooks"
						>
							ZB
						</div>
						<span className="text-base font-semibold" style={{ color: colors.black }}>
							ZiyadBooks
						</span>
					</Link>
				</div>

				<div className="hidden md:flex items-center gap-6">
					<Link href={routes.landing} className="text-sm hover:underline" style={{ color: colors.gray700 }}>
						Beranda
					</Link>
					<Link href={routes.shop} className="text-sm hover:underline" style={{ color: colors.gray700 }}>
						Katalog
					</Link>
					<Link href="/categories" className="text-sm hover:underline" style={{ color: colors.gray700 }}>
						Kategori
					</Link>
					<Link href={routes.cart} className="relative text-sm hover:underline" style={{ color: colors.gray700 }}>
						Keranjang
						<span
							className="absolute -right-3 -top-2 text-[10px] px-1.5 py-0.5 font-bold"
							style={{ backgroundColor: colors.secondary, color: colors.white, borderRadius: radii.full }}
						>
							0
						</span>
					</Link>
					<Link href={routes.shop}>
						<Button variant="primary">Belanja Sekarang</Button>
					</Link>
				</div>

				<button
					type="button"
					className="md:hidden inline-flex h-9 w-9 items-center justify-center border"
					style={{ borderColor: colors.gray200, borderRadius: radii.md, color: colors.black }}
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle menu"
					aria-expanded={open}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
						{open ? (
							<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
						) : (
							<path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15z" clipRule="evenodd" />
						)}
					</svg>
				</button>
			</nav>

			{open ? (
				<div className="md:hidden border-t">
					<div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
						<Link href={routes.landing} className="block text-sm" style={{ color: colors.gray700 }}>
							Beranda
						</Link>
						<Link href={routes.shop} className="block text-sm" style={{ color: colors.gray700 }}>
							Katalog
						</Link>
						<Link href="/categories" className="block text-sm" style={{ color: colors.gray700 }}>
							Kategori
						</Link>
						<Link href={routes.cart} className="block text-sm" style={{ color: colors.gray700 }}>
							Keranjang
						</Link>
						<div className="pt-2">
							<Link href={routes.shop} className="block">
								<Button variant="primary" fullWidth>
									Belanja Sekarang
								</Button>
							</Link>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
}

