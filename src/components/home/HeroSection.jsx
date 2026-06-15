import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Package, Network } from "lucide-react";
import { company } from "../../data/company";
import { products, brands, categories } from "../../data/products";

// These lines rotate below the fixed company name - FASTER rotation (2.5s)
const rotatingTaglines = [
  "Helping FMCG Brands Expand Their Market Reach",
  "Connecting Brands, Retailers & Distribution Networks",
  "Trusted Superstockist & Distribution Partner",
  "Driving FMCG Growth Across Maharashtra",
];

const stats = [
  { value: `${brands.length}`,     label: "Brands", icon: Sparkles },
  { value: `${products.length}+`,  label: "Products", icon: Package },
  { value: `${categories.length}`, label: "Categories", icon: TrendingUp },
  { value: "6",                    label: "Cities Covered", icon: Network },
];

const WaPath = () => (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
);

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIdx((prev) => (prev + 1) % rotatingTaglines.length),
      2500  // Faster rotation
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100">

      {/* Animated gradient orbs - SKY BLUE THEME */}
      <motion.div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-400/40 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-400/40 blur-[100px]"
        />
      </motion.div>

      {/* Premium dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-5 py-10 sm:px-6 lg:min-h-[720px] lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">

          {/* ── LEFT: Content ───────────────────────────────────────── */}
          <motion.div className="max-w-2xl">

            {/* Premium badge + name + rotating taglines - SKY BLUE */}
            <div className="relative">
              <div className="relative p-5 sm:p-6 rounded-3xl border-2 border-sky-300 bg-white/90 shadow-lg overflow-hidden backdrop-blur-md mb-4">
                {/* Animated dot grid */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.4) 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Premium Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex h-2 w-2 rounded-full bg-sky-600"
                      />
                      FMCG Superstockist & Distributor · Maharashtra
                    </span>
                  </motion.div>

                 <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.1 }}
className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-none tracking-tight text-gray-900">
  Arpita Enterprises
