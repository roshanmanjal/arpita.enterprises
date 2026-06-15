/**
 * Footer — Professional FMCG-style footer with all required sections
 */
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { categories, categoryMeta, brands, brandMeta } from "../../data/products";

const quickLinks = [
  { to: "/",         label: "Home" },
  { to: "/products", label: "All Products" },
  { to: "/contact",  label: "Contact Us" },
  { to: "/brands/eatbit",   label: "EatBit" },
  { to: "/brands/craveto",  label: "Craveto" },
];

const coverageCities = company.serviceArea.split(", ");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-50 to-blue-100 border-t-2 border-sky-200 text-slate-600">
      {/* Gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600" />

      <div className="container-xl py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* ── Column 1: Company Overview ──────────────────────── */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white text-sm font-black shadow-md">
                AE
              </div>
              <div>
                <p className="text-sm font-black tracking-tight text-slate-900">
                  <span className="text-slate-900">
  Arpita Enterprises
</span>
                </p>
                <p className="text-[10px] text-slate-500 font-medium">FMCG Superstockist</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              Authorised FMCG superstockist and distributor serving retailers, wholesalers, and trade partners across {company.region} since {company.established}.
            </p>

            {/* Coverage tags */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                Service Coverage
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coverageCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-sky-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 uppercase tracking-wide"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

<div>
  <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-slate-800">
    Trade Support
  </h4>

  <ul className="space-y-3 text-sm text-slate-600 font-medium">
    <li>Retailers</li>
    <li>Wholesalers</li>
    <li>Distributors</li>
    <li>Institutional Buyers</li>
    <li>FMCG Brands</li>
    <li>Modern Trade</li>
  </ul>
</div>
</div> {/* End Column 1 */}
{/* ── Column 2: Quick Links ────────────────────────────── */}
<div>
  <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-slate-800">
    Quick Links
  </h4>

  <ul className="space-y-3">
    {quickLinks.map((link) => (
      <li key={link.to}>
        <Link
          to={link.to}
          className="flex items-center gap-2 text-sm text-slate-600 font-medium transition-colors hover:text-sky-700 group"
        >
          <span className="h-1 w-1 rounded-full bg-sky-400 group-hover:bg-sky-600 transition-colors" />
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
          {/* ── Column 3: Product Categories ────────────────────── */}
          <div>
            <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-slate-800">
              Product Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${categoryMeta[cat]?.slug || cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 text-sm text-slate-600 font-medium transition-colors hover:text-sky-700 group"
                  >
                    <span className="text-sm">{categoryMeta[cat]?.icon}</span>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-slate-800">
              Our Brands
            </h4>
            <div className="flex flex-col gap-2">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  to={`/brands/${brandMeta[brand]?.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-[9px] font-black text-white">
                    {brand.slice(0, 2).toUpperCase()}
                  </span>
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Column 4: Contact Info ───────────────────────────── */}
          <div>
            <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-slate-800">
              Contact Information
            </h4>
            <address className="not-italic space-y-4">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Address</p>
                <a
                  href={company.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-700 leading-relaxed hover:text-sky-700 transition-colors"
                >
                  {company.address}
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-sm font-semibold text-slate-800 hover:text-sky-700 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Business Hours</p>
                <p className="text-sm text-slate-700 font-medium">{company.hours}</p>
              </div>

              <div className="pt-1">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-600 shadow-md hover:shadow-lg"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────────────── */}
        <div className="border-t border-sky-200 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              <p>© {year} {company.name}. All rights reserved.</p>
              <p className="mt-1">Authorised FMCG Superstockist & Distributor · {company.state}</p>
            </div>
            <div className="text-xs text-slate-500 text-right">
              <p className="font-semibold text-slate-600">Trade Coverage</p>
              <p className="mt-1">{company.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
