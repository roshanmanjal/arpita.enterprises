/**
 * ProductCard — Standardized uniform product card
 * All cards: same height, image size, typography, button placement
 */
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import LazyImage from "./LazyImage";
import { categoryMeta } from "../../data/products";

export default function ProductCard({ product }) {
  const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hi, I am interested in stocking ${product.name} (${product.brand}, ${product.weight}). Please share availability and trade pricing.`
  )}`;

  const badge = product.tags?.includes("bestseller")
    ? { text: "Best Seller", cls: "bg-sky-600 text-white" }
    : product.tags?.includes("premium")
    ? { text: "Premium",     cls: "bg-blue-700 text-white" }
    : product.tags?.includes("new")
    ? { text: "New",         cls: "bg-emerald-500 text-white" }
    : null;

  const catSlug = categoryMeta[product.category]?.slug
    || product.category.toLowerCase().replace(/\s+/g, "-");

  return (
    <article
      className="animated-card group relative flex flex-col overflow-hidden rounded-2xl border-2 border-sky-100 bg-white shadow-card-md hover:border-sky-300 transition-all duration-300"
      aria-label={`${product.name} by ${product.brand}`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-sky-400 to-blue-600 transition-transform duration-200 ease-out group-hover:scale-x-100" />

      {/* ── Product Image — fixed 1:1 aspect ratio ─────────────── */}
      <Link
        to={`/products/${product.id}`}
        className="relative block overflow-hidden border-b-2 border-sky-50 bg-sky-50"
        style={{ paddingBottom: "70%" }}
        tabIndex={0}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {badge && (
            <span className={`absolute left-3 top-3 z-10 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm ${badge.cls}`}>
              {badge.text}
            </span>
          )}
          <LazyImage
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-400 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x400/e0f2fe/0369a1?text=${encodeURIComponent(product.name)}`;
            }}
          />
        </div>
      </Link>

      {/* ── Product Info ─────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-4 gap-3">
        {/* Brand + Weight badges */}
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/products?brand=${product.brand}`}
            className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-sky-700 hover:bg-sky-100 transition-colors"
          >
            {product.brand}
          </Link>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
            {product.weight}
          </span>
        </div>

        {/* Product Name — always 2 lines reserved */}
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Category */}
        <Link
          to={`/category/${catSlug}`}
          className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 hover:text-sky-600 transition-colors"
        >
          {product.category}
        </Link>

        {/* Pack info */}
        {product.packInfo && (
          <p className="text-[11px] text-slate-500 leading-snug">{product.packInfo}</p>
        )}

        {/* ── Action Buttons — always at bottom ─────────────────── */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex h-9 items-center justify-center rounded-lg border-2 border-sky-200 bg-sky-50 px-3 text-[11px] font-semibold uppercase tracking-wide text-sky-700 transition-all hover:border-sky-400 hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            View Details
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-sky-600 px-3 text-[11px] font-bold uppercase tracking-wide text-white transition-all hover:bg-sky-700 hover:shadow-sky-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
