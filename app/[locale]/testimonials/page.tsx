export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="block text-sm font-semibold text-gold-600 mb-2 uppercase tracking-wider">
              {isAr ? "آراء العملاء" : "Client Testimonials"}
            </span>
            <h1 className="display text-3xl md:text-4xl text-brand-900 mb-6">
              {isAr ? "شهادات عملائنا" : "Client Testimonials"}
            </h1>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto prose-legal">
              {isAr
                ? "هذا القسم مخصص لعرض آراء العملاء الحقيقية فقط. سيتم إضافة المحتوى بعد الحصول على الموافقات اللازمة من العملاء."
                : "This section is reserved for genuine client testimonials only. Content will be added once the necessary approvals are obtained."}
            </p>
          </div>

          <div className="mx-auto max-w-2xl bg-paper p-8 md:p-12 rounded-2xl border border-gold-200 text-center shadow-lg animate-rise">
            <svg width="72" height="72" fill="currentColor" className="text-gold-400 mx-auto mb-8" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.17A3.17 3.17 0 018.34 8V6H7.17Zm9 0A5.17 5.17 0 0011 11.17V18h6.83v-6.83h-3.66A3.17 3.17 0 0117.34 8V6h-1.17Z" />
            </svg>
            <p className="text-xl text-ink-soft">
              {isAr ? "سيتم عرض شهادات العملاء الحقيقية هنا بعد توفيرها واعتمادها." : "Genuine client testimonials will be displayed here once provided and approved."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
