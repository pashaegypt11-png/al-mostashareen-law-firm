import Link from "next/link";
import { AttorneyPortrait } from "@/app/components/AttorneyPortrait";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

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
              <AttorneyPortrait
                name={isAr ? "المستشار شيماء ذو الفقار" : "Shaimaa Zulfiqar"}
                isArabic={isAr}
              />
              <div className="mt-8 text-center">
                <span className="inline-block bg-gold-100 text-gold-800 px-4 py-1 rounded-full text-sm font-bold">
                  30+ {isAr ? "عامًا" : "years"}
                </span>
                <p className="mt-2 text-sm text-ink-soft font-serif italic">
                  {isAr ? "من الخبرة القانونية" : "of legal experience"}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
                  {isAr ? "السيرة الذاتية الرسمية" : "Official Biography"}
                </h2>
                <p className="text-xl text-ink prose-legal">
                    {isAr ? "المستشار شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون."
                    : "Ms. Shaimaa Zulfiqar is a lawyer before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court. With more than 30 years of experience in the legal profession, she provides — through AL MOSTASHAREEN LAW FIRM — legal representation and specialized consulting services to individuals and companies, with professionalism and a careful commitment to protecting rights and interests in accordance with the law."}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                  {isAr ? "المؤهلات المهنية" : "Professional Qualifications"}
                </h2>
                <ol className="relative border-s-2 border-gold-300 ps-7 space-y-6" role="list">
                  {isAr ? (
                      <>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>محامية أمام محكمة النقض</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>محامية أمام المحاكم الإدارية</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>محامية أمام المحكمة الدستورية العليا</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>أكثر من 30 عامًا من الخبرة القانونية</span></li>
                      </>
                    ) : (
                        <>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>Lawyer before the Court of Cassation</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>Lawyer before the Administrative Courts</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>Lawyer before the Supreme Constitutional Court</span></li>
                        <li className="relative text-lg text-ink-soft"><span className="absolute -start-[38px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper shadow-sm" aria-hidden="true"></span><span>More than 30 years of legal experience</span></li>
                      </>
                    )}
                </ol>
              </div>
              <div className="mt-16 text-center">
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