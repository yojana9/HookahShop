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

      
      <div className="flex items-center px-4 sm:px-6 lg:pl-[200px] mt-6 sm:mt-9">
        <Logo
          href="/"
          imgSrc="/logo.png"
          size="xl"
          alt="EPIC"
          className="h-8 sm:h-10 w-auto"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6">
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

     
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          <section className="lg:col-span-2">
       
            <div
              className="border border-neutral-200 rounded-md bg-white divide-y divide-gray-200 w-full lg:w-[698px]"
            >
              
              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 items-start sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">Contact</span>
                <div className="flex-1 flex justify-between items-center w-full sm:w-auto">
                  <span className="text-gray-600 text-sm">
                    example@example.com
                  </span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline decoration-solid decoration-1 underline-offset-3"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 items-start sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">Ship to</span>
                <div className="flex-1 flex justify-between items-center w-full sm:w-auto">
                  <span className="text-gray-600 text-sm">lorem, lorem, USA</span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline decoration-solid decoration-1 underline-offset-3"
                  >
                    Change
                  </button>
                </div>
              </div>

             
              <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-6 py-4 items-start sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-full sm:w-40">
                  Shipping method
                </span>
                <div className="flex-1 flex justify-between items-center w-full sm:w-auto">
                  <span className="text-gray-600 text-sm">
                    Standard DHL Shipping – Free
                  </span>
                  <button
                    type="button"
                    className="text-purple-900 text-xs font-medium underline decoration-solid decoration-1 underline-offset-3"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

     
            <div className="mt-6 p-4">
              <Header text="Payment" size="small" className="mb-2" />
              <p className="text-gray-600 pr-19 text-sm leading-relaxed">
                We currently only support cash and delivery. Confirm your
                precious order and receive it within 1-2 days. Enjoy your little
                treat!
              </p>

             
              <div className="flex justify-between items-center mt-6">
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
                  className="bg-purple-900 text-white py-2.5 px-19 rounded-full shadow hover:bg-purple-800 text-sm font-semibold mr-19"
                >
                  CONFIRM
                </button>
              </div>
            </div>

           
            <div className="border-t mt-10 pt-6 px-4 text-sm text-gray-600 border-gray-300 text-center">
              <div className="flex text-left gap-6">
                <a
                  href="/refund-policy"
                  className="underline hover:text-purple-900"
                >
                  Refund Policy
                </a>
                <a
                  href="/privacy-policy"
                  className="underline hover:text-purple-900"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="underline hover:text-purple-900"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </section>

       
          <div
            className="space-y-6 border border-neutral-200 -mt-35 rounded-md p-4 sm:p-6 h-auto sticky top-10 self-start w-full lg:w-[450px]"
          >
           
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-8 border-b border-gray-200 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[40px] h-[64px] object-contain"
                  />
                  <div className="leading-tight">
                    <Header
                      text={item.name}
                      size="small"
                      className="text-[13px] font-semibold text-neutral-800"
                    />
                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      Size: {item.size}, Brand: {item.brand}
                    </p>
                    {item.id === 1 && (
                      <span className="inline-block bg-green-100 text-purple-900 text-[10px] font-semibold px-2 py-0.5 rounded mt-1">
                        BEST SELLER
                      </span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {item.discountPrice && (
                        <span className="text-[12px] font-semibold text-neutral-800">
                          ${item.discountPrice}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-[11px] text-neutral-500 line-through">
                          ${item.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="flex items-center gap-2">
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

           
            <div>
              <div className="space-y-2 text-sm">
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
