import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

export type FloatingActionsProps = {
  locale: "ar" | "en";
};

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.4 15l-1.1 4.02 4.12-1.08A9.85 9.85 0 1 0 12.04 2Zm0 18.02c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-2.44.64.65-2.38-.2-.31A8.14 8.14 0 1 1 12.04 20.02Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function FloatingActions({ locale }: FloatingActionsProps) {
  const isAr = locale === "ar";
  const phoneHref = "tel:+201110666933";
  const message = isAr
    ? "السلام عليكم، أود الاستفسار عن استشارة قانونية."
    : "Hello, I would like to inquire about a legal consultation.";
  const whatsappHref = `https://wa.me/201110666933?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
        className={`fixed bottom-6 z-[60] hidden h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg transition-transform hover:scale-105 md:flex ${
          isAr ? "left-6" : "right-6"
        }`}
      >
        <WhatsAppIcon size={28} />
      </a>

      <nav
        aria-label={isAr ? "إجراءات التواصل السريعة" : "Quick contact actions"}
        className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-3 border-t border-gold-300 bg-cream pb-[env(safe-area-inset-bottom)] md:hidden"
        dir={isAr ? "rtl" : "ltr"}
      >
        <a
          href={phoneHref}
          aria-label={isAr ? "اتصل بالمكتب" : "Call the firm"}
          className="flex min-h-16 flex-col items-center justify-center gap-1 border-e border-gold-300 text-brand-900"
        >
          <Phone size={21} strokeWidth={2} aria-hidden="true" />
          <span className="text-xs font-bold">{isAr ? "اتصل" : "Call"}</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isAr ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
          className="flex min-h-16 flex-col items-center justify-center gap-1 border-e border-gold-300 text-brand-900"
        >
          <WhatsAppIcon size={21} />
          <span className="text-xs font-bold">{isAr ? "واتساب" : "WhatsApp"}</span>
        </a>

        <Link
          href={`/${locale}/contact`}
          aria-label={isAr ? "احجز استشارة قانونية" : "Book a legal consultation"}
          className="flex min-h-16 flex-col items-center justify-center gap-1 bg-gold-300 text-brand-950"
        >
          <CalendarDays size={21} strokeWidth={2} aria-hidden="true" />
          <span className="text-xs font-bold">{isAr ? "احجز استشارة" : "Book"}</span>
        </Link>
      </nav>
    </>
  );
}
