import Link from "next/link";
import Image from "next/image";
import { services, getContent, type Locale } from "@/lib/content";

const serviceImages: Record<string, string> = {
  "civil-litigation": "/services/civil-litigation.jpg",
  "criminal-law": "/services/criminal-law.jpg",
  "family-law": "/services/family-law.jpg",
  "administrative-litigation": "/services/administrative-litigation.jpg",
  "constitutional-court": "/services/constitutional-court.jpg",
  "cassation-appeals": "/services/cassation-appeals.jpg",
  "company-formation": "/services/company-formation.jpg",
  "contracts": "/services/contracts.jpg",
  "commercial-litigation": "/services/commercial-litigation.jpg",
  "tax-disputes": "/services/tax-disputes.jpg",
  "real-estate": "/services/real-estate.jpg",
  "legal-consulting": "/services/legal-consulting.jpg",
};

function ServiceIcon({ slug }: { slug: string }) {
  const paths: Record<string, React.ReactNode> = {
    scales: <><path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM8 21h8" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    family: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M15 16a4 4 0 0 1 6 3v2" /></>,
    building: <><path d="M3 21h18M6 21V7l6-4 6 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" /></>,
    column: <><path d="M3 21h18M5 18h14M6 8h12M4 5h16M8 8v10M12 8v10M16 8v10" /></>,
    gavel: <><path d="m14 13 7-7-3-3-7 7M5 21l9-9M3 21h10M6 11l7 7" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
    chart: <><path d="M3 3v18h18M7 16l4-5 3 3 5-7" /></>,
    percent: <><path d="m19 5-14 14" /><circle cx="7" cy="7" r="2" /><circle cx="17" cy="17" r="2" /></>,
    home: <><path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6" /></>,
    handshake: <><path d="m3 12 4-4 4 4-4 4-4-4Zm14-4 4 4-4 4-4-4 4-4ZM7 8l3-3h4l3 3M7 16l5 5 5-5" /></>,
  };
  const icon = paths[slug] ?? paths.document;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon}
    </svg>
  );
}

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
                  className="card card-hover service-card group relative overflow-hidden"
                  aria-label={sTitle}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={sTitle}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-brand-950/0 transition-colors duration-300 group-hover:bg-brand-950/20" aria-hidden="true"></div>
                  </div>
                  <div className="p-8">
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-300 bg-gold-100 text-gold-700 transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-300 group-hover:text-brand-950">
                      <ServiceIcon slug={service.icon} />
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
