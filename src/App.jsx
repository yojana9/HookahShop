import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Newsletter from "@/components/organisms/Newsletter";
import Footer from "@/components/organisms/Footer";
import ProductCard from "@/components/atoms/card";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/organisms/testimonials";
import ProductPage from "./pages/ProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import PaymentPage from "./pages/Payment.jsx";

export default function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <HeroSection
                image="/hero.png?v=2"
                title="Windpipe 1.2 is live."
                subItems={["Live boldly!"]}
                subtitle="Smoother hits, sleek modern design."
                ctaText="ORDER NOW"
                onCtaClick={() => console.log("Order Now clicked")}
              />

              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <ProductCard />
              </div>

              <section className="bg-white border-t">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                  <Testimonials />
                </div>
              </section>
            </main>

            <section className="bg-white border-t">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <Newsletter />
              </div>
            </section>

            <Footer />
          </div>
        }
      />

      {/* Other pages */}
      <Route path="/product" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}
