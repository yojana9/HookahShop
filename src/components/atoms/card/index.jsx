import React, { memo, useMemo, useState, useCallback, useEffect, useRef } from "react";
import Button from "../buttons";
import { products as initialProducts } from "../../../data/product";
import Header from "@/components/atoms/header";

const BADGE_STYLES = {
  purple: "bg-[#3B007B] text-white",
  green: "bg-[#DFF3E0] !text-[#5B21B6]",
  lavender: "bg-[#EEDBFF] !text-[#5B21B6]",
};

const inferVariant = (txt = "") => {
  const t = txt.toLowerCase();
  if (t.includes("best seller")) return "green";
  if (t.startsWith("save")) return "lavender";
  return "purple";
};

const normalizeBadge = (b) =>
  typeof b === "string"
    ? { text: b, variant: inferVariant(b) }
    : b && typeof b === "object"
    ? {
        text: b.text ?? b.label ?? "",
        variant: b.variant ?? inferVariant(b.text ?? b.label ?? ""),
      }
    : null;


const ProductCard = memo(function ProductCard({
  id,
  title,
  image = "/photo.png",
  price = 2999,
  currency = "NPR",
  rating,
  reviewsCount,
  badge,
  badges,
  onAddToCart,
  onToggleWishlist,
  inWishlist = false,
}) {
  const pillList = useMemo(() => {
    const raw = Array.isArray(badges) ? badges : badge ? [badge] : [];
    return raw.map(normalizeBadge).filter(Boolean);
  }, [badges, badge]);

  return (
    <div className="group flex flex-col items-start relative">
      <div className="bg-white border border-black/10 rounded-2xl w-full overflow-hidden transition-shadow duration-300 hover:shadow-lg relative">
        {pillList.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
            {pillList.map((b, i) => (
              <span
                key={`${id}-badge-${i}`}
                className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide shadow-sm ${
                  BADGE_STYLES[b.variant] ?? BADGE_STYLES.purple
                }`}
              >
                {b.text}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => onToggleWishlist?.(id)}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            inWishlist
              ? "bg-red-500 text-white scale-110"
              : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
          }`}
          aria-label="Toggle wishlist"
          title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <span className="text-sm">{inWishlist ? "♥" : "♡"}</span>
        </button>

        <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="h-[200px] md:h-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/photo.png";
            }}
          />

          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[75%] max-w-[300px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200">
            <Button
              variant="deep"
              text="ADD TO CART"
              size="md"
              showArrow={false}
              onClick={() => onAddToCart?.(id)}
              className="w-full rounded-full !bg-[#3B007B] !text-white hover:!bg-[#2A005C]"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-3">
        
        <Header text={title} size="small" className="text-black sm:text-xl" />

        {(rating || reviewsCount) && (
          <div className="flex items-center mt-1 space-x-2">
            <div className="flex items-center space-x-1 text-black">
              {[...Array(5)].map((_, i) => {
                const r = rating || 0;
                const full = i < Math.floor(r);
                const half = !full && i === Math.floor(r) && r % 1 >= 0.5;
                return (
                  <span
                    key={i}
                    className={`text-sm ${
                      full || half ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                );
              })}
            </div>
            <span className="text-black/60 text-sm">
              {rating ? rating.toFixed(1) : "—"}/5
            </span>
          </div>
        )}

        <div className="mt-2 text-black font-medium">
          {currency} {Number(price || 0).toLocaleString()}
        </div>
      </div>
    </div>
  );
});

function ProductCardGallery() {
  const products = useMemo(() => initialProducts, []);
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState({});
  const [perPage, setPerPage] = useState(4);
  const [page, setPage] = useState(0);
  const rowRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < products.length; i += perPage) {
      out.push(products.slice(i, i + perPage));
    }
    return out;
  }, [products, perPage]);

  const totalPages = Math.max(1, pages.length);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setPage(Math.min(totalPages - 1, Math.max(0, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [totalPages]);

  const goTo = (i) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setPage(i);
  };

  const toggleWish = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      const k = String(id);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  }, []);

  const add = useCallback((id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-4 py-10">
      <div className="flex items-center justify-between mb-6">
      
        <Header
          text="Just Arrived"
          className="text-[40px] leading-none font-extrabold tracking-tight uppercase"
        />

        {totalPages > 1 && (
          <div className="flex items-center gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={
                  page === i
                    ? "h-3 w-3 rounded-full border-2 border-[#3B007B] bg-white"
                    : "h-1.5 w-1.5 rounded-full bg-gray-300"
                }
              />
            ))}
          </div>
        )}
      </div>

      <div
        ref={rowRef}
        className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex min-w-full">
          {pages.map((items, pIdx) => (
            <div key={pIdx} className="shrink-0 w-full snap-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((p) => (
                  <ProductCard
                    key={p.id}
                    {...p}
                    badges={p.badges ?? (p.badge ? [p.badge] : [])}
                    onAddToCart={add}
                    onToggleWishlist={toggleWish}
                    inWishlist={wishlist.has(String(p.id))}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button className="h-[28px] px-4 rounded-full border-[1.5px] border-[#3B007B] text-[#3B007B] text-[11px] font-extrabold uppercase tracking-[0.02em]">
          SHOP ALL
        </button>
      </div>
    </section>
  );
}

export { ProductCard };
export default ProductCardGallery;
