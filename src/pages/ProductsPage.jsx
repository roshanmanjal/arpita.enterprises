/**
 * ProductsPage â€” Full product catalogue with search, filters, sort
 */
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, brands, categories, categoryMeta } from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import RetailerCTA from "../components/ui/RetailerCTA";
import ScrollAnimatedSection from "../components/ui/ScrollAnimatedSection";
import VirtualProductList from "../components/products/VirtualProductList";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "name-asc", label: "Name Aâ€“Z" },
  { value: "name-desc", label: "Name Zâ€“A" },
  { value: "brand", label: "By Brand" },
  { value: "category", label: "By Category" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeBrand, setActiveBrand] = useState(searchParams.get("brand") || "All");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const brand = searchParams.get("brand");
    const cat = searchParams.get("category");
    if (brand) setActiveBrand(brand);
    if (cat) setActiveCategory(cat);
  }, []);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.includes(q));
      const matchBrand = activeBrand === "All" || p.brand === activeBrand;
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchBrand && matchCat;
    });

    switch (sort) {
      case "name-asc":  return [...result].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc": return [...result].sort((a, b) => b.name.localeCompare(a.name));
      case "brand":     return [...result].sort((a, b) => a.brand.localeCompare(b.brand));
      case "category":  return [...result].sort((a, b) => a.category.localeCompare(b.category));
      default:          return result;
    }
  }, [search, activeBrand, activeCategory, sort]);

  const clearFilters = () => {
    setSearch("");
    setActiveBrand("All");
    setActiveCategory("All");
    setSort("default");
    setSearchParams({});
  };

  const hasFilters = search || activeBrand !== "All" || activeCategory !== "All";

  const handleBrand = (b) => {
    setActiveBrand(b);
    const params = {};
    if (b !== "All") params.brand = b;
    if (activeCategory !== "All") params.category = activeCategory;
    setSearchParams(params);
  };

  const handleCategory = (c) => {
    setActiveCategory(c);
    const params = {};
    if (activeBrand !== "All") params.brand = activeBrand;
    if (c !== "All") params.category = c;
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white border-b border-sky-200 pt-28 pb-10">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-sky-700 text-xs font-bold uppercase tracking-[0.28em] mb-3 block">
              Product Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
  Our Distribution Portfolio
</h1>
            <p className="text-slate-600 mt-2.5 text-sm leading-relaxed max-w-xl">
              {products.length} products across {brands.length} brands and {categories.length} categories
              available for retailers, wholesalers and distribution partners.
            </p>
          </motion.div>

          {/* Brand quick links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {["All", ...brands].map((b) => (
              <button
                key={b}
                onClick={() => handleBrand(b === activeBrand ? "All" : b)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  activeBrand === b || (b === "All" && activeBrand === "All")
                    ? "bg-sky-600 text-white border-sky-600 shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                    : "bg-white text-slate-700 border-sky-200 hover:border-sky-500/50 hover:text-sky-700 hover:bg-sky-50"
                }`}
              >
                {b}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-slate-800 placeholder:text-slate-500 bg-white backdrop-blur-md transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-800"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-slate-700 bg-white backdrop-blur-md transition-all"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-white text-slate-700">{o.label}</option>
            ))}
          </select>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-xs font-bold text-slate-500 self-center mr-1 uppercase tracking-wider">Category:</span>
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => handleCategory(c)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === c
                  ? "bg-sky-600 border-sky-600 text-white shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                  : "bg-white border border-sky-200 text-slate-700 hover:bg-sky-50"
              }`}
            >
              {c !== "All" && categoryMeta[c]?.icon && (
                <span>{categoryMeta[c].icon}</span>
              )}
              {c}
            </button>
          ))}
        </div>

        {/* Results count + clear */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
            of {products.length} products
            {hasFilters && <span className="text-sky-700 font-semibold"> (filtered)</span>}
          </p>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-sky-700 hover:underline font-semibold"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          filtered.length > 50 ? (
            <VirtualProductList products={filtered} />
          ) : (
            <motion.div
              key={`${activeBrand}-${activeCategory}-${search}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {filtered.map((p, index) => (
                <ScrollAnimatedSection key={p.id} animation="fade-up" delay={Math.min(index, 8) * 0.035}>
                  <motion.div variants={cardVariants}>
                    <ProductCard product={p} />
                  </motion.div>
                </ScrollAnimatedSection>
              ))}
            </motion.div>
          )
        ) : (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">ðŸ”</p>
            <h3 className="text-slate-800 font-bold text-lg">No products found</h3>
            <p className="text-slate-500 text-sm mt-2">Try a different search term or clear your filters.</p>
            <button
              onClick={clearFilters}
              className="mt-5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      {/* Retailer CTA */}
      <RetailerCTA />
    </div>
  );
}

