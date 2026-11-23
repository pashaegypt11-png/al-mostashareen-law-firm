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

          <div className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 text-center">
            <svg width="64" height="64" fill="currentColor" className="text-gold-300 mx-auto mb-8" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