</motion.h1>

                  {/* ── ROTATING taglines - SMALLER, SKY GRADIENT TEXT ── */}
                  <div className="mt-4 min-h-[4.5rem] sm:min-h-[3.5rem] relative z-10">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeIdx}
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent sm:text-xl lg:text-2xl tracking-tight leading-tight"
                      >
                        {rotatingTaglines[activeIdx]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Progress dots - SKY COLORS */}
                  <div className="mt-3 flex gap-2">
                    {rotatingTaglines.map((_, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Tagline ${i + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeIdx ? "w-8 bg-sky-600" : "w-2 bg-gray-300 hover:bg-sky-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 max-w-xl text-sm leading-7 text-gray-700 sm:text-base"
            >
              Authorised FMCG superstockist serving{" "}
              <strong className="font-bold text-gray-900">
                retailers, wholesalers, and distribution partners
              </strong>{" "}
              across Thane District.
            </motion.p>

            {/* CTAs - SKY BLUE BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-700 hover:shadow-lg"
                >
                  View Our Portfolio
                  <motion.svg 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400 bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-500 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><WaPath /></svg>
                  WhatsApp Us
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`tel:${company.phones[0]}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-sky-400 hover:text-sky-600"
                >
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </motion.div>
            </motion.div>


            {/* Stats bar - SMALLER */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="mt-6 grid grid-cols-4 divide-x divide-gray-200 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-md"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={stat.label} 
                    className="group flex flex-col items-center py-2.5 px-2 sm:px-3 cursor-default transition-all hover:bg-sky-50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="h-4 w-4 text-sky-600 mb-1 group-hover:text-sky-700 transition-colors" />
                    <p className="text-lg sm:text-xl font-black text-gray-900">{stat.value}</p>
                    <p className="mt-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 text-center">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual card with FLOATING PRODUCTS & 3D PARALLAX ───────────────────────────────────── */}
          <motion.div className="relative hidden lg:flex items-center justify-center">
            {/* Ambient glow - SKY BLUE */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute h-96 w-96 rounded-full bg-sky-300/50 blur-[100px]"
            />

            {/* Connecting Lines Network - SVG */}
            <svg className="hidden" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* Lines connecting products to center hub */}
              {[
                { x1: "20%", y1: "15%", x2: "50%", y2: "50%" },
                { x1: "80%", y1: "20%", x2: "50%", y2: "50%" },
                { x1: "75%", y1: "75%", x2: "50%", y2: "50%" },
                { x1: "25%", y1: "80%", x2: "50%", y2: "50%" },
                { x1: "15%", y1: "50%", x2: "50%", y2: "50%" },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.15 }}
                />
              ))}
            </svg>

            {/* Central Hub Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="hidden"
              style={{ zIndex: 20 }}
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400 w-20 h-20"
              />
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg">
                <Package className="h-7 w-7" />
              </div>
            </motion.div>

            {/* 5 Floating Product Images with 3D Parallax - SMALLER */}
            {[
              { src: "/products/eatbit/peanut-chikki.jpg", position: { left: "20%", top: "15%" }, delay: 0.7, rotate: -5 },
              { src: "/products/craveto/strawberry-wafer-rolls-200g.jpg", position: { left: "80%", top: "20%" }, delay: 0.85, rotate: 5 },
              { src: "/products/craveto/mango-juice-200ml.jpg", position: { left: "75%", top: "75%" }, delay: 1, rotate: -3 },
              { src: "/products/craveto/chocolate-wafer-biscuits-150g.jpg", position: { left: "25%", top: "80%" }, delay: 1.15, rotate: 4 },
              { src: "/products/eatbit/chocolate-chikki.jpg", position: { left: "15%", top: "50%" }, delay: 1.3, rotate: -4 },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: product.rotate }}
                transition={{ duration: 0.5, delay: product.delay, type: "spring", stiffness: 200 }}
                style={{
                  position: "absolute",
                  left: product.position.left,
                  top: product.position.top,
                  zIndex: 10 + i,
                }}
                className="hidden"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [product.rotate, product.rotate + 2, product.rotate]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-xl bg-white border-2 border-sky-300 p-2 shadow-md"
                >
                  <img src={product.src} alt="product" className="h-full w-full object-contain" />
                </motion.div>
              </motion.div>
            ))}

            {/* Main Card - SKY BLUE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[390px] rounded-3xl border-2 border-sky-300 bg-white/95 p-6 shadow-xl"
              style={{ zIndex: 10 }}
            >
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-sky-100 pb-4">
                <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-sm font-black text-white shadow-md">
                  AE
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Arpita Enterprises</p>
                    <p className="text-xs text-gray-600">Authorised FMCG portfolio</p>
                  </div>
                </div>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  36 Products
                </span>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Featured product range
              </p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  "/products/eatbit/peanut-chikki.jpg",
                  "/products/craveto/strawberry-wafer-rolls-200g.jpg",
                  "/products/craveto/mango-juice-200ml.jpg",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                    className="aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-white to-sky-50 border-2 border-sky-100 p-3 shadow-sm"
                  >
                    <img src={src} alt="product" className="h-full w-full object-contain" />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Superstockist",  color: "bg-sky-50 text-sky-700 border-2 border-sky-200" },
                  { label: "Distributor",    color: "bg-blue-50 text-blue-700 border-2 border-blue-200" },
                  { label: "Trade Partner",  color: "bg-cyan-50 text-cyan-700 border-2 border-cyan-200" },
                ].map((tag, i) => (
                  <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.55 + i * 0.1 }}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 ${tag.color} cursor-default`}
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 text-[9px] font-black text-white">✓</span>
                    <span className="text-[10px] font-bold">{tag.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating badges - SKY BLUE */}
            <motion.div
              initial={{ opacity: 0, y: -14, x: -14 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              style={{ animation: "float 5s ease-in-out infinite 1s", zIndex: 30 }}
              className="hidden"
            >
              <p className="text-xs font-bold text-sky-700">🗺️ 6 Cities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              style={{ animation: "float 6s ease-in-out infinite 0.5s", zIndex: 30 }}
              className="hidden"
            >
              <p className="text-xs font-bold text-blue-700">⭐ Authorised</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14, x: 14 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{ animation: "float 4s ease-in-out infinite", zIndex: 30 }}
              className="hidden"
            >
              <p className="text-xs font-bold text-cyan-700">📦 {products.length} Products</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
