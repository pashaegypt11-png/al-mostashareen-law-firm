import Link from "next/link";
import { services, getContent, type Locale } from "@/lib/content";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const t = getContent(locale as Locale);
  const title = isAr ? "خدماتنا القانونية" : "Our Legal Services";
  const subtitle = isAr
    ? "نقدم مجموعة شاملة من الخدمات القانونية التي تغطي الجوانب المختلفة للمنازعات القانونية للأفراد والشركات."
    : "We provide a comprehensive range of legal services covering the different aspects of legal disputes for individuals and companies.";

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-2">{t.services}</span>
            <h1 className="display text-4xl md:text-5xl text-brand-900 mb-6">
              {title}
            </h1>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto prose-legal">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const sTitle = service.title[locale as Locale];
              const sDesc = service.description[locale as Locale];
              return (
                <Link
                  key={service.slug}
                  href={`/${locale}/services/${service.slug}`}
                  className="card card-hover p-8 group relative overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200 group-hover:border-gold-400 transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-brand-700 group-hover:text-gold-600"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="text-brand-800 font-serif font-bold text-xl">
                      {sTitle.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-gold-700 transition-colors">
                    {sTitle}
                  </h3>
                  <p className="text-ink-soft leading-relaxed mb-8 flex-1">
                    {sDesc}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-sm font-bold text-gold-600 flex items-center gap-2">
                      {isAr ? "اتصل الآن" : "Call now"}
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900">
        <div className="container-xl">
          <div className="bg-gold-100 p-8 md:p-16 rounded-2xl border border-gold-200 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-brand-950 mb-4">
              {isAr ? "هل تحتاج إلى استشارة قانونية؟" : "Do you need legal advice?"}
            </h2>
            <p className="text-brand-900/80 mb-8 max-w-lg">
              {isAr
                ? "فريقنا القانوني جاهز لمساعدتك في تقييم قضيتك وتقديم الحلول المناسبة."
                : "Our legal team is ready to help you assess your matter and consider appropriate solutions."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:+201110666933`}
                className="btn btn-gold"
              >
                {isAr ? "اتصل الآن" : "Call Now"}
              </a>
              <Link href={`/${locale}/contact`} className="btn btn-outline brand">
                {isAr ? "حجز استشارة" : "Book Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
