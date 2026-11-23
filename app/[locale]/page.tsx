import Link from "next/link";
import Image from "next/image";
import { StatsSection } from "@/app/components/StatsSection";

type Lang = "ar" | "en";

interface Feature {
  title: string;
  desc: string;
}

interface PageContent {
  firmName: string;
  attorney: string;
  title: string;
  headline: string;
  sub: string;
  bioShort: string;
  about: string;
  services: string;
  callNow: string;
  whatsapp: string;
  years: string;
  yearsSub: string;
  why: string;
  whyTitle: string;
  whySub: string;
  features: Feature[];
  ctaTitle: string;
  ctaSub: string;
}

const T: Record<Lang, PageContent> = {
  ar: {
    firmName: "المستشارين للمحاماة والاستشارات القانونية",
    attorney: "المستشار شيماء ذو الفقار",
    title: "محامية بالنقض والإدارية والدستورية العليا",
    headline: "الدفاع القانوني الموثوق بخبرة تزيد على 30 عامًا",
    sub:
      "نقدم خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون.",
    bioShort:
      "المستشار شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة.",
    about: "من نحن",
    services: "خدماتنا",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    years: "30+ عامًا",
    yearsSub: "من الخبرة القانونية",
    why: "لماذا تختار مكتبنا؟",
    whyTitle: "شراكة قانونية موثوقة",
    whySub: "مكتب المستشارين للمحاماة والاستشارات القانونية هو شريكك القانوني الموثوق لحماية حقوقك ومصالحك.",
    features: [
      { title: "خبرة تزيد على 30 عامًا", desc: "تمثيل قانوني أمام جميع المحاكم بما في ذلك محكمة النقض والمحكمة الدستورية العليا والمحاكم الإدارية." },
      { title: "التزام مهني", desc: "دقة في التفاصيل، سرية تامة، والتزام صارم بأخلاقيات المهنة وأحكام القانون." },
      { title: "استشارات للأفراد والشركات", desc: "خدمات قانونية متكاملة للأفراد ورجال الأعمال والشركات في جميع المجالات القانونية." },
    ],
    ctaTitle: "هل تحتاج إلى استشارة قانونية؟",
    ctaSub: "فريقنا القانوني جاهز لمساعدتك في تقييم قضيتك وتقديم الحلول المناسبة.",
  },
  en: {
    firmName: "AL MOSTASHAREEN LAW FIRM",
    attorney: "Shaimaa Zulfiqar",
    title: "Lawyer before the Court of Cassation, Administrative Courts, and Supreme Constitutional Court",
    headline: "Trusted legal defense with more than 30 years of experience",
    sub: "We offer legal representation and specialized consulting services for individuals and companies, with professionalism and care in protecting rights and interests in accordance with the law.",
    bioShort: "Ms. Shaimaa Zulfiqar, Lawyer before the Court of Cassation, Administrative Courts, and Supreme Constitutional Court, with more than 30 years of experience in the legal profession.",
    about: "About Us",
    services: "Services",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    years: "30+ Years",
    yearsSub: "of legal experience",
    why: "Why choose our firm",
    whyTitle: "A trusted legal partnership",
    whySub: "AL MOSTASHAREEN LAW FIRM is your trusted legal partner for protecting your rights and interests.",
    features: [
      { title: "More than 30 years of experience", desc: "Representation before the Court of Cassation, the Supreme Constitutional Court, and Administrative Courts." },
      { title: "Professional commitment", desc: "Attention to detail, full confidentiality, and adherence to professional ethics and the law." },
      { title: "Consulting for individuals and companies", desc: "Comprehensive legal services for individuals and companies across different fields." },
    ],
    ctaTitle: "Do you need legal advice?",
    ctaSub: "Our legal team is ready to help you assess your matter and consider appropriate solutions.",
  },
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const t = T[isAr ? "ar" : "en"];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-brand-50/40 rounded-b-[60%]"></div>
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-rise">
              <span className="eyebrow block mb-4">{t.firmName}</span>
              <h1 className="display text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6 leading-tight">
                {t.headline}
              </h1>
              <p className="text-lg md:text-xl text-ink-soft mb-10 max-w-lg prose-legal">{t.sub}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/about`} className="btn btn-primary">{t.about}</Link>
                <Link href={`/${locale}/services`} className="btn btn-outline">{t.services}</Link>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-ink-soft">
                <span className="flex items-center gap-1">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  {t.callNow}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 animate-rise" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-4 -z-10 bg-gold-300/30 rounded-full blur-lg"></div>
                <div className="relative flex items-center justify-center p-4 rounded-full border-2 border-brand-800 bg-paper shadow-2xl aspect-square md:aspect-[1] aspect-[1.05]">
                  <Image
                    src="/logo.png"
                    alt={t.attorney}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="rounded-full object-contain p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection
        locale={isAr ? "ar" : "en"}
      />

      {/* Attorney Intro */}
      <section className="section py-16 md:py-24 bg-paper">
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 animate-rise">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt={t.attorney}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            <div className="lg:col-span-7 animate-rise">
              <h2 className="display text-3xl md:text-4xl text-brand-900 mb-6">{t.attorney}</h2>
              <p className="text-xl font-serif font-semibold text-brand-800 mb-8">{t.title}</p>
              <div className="bg-gold-100 p-8 rounded-xl border border-gold-200 mb-10">
                <p className="text-lg text-ink prose-legal">{t.bioShort}</p>
              </div>
              <Link href={`/${locale}/about`} className="inline-flex items-center gap-2 text-brand-800 font-bold hover:text-brand-700">
                {isAr ? "اقرأ المزيد" : "Read more"}
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section bg-cream">
        <div className="container-xl">
          <div className="text-center mb-16 animate-rise">
            <span className="eyebrow block mb-2">{t.why}</span>
            <h2 className="display text-3xl md:text-4xl text-brand-900 mb-4">{t.whyTitle}</h2>
            <p className="text-lg text-ink-soft">{t.whySub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((f, i) => (
              <div key={i} className="card card-hover p-8 animate-rise" style={{ animationDelay: `${i * 0.15}s` }}>
                <h3 className="text-xl font-bold text-brand-900 mb-4">{f.title}</h3>
                <p className="text-ink-soft leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-brand-900/5 rounded-bl-[60%] rounded-br-[60%]"></div>
        <div className="container-xl">
          <div className="bg-brand-900 text-white rounded-2xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl md:blur-3xl"></div>
            <div className="text-center md:text-left md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.ctaTitle}</h2>
              <p className="text-white/90 mb-8 max-w-lg">{t.ctaSub}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`tel:+201110666933`} className="btn btn-gold">{t.callNow}</a>
                <Link href={`/${locale}/contact`} className="btn btn-outline brand">{isAr ? "حجز استشارة" : "Book Consultation"}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
