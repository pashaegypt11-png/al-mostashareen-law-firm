import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <h1 className="display text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-12 text-center">
            من نحن
          </h1>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Attorney Portrait */}
            <div className="lg:col-span-5">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Shaimaa Zulfiqar Attorney Portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="mt-8 text-center">
                <span className="inline-block bg-gold-100 text-gold-800 px-4 py-1 rounded-full text-sm font-bold">
                  30+ عامًا
                </span>
                <p className="mt-2 text-sm text-ink-soft font-serif italic">
                  من الخبرة القانونية
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
                  السيرة الذاتية الرسمية
                </h2>
                <p className="text-xl text-ink prose-legal">
                  المستشار شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                  المؤهلات المهنية
                </h2>
                <ul className="space-y-4 text-lg text-ink-soft">
                  <li className="flex items-start gap-4">
                    <span className="text-brand-700 font-bold text-xl">✓</span>
                    <span>محامية أمام محكمة النقض</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-700 font-bold text-xl">✓</span>
                    <span>محامية أمام المحاكم الإدارية</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-700 font-bold text-xl">✓</span>
                    <span>محامية أمام المحكمة الدستورية العليا</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-700 font-bold text-xl">✓</span>
                    <span>أكثر من 30 عامًا من الخبرة القانونية</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-900/5 p-8 rounded-lg border border-brand-100">
                  <h3 className="text-xl font-bold text-brand-900 mb-4">رؤيتنا</h3>
                  <p className="text-ink-soft leading-relaxed">
                    أن نكون الخيار الأول للأفراد والشركات الباحثين عن تمثيل قانوني موثوق ومحترف في مصر.
                  </p>
                </div>
                <div className="bg-brand-900/5 p-8 rounded-2xl border border-brand-100">
                  <h3 className="text-xl font-bold text-brand-900 mb-4">رسالتنا</h3>
                  <p className="text-ink-soft leading-relaxed">
                    تقديم خدمات قانونية عالية الجودة مع الحفاظ على سرية تامة، احترام كامل لحقوق العملاء، والتزام صارم بأحكام القانون.
                  </p>
                </div>
              </div>
              <div className="mt-16 text-center">
                <div className="bg-gold-100 p-8 rounded-xl border border-gold-200 text-center md:text-left">
                  <h2 className="text-3xl font-serif font-bold text-brand-950 mb-4">
                    هل تحتاج إلى استشارة قانونية؟
                  </h2>
                  <p className="text-brand-900/80 mb-8 max-w-lg">
                    مكتب المستشارين للمحاماة والاستشارات القانونية في خدمتك
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="tel:+201110666933"
                      className="btn btn-gold"
                    >
                      اتصل الآن
                    </a>
                    <a href="/contact" className="btn btn-outline brand">
                      حجز استشارة
                    </a>
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