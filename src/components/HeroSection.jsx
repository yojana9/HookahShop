import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/atoms/header"; 


function MotionHeader({ items = [], className = "" }) {
  const honey = {
    initial: { opacity: 0, y: 6 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };
  if (!items.length) return null;
  return (
    <motion.span {...honey} className={`inline-block ${className}`}>
      {items[0]}
    </motion.span>
  );
}

export default function HeroSection({
  image,
  title = "Windpipe 1.2 is live.",
  subItems = ["Live boldly!"],
  subtitle = "Smoother hits, sleek modern design.",
  ctaText = "ORDER NOW",
  onCtaClick = () => {},
  headerSelectors = ["#warningBar", ".warning-bar", "header", "#site-header", ".site-header", "nav", ".main-nav"],
  headerExtraPx = 0,
}) {
  const bgUrl = image || "/hero.png";
  const heroRef = useRef(null);
  const [heroHeightPx, setHeroHeightPx] = useState(null);

  useEffect(() => {
    let mo;

    function measureAndSet() {
      try {
        let totalHeader = 0;
        headerSelectors.forEach((sel) => {
          const el = document.querySelector(sel);
          if (el) totalHeader += el.getBoundingClientRect().height || 0;
        });

        totalHeader = Math.round(totalHeader + Number(headerExtraPx || 0));

        const viewport = Math.round(window.innerHeight || document.documentElement.clientHeight || 800);
        const safetyBufferPx = 8;
        let computed = viewport - totalHeader - safetyBufferPx;
        const minAllowed = 220;
        if (!computed || computed < minAllowed) computed = Math.max(minAllowed, viewport - 112 - safetyBufferPx);

        setHeroHeightPx(Math.round(computed));
      } catch (err) {
        setHeroHeightPx(window.innerHeight - 112);
      }
    }

    measureAndSet();
    window.addEventListener("resize", measureAndSet);
    window.addEventListener("orientationchange", measureAndSet);

    const headerNode = document.querySelector(headerSelectors.join(","));
    if (headerNode) {
      mo = new MutationObserver(measureAndSet);
      mo.observe(headerNode, { childList: true, subtree: true, attributes: true });
    }

    return () => {
      window.removeEventListener("resize", measureAndSet);
      window.removeEventListener("orientationchange", measureAndSet);
      if (mo) mo.disconnect();
    };
  }, [headerSelectors, headerExtraPx]);

  const extraHeightPx = 96;
  const inlineStyle = heroHeightPx
    ? { height: `${heroHeightPx + extraHeightPx}px` }
    : { minHeight: `calc(100svh - 112px + ${extraHeightPx}px)` };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={inlineStyle}
      aria-label="Hero"
    >
      {/* Background image */}
      <img
        src={bgUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
        aria-hidden="true"
      />

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-black/6" />

      {/* content */}
      <div className="relative z-10 h-full flex items-start">
        <div className="max-w-3xl px-6 sm:px-10 md:px-16 lg:px-40 py-16 flex flex-col justify-start h-full">
          <div className="flex flex-col justify-start mt-[15%] sm:mt-[18%] md:mt-[22%] lg:mt-[28%]">
            <MotionHeader
              items={subItems}
              className="text-xs md:text-sm font-medium tracking-wide text-white/85"
            />

            
            <Header
              text={title}
              className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md"
            />

            {subtitle && (
              <p className="mt-3 text-sm md:text-base text-white/85 max-w-xl">
                {subtitle}
              </p>
            )}

            <div className="mt-5">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 rounded-full bg-white/95 hover:bg-white text-purple-900 hover:text-purple-700 px-6 py-3 text-lg font-semibold shadow-lg transition-all"
              >
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
