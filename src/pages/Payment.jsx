import React, { useMemo } from "react";
import Header from "@/components/atoms/header";   
import Logo from "@/components/organisms/logo";
import Breadcrumb from "@/components/atoms/breadcrumb";

export default function Payment() {
  const cartItems = [
    {
      id: 1,
      name: "Hookah 1.2",
      size: "Large",
      brand: "Imported",
      price: 260,
      discountPrice: 145,
      discountPercent: 40,
      qty: 1,
      image: "/product.jpg",
    },
    {
      id: 2,
      name: "Hookah 2.0",
      size: "Large",
      brand: "Imported",
      price: 260,
      discountPrice: 200,
      discountPercent: 23,
      qty: 1,
      image: "/product.jpg",
    },
  ];

  const { subtotal, savings } = useMemo(() => {
    const original = cartItems.reduce((s, it) => s + it.price * it.qty, 0);
    const sub = cartItems.reduce((s, it) => s + it.discountPrice * it.qty, 0);
    return { subtotal: sub, savings: original - sub };
  }, [cartItems]);

  const shippingFee = 15;
  const total = subtotal + shippingFee - savings;

  return (
    <div className="bg-white">
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:pl-[200px] mt-6 sm:mt-9">
        <Logo
          href="/"
          imgSrc="/logo.png"
          size="xl"
          alt="EPIC"
          className="h-8 sm:h-10 w-auto"
        />
      </div>

      {/* Breadcrumb - extra top margin only on mobile so it doesn't touch logo */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8 sm:mt-6">
        <Breadcrumb
          items={[
            { label: "Cart", href: "/cart" },
            { label: "Shipping", href: "/shipping" },
            {
              label: (
                <span className="text-purple-800 font-semibold">Payment</span>
              ),
            },
          ]}
        />
      </div>

      {/* Main */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        {/* ✅ Removed gap-6 for desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-0">
          {/* Left Column */}
          <section className="lg:col-span-2 order-2 lg:order-1">
            <div className="border border-neutral-200 rounded-md bg-white divide-y divide-gray-200 w-full">
              {/* Contact */}
              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">
                  Contact
                </span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                  <span className="text-gray-600 text-sm">
                    example@example.com
                  </span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Ship To */}
              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">
                  Ship to
                </span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                  <span className="text-gray-600 text-sm">lorem, lorem, USA</span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">
                  Shipping method
                </span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                  <span className="text-gray-600 text-sm">
                    Standard DHL Shipping – Free
                  </span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="mt-6 p-4">
              <Header text="Payment" size="small" className="mb-2" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We currently only support cash and delivery. Confirm your order
                and receive it within 1-2 days. Enjoy your little treat!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
                <button
                  type="button"
                  className="flex items-center text-purple-900 text-sm hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Return to shipping
                </button>
                <button
                  type="submit"
                  className="bg-purple-900 text-white py-2.5 px-6 w-full sm:w-auto rounded-full shadow hover:bg-purple-800 text-sm font-semibold"
                >
                  CONFIRM
                </button>
              </div>
            </div>

            {/* Policies */}
            <div className="border-t mt-6 sm:mt-10 pt-4 sm:pt-6 px-2 sm:px-4 text-sm text-gray-600 border-gray-300">
              <div className="flex flex-col sm:flex-row text-left gap-3 sm:gap-6">
                <a href="/refund-policy" className="underline hover:text-purple-900">
                  Refund Policy
                </a>
                <a href="/privacy-policy" className="underline hover:text-purple-900">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="underline hover:text-purple-900">
                  Terms of Service
                </a>
              </div>
            </div>
          </section>

          {/* Right Column */}
          {/* ✅ Added -mt-30 only for large screens */}
          <div className="space-y-6 border border-neutral-200 rounded-md p-4 sm:p-6 h-auto lg:sticky lg:top-10 w-full order-1 lg:order-2 lg:-mt-30">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-20 sm:w-[40px] sm:h-[64px] object-contain"
                  />
                  <div className="leading-tight">
                    <Header
                      text={item.name}
                      size="small"
                      className="text-sm font-semibold text-neutral-800"
                    />
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Size: {item.size}, Brand: {item.brand}
                    </p>
                    {item.id === 1 && (
                      <span className="inline-block bg-green-100 text-purple-900 text-[10px] font-semibold px-2 py-0.5 rounded mt-1">
                        BEST SELLER
                      </span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {item.discountPrice && (
                        <span className="text-xs font-semibold text-neutral-800">
                          ${item.discountPrice}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-xs text-neutral-500 line-through">
                          ${item.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <img
                  src="/tag.png"
                  alt="Tag"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-100 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none"
                />
              </div>
              <button className="w-full sm:w-auto px-5 py-2 border border-purple-900 text-purple-900 rounded-full font-semibold text-xs uppercase">
                Apply
              </button>
            </div>

            {/* Order Summary */}
            <div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-neutral-800 font-medium">
                    ${subtotal.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discount</span>
                  <span className="text-red-600 font-medium">
                    -${savings.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span className="text-neutral-800 font-medium">
                    ${shippingFee.toFixed(0)}
                  </span>
                </div>
                <div className="border-t border-gray-300 pt-2 flex justify-between text-neutral-800">
                  <span>Total</span>
                  <span className="text-neutral-900 font-semibold text-lg">
                    ${total.toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
