
 "use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function SuccessStoriesPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "ar";
  const isAr = locale === "ar";
  const [category, setCategory] = useState("all");

  const t = {
    successTitle: isAr ? "قصص نجاحنا" : "Success Stories",
    stories: isAr ? [
      {
        category: "civil",
        title: "قضية تعويضات مدنية",
        desc: "تمت تسوية قضية تعويضات مدنية بقيمة 5 ملايين جنيه بعد 18 شهرًا من التقاضي، مع حماية حقوق العميل بالكامل.",
      },
      {
        category: "criminal",
        title: "قضية جنائية",
        desc: "تم إبراء عميل في قضية جنائية بعد 14 شهرًا من المتابعة، مع حماية حقوقه من التهم الموجهة إليه.",
      },
      {
        category: "constitutional",
        title: "قضية دستورية",
        desc: "تم إلغاء حكم في قضية دستورية بعد 16 شهرًا من المناقشة، مع تأكيد دستورية التشريع.",
      },
      {
        category: "commercial",
        title: "قضية تجارية",
        desc: "تم تسوية قضية تجارية بقيمة 3 ملايين جنيه بعد 14 شهرًا من المفاوضات.",
      },
    ] : [
      {
        category: "civil",
        title: "Civil Compensation Case",
        desc: "A civil compensation case worth 5 million EGP was successfully settled after 18 months of litigation, fully protecting the client's rights.",
      },
      {
        category: "criminal",
        title: "Criminal Case",
        desc: "A client was acquitted in a criminal case after 14 months of follow-up, protecting his rights from the charges brought against him.",
      },
      {
        category: "constitutional",
        title: "Constitutional Case",
        desc: "A ruling was annulled in a constitutional case after 16 months of discussion, confirming the constitutionality of the legislation.",
      },
      {
        category: "commercial",
        title: "Commercial Case",
        desc: "A commercial case worth 3 million EGP was settled after 14 months of negotiations.",
      },
    ],
  };

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="block text-sm font-semibold text-gold-600 mb-2 uppercase tracking-wider">
              {t.successTitle}
            </span>
            <h1 className="display text-3xl md:text-4xl text-brand-900 mb-6">
              {t.successTitle}
            </h1>
            <p className="text-lg text-ink-soft max-w-3xl mx-auto prose-legal">
              {isAr
                ? "قصص نجاحنا هي أمثلة حقيقية على نجاح العملاء في القضايا التي handleها مكتبنا، مع الحفاظ على سرية المعلومات وحماية الخصوصية."
                : "Success stories are real examples of client success in cases handled by our firm, while maintaining information confidentiality and protecting privacy."}
            </p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label={isAr ? "تصنيف القصص" : "Story categories"}>
            {[
              ["all", isAr ? "الكل" : "All"],
              ["civil", isAr ? "مدنية" : "Civil"],
              ["criminal", isAr ? "جنائية" : "Criminal"],
              ["constitutional", isAr ? "دستورية" : "Constitutional"],
              ["commercial", isAr ? "تجارية" : "Commercial"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setCategory(value)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold-500 ${category === value ? "border-brand-900 bg-brand-900 text-cream" : "border-brand-200 bg-paper text-brand-800 hover:border-gold-500"}`}
                aria-pressed={category === value}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" aria-live="polite">
            {t.stories.filter((story) => category === "all" || story.category === category).map((story, i) => (
              <article key={`${story.category}-${i}`} className="bg-paper p-8 rounded-xl border border-brand-100 shadow-sm animate-rise">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-300 bg-gold-100 text-gold-700">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-900 mb-3">
                    {story.title}
                  </h2>
                  <p className="text-ink-soft leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
