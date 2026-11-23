import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/firm";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const nav = {
    home: isAr ? "الصفحة الرئيسية" : "Home",
    about: isAr ? "من نحن" : "About Us",
    services: isAr ? "الخدمات" : "Services",
    testimonials: isAr ? "آراء العملاء" : "Testimonials",
    stories: isAr ? "قصص النجاح" : "Success Stories",
    contact: isAr ? "تواصل معنا" : "Contact",
    book: isAr ? "حجز استشارة" : "Book Consultation",
  };

  const tagline = isAr
    ? "محامية بالنقض والإدارية والدستورية العليا"
    : "Lawyer before the Court of Cassation";

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink" dir={isAr ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/10">
        <div className="container-xl flex items-center justify-between py-4 gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt={isAr ? "شعار المستشارين للمحاماة" : "AL MOSTASHAREEN LAW FIRM logo"}
              width={56}
              height={56}
              priority
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-serif font-bold text-brand-900 text-sm md:text-base">
                {isAr ? "المستشارين للمحاماة" : "AL MOSTASHAREEN"}
              </span>
              <span className="block text-[10px] md:text-xs text-ink-soft">
                {tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-serif text-sm font-medium">
            <Link href={`/${locale}`} className="text-brand-900 hover:text-gold-600 transition-colors">{nav.home}</Link>
            <Link href={`/${locale}/about`} className="text-ink-soft hover:text-brand-800 transition-colors">{nav.about}</Link>
            <Link href={`/${locale}/services`} className="text-ink-soft hover:text-brand-800 transition-colors">{nav.services}</Link>
            <Link href={`/${locale}/testimonials`} className="text-ink-soft hover:text-brand-800 transition-colors">{nav.testimonials}</Link>
            <Link href={`/${locale}/success-stories`} className="text-ink-soft hover:text-brand-800 transition-colors">{nav.stories}</Link>
            <Link href={`/${locale}/contact`} className="text-ink-soft hover:text-brand-800 transition-colors">{nav.contact}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={isAr ? "/en" : "/ar"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-800 text-brand-900 text-sm font-semibold hover:bg-brand-900 hover:text-cream transition-colors"
            >
              {isAr ? "English" : "العربية"}
            </Link>
            <Link href={`/${locale}/contact`} className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-5 text-sm">
              {nav.book}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-auto border-t border-black/10 bg-brand-950 text-cream py-12 md:py-16">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <p className="font-serif font-bold text-2xl mb-3 text-gold-400">{isAr ? "المستشارين للمحاماة والاستشارات القانونية" : "AL MOSTASHAREEN LAW FIRM"}</p>
              <p className="text-cream/80 max-w-md leading-relaxed">{tagline}</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-gold-400 mb-4">{isAr ? "روابط سريعة" : "Quick Links"}</h4>
              <ul className="space-y-3 text-sm text-cream/80">
                <li><Link href={`/${locale}`} className="hover:text-gold-400 transition-colors">{nav.home}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-gold-400 transition-colors">{nav.about}</Link></li>
                <li><Link href={`/${locale}/services`} className="hover:text-gold-400 transition-colors">{nav.services}</Link></li>
                <li><Link href={`/${locale}/contact`} className="hover:text-gold-400 transition-colors">{nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-gold-400 mb-4">{isAr ? "تواصل" : "Contact"}</h4>
              <ul className="space-y-3 text-sm text-cream/80">
                <li><a href="tel:01110666933" className="hover:text-gold-400 transition-colors">01110666933</a></li>
                <li><a href="mailto:shaimaazulfikar@gmail.com" className="hover:text-gold-400 transition-colors break-all">shaimaazulfikar@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/20 text-center text-xs text-cream/60">
            {isAr ? "جميع الحقوق محفوظة © 2026" : "All rights reserved © 2026"}
          </div>
        </div>
      </footer>
      <a
        href={whatsappLink(isAr ? "ar" : "en")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
        className="fixed bottom-5 end-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-white/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold-500"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0012.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.59 5.95L.04 24l6.27-1.64a11.9 11.9 0 005.77 1.47h.01c6.57 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43zm-8.44 18.33h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.98 1-3.63-.23-.37a9.85 9.85 0 01-1.51-5.28 9.88 9.88 0 019.87-9.87 9.8 9.8 0 017 2.89 9.8 9.8 0 012.89 7c0 5.45-4.44 9.87-9.89 9.87zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
