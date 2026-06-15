/**
 * Navbar — Fixed header, 64px desktop / 56px mobile, professional FMCG branding
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../../data/company";

const navLinks = [
  { to: "/",        label: "Home" },
  { to: "/products",label: "Products" },
  { to: "/contact", label: "Contact" },
];

const WaIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-sky-200 shadow-card-md"
            : "bg-white/90 backdrop-blur-lg border-b border-sky-100"
        }`}
      >
        {/* Desktop: h-16 (64px) */}
        <div className="container-xl">
          <div className="flex h-16 items-center justify-between lg:h-16">

            {/* ── Logo ──────────────────────────────────────────── */}
            <Link
              to="/"
              aria-label="Arpita Enterprises — Home"
              className="flex items-center gap-2.5 group shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white text-sm font-black shadow-md"
              >
                AE
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-lexend text-base font-extrabold tracking-tight text-black">   
                  ARPITA ENTERPRISES
                </span>
                <p className="text-[12.5px] font-medium text-slate-650 -mt-0.5 tracking-wide">
                  FMCG Superstockist
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav Links ──────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative h-9 rounded-lg px-5 text-sm font-semibold flex items-center transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-sky-700 bg-sky-50 border-2 border-sky-200"
                      : "text-slate-700 hover:text-sky-700 hover:bg-sky-50 border-2 border-transparent"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-sky-100/60"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── Desktop Actions ────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${company.phones[0]}`}
                className="btn btn-secondary btn-sm"
                aria-label="Call Arpita Enterprises"
              >
                <svg className="h-3.5 w-3.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm h-9 bg-emerald-500 text-white border-0 hover:bg-emerald-600 shadow-md hover:shadow-lg"
                aria-label="WhatsApp Arpita Enterprises"
              >
                <WaIcon />
                WhatsApp
              </a>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Enquire Now
              </Link>
            </div>

            {/* ── Mobile Hamburger ───────────────────────────────── */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-sky-200 bg-white text-slate-700 hover:bg-sky-50 hover:border-sky-400 transition-colors lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile Menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-sky-200 bg-white/98 backdrop-blur-xl shadow-card-lg lg:hidden"
          >
            <div className="container-xl py-4">
              {/* Nav links */}
              <nav className="flex flex-col gap-1 mb-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive(link.to)
                        ? "bg-sky-100 text-sky-700 border-2 border-sky-300"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-700 border-2 border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 border-t border-sky-100 pt-4">
                <a
                  href={`tel:${company.phones[0]}`}
                  className="btn btn-secondary btn-sm justify-center"
                >
                  <svg className="h-3.5 w-3.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm h-9 bg-emerald-500 text-white hover:bg-emerald-600 justify-center"
                >
                  <WaIcon />
                  WhatsApp
                </a>
              </div>
              <Link to="/contact" className="btn btn-primary w-full mt-2 justify-center">
                Send Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
