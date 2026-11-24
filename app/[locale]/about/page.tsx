import Link from "next/link";
import Image from "next/image";
import { Briefcase, Building2, FileText, Handshake } from "lucide-react";
import StatsSection from "@/app/components/StatsSection";
import { experience, professionalStatus, qualifications } from "@/config/about";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const qualificationHeading = isAr ? "المؤهلات والعضويات" : "Qualifications & memberships";
  const professionalStatusHeading = isAr ? "الصفة المهنية" : "Professional standing";
  const experienceHeading = isAr ? "الخبرة المهنية" : "Professional experience";
  const experienceIcons = [Briefcase, Building2, Handshake, FileText];

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <h1 className="display text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-12 text-center">
            {isAr ? "من نحن" : "About Us"}
          </h1>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Attorney Portrait */}
            <div className="lg:col-span-5">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Shaimaa Zulfiqar Attorney Portrait"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
                  {isAr ? "السيرة الذاتية الرسمية" : "Official Biography"}
                </h2>
                <p className="text-xl text-ink prose-legal">
                    {isAr ? "المستشارة شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون."
                    : "Ms. Shaimaa Zulfiqar is a lawyer before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court. With more than 30 years of experience in the legal profession, she provides — through AL MOSTASHAREEN LAW FIRM — legal representation and specialized consulting services to individuals and companies, with professionalism and a careful commitment to protecting rights and interests in accordance with the law."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-12">
              <StatsSection locale={isAr ? "ar" : "en"} />
            </div>

            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                  {qualificationHeading}
                </h2>
                <ul className="space-y-4 text-lg text-ink-soft">
                  {qualifications.map((qualification) => (
                    <li key={qualification.en} className="flex items-start gap-4">
                      <span className="text-brand-700 font-bold text-xl">✓</span>
                      <span>
                        {qualification[isAr ? "ar" : "en"]}
                        {qualification.detail && (
                          <span className="block text-base text-ink-soft">
                            {qualification.detail[isAr ? "ar" : "en"]}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-serif font-bold text-brand-900 mt-10 mb-5">
                  {professionalStatusHeading}
                </h3>
                <ul className="space-y-4 text-lg text-ink-soft">
                  {professionalStatus.map((status) => (
                    <li key={status.en} className="flex items-start gap-4">
                      <span className="text-gold-600 font-bold text-xl">•</span>
                      <span>{status[isAr ? "ar" : "en"]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {experience.length > 0 && (
              <div className="lg:col-span-12">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                  {experienceHeading}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.map((item, index) => {
                    const ExperienceIcon = experienceIcons[index];
                    return (
                      <div
                        key={item.en}
                        className="bg-paper p-6 rounded-xl border border-gold-200 flex items-start gap-4"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                          <ExperienceIcon size={20} strokeWidth={2} className="text-brand-700" aria-hidden="true" />
                        </div>
                        <p className="text-lg text-ink-soft leading-relaxed">
                          {item[isAr ? "ar" : "en"]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="lg:col-span-5">
              <div className="mt-0 text-center">
                <div className="bg-gold-100 p-8 rounded-xl border border-gold-200 text-center md:text-left">
                  <h2 className="text-3xl font-serif font-bold text-brand-950 mb-4">
                    {isAr ? "هل تحتاج إلى استشارة قانونية؟" : "Do you need legal advice?"}
                  </h2>
                  <p className="text-brand-900/80 mb-8 max-w-lg">
                    {isAr ? "مكتب المستشارين للمحاماة والاستشارات القانونية في خدمتك" : "AL MOSTASHAREEN LAW FIRM is at your service"}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+201110666933" className="btn btn-gold">
                      {isAr ? "اتصل الآن" : "Call Now"}
                    </a>
                    <Link href={`/${locale}/contact`} className="btn btn-outline brand">
                      {isAr ? "حجز استشارة" : "Book Consultation"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}