/**
 * ServiceAreasSection — All cities clearly visible, professional layout
 */
import { motion } from "framer-motion";
import { MapPin, Package, Network, CheckCircle2 } from "lucide-react";
import { company } from "../../data/company";

const areas = [
  { name: "Ulhasnagar", isHub: true,  desc: "Distribution Hub" },
  { name: "Kalyan",     isHub: false, desc: "Major Trade Centre" },
  { name: "Dombivli",   isHub: false, desc: "Residential Market" },
  { name: "Ambernath",  isHub: false, desc: "Industrial Belt" },
  { name: "Badlapur",   isHub: false, desc: "Growing Retail Zone" },
  { name: "Thane",      isHub: false, desc: "Metro Business Hub" },
];

const mapPositions = [
  { name: "Ulhasnagar", position: { left: "50%", top: "52%" }, isHub: true },
  { name: "Kalyan",     position: { left: "50%", top: "16%" } },
  { name: "Dombivli",   position: { left: "77%", top: "37%" } },
  { name: "Ambernath",  position: { left: "70%", top: "76%" } },
  { name: "Badlapur",   position: { left: "30%", top: "76%" } },
  { name: "Thane",      position: { left: "23%", top: "37%" } },
];

const connections = [
  { x1: "50%", y1: "52%", x2: "50%", y2: "16%" },
  { x1: "50%", y1: "52%", x2: "77%", y2: "37%" },
  { x1: "50%", y1: "52%", x2: "70%", y2: "76%" },
  { x1: "50%", y1: "52%", x2: "30%", y2: "76%" },
  { x1: "50%", y1: "52%", x2: "23%", y2: "37%" },
];

export default function ServiceAreasSection() {
  return (
    <section id="coverage" className="section-padding bg-section-light border-t border-sky-100">
      <div className="container-xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-label mb-3 block">Coverage Area</span>
          <h2 className="heading-lg text-slate-900">
            Serving{" "}
            <span className="text-gradient">6 Cities</span>{" "}
            Across Thane District
          </h2>
          <p className="mt-3 text-body max-w-2xl mx-auto">
            Our FMCG distribution network covers high-demand trade corridors in Thane District, Maharashtra — ensuring reliable product availability for all our retail partners.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">

          {/* ─── LEFT: City Cards ─────────────────────────────────── */}
          <div>
            {/* All 6 city cards — always fully visible */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            >
              {areas.map((area, i) => (
                <motion.div
                  key={area.name}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 cursor-default transition-all ${
                    area.isHub
                      ? "border-sky-400 bg-sky-50 shadow-md"
                      : "border-sky-200 bg-white shadow-sm hover:border-sky-400 hover:bg-sky-50"
                  }`}
                >
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border-2 ${
                    area.isHub
                      ? "bg-sky-600 border-sky-600 text-white"
                      : "bg-white border-sky-200 text-sky-600"
                  }`}>
                    {area.isHub ? <Package className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">{area.name}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{area.desc}</p>
                  </div>
                  {area.isHub && (
                    <span className="flex-shrink-0 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                      Hub
                    </span>
                  )}
                  {!area.isHub && (
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-sky-400" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 divide-x divide-sky-100 overflow-hidden rounded-2xl border-2 border-sky-200 bg-white shadow-card-md"
            >
              {[
                { value: "6",    label: "Cities",        icon: <MapPin className="h-4 w-4 text-sky-600" /> },
                { value: "30+",  label: "km Radius",     icon: <Network className="h-4 w-4 text-blue-600" /> },
                { value: "500+", label: "Trade Partners", icon: <Package className="h-4 w-4 text-sky-700" /> },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center py-5 px-3">
                  <div className="mb-2">{s.icon}</div>
                  <p className="text-2xl font-black text-slate-900">{s.value}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500 text-center">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 p-5 rounded-2xl border-2 border-sky-200 bg-sky-50"
            >
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Are you a retailer in our coverage area?
              </p>
              <p className="text-xs text-slate-600 mb-4">
                Contact us for trade pricing, product availability, and same-region delivery.
              </p>
              <a
                href={`https://wa.me/${company?.whatsapp || "919892084321"}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Enquire via WhatsApp
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT: Interactive Map ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border-2 border-sky-200 bg-white p-6 shadow-card-xl lg:sticky lg:top-28 lg:self-start"
          >
            {/* Map header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-700">Thane District</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">Distribution Coverage</p>
              </div>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1.5 rounded-full border-2 border-sky-300 bg-sky-50 px-3 py-1 text-[11px] font-bold text-sky-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Active
              </motion.span>
            </div>

            {/* Map canvas */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border-2 border-sky-100">
              {/* Dot grid */}
              <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

              {/* Concentric rings */}
              <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[280, 200, 110].map((size, ri) => (
                  <motion.div
                    key={size}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: ri * 0.12 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: size, height: size, left: "50%", top: "50%",
                      border: `1.5px solid rgba(14,165,233,${0.15 + ri * 0.1})`,
                      background: ri === 2 ? "rgba(14,165,233,0.06)" : "transparent",
                    }}
                  />
                ))}
              </div>

              {/* Connection lines */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {connections.map((c, i) => (
                  <motion.line
                    key={i}
                    x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                    stroke="url(#connGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.12 }}
                  />
                ))}
              </svg>

              {/* City markers — all fully visible */}
              {mapPositions.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4, delay: 0.5 + i * 0.1,
                    type: "spring", stiffness: 260, damping: 18,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: area.position.left, top: area.position.top }}
                >
                  {area.isHub ? (
                    <div className="relative flex flex-col items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="absolute inset-0 -m-2 rounded-2xl bg-sky-400/20 blur-md"
                      />
                      <div className="relative rounded-2xl border-2 border-sky-500 bg-white px-4 py-2.5 shadow-card-lg">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600 text-white shadow-sm">
                            <Package className="h-4 w-4" />
                          </div>
                          <p className="text-sm font-black text-slate-900 whitespace-nowrap">{area.name}</p>
                          <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-700">Hub</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center gap-1">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-sky-400 bg-white shadow-md">
                        <motion.div
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                          className="h-2.5 w-2.5 rounded-full bg-sky-500"
                        />
                      </div>
                      <div className="rounded-lg border-2 border-sky-200 bg-white px-3 py-1.5 shadow-card-md text-center whitespace-nowrap">
                        <p className="text-xs font-bold text-slate-900">{area.name}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-sky-600 shadow-sm" />
                <span className="font-semibold text-slate-700">Distribution Hub</span>
              </div>
              <div className="w-px h-4 bg-sky-200" />
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                <span className="font-semibold text-slate-700">Service City</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


