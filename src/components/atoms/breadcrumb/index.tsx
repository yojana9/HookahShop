import React from "react";

import { ChevronRightIcon } from "@heroicons/react/24/solid"; 

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-gray-300 hover:underline hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-white font-semibold">{item.label}</span>
              )}

              {!isLast && <ChevronRightIcon className="w-4 h-4 ml-2 mr-0.5 text-gray-500" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
