import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  Phone,
  FileText,
  GraduationCap,
  Handshake,
  Scale,
} from "lucide-react";
import { experience, professionalStatus, qualifications } from "@/config/about";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const qualificationHeading = isAr ? "المؤهلات والعضويات" : "Qualifications & memberships";
  const professionalStatusHeading = isAr ? "الصفة المهنية" : "Professional standing";
  const experienceHeading = isAr ? "الخبرة المهنية" : "Professional experience";
  const experienceIcons = [Briefcase, Building2, Handshake, FileText];
  const professionalIcons = [Scale, BadgeCheck, Briefcase];

  return (
    <main className="flex-1">
      <section className="border-t border-gold-300/70 py-12 md:py-20">
        <div className="container-xl">
          <h1 className="display text-3xl md:text-[32px] font-serif font-bold text-brand-900 text-center">
            {isAr ? "من نحن" : "About Us"}
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-gold-500"></div>

          <div className="mt-8 grid items-stretch gap-6 sm:gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl border border-black/10 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Shaimaa Zulfiqar Attorney Portrait"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            <div className="flex">
              <div className="flex w-full flex-col justify-center rounded-2xl border border-gold-200 bg-paper p-7 shadow-sm md:p-10">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
                  {isAr ? "السيرة الذاتية الرسمية" : "Official Biography"}
                </h2>
                <p className="text-lg md:text-[17px] leading-[1.9] text-ink prose-legal">
                  {isAr
                    ? "المستشارة شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون."
                    : "Ms. Shaimaa Zulfiqar is a lawyer before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court. With more than 30 years of experience in the legal profession, she provides — through AL MOSTASHAREEN LAW FIRM — legal representation and specialized consulting services to individuals and companies, with professionalism and a careful commitment to protecting rights and interests in accordance with the law."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold-300/70 bg-[var(--color-paper)] py-12 md:py-20">
        <div className="container-xl">
          <h2 className="text-[28px] md:text-[32px] font-serif font-bold text-brand-900">
            {qualificationHeading}
          </h2>
          <div className="mt-4 h-px w-12 bg-gold-500"></div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-900 mb-5">
                {isAr ? "المؤهلات العلمية" : "Academic qualifications"}
              </h3>
              <div className="grid gap-4">
                {qualifications.map((qualification) => (
                  <div
                    key={qualification.en}
                    className="flex items-start gap-4 rounded-xl border border-gold-200 bg-paper p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50">
                      <GraduationCap size={20} strokeWidth={2} className="text-brand-700" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-bold text-brand-900">
                        {qualification[isAr ? "ar" : "en"]}
                      </p>
                      {qualification.detail && (
                        <p className="mt-1 text-sm md:text-base text-ink-soft">
                          {qualification.detail[isAr ? "ar" : "en"]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-900 mb-5">
                {professionalStatusHeading}
              </h3>
              <div className="grid gap-4">
                {professionalStatus.map((status, index) => {
                  const StatusIcon = professionalIcons[index];
                  return (
                    <div
                      key={status.en}
                      className="flex items-start gap-4 rounded-xl border border-gold-200 bg-paper p-5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50">
                        <StatusIcon size={20} strokeWidth={2} className="text-brand-700" aria-hidden="true" />
                      </div>
                      <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                        {status[isAr ? "ar" : "en"]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {experience.length > 0 && (
        <section className="border-t border-gold-300/70 bg-cream py-12 md:py-20">
          <div className="container-xl">
            <h2 className="text-[28px] md:text-[32px] font-serif font-bold text-brand-900">
              {experienceHeading}
            </h2>
            <div className="mt-4 h-px w-12 bg-gold-500"></div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {experience.map((item, index) => {
                const ExperienceIcon = experienceIcons[index];
                return (
                  <div
                    key={item.en}
                    className="flex min-h-[132px] items-start gap-4 rounded-xl border border-gold-200 bg-paper p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50">
                      <ExperienceIcon size={20} strokeWidth={2} className="text-brand-700" aria-hidden="true" />
                    </div>
                    <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                      {item[isAr ? "ar" : "en"]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-gold-300/70 bg-brand-900 py-12 md:py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-serif font-bold text-cream mb-4">
            {isAr ? "هل تحتاج إلى استشارة قانونية؟" : "Do you need legal advice?"}
          </h2>
          <p className="mb-8 text-cream/80">
            {isAr
              ? "مكتب المستشارين للمحاماة والاستشارات القانونية في خدمتك"
              : "AL MOSTASHAREEN LAW FIRM is at your service"}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+201110666933" className="btn btn-gold">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              {isAr ? "اتصل الآن" : "Call Now"}
            </a>
            <Link href={`/${locale}/contact`} className="btn btn-outline-light">
              {isAr ? "حجز استشارة" : "Book Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}