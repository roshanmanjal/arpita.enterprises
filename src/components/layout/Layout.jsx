import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "../ui/FloatingButtons";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-section-light text-slate-900">
      <Navbar />
      {/* pt-16 accounts for fixed 64px navbar */}
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
