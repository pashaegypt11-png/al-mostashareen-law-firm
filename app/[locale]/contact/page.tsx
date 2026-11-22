"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firm } from "@/lib/content";

export default function ContactPage() {
  const pathname = usePathname();
  const isAr = pathname.startsWith("/ar");
  const t = isAr ? tAr : tEn;

  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferred: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = t.required;
    if (!/^(\+201|01)[0-9]{9}$/.test(form.phone)) next.phone = t.invalidPhone;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.invalidEmail;
    if (!form.service) next.service = t.required;
    if (!form.preferred) next.preferred = t.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale: isAr ? "ar" : "en" }),
      });
      if (!res.ok) throw new Error(t.error);
      setStep("success");
    } catch {
      setServerError(t.error);
    } finally {
      setSubmitting(false);
    }
  };

  const preferredOptions = isAr ? tAr.preferredOptions : tEn.preferredOptions;
  const servicesList = firm.phones; // placeholder for service select options — we use generic categories below
  const serviceCategories = isAr
    ? [
        "القضايا المدنية والتعويضات",
        "القضايا الجنائية",
        "قضايا الأسرة والأحوال الشخصية",
        "قضايا مجلس الدولة والقضاء الإداري",
        "المحكمة الدستورية العليا",
        "قضايا النقض",
        "تأسيس الشركات والاستشارات القانونية للشركات",
        "صياغة العقود ومراجعتها",
        "القضايا التجارية",
        "منازعات الضرائب",
        "تسجيل العقارات والشهر العقاري",
        "الاستشارات القانونية للأفراد والشركات",
      ]
    : [
        "Civil Litigation and Compensation",
        "Criminal Law",
        "Family Law and Personal Status",
        "State Council and Administrative Litigation",
        "Supreme Constitutional Court Matters",
        "Cassation Appeals",
        "Company Formation and Corporate Legal Consulting",
        "Contract Drafting and Legal Review",
        "Commercial Litigation",
        "Tax Disputes",
        "Real Estate Registration and Notary Services",
        "Legal Consulting for Individuals and Businesses",
      ];

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4 animate-rise">
              <div className="space-y-8">
                <h1 className="display text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">
                  {t.title}
                </h1>
                <p className="text-lg text-ink-soft mb-8 prose-legal">{t.sub}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 01-1.595 1.59l-1.27 1.27a2 2 0 01-2.11.45 12.84 12.84 0 00-2.81.7A2 2 0 011 18.08v3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-brand-900 text-sm mb-1">{t.addressLabel}</p>
                      <p className="text-ink-soft leading-relaxed">{firm.address[isAr ? "ar" : "en"]}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 01-1.595 1.59l-1.27 1.27a2 2 0 01-2.11.45 12.84 12.84 0 00-2.81.7A2 2 0 011 18.08v3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-brand-900 text-sm mb-1">{t.phonesLabel}</p>
                      {firm.phonesIntl.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="block text-brand-800 hover:text-gold-600 text-sm"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-brand-900 text-sm mb-1">{t.emailLabel}</p>
                      <a
                        href={`mailto:${firm.email}`}
                        className="text-brand-800 hover:text-gold-600 text-sm"
                      >
                        {firm.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-sm text-ink-soft">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      01110666933
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 animate-rise" style={{ animationDelay: "0.2s" }}>
              {step === "success" ? (
                <div className="bg-brand-100 p-10 rounded-2xl border border-brand-200 text-center">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-700 mx-auto mb-6" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    {t.successTitle}
                  </h2>
                  <p className="text-ink-soft mb-8">{t.successMsg}</p>
                  <Link href="/contact" className="btn btn-outline brand">
                    {t.newRequest}
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-paper p-8 md:p-12 rounded-2xl border border-black/10 shadow-lg space-y-6">
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-2">{t.formHeading}</h2>
                  <p className="text-ink-soft mb-6">{t.formSub}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">{t.name} <span className="text-gold-600">*</span></label>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Shaimaa Zulfiqar"
                      />
                      {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="label">{t.phone} <span className="text-gold-600">*</span></label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={`input ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="01110666933"
                      />
                      {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
                    </div>
                    <div>
                      <label className="label">{t.email}</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? "border-red-500" : ""}`}
                        placeholder="example@email.com"
                      />
                      {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                    </div>
                    <div>
                      <label className="label">{t.service} <span className="text-gold-600">*</span></label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">{t.selectService}</option>
                        {serviceCategories.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-xs text-red-600 mt-1 block">{errors.service}</span>}
                    </div>
                    <div>
                      <label className="label">{t.preferred} <span className="text-gold-600">*</span></label>
                      <select
                        name="preferred"
                        value={form.preferred}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">{t.selectService}</option>
                        {preferredOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.preferred && <span className="text-xs text-red-600 mt-1 block">{errors.preferred}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="label">{t.message}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="textarea"
                      rows={5}
                    />
                  </div>

                  <p className="text-xs text-ink-soft">
                    {t.privacy}
                  </p>

                  {serverError && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-gold w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? t.sending : t.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const tAr = {
  title: "تواصل معنا",
  sub: "نسعد بخدمتك. يمكنك التواصل معنا عبر الهاتف أو واتساب أو النموذج التالي.",
  addressLabel: "العنوان",
  phonesLabel: "أرقام الهاتف",
  emailLabel: "البريد الإلكتروني",
  successTitle: "تم إرسال الطلب بنجاح",
  successMsg: "تم استلام طلب الاستشارة الخاص بك. سنتواصل معك في أقرب وقت ممكن.",
  newRequest: "طلب جديد",
  formHeading: "نموذج طلب استشارة",
  formSub: "يرجى تعبئة الحقول التالية لإرسال طلب استشارة قانونية.",
  name: "الاسم الكامل",
  phone: "رقم الهاتف",
  email: "البريد الإلكتروني (اختياري)",
  service: "نوع الخدمة القانونية",
  preferred: "طريقة التواصل المفضلة",
  preferredOptions: ["هاتف", "واتساب", "بريد إلكتروني"],
  message: "تفاصيل طلب الاستشارة",
  submitBtn: "إرسال الطلب",
  sending: "جارٍ الإرسال...",
  required: "هذا الحقل مطلوب",
  invalidPhone: "يرجى إدخال رقم هاتف صحيح",
  invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
  selectService: "اختر نوع الخدمة",
  error: "تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى.",
  privacy: "بإرسال هذا النموذج، أنت توافق على استخدام بياناتك للتواصل بشأن طلب الاستشارة فقط.",
};

const tEn = {
  title: "Contact Us",
  sub: "We are pleased to assist you. Reach us by phone, WhatsApp, or the form below.",
  addressLabel: "Address",
  phonesLabel: "Phone numbers",
  emailLabel: "Email",
  successTitle: "Request Sent Successfully",
  successMsg: "Your consultation request has been received. We will contact you as soon as possible.",
  newRequest: "New Request",
  formHeading: "Consultation Request Form",
  formSub: "Please fill in the fields below to send a legal consultation request.",
  name: "Full Name",
  phone: "Phone Number",
  email: "Email Address (optional)",
  service: "Legal Service Category",
  preferred: "Preferred Contact Method",
  preferredOptions: ["Phone", "WhatsApp", "Email"],
  message: "Consultation Details",
  submitBtn: "Send Request",
  sending: "Sending...",
  required: "This field is required",
  invalidPhone: "Please enter a valid phone number",
  invalidEmail: "Please enter a valid email address",
  selectService: "Select a service",
  error: "We couldn't send your request. Please try again.",
  privacy: "By submitting this form, you agree that your data will be used only to contact you regarding this consultation request.",
};