import React from "react";
import Header from "@/components/atoms/header";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Breadcrumb from "@/components/atoms/breadcrumb";
import NewsletterBanner from "@/components/organisms/Newsletter";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Hookah 1.2",
      size: "Large",
      brand: "Imspm",
      discountPrice: 145,
      qty: 1,
      image: "/product.jpg",
    },
    {
      id: 2,
      name: "Hookah 1.2",
      size: "Large",
      brand: "Imspm",
      price: 260,
      discountPrice: 200,
      discountPercent: 40,
      qty: 1,
      image: "/product.jpg",
    },
    {
      id: 3,
      name: "Hookah 1.2",
      size: "Large",
      brand: "Imspm",
      price: 260,
      discountPrice: 200,
      discountPercent: 40,
      qty: 1,
      image: "product.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.qty,
    0
  );
  const discount = 0.3 * subtotal;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <>
      
      <Navbar />

  
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6">
        <Breadcrumb
          items={[
            {
              label: <span className="text-gray-500">Home</span>,
              href: "/",
            },
            {
              label: <span className="text-purple-900 font-semibold">Cart</span>,
            },
          ]}
        />
      </div>

      <section className="mx-auto px-4 sm:px-6 py-10" style={{ width: "1240px" }}>
      
        <Header text="Your Cart" size="medium" className="mb-6 uppercase" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          
          <div className="flex-1 border border-neutral-200 rounded-md bg-white">
            {cartItems.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center justify-between px-5 py-4 ${
                  idx !== cartItems.length - 1 ? "border-b border-neutral-200" : ""
                }`}
              >
               
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[36px] h-[64px] object-contain"
                  />
                  <div className="leading-tight">
                    <div className="font-semibold text-neutral-800 text-[13px]">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Size: {item.size}, Brand: {item.brand}
                    </div>
                    {item.id === 1 && (
                      <span className="inline-block bg-green-100 text-purple-900 text-[10px] font-semibold px-2 py-0.5 rounded mt-1">
                        BEST SELLER
                      </span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {item.discountPrice && (
                        <span className="text-[12px] font-semibold text-black-600">
                          ${item.discountPrice}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-[11px] text-neutral-500 line-through">
                          ${item.price}
                        </span>
                      )}
                      {item.discountPercent && (
                        <span className="text-[10px] text-purple-900 bg-green-100 rounded px-1.5 py-0.5">
                          {item.discountPercent}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                
                <div className="flex flex-col items-end gap-2">
                  <button
                    aria-label="Remove"
                    className="w-7 h-7 grid place-items-center text-neutral-500"
                  >
                    <img
                      src="/trash.png"
                      alt="Delete"
                      className="w-4 h-4 object-contain"
                    />
                  </button>
                  <div className="flex items-center h-8 rounded-full bg-gray-100 text-neutral-700 text-sm">
                    <button className="w-8 h-7 grid place-items-center">-</button>
                    <span className="px-1">{item.qty}</span>
                    <button className="w-8 h-7 grid place-items-center">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
          <div className="w-full border border-neutral-200 rounded-md p-5 lg:p-6 h-fit">
           
            <Header text="Order Summary" size="small" className="mb-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-neutral-800">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Discount (30%)</span>
                <span className="text-red-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery fee</span>
                <span className="text-neutral-800">${delivery}</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-neutral-800">
                <span>Total</span>
                <span className="text-neutral-900 font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

          
            <div className="flex items-center gap-2 mt-5">
              <div className="relative w-full">
                <img
                  src="/tag.png"
                  alt="Tag"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none"
                />
              </div>
              <button className="px-5 py-2 border border-purple-900 text-purple-900 rounded-full font-semibold text-xs uppercase">
                Apply
              </button>
            </div>

       
            <button className="mt-5 w-full px-6 py-3 bg-purple-900 text-white font-semibold rounded-full shadow hover:bg-purple-800">
              Checkout
            </button>
          </div>
        </div>
      </section>

     
      <NewsletterBanner />

      <Footer />
    </>
  );
}
