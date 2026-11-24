"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MobileMenuProps = {
  locale: "ar" | "en";
};

export default function MobileMenu({ locale }: MobileMenuProps) {
  const isAr = locale === "ar";
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const links = isAr
    ? [
        ["الصفحة الرئيسية", `/${locale}`],
        ["من نحن", `/${locale}/about`],
        ["الخدمات", `/${locale}/services`],
        ["آراء العملاء", `/${locale}/testimonials`],
        ["قصص النجاح", `/${locale}/success-stories`],
        ["تواصل معنا", `/${locale}/contact`],
      ]
    : [
        ["Home", `/${locale}`],
        ["About Us", `/${locale}/about`],
        ["Services", `/${locale}/services`],
        ["Testimonials", `/${locale}/testimonials`],
        ["Success Stories", `/${locale}/success-stories`],
        ["Contact", `/${locale}/contact`],
      ];

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={isAr ? "فتح القائمة" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-800 text-brand-900"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] bg-brand-950/35"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
        >
          <div
            ref={panelRef}
            id="mobile-navigation"
            dir={isAr ? "rtl" : "ltr"}
            className={`absolute inset-y-0 w-[min(86vw,22rem)] bg-cream px-5 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] shadow-2xl ${
              isAr ? "start-0" : "start-0"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={isAr ? "التنقل" : "Navigation"}
          >
            <div className="flex h-16 items-center justify-between border-b border-gold-300">
              <span className="font-bold text-brand-900">{isAr ? "القائمة" : "Menu"}</span>
              <button
                type="button"
                aria-label={isAr ? "إغلاق القائمة" : "Close menu"}
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-800 text-brand-900"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <nav className="grid gap-1 py-5">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-lg px-3 text-brand-900 hover:bg-brand-50"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="grid gap-3 border-t border-gold-300 pt-5">
              <Link
                href={isAr ? "/en" : "/ar"}
                onClick={closeMenu}
                className="btn btn-outline w-full"
              >
                {isAr ? "English" : "العربية"}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={closeMenu}
                className="btn btn-primary w-full"
              >
                {isAr ? "حجز استشارة" : "Book Consultation"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
