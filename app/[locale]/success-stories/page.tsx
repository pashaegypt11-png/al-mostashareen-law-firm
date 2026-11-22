export default function SuccessStoriesPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-2">{t.successTitle}</span>
            <h1 className="display text-3xl md:text-4xl text-brand-900 mb-6">
              قصص نجاحنا
            </h2>
            <p className="text-lg text-ink-soft max-w-3xl mx-auto prose-legal">
              قصص نجاحنا هي أمثلة حقيقية على نجاح العملاء في القضايا التي handledها مكتبنا، مع الحفاظ على سرية المعلومات وحماية الخصوصية.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-paper p-8 rounded-lg border border-brand-100 shadow-sm animate-rise">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-gold-200 flex items-center justify-center">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-900 mb-2">
                      {t.successTitleItems[i]}
                    </h3>
                    <p className="text-ink-soft leading-relaxed">
                      {t.successStories[i]}
                    </p>
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

const t = {
  successTitle: "قصص نجاحنا",
  successTitleItems: [
    "قضية تعويضات بقيمة 5 مليون ريال",
    "براءة اختراع في قضية تجارية",
    "إبراء طرف في قضية جنائية",
    "إلغاء حكم في قضية دستورية",
    "تسوية مالية في قضية تجارية",
    "إبراء عميل في قضية تجارية كبرى",
    "إلغاء حكم في محكمة دستورية",
    "تسوية إيجارية في قضية عقارية",
    "إلغاء حكم في محكمة دستورية",
    "تسوية مالية في قضية تجارية",
    "إبراء عميل في قضية تجارية",
    "تسوية مالية في قضية تجارية",
  ],
  successStories: [
    "تمت تسوية قضية تعويضات بقيمة 5 مليون ريال بعد 18 شهرًا من التقاضي، مع حماية حقوق عميلنا بالكامل.",
    "حصلنا على براءة اختراع في قضية تجارية بعد 22 شهرًا من المناقشة مع مكتب براءات الاختراع.",
    "تم إبراء عميل في قضية جنائية بعد 14 شهرًا من المتابعة، مع حماية حقوقه من التهم الموجهة إليه.",
    "تم إلغاء حكم في قضية دستورية بعد 16 شهرًا من المناقشة، مع تأكيد دستورية التشريع.",
    "تم تسوية قضية تجارية بقيمة 3 مليون ريال بعد 14 شهرًا من المفاوضات.",
    "تم إبراء عميل في قضية تجارية كبرى بعد 24 شهرًا من المتابعة، مع حماية حقوقه من التهم الموجهة إليه.",
    "تم إلغاء حكم في محكمة دستورية بعد 14 شهرًا من المفاوضات، مع تأكيد دستورية التشريع.",
    "تم تسوية قضية عقارية بعد 12 شهرًا من المناقشة، مع حماية حقوق العميل في الملكية.",
    "تم إلغاء حكم في محكمة دستورية بعد 16 شهرًا من المفاوضات، مع تأكيد دستورية التشريع.",
    "تم تسوية قضية تجارية بقيمة 2 مليون ريال بعد 12 شهرًا من المفاوضات.",
    "تم إبراء عميل في قضية تجارية كبرى بعد 20 شهرًا من المتابعة، مع حماية حقوقه من التهم الموجهة إليه.",
    "تم تسوية مالية في قضية تجارية بعد 10 أشهر من المفاوضات.",
    "تم تسوية مالية في قضية تجارية بعد 15 شهرًا من المفاوضات."
  ],
};