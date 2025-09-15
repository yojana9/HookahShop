import React from "react";
import { Link } from "react-router-dom";
import { SOCIALS, NAV_ITEMS, COMPANY_LINKS, CONTACT } from "../../../data/site";
import Header from "@/components/atoms/header";

const SocialButton = ({ href, label, Icon }) => (
  <a
    aria-label={label}
    href={href}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-black hover:text-white hover:scale-105"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const SmartLink = ({ to, children, className = "" }) =>
  to?.startsWith("/")
    ? <Link to={to} className={className}>{children}</Link>
    : <a href={to || "#"} className={className}>{children}</a>;

const FooterList = ({ title, items }) => (
  <div>
    <Header text={title} size="small" className="tracking-[0.18em] uppercase text-neutral-800" />
    <ul className="mt-5 space-y-2 text-sm text-neutral-700">
      {items.map(({ label, to }) => (
        <li key={label}>
          <SmartLink to={to} className="hover:underline underline-offset-4">
            {label}
          </SmartLink>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 relative z-0">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
          {/* Brand + Socials */}
          <div>
            <Header text="EPIC" className="text-neutral-800" />
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Shop + Company Links */}
          <FooterList title="Shop" items={NAV_ITEMS} />
          <FooterList title="Company" items={COMPANY_LINKS} />

          {/* Contact Info */}
          <div>
            <Header
              text="Get in touch"
              size="small"
              className="tracking-[0.18em] uppercase text-neutral-800"
            />
            <address className="not-italic mt-5 space-y-2 text-sm text-neutral-700">
              {CONTACT.addressLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <div>{CONTACT.phone}</div>
              <div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:underline underline-offset-4"
                >
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <hr className="mt-12 border-neutral-200" />

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Epic Distribution Pvt. Ltd., All Rights Reserved
          </div>
          <div className="text-xs text-neutral-600 md:text-right">
            Made by:{" "}
            <a href="#" className="font-semibold hover:underline underline-offset-4">
              Lishnu Tech Pvt. Ltd.
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
