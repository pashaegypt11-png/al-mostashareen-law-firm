import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { getService, services } from "@/lib/services";
import FaqAccordion from "@/app/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export function generateStaticParams() {
  return ["ar", "en"].flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug }))
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const service = getService(slug);

  if (!service) notFound();

  const title = service.title[isAr ? "ar" : "en"];
  const description = service.description[isAr ? "ar" : "en"];
  const faqItems = faqs[slug]?.[isAr ? "ar" : "en"] ?? [];

  return (
    <main className="py-10 sm:py-16 md:py-24">
      <div className="container-xl max-w-4xl">
        <Link
          href={`/${isAr ? "ar" : "en"}/services`}
          className="inline-flex text-sm font-bold text-brand-700 mb-8"
        >
          ← {isAr ? "جميع الخدمات" : "All services"}
        </Link>
        <section className="bg-paper border border-black/10 rounded-2xl p-5 sm:p-8 md:p-12 shadow-lg">
          <span className="eyebrow block mb-3">
            {isAr ? "خدماتنا القانونية" : "Our Legal Services"}
          </span>
          <h1 className="display text-4xl md:text-5xl text-brand-900 mb-6">{title}</h1>
          <p className="text-lg text-ink-soft leading-relaxed mb-10">{description}</p>

          {faqItems.length === 4 && (
            <section className="mb-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12" dir={isAr ? "rtl" : "ltr"}>
              <div>
                <h2 className="display text-3xl font-bold text-brand-900 mb-3">
                  {isAr ? "أسئلة شائعة" : "Frequently asked questions"}
                </h2>
                <p className="mb-5 text-ink-soft leading-relaxed">
                  {isAr
                    ? "إجابات مبسطة لأكثر ما يسأل عنه عملاؤنا"
                    : "Plain-language answers to what clients ask most"}
                </p>
                <Link
                  href={`/${isAr ? "ar" : "en"}/contact`}
                  className="font-bold text-gold-700 underline decoration-gold-300 underline-offset-4"
                >
                  {isAr ? "حجز استشارة" : "Book a consultation"}
                </Link>
              </div>
              <FaqAccordion items={faqItems} locale={isAr ? "ar" : "en"} />
            </section>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+201110666933" className="btn btn-gold">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              {isAr ? "اتصل الآن" : "Call Now"}
            </a>
            <Link href={`/${isAr ? "ar" : "en"}/contact`} className="btn btn-outline">
              {isAr ? "حجز استشارة" : "Book Consultation"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
