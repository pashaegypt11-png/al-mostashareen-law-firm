
export default async function SuccessStoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const t = {
    successTitle: isAr ? "قصص نجاحنا" : "Success Stories",
    stories: isAr ? [
      {
        title: "قضية تعويضات مدنية",
        desc: "تمت تسوية قضية تعويضات مدنية بقيمة 5 ملايين جنيه بعد 18 شهرًا من التقاضي، مع حماية حقوق العميل بالكامل.",
      },
      {
        title: "قضية جنائية",
        desc: "تم إبراء عميل في قضية جنائية بعد 14 شهرًا من المتابعة، مع حماية حقوقه من التهم الموجهة إليه.",
      },
      {
        title: "قضية دستورية",
        desc: "تم إلغاء حكم في قضية دستورية بعد 16 شهرًا من المناقشة، مع تأكيد دستورية التشريع.",
      },
      {
        title: "قضية تجارية",
        desc: "تم تسوية قضية تجارية بقيمة 3 ملايين جنيه بعد 14 شهرًا من المفاوضات.",
      },
    ] : [
      {
        title: "Civil Compensation Case",
        desc: "A civil compensation case worth 5 million EGP was successfully settled after 18 months of litigation, fully protecting the client's rights.",
      },
      {
        title: "Criminal Case",
        desc: "A client was acquitted in a criminal case after 14 months of follow-up, protecting his rights from the charges brought against him.",
      },
      {
        title: "Constitutional Case",
        desc: "A ruling was annulled in a constitutional case after 16 months of discussion, confirming the constitutionality of the legislation.",
      },
      {
        title: "Commercial Case",
        desc: "A commercial case worth 3 million EGP was settled after 14 months of negotiations.",
      },
    ],
  };

  return (
    <main className="flex-1">
      <section className="py-12 md:py-28">
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.stories.map((story, i) => (
              <div key={i} className="bg-paper p-8 rounded-lg border border-brand-100 shadow-sm animate-rise">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-gold-200 flex items-center justify-center">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-ink-soft leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
