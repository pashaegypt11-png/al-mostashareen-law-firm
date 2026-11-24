import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  FileSignature,
  Gavel,
  Home,
  Landmark,
  MessageSquareText,
  Receipt,
  Scale,
  ScrollText,
  ShieldAlert,
  Users,
} from "lucide-react";
import { services, getContent, type Locale } from "@/lib/content";
import { serviceGroups } from "@/config/serviceGroups";

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
  const iconProps = {
    size: 24,
    strokeWidth: 1.8,
    "aria-hidden": true,
  } as const;

  const icons: Record<string, React.ReactNode> = {
    "civil-litigation": <Scale {...iconProps} />,
    "criminal-law": <ShieldAlert {...iconProps} />,
    "family-law": <Users {...iconProps} />,
    "administrative-litigation": <Landmark {...iconProps} />,
    "constitutional-court": <ScrollText {...iconProps} />,
    "cassation-appeals": <Gavel {...iconProps} />,
    "company-formation": <Building2 {...iconProps} />,
    contracts: <FileSignature {...iconProps} />,
    "commercial-litigation": <Briefcase {...iconProps} />,
    "tax-disputes": <Receipt {...iconProps} />,
    "real-estate": <Home {...iconProps} />,
    "legal-consulting": <MessageSquareText {...iconProps} />,
  };

  return icons[slug] ?? <Briefcase {...iconProps} />;
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

          {serviceGroups.map((group, groupIndex) => {
            const groupServices = group.slugs
              .map((slug) => services.find((service) => service.slug === slug))
              .filter((service) => service !== undefined);

            return (
              <section key={group.title.en}>
                {groupIndex > 0 && (
                  <div className="mb-12 h-px bg-gold-300" aria-hidden="true"></div>
                )}
                <div className="mb-8">
                  <h2 className="display text-3xl md:text-4xl text-brand-900 mb-2">
                    {group.title[locale as Locale]}
                  </h2>
                  <p className="text-ink-soft">
                    {group.subtitle[locale as Locale]}
                  </p>
                </div>

                <div className={
                  groupServices.length === 1
                    ? "grid grid-cols-1 md:max-w-[calc((100%-2rem)/2)] md:mx-auto"
                    : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                }>
                  {groupServices.map((service) => {
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
                              <ServiceIcon slug={service.slug} />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-gold-700 transition-colors">
                            {sTitle}
                          </h3>
                          <p className="text-ink-soft leading-relaxed mb-8 flex-1">
                            {sDesc}
                          </p>
                          <div className="flex items-center gap-2 mt-auto">
                            <span className="text-sm font-bold text-gold-600 flex items-center gap-2">
                              {isAr ? "اعرف المزيد" : "Learn more"}
                              {isAr ? (
                                <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
                              ) : (
                                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                              )}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
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
