export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-2">آراء العملاء</span>
            <h1 className="display text-4xl md:text-5xl text-brand-900 mb-6">
              شهادات عملائنا
            </h1>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto prose-legal">
              هذا القسم مخصص لعرض آراء العملاء الحقيقية فقط. سيتم إضافة المحتوى بعد الحصول على الموافقات اللازمة من العملاء.
            </p>
          </div>

          <div className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 text-center">
            <svg width="64" height="64" fill="currentColor" className="text-gold-300 mx-auto mb-8" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <p className="text-xl text-ink-soft">
             placeholder — سيتم عرض شهادات العملاء الحقيقية هنا بعد توفيرها واعتمادها.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
