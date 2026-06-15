/**
 * WhyChooseUs — Professional FMCG-focused trust section
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../../data/company";
import { Award, Package, Zap, DollarSign, Headphones, ShieldCheck } from "lucide-react";

const pillars = [
  {
    Icon: Award,
    title: "Certified Brand Portfolio",
    desc: "Quality-certified FMCG brands meeting strict food safety and hygiene standards across every product category.",
  },
  {
    Icon: Package,
    title: "Diverse Product Range",
    desc: "36 products across 6 categories from 2 premium brands — covering multiple shelf categories in a single order.",
  },
  {
    Icon: Zap,
    title: "Reliable Distribution",
    desc: "Timely delivery across 6 cities in Thane District for consistent shelf availability and reduced stockout risk.",
  },
  {
    Icon: DollarSign,
    title: "Competitive Trade Pricing",
    desc: "Best-in-market trade margins with transparent pricing, no hidden charges, and MOQ-flexible ordering.",
  },
  {
    Icon: Headphones,
    title: "Dedicated Sales Support",
    desc: "Personal service via WhatsApp and phone during business hours. Fast responses for all B2B inquiries.",
  },
  {
    Icon: ShieldCheck,
    title: "Authorised Partnership",
    desc: "We are the authorised superstockist for EatBit and Craveto — ensuring product authenticity and legal supply chain.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-section-blue border-t border-sky-100">
      <div className="container-xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-label mb-3 block">Why Choose Us</span>
          <h2 className="heading-lg text-slate-900">
            Why Retailers Choose{" "}
            <span className="text-gradient">Arpita Enterprises</span>
          </h2>
          <p className="mt-3 text-body max-w-2xl mx-auto">
            We provide reliable FMCG product availability, transparent trade pricing, and dedicated distribution support — everything your business needs to grow.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                className="beat-on-hover flex flex-col gap-4 rounded-2xl border-2 border-sky-200 bg-white p-7 shadow-card-md cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 shadow-md">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coverage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-2xl border-2 border-sky-200 bg-white p-6 shadow-card-md"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4 text-center">
            Our Service Coverage Area
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {company.serviceArea.split(", ").map((area) => (
              <motion.div
                key={area}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex h-12 items-center justify-center rounded-xl border-2 border-sky-200 bg-sky-50 px-3 text-center text-sm font-semibold text-sky-700 cursor-default hover:border-sky-400 hover:bg-sky-100 transition-all"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link to="/contact" className="btn btn-primary btn-lg">
            Become a Trade Partner
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
