/**
 * RetailerCTA — Professional B2B conversion section
 */
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function RetailerCTA() {
  const ref = useIntersectionObserver();

  return (
    <section className="section-padding bg-section-blue border-t border-sky-100">
      <div className="container-xl">
        <div
          ref={ref}
          className="reveal rounded-3xl border-2 border-sky-200 bg-white p-8 sm:p-12 shadow-card-xl"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* Text */}
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md mt-0.5">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                  Looking to stock FMCG products for your retail business?
                </h3>
                <p className="text-body-sm max-w-xl">
                  We supply retailers, wholesalers, and institutions across {company.region} with competitive trade pricing, reliable supply, and dedicated partner support.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%27m%20a%20retailer%20interested%20in%20stocking%20your%20FMCG%20products.`}
                target="_blank"
                rel="noreferrer"
                className="btn h-11 bg-emerald-500 text-white border-0 hover:bg-emerald-600 shadow-md hover:shadow-lg px-5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`tel:${company.phones[0]}`}
                className="btn btn-secondary h-11 px-5"
              >
                <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link to="/contact" className="btn btn-primary h-11 px-5">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
