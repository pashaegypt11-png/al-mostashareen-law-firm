import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";

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

  return (
    <main className="py-16 md:py-24">
      <div className="container-xl max-w-4xl">
        <Link
          href={`/${isAr ? "ar" : "en"}/services`}
          className="inline-flex text-sm font-bold text-brand-700 mb-8"
        >
          ← {isAr ? "جميع الخدمات" : "All services"}
        </Link>
        <section className="bg-paper border border-black/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <span className="eyebrow block mb-3">
            {isAr ? "خدماتنا القانونية" : "Our Legal Services"}
          </span>
          <h1 className="display text-4xl md:text-5xl text-brand-900 mb-6">{title}</h1>
          <p className="text-lg text-ink-soft leading-relaxed mb-10">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+201110666933" className="btn btn-gold">
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
