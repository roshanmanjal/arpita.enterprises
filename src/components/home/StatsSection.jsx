/**
 * StatsSection — Animated business statistics counters
 * Displays key FMCG metrics with count-up animation on viewport entry
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Package, MapPin, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: 6,
    suffix: "",
    label: "Cities Served",
    desc: "Across Thane District",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Retail Partners",
    desc: "Verified trade partners",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Package,
    value: 36,
    suffix: "+",
    label: "Products",
    desc: "Across 6 categories",
    color: "text-navy-700",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    icon: Building2,
    value: 2,
    suffix: "",
    label: "Premium Brands",
    desc: "EatBit & Craveto",
    color: "text-sky-700",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: TrendingUp,
    value: 1,
    suffix: "+ Yr",
    label: "Market Experience",
    desc: "Growing distribution network",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - startVal) + startVal));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value, 2000, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col items-center text-center rounded-2xl border-2 ${stat.border} ${stat.bg} p-6 sm:p-7 shadow-card-md hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} border-2 ${stat.border} mb-4 shadow-sm`}>
        <Icon className={`h-6 w-6 ${stat.color}`} />
      </div>

      <div className={`text-3xl sm:text-4xl font-black tracking-tight ${stat.color} mb-1 stat-counter`}>
        {count.toLocaleString()}{stat.suffix}
      </div>

      <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
      <div className="text-xs text-slate-500 font-medium">{stat.desc}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-sky-100" ref={ref}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-label mb-3 block">Our Reach</span>
          <h2 className="heading-lg text-slate-900">
            Arpita Enterprises by the{" "}
            <span className="text-gradient">Numbers</span>
          </h2>
          <p className="mt-3 text-body max-w-xl mx-auto">
            A growing FMCG distribution network trusted by retailers and trade partners across Thane District.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
