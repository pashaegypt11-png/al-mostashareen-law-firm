import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: {
    template: "%s | المستشارين للمحاماة",
    default: "المستشارين للمحاماة والاستشارات القانونية",
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const nav = {
    home: isAr ? "الصفحة الرئيسية" : "Home",
    about: isAr ? "من نحن" : "About Us",
    services: isAr ? "الخدمات" : "Services",
    contact: isAr ? "تواصل معنا" : "Contact Us",
    testimonials: isAr ? "آراء العملاء" : "Testimonials",
    stories: isAr ? "قصص النجاح" : "Success Stories",
  };

  const firmName = isAr
    ? "المستشارين للمحاماة والاستشارات القانونية"
    : "AL MOSTASHAREEN LAW FIRM";

  const tagline = isAr
    ? "محامية بالنقض والإدارية والدستورية العليا"
    : "Lawyer before the Court of Cassation, Administrative Courts, and Supreme Constitutional Court";

  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/10">
          <div className="container-xl flex items-center justify-between py-4 gap-4">
            {/* Brand */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 shrink-0"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-500 bg-brand-900 text-gold-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18M8 21h8M3 7h18M5 7l-2 6a3.5 3.5 0 0 0 7 0L8 7M16 7l-2 6a3.5 3.5 0 0 0 7 0l-2-6" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block font-serif font-bold text-brand-900 text-sm md:text-base">
                  {firmName}
                </span>
                <span className="block text-[10px] md:text-xs text-ink-soft">
                  {tagline}
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 font-serif text-sm font-medium">
              <Link href={`/${locale}`} className="text-brand-900 hover:text-gold-600 transition-colors">
                {nav.home}
              </Link>
              <Link href={`/${locale}/about`} className="text-ink-soft hover:text-brand-800 transition-colors">
                {nav.about}
              </Link>
              <Link href={`/${locale}/services`} className="text-ink-soft hover:text-brand-800 transition-colors">
                {nav.services}
              </Link>
              <Link href={`/${locale}/testimonials`} className="text-ink-soft hover:text-brand-800 transition-colors">
                {nav.testimonials}
              </Link>
              <Link href={`/${locale}/success-stories`} className="text-ink-soft hover:text-brand-800 transition-colors">
                {nav.stories}
              </Link>
              <Link href={`/${locale}/contact`} className="text-ink-soft hover:text-brand-800 transition-colors">
                {nav.contact}
              </Link>
            </nav>

            {/* Language Switcher + CTA */}
            <div className="flex items-center gap-3">
              <Link
                href={isAr ? "/en" : "/ar"}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-800 text-brand-900 text-sm font-semibold hover:bg-brand-900 hover:text-cream transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {isAr ? "English" : "العربية"}
              </Link>
              <a
                href={`/${locale}/contact`}
                className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-5 text-sm"
              >
                {isAr ? "حجز استشارة" : "Book Consultation"}
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-auto border-t border-black/10 bg-brand-950 text-cream">
          <div className="container-xl py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand column */}
              <div className="lg:col-span-2">
                <p className="font-serif font-bold text-2xl mb-3 text-gold-400">
                  {firmName}
                </p>
                <p className="text-cream/80 max-w-md leading-relaxed">
                  {tagline}
                  {isAr
                    ? " — خبرة تزيد على 30 عامًا في التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات."
                    : " — More than 30 years of experience in legal representation and specialized consulting for individuals and companies."}
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://wa.me/201110666933"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="h-10 w-10 rounded-full border border-cream/30 flex items-center justify-center hover:bg-gold-500 hover:text-brand-950 hover:border-gold-500 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FSjhrwRc6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="h-10 w-10 rounded-full border border-cream/30 flex items-center justify-center hover:bg-gold-500 hover:text-brand-950 hover:border-gold-500 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-serif font-bold text-gold-400 mb-4">
                  {isAr ? "روابط سريعة" : "Quick Links"}
                </h4>
                <ul className="space-y-3 text-sm text-cream/80">
                  <li><Link href={`/${locale}`} className="hover:text-gold-400 transition-colors">{nav.home}</Link></li>
                  <li><Link href={`/${locale}/about`} className="hover:text-gold-400 transition-colors">{nav.about}</Link></li>
                  <li><Link href={`/${locale}/services`} className="hover:text-gold-400 transition-colors">{nav.services}</Link></li>
                  <li><Link href={`/${locale}/contact`} className="hover:text-gold-400 transition-colors">{nav.contact}</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-serif font-bold text-gold-400 mb-4">
                  {isAr ? "معلومات التواصل" : "Contact"}
                </h4>
                <ul className="space-y-3 text-sm text-cream/80">
                  <li>
                    <a href="tel:+201110666933" className="hover:text-gold-400 transition-colors block">
                      01110666933
                    </a>
                  </li>
                  <li>
                    <a href="tel:+201001693026" className="hover:text-gold-400 transition-colors block">
                      01001693026
                    </a>
                  </li>
                  <li>
                    <a href="mailto:shaimaazulfikar@gmail.com" className="hover:text-gold-400 transition-colors break-all">
                      shaimaazulfikar@gmail.com
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="https://maps.app.goo.gl/1LmQuWdBN1fjTe9JA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:underline"
                    >
                      {isAr ? "افتح الموقع على خرائط جوجل" : "Open location in Google Maps"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-cream/20 text-center text-xs text-cream/60">
              {isAr
                ? "جميع الحقوق محفوظة © 2026 مكتب المستشارين للمحاماة والاستشارات القانونية"
                : "All rights reserved © 2026 AL MOSTASHAREEN LAW FIRM"}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
