"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Clock } from "lucide-react";
import { firm } from "@/lib/content";

const STRINGS = {
  ar: {
    title: "تواصل معنا",
    sub: "نسعد بخدمتك. يمكنك التواصل معنا عبر الهاتف أو واتساب أو النموذج التالي.",
    addressLabel: "العنوان",
    phonesLabel: "أرقام الهاتف",
    emailLabel: "البريد الإلكتروني",
    workingHoursLabel: "مواعيد العمل: يوميًا من 9 صباحًا حتى 6 مساءً — الجمعة إجازة",
    outsideHoursReply: "نرد على الرسائل خارج مواعيد العمل في أقرب وقت.",
    formHeading: "نموذج طلب استشارة",
    formSub: "يرجى تعبئة الحقول التالية لإرسال طلب استشارة قانونية.",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني (اختياري)",
    service: "نوع الخدمة القانونية",
    preferred: "طريقة التواصل المفضلة",
    message: "تفاصيل طلب الاستشارة",
    submit: "إرسال الطلب",
    sending: "جارٍ الإرسال...",
    newRequest: "طلب جديد",
    selectService: "اختر من القائمة",
    required: "هذا الحقل مطلوب",
    invalidPhone: "يرجى إدخال رقم هاتف صحيح",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
    error: "تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا هاتفيًا.",
    success: "تم إرسال طلبك بنجاح. سنتواصل معك في أقرب وقت.",
    privacy:
      "بإرسال هذا النموذج، أنت توافق على أن تُستخدم بياناتك للتواصل بشأن طلب الاستشارة فقط.",
    preferredOptions: ["هاتف", "واتساب", "بريد إلكتروني"],
    serviceCategories: [
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
    ],
  },
  en: {
    title: "Contact Us",
    sub: "We are pleased to assist you. Reach us by phone, WhatsApp, or the form below.",
    addressLabel: "Address",
    phonesLabel: "Phone numbers",
    emailLabel: "Email",
    workingHoursLabel: "Working hours: Daily 9:00 AM – 6:00 PM — Closed on Fridays",
    outsideHoursReply: "We reply to messages outside working hours as soon as possible.",
    formHeading: "Consultation Request Form",
    formSub: "Please fill in the fields below to send a legal consultation request.",
    name: "Full name",
    phone: "Phone number",
    email: "Email (optional)",
    service: "Legal service category",
    preferred: "Preferred contact method",
    message: "Consultation details",
    submit: "Send request",
    sending: "Sending...",
    newRequest: "New request",
    selectService: "Select from the list",
    required: "This field is required",
    invalidPhone: "Please enter a valid phone number",
    invalidEmail: "Please enter a valid email address",
    error: "We couldn't send your request. Please try again or contact us by phone.",
    success: "Your request has been sent successfully. We will contact you as soon as possible.",
    privacy:
      "By submitting this form, you agree that your data will be used only to contact you regarding this consultation request.",
    preferredOptions: ["Phone", "WhatsApp", "Email"],
    serviceCategories: [
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
    ],
  },
};

export default function ContactPage() {
  const params = useParams();
  const localeParam = (params?.locale as string) ?? "ar";
  const isAr = localeParam === "ar";
  const t = isAr ? STRINGS.ar : STRINGS.en;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = t.required;
    if (!/^(\+201|01)[0-9]{9}$/.test(form.phone.replace(/\s/g, ""))) next.phone = t.invalidPhone;
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

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", service: "", preferred: "", message: "" });
    setErrors({});
    setServerError(null);
    setStep("form");
  };

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h1 className="display text-3xl md:text-4xl font-bold text-brand-900 mb-4">
                {t.title}
              </h1>
              <p className="text-lg text-ink-soft mb-8 prose-legal">{t.sub}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-700" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm mb-1">{t.addressLabel}</p>
                    <p className="text-ink-soft leading-relaxed">{firm.address[isAr ? "ar" : "en"]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-700" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm mb-1">{t.phonesLabel}</p>
                    {firm.phonesIntl.map((p) => (
                      <a key={p} href={`tel:${p}`} className="block text-brand-800 hover:text-gold-600 text-sm" dir="ltr">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-700" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm mb-1">{t.emailLabel}</p>
                    <a href={`mailto:${firm.email}`} className="text-brand-800 hover:text-gold-600 text-sm break-all" dir="ltr">
                      {firm.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-50 flex items-center justify-center border border-brand-200">
                    <Clock size={20} strokeWidth={2} className="text-brand-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm mb-1">{t.workingHoursLabel}</p>
                    <p className="text-ink-soft text-sm">{t.outsideHoursReply}</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/201110666933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !py-2.5 !px-5 text-sm"
                  >
                    {isAr ? "تواصل واتساب" : "WhatsApp"}
                  </a>
                  <a
                    href="https://maps.app.goo.gl/1LmQuWdBN1fjTe9JA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline !py-2.5 !px-5 text-sm"
                  >
                    {isAr ? "الموقع على الخريطة" : "View on map"}
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {step === "success" ? (
                <div className="bg-brand-100 p-8 md:p-12 rounded-2xl border border-brand-200 text-center">
                  <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-700 mx-auto mb-6" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    {isAr ? "تم إرسال الطلب بنجاح" : "Request sent successfully"}
                  </h2>
                  <p className="text-ink-soft mb-8 max-w-md mx-auto">{t.success}</p>
                  <button type="button" onClick={resetForm} className="btn btn-outline">
                    {t.newRequest}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-paper p-6 md:p-10 rounded-2xl border border-black/10 shadow-lg space-y-5"
                  noValidate
                >
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-brand-900 mb-1">
                      {t.formHeading}
                    </h2>
                    <p className="text-ink-soft text-sm">{t.formSub}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="label">
                        {t.name} <span className="text-gold-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.name}
                        disabled={submitting}
                      />
                      {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        {t.phone} <span className="text-gold-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={`input ${errors.phone ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.phone}
                        placeholder="01xxxxxxxxx"
                        dir="ltr"
                        disabled={submitting}
                      />
                      {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
                    </div>
                    <div>
                      <label htmlFor="email" className="label">{t.email}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.email}
                        dir="ltr"
                        disabled={submitting}
                      />
                      {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                    </div>
                    <div>
                      <label htmlFor="service" className="label">
                        {t.service} <span className="text-gold-600">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`input ${errors.service ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.service}
                        disabled={submitting}
                      >
                        <option value="">{t.selectService}</option>
                        {t.serviceCategories.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-xs text-red-600 mt-1 block">{errors.service}</span>}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="preferred" className="label">
                        {t.preferred} <span className="text-gold-600">*</span>
                      </label>
                      <select
                        id="preferred"
                        name="preferred"
                        value={form.preferred}
                        onChange={handleChange}
                        className={`input ${errors.preferred ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.preferred}
                        disabled={submitting}
                      >
                        <option value="">{t.selectService}</option>
                        {t.preferredOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.preferred && <span className="text-xs text-red-600 mt-1 block">{errors.preferred}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">{t.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="textarea"
                      rows={5}
                      disabled={submitting}
                    />
                  </div>

                  <p className="text-xs text-ink-soft leading-relaxed">{t.privacy}</p>

                  {serverError && (
                    <div role="alert" className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-gold w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? t.sending : t.submit}
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
