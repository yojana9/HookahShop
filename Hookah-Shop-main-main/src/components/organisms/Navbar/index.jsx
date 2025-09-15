import React, { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Logo from "../logo";
import { NAV_ITEMS } from "../../../data/site";

function Bar({ bg, children, onClose }) {
  return (
    <div className={`${bg} text-black/80 text-[11px] md:text-xs`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-center relative">
        <div className="truncate">{children}</div>
        <button
          aria-label="Close"
          className="absolute right-2 text-neutral-500 hover:text-neutral-800"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}

const NavItem = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      [
        "group px-3 py-2 text-[15px] transition relative",
        isActive
          ? "text-neutral-900 font-semibold after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-[2px] after:rounded after:bg-purple-600"
          : "text-neutral-700 hover:text-neutral-900 after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-[2px] after:rounded after:bg-neutral-300 after:origin-left after:scale-x-0 after:transition-transform group-hover:after:scale-x-100",
      ].join(" ")
    }
  >
    {children}
  </RouterNavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showWarn, setShowWarn] = useState(true);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200 shadow-sm pb-4">
      {showWarn && (
        <Bar bg="bg-white" onClose={() => setShowWarn(false)}>
          <strong>WARNING:</strong>&nbsp;This product contains NICOTINE.
        </Bar>
      )}
      {showPromo && (
        <Bar bg="bg-[#E5F6E8]" onClose={() => setShowPromo(false)}>
          Get <b>20% off</b> your first order.&nbsp;
          <button className="underline underline-offset-2">Sign up now</button>
        </Bar>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 hidden md:grid grid-cols-3 items-center">
          {/* Left nav */}
          <nav className="flex items-center gap-2" role="navigation" aria-label="Primary">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavItem key={to} to={to}>
                {label}
              </NavItem>
            ))}
          </nav>

          {/* Center logo */}
          <div className="flex items-center justify-center">
          <Logo href="/" imgSrc="/logo.png" size="xl" alt="EPIC" className="h-12 w-auto relative top-1" />
          </div>

          {/* Right actions */}
          <div className="flex items-center justify-end gap-2">
            <Link
              to="/search"
              className="hidden lg:flex items-center gap-2 w-[22rem] px-4 py-2 rounded-full border bg-white transition hover:border-neutral-300 hover:shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30"
            >
              <FiSearch />
              <input
                readOnly
                placeholder="Search"
                className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400 cursor-pointer"
              />
            </Link>

            <Link aria-label="Account" to="/account" className="p-2 rounded-lg hover:bg-neutral-100 transition">
              <FiUser className="h-5 w-5" />
            </Link>

            <Link aria-label="Cart" to="/cart" className="p-2 rounded-lg hover:bg-neutral-100 transition">
              <FiShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="h-16 flex md:hidden items-center justify-between gap-3">
          <button
            aria-label="Open menu"
            className="p-2 rounded-lg hover:bg-neutral-100 transition"
            onClick={() => setOpen(true)}
          >
            <FiMenu className="h-5 w-5" />
          </button>

          <Logo href="/" imgSrc="/logo.png" size={30} alt="EPIC" />

          <Link aria-label="Cart" to="/cart" className="p-2 rounded-lg hover:bg-neutral-100 transition">
            <FiShoppingCart className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <Link
            to="/search"
            className="flex items-center gap-2 px-3 py-2 border rounded-full bg-white transition hover:border-neutral-300 hover:shadow-sm"
          >
            <FiSearch className="shrink-0" />
            <input
              readOnly
              placeholder="Search products"
              className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute left-0 top-0 h-full w-[84%] max-w-xs bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="font-black text-lg">Menu</span>
              <button
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-neutral-100 transition"
                onClick={() => setOpen(false)}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <nav className="grid gap-1 text-[15px]" role="navigation" aria-label="Mobile">
              {NAV_ITEMS.map(({ label, to }) => (
                <RouterNavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-neutral-100 transition"
                >
                  {label}
                </RouterNavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
