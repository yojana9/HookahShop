
import React from "react";

export default function NewsletterBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 -mb-20 relative z-10">
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
   
        <div className="flex justify-center">
          <img
            src="/hookah.png"
            alt="newsletter"
            className="block mx-auto h-auto w-auto 
                       max-h-[380px] sm:max-h-[420px] lg:max-h-[520px]"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
    
            <h2 className="text-white font-extrabold uppercase leading-tight tracking-tight text-2xl sm:text-3xl max-w-lg">
              Stay up to date about
              <br /> our latest offers
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              className="max-w-sm flex items-center bg-white rounded-full pl-4 pr-2 py-1.5 shadow-md lg:ml-auto"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder-black/50"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm md:text-base hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
