import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { AnimationProvider, useAnimationConfig } from "./contexts/AnimationContext";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import SkeletonLoader from "./components/ui/SkeletonLoader";
import ErrorBoundary from "./components/ui/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const BrandPage = lazy(() => import("./pages/BrandPage"));

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

function RouteElement({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SkeletonLoader type="page" />}>
        <PageWrapper>{children}</PageWrapper>
      </Suspense>
    </ErrorBoundary>
  );
}

function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center text-center px-4 bg-section-light">
        <div className="max-w-md">
          <div className="text-7xl font-black text-sky-200 mb-4">404</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h2>
          <p className="text-slate-600 text-sm mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="btn btn-primary btn-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteElement><HomePage /></RouteElement>} />
        <Route path="/products" element={<RouteElement><ProductsPage /></RouteElement>} />
        <Route path="/products/:id" element={<RouteElement><ProductDetailPage /></RouteElement>} />
        <Route path="/category/:slug" element={<RouteElement><CategoryPage /></RouteElement>} />
        <Route path="/brands/:slug" element={<RouteElement><BrandPage /></RouteElement>} />
        <Route path="/contact" element={<RouteElement><ContactPage /></RouteElement>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const { shouldReduceMotion } = useAnimationConfig();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "user"}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <AnimationProvider>
      <AppShell />
    </AnimationProvider>
  );
}
