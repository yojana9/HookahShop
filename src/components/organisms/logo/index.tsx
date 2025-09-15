import React from "react";

type Preset = "sm" | "md" | "lg" | "xl";
type LogoProps = {
  href?: string;
  imgSrc?: string;
  alt?: string;
  showWord?: boolean;           
  size?: Preset | number;       
  className?: string;
};

const PRESET_PX: Record<Preset, number> = { sm: 24, md: 32, lg: 40, xl: 80 };

const toPx = (size: LogoProps["size"] = "md") =>
  typeof size === "number" ? size : PRESET_PX[size] ?? PRESET_PX.md;

export default function Logo({
  href = "/",
  imgSrc,
  alt = "Brand logo",
  showWord = false,
  size = "md",
  className = "",
}: LogoProps) {
  const px = toPx(size);

  return (
    <a
      href={href}
      aria-label="Go to home"
      className={`flex items-center gap-2 select-none shrink-0 ${className}`}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          width={px}
          height={px}
          draggable="false"
          decoding="async"
          className="block rounded-full object-cover"
        />
      ) : (
        <div
          style={{ width: px, height: px }}
          className="rounded-full bg-black text-white flex items-center justify-center font-bold"
        >
          E
        </div>
      )}
      {showWord && (
        <span className="text-2xl font-extrabold tracking-tight text-neutral-900">
          EPIC
        </span>
      )}
    </a>
  );
}
