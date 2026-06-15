/**
 * ContactPage — Professional B2B inquiry form with validation
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { MapPin, Phone, Clock, Users } from "lucide-react";

const whoCanContact = [
  "Retailers", "Wholesalers", "Distributors",
  "FMCG Brands", "Institutional Buyers", "Distribution Partners",
];

// Form validation rules
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-]{10,15}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number (10 digits).";
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Please describe your inquiry.";
  return errors;
}

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1 text-xs text-red-600 font-medium"
    >
      {msg}
    </motion.p>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", business: "",
    expectedMonthly: "", message: "",
    inquiryType: "Retail Product Inquiry",
    businessType: "Retail Store",
    contactMethod: "WhatsApp",
  });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((e) => { const n = { ...e }; delete n[name]; return n; });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    const waText = `*New B2B Inquiry — Arpita Enterprises*
----------------------------------------
• *Name:* ${form.name}
• *Phone:* ${form.phone}${form.email ? `\n• *Email:* ${form.email}` : ""}
• *Business/Shop:* ${form.business || "Not provided"}
• *Business Type:* ${form.businessType}
• *Inquiry Type:* ${form.inquiryType}
• *Expected Monthly Requirement:* ${form.expectedMonthly || "Not specified"}
• *Preferred Contact:* ${form.contactMethod}

*Message / Requirement:*
${form.message}
----------------------------------------`;

    const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-white text-slate-800 text-sm placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-sky-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-sky-200 focus:border-sky-500"
    }`;

  return (
    <div className="min-h-screen bg-section-light">
      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white border-b-2 border-sky-200 pt-28 pb-12">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-label mb-3 block">Get in Touch</span>
            <h1 className="heading-xl text-slate-900">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="mt-3 text-body max-w-lg">
              Reach out via WhatsApp, phone, or the inquiry form below. We respond to all B2B trade inquiries during business hours.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-xl py-14">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* ─── LEFT: Info ───────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Info cards */}
            {[
              {
                Icon: MapPin,
                label: "Our Address",
                value: company.address,
                href: company.mapsLink,
                linkExternal: true,
                color: "bg-sky-50 text-sky-700 border-sky-200",
              },
         {
  Icon: Phone,
  label: "Phone",
  value: company.phones.join(" / "),
  href: `tel:${company.phones[0]}`,
  color: "bg-blue-50 text-blue-700 border-blue-200",
},
              {
                Icon: Clock,
                label: "Business Hours",
                value: company.hours,
                href: null,
                color: "bg-slate-50 text-slate-700 border-slate-200",
              },
            ].map(({ Icon, label, value, href, linkExternal, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex items-start gap-4 rounded-2xl border-2 border-sky-100 bg-white p-5 shadow-card-md hover:border-sky-200 hover:shadow-card-lg transition-all"
              >
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border-2 ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
                  {label === "Phone" ? (
  <div className="text-sm font-semibold text-slate-800 leading-relaxed">
    {company.phones.map((phone) => (
      <a
        key={phone}
        href={`tel:${phone.replace(/\s+/g, "")}`}
        className="block hover:text-sky-700"
      >
        {phone}
      </a>
    ))}
  </div>
) : href ? (
  <a
    href={href}
    target={linkExternal ? "_blank" : undefined}
    rel={linkExternal ? "noreferrer" : undefined}
    className="text-sm font-semibold text-slate-800 hover:text-sky-700 transition-colors leading-relaxed"
  >
    {value}
  </a>
) : (
  <p className="text-sm font-semibold text-slate-800 leading-relaxed">{value}</p>
)}
                </div>
              </motion.div>
            ))}

            {/* Who Can Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border-2 border-sky-100 bg-white p-6 shadow-card-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Who Can Contact Us</h3>
                  <p className="text-xs text-sky-700 font-medium">We serve all FMCG trade partners</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {whoCanContact.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border-2 border-sky-100 bg-sky-50 px-3.5 py-2.5"
                  >
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-[9px] font-bold text-white">✓</span>
                    <span className="text-xs font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6"
            >
              <h3 className="font-bold text-slate-900 mb-1.5">Fastest Response via WhatsApp</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Our sales team typically responds within business hours. WhatsApp is the quickest way to reach us for urgent inquiries.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600 shadow-md hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Open WhatsApp
              </a>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden rounded-2xl border-2 border-sky-200 shadow-card-md"
            >
              <iframe
                title="Arpita Enterprises location on map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* ─── RIGHT: Form ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-3xl border-2 border-sky-200 bg-white p-10 shadow-card-lg">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 16 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 border-2 border-emerald-300 mx-auto mb-5"
                  >
                    <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                    WhatsApp has opened with your message. Our sales team will respond during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", business: "", expectedMonthly: "", message: "", inquiryType: "Retail Product Inquiry", businessType: "Retail Store", contactMethod: "WhatsApp" });
                      setErrors({});
                    }}
                    className="mt-6 text-sky-700 text-sm font-semibold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-sky-200 bg-white p-8 shadow-card-xl">
                <h2 className="text-xl font-black text-slate-900 mb-1">Send a Trade Inquiry</h2>
                <p className="text-sm text-slate-600 mb-7">
                  Fill in your details and we will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        autoComplete="name"
                        className={inputCls("name")}
                      />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        className={inputCls("phone")}
                      />
                      <FieldError msg={errors.phone} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      autoComplete="email"
                      className={inputCls("email")}
                    />
                    <FieldError msg={errors.email} />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="business" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Business / Shop Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Sharma General Store"
                      autoComplete="organization"
                      className={inputCls("business")}
                    />
                  </div>

                  {/* Monthly Requirement */}
                  <div>
                    <label htmlFor="expectedMonthly" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Expected Monthly Requirement
                    </label>
                    <input
                      id="expectedMonthly"
                      type="text"
                      name="expectedMonthly"
                      value={form.expectedMonthly}
                      onChange={handleChange}
                      placeholder="e.g. 10 cartons, 50 boxes"
                      className={inputCls("expectedMonthly")}
                    />
                  </div>

                  {/* Inquiry Type + Business Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className={inputCls("inquiryType")}
                      >
                        <option>Retail Product Inquiry</option>
                        <option>Product Availability</option>
                        <option>Bulk Purchase Inquiry</option>
                        <option>Brand Partnership Inquiry</option>
                        <option>Distribution Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        className={inputCls("businessType")}
                      >
                        <option>Retail Store</option>
                        <option>Wholesaler</option>
                        <option>Distributor</option>
                        <option>FMCG Brand</option>
                        <option>Institution</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2.5 uppercase tracking-wide">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-5">
                      {["WhatsApp", "Phone Call"].map((method) => (
                        <label key={method} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={form.contactMethod === method}
                            onChange={handleChange}
                            className="h-4 w-4 text-sky-600 border-sky-300 focus:ring-sky-500 cursor-pointer"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Message / Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="I'm interested in EatBit Chikki and Craveto Makhana. Please share trade pricing and MOQ details."
                      className={`${inputCls("message")} resize-none`}
                    />
                    <FieldError msg={errors.message} />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-lg w-full bg-emerald-500 text-white border-0 hover:bg-emerald-600 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Submitting opens WhatsApp with your message pre-filled.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
