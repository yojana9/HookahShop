import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import HeroBanner from "@/components/organisms/HeroBanner";


export default function ProductPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Explore all Products", href: "/product" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="relative">
          <HeroBanner
            title="ALL PRODUCTS"
            image="/Banner.jpg?v=2"
            breadcrumbItems={breadcrumbItems}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
