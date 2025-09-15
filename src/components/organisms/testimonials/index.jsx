import React from "react";

export default function Testimonials() {
  const collections = [
    { id: 1, title: "Hookah", subtitle: "CHECK IT OUT", image: "/shop1.png", link: "/collection/hookah" },
    { id: 2, title: "Halloween", subtitle: "CHECK IT OUT", image: "/shop2.png", link: "/collection/halloween" },
    { id: 3, title: "Floral", subtitle: "CHECK IT OUT", image: "/shop3.png", link: "/collection/floral" },
  ];

  const testimonials = [
    { 
      id: 1, 
      name: "Alex K.", 
      rating: 5, 
      text: "I’ve tried so many different hookah shops but Nirvana at Diversity stands out by far. The flavors are rich, long-lasting, and the charcoal quality makes every session smooth. I always recommend them to friends." 
    },
    { 
      id: 2, 
      name: "James L.", 
      rating: 5, 
      text: "The Halloween collection was an absolute blast! The fruity flavors with a spooky twist were a big hit at my party. Shipping was quick and everything came neatly packed. Definitely ordering again." 
    },
    { 
      id: 3, 
      name: "Sophia R.", 
      rating: 5, 
      text: "I love the floral blends—so refreshing and different from anything else I’ve tried. The attention to detail in packaging and presentation makes it feel premium. It’s my go-to choice for relaxing evenings." 
    },
    { 
      id: 4, 
      name: "Marcus T.", 
      rating: 5, 
      text: "Fantastic experience from start to finish. Customer support was responsive, and my order arrived earlier than expected. The flavors are bold, authentic, and exactly what I needed for a great night." 
    },
  ];
  
  return (
    <section className="w-full flex flex-col items-center py-12 space-y-12 overflow-x-hidden">
      {/* Banner */}
      <div className="w-full flex justify-center">
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-yellow-50 via-green-100 to-blue-100"
          style={{ width: "90%", maxWidth: "1440px", height: "344px" }}
        >
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-purple-900 mb-5">
                Nirvana at Diversity
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-800/90">
                Jive into the Nirvana Party with the taste of the states. We offer a wide range of fruity and floral flavors along with high quality charcoal. Stay tuned for your next favourite.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/collection/featured"
                className="inline-flex items-center px-5 py-2 rounded-full bg-purple-900 text-white text-sm md:text-base font-semibold hover:opacity-95 transition self-start"
              >
                CHECK IT OUT
                <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Collection */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full" style={{ width: "90%", maxWidth: "1440px" }}>
          <h3 className="text-2xl font-extrabold mb-6 text-left">SHOP COLLECTION</h3>
        </div>

        <div
          className="grid gap-6"
          style={{
            width: "90%",
            maxWidth: "1440px",
            gridTemplateColumns: "2fr 2fr",
          }}
        >
          {/* LEFT: large card */}
          <a
            href={collections[0].link}
            className="relative block rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
            style={{ minHeight: "540px" }}
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={collections[0].image}
                alt={collections[0].title}
                className="object-contain"
                style={{ maxWidth: "66%", maxHeight: "100%" }}
              />
            </div>
            <div className="absolute left-8 top-5/6 transform -translate-y-1/2">
              <div className="text-2xl font-semibold text-black">{collections[0].title}</div>
              <div className="mt-2 text-xs text-gray-500 flex items-center">
                <span className="border-b-2 border-purple-900 text-purple-900 font-semibold inline-flex items-center">
                  {collections[0].subtitle} <span className="ml-1 text-2xl font-bold">→</span>
                </span>
              </div>
            </div>
          </a>

          {/* RIGHT: stacked cards */}
          <div className="flex flex-col gap-6">
            {collections.slice(1).map((col) => (
              <a
                key={col.id}
                href={col.link}
                className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
                style={{ minHeight: "260px" }}
              >
                <div className="w-full h-full flex flex-row">
                  {/* text */}
                  <div className="w-3/5 p-4 flex flex-col justify-center" style={{ paddingTop: "103px" }}>
                    <div className="text-lg font-semibold">{col.title}</div>
                    <div className="mt-1 text-xs text-gray-500 flex items-center">
                      <span className="border-b-2 border-purple-900 text-purple-900 font-semibold inline-flex items-center">
                        {col.subtitle} <span className="ml-1 text-2xl font-bold">→</span>
                      </span>
                    </div>
                  </div>

                  {/* image */}
                  <div className="w-2/5 overflow-hidden flex items-center justify-center">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="object-contain w-full h-full"
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-[1100px] px-4">
        <h3 className="text-2xl font-extrabold mb-4">UNFILTERED VIBES</h3> 
        <div className="flex gap-4 overflow-x-auto py-2 px-1 no-scrollbar">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-4 shadow flex-shrink-0"
              style={{ width: "400px", height: "223.58px" }}
            >
              <div className="font-semibold text-lg">{t.name}</div>
              <p className="mt-4 text-sm text-gray-700 line-clamp-5">{t.text}</p>
              <div className="text-yellow-500 mt-8 text-sm">
                {"★".repeat(t.rating)}
                <span className="text-gray-400">{"☆".repeat(5 - t.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
