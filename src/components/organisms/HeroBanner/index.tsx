import React from "react";
import Header from "@/components/atoms/header";
import Breadcrumb from "@/components/atoms/breadcrumb";

type HeroBannerProps = {
  title: string;
  image: string;
  breadcrumbItems?: { label: string; href?: string }[];
};

export default function HeroBanner({
  title,
  image,
  breadcrumbItems,
}: HeroBannerProps) {
  return (
    <section className="relative w-full">
      {/* Hero image */}
      <div className="relative w-full aspect-[1440/357]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center">
          {/* Breadcrumbs */}
          {breadcrumbItems && (
            <div className="absolute top-4 left-6 sm:top-6 sm:left-12">
              <Breadcrumb
                items={breadcrumbItems}
                className="text-white/70 text-sm"
              />
            </div>
          )}

          {/* Title */}
          <div className="px-6 sm:px-12 md:px-16 lg:px-24 mt-8">
            <Header text={title} size="medium" className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
