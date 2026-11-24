import Link from "next/link";
import Image from "next/image";
import FloatingActions from "@/app/components/FloatingActions";
import MobileMenu from "@/app/components/MobileMenu";

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
    <div className="min-h-screen flex flex-col bg-cream text-ink pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0" dir={isAr ? "rtl" : "ltr"}>
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

          <nav className="hidden lg:flex items-center gap-6 font-sans text-sm font-medium">
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
              className="hidden items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-800 text-brand-900 text-sm font-semibold hover:bg-brand-900 hover:text-cream transition-colors sm:flex"
            >
              {isAr ? "English" : "العربية"}
            </Link>
            <Link href={`/${locale}/contact`} className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-5 text-sm">
              {nav.book}
            </Link>
            <MobileMenu locale={isAr ? "ar" : "en"} />
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
                <li>{isAr
                  ? "مواعيد العمل: يوميًا من 9 صباحًا حتى 6 مساءً — الجمعة إجازة"
                  : "Working hours: Daily 9:00 AM – 6:00 PM — Closed on Fridays"}</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/20 text-center text-xs text-cream/60">
            {isAr ? "جميع الحقوق محفوظة © 2026" : "All rights reserved © 2026"}
          </div>
        </div>
      </footer>
      <FloatingActions locale={isAr ? "ar" : "en"} />
    </div>
  );
}
