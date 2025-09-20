import React, { useState } from "react";
import Header from "@/components/atoms/header";
import Breadcrumb from "@/components/atoms/breadcrumb";
import Logo from "@/components/organisms/logo";

export default function ShippingPage() {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    Apartment: "",
    state: "",
    ZIPcode: "",
    PhoneNumber: "",
    Emailaddress: "",
    saveInfo: false,
  });

  const cartItems = [
    { id: 1, name: "Hookah 1.2", size: "Large", brand: "Imspm", discountPrice: 145, qty: 1, image: "/product.jpg" },
    { id: 2, name: "Hookah 1.2", size: "Large", brand: "Imspm", price: 260, discountPrice: 200, discountPercent: 40, qty: 1, image: "/product.jpg" },
    { id: 3, name: "Hookah 1.2", size: "Large", brand: "Imspm", price: 260, discountPrice: 200, discountPercent: 40, qty: 1, image: "/product.jpg" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.discountPrice * item.qty, 0);
  const discount = 0.3 * subtotal;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Shipping Info Submitted:", formData); };

  return (
    <>
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:pl-[200px] mt-6 sm:mt-9">
        <Logo href="/" imgSrc="/logo.png" size="xl" alt="EPIC" className="h-8 sm:h-10 w-auto" />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6 sm:mt-10">
        <Breadcrumb
          items={[
            { label: <span className="text-gray-500 text-xs sm:text-sm">Cart</span> },
            { label: <span className="text-purple-900 text-xs sm:text-sm">Shipping</span> },
            { label: <span className="text-gray-500 text-xs sm:text-sm">Payment</span> },
          ]}
        />
      </div>

      {/* Shipping Section */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-10">
        <Header text="Shipping address" size="small" className="text-left mb-4 sm:mb-6" />

        {/* 🔥 Mobile gets gap, Desktop keeps current look */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[689px_505px] gap-4 sm:gap-6 lg:gap-0">
          
          {/* Left: Shipping Form */}
          <div className="order-2 lg:order-1">
            <div className="border border-neutral-200 rounded-md bg-white p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Country */}
                <input type="text" name="country" placeholder="Country / Region"
                  value={formData.country} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />

                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name"
                    value={formData.firstName} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />
                  <input type="text" name="lastName" placeholder="Last Name"
                    value={formData.lastName} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />
                </div>

                {/* Address */}
                <input type="text" name="address" placeholder="Address"
                  value={formData.address} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />

                {/* Apartment */}
                <input type="text" name="Apartment" placeholder="Apartment, suite, etc. (optional)"
                  value={formData.Apartment} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" />

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <input type="text" name="city" placeholder="City"
                    value={formData.city} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />
                  <input type="text" name="state" placeholder="State"
                    value={formData.state} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />
                  <input type="text" name="ZIPcode" placeholder="ZIP code"
                    value={formData.ZIPcode} onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />
                </div>

                {/* Phone */}
                <input type="text" name="PhoneNumber" placeholder="Phone number"
                  value={formData.PhoneNumber} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />

                {/* Email */}
                <input type="text" name="Emailaddress" placeholder="Email address"
                  value={formData.Emailaddress} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm" required />

                {/* Save Info */}
                <div className="flex items-center">
                  <input type="checkbox" name="saveInfo" checked={formData.saveInfo}
                    onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                    className="h-4 w-4 sm:h-5 sm:w-5 border border-gray-400 rounded accent-black" />
                  <label htmlFor="saveInfo" className="ml-2 text-xs sm:text-sm text-gray-700">
                    Save this information for next time
                  </label>
                </div>

                {/* Shipping Methods */}
                <section className="py-4 sm:py-6">
                  <Header text="Shipping method" size="small" className="text-left mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <label key={i}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer gap-2 sm:gap-0">
                        <div>
                          <span className="text-sm font-medium text-gray-800">Standard DHL Shipping</span>
                          <p className="text-xs text-gray-500">3–10 days in transit</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-800">FREE</span>
                          <input type="radio" name="shippingMethod" value="standard"
                            onChange={handleChange} className="h-4 w-4 accent-black" />
                        </div>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3 sm:gap-0">
                  <button type="button" className="flex items-center text-purple-900 text-sm hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Return to Cart
                  </button>

                  <button type="submit"
                    className="bg-purple-900 text-white py-2.5 px-6 rounded-full shadow hover:bg-purple-800 text-sm font-semibold w-full sm:w-auto">
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>

            {/* Policies */}
            <div className="flex flex-col sm:flex-row text-left gap-3 sm:gap-6 px-2 sm:px-7 mt-4 text-xs sm:text-sm text-gray-600">
              <a href="/refund-policy" className="underline hover:text-purple-900">Refund Policy</a>
              <a href="/privacy-policy" className="underline hover:text-purple-900">Privacy Policy</a>
              <a href="/terms-of-service" className="underline hover:text-purple-900">Terms of Service</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 border border-neutral-200 rounded-md p-4 sm:p-5 lg:p-6 h-auto lg:sticky lg:top-10 lg:self-start w-full order-1 lg:order-2 lg:-mt-55">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-200 pb-3">
                  <img src={item.image} alt={item.name} className="w-14 h-20 sm:w-[36px] sm:h-[64px] object-contain" />
                  <div className="leading-tight">
                    <h2 className="font-semibold text-neutral-800 text-sm">{item.name}</h2>
                    <p className="text-xs text-neutral-500 mt-0.5">Size: {item.size}, Brand: {item.brand}</p>
                    {item.id === 1 && (
                      <span className="inline-block bg-green-100 text-purple-900 text-[10px] font-semibold px-2 py-0.5 rounded mt-1">BEST SELLER</span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {item.discountPrice && <span className="text-xs font-semibold">${item.discountPrice}</span>}
                      {item.price && <span className="text-xs text-neutral-500 line-through">${item.price}</span>}
                      {item.discountPercent && <span className="text-[10px] text-purple-900 bg-green-100 rounded px-1.5 py-0.5">{item.discountPercent}% OFF</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <img src="/tag.png" alt="Tag" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 object-contain" />
                <input type="text" placeholder="Add promo code"
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-100 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none" />
              </div>
              <button className="w-full sm:w-auto px-5 py-2 border border-purple-900 text-purple-900 rounded-full font-semibold text-xs uppercase">Apply</button>
            </div>

            {/* Order Summary */}
            <div>
              <div className="font-semibold text-sm sm:text-base text-neutral-800 mb-4">Order Summary</div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between"><span className="text-gray-400">Subtotal</span><span className="text-neutral-800">${subtotal}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Discount (30%)</span><span className="text-red-600">-${discount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Delivery fee</span><span className="text-neutral-800">${delivery}</span></div>
                <div className="border-t pt-2 flex justify-between text-neutral-800">
                  <span>Total</span><span className="text-neutral-900 font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
