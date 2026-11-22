import type { Locale } from "./i18n";

export const firm = {
  name: {
    ar: "المستشارين للمحاماة والاستشارات القانونية",
    en: "AL MOSTASHAREEN LAW FIRM",
  },
  attorney: {
    ar: "المستشار شيماء ذو الفقار",
    en: "Shaimaa Zulfiqar",
  },
  title: {
    ar: "محامية بالنقض والإدارية والدستورية العليا",
    en: "Lawyer before the Court of Cassation, Administrative Courts, and Supreme Constitutional Court",
  },
  bio: {
    ar: "المستشار شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون.",
    en: "Ms. Shaimaa Zulfiqar is a lawyer before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court. With more than 30 years of experience in the legal profession, she provides, through AL MOSTASHAREEN LAW FIRM, legal representation and specialized consulting services to individuals and companies — with professionalism and a careful commitment to protecting rights and interests in accordance with the law.",
  },
  address: {
    ar: "88 شارع النيل الأبيض - ميدان لبنان - المهندسين - الجيزة - مصر.",
    en: "88 El Nile El Abyad Street, Lebanon Square, Mohandessin, Giza, Egypt.",
  },
  phones: ["01110666933", "01001693026"],
  phonesIntl: ["+201110666933", "+201001693026"],
  email: "shaimaazulfikar@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/1LmQuWdBN1fjTe9JA",
  facebookUrl: "https://www.facebook.com/share/1FSjhrwRc6/",
  years: 30,
} as const;

export interface Service {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  icon: string;
}

/** 12 official services — no guarantees of outcomes, factual descriptions only. */
export const services: Service[] = [
  {
    slug: "civil-litigation",
    icon: "scales",
    title: {
      ar: "القضايا المدنية والتعويضات",
      en: "Civil Litigation and Compensation",
    },
    description: {
      ar: "تمثيل قانوني في المنازعات المدنية ومطالبات التعويض أمام المحاكم المختصة، بدءًا من تقييم الموقف القانوني وحتى استيفاء الحقوق.",
      en: "Legal representation in civil disputes and compensation claims before the competent courts, from assessing the legal position through to the enforcement of established rights.",
    },
  },
  {
    slug: "criminal-law",
    icon: "shield",
    title: {
      ar: "القضايا الجنائية",
      en: "Criminal Law",
    },
    description: {
      ar: "الدفاع في القضايا الجنائية والمرافعة أمام محاكم الجنح والجنايات، مع مراعاة كافة ضمانات الدفاع المقررة قانونًا.",
      en: "Defense in criminal cases and advocacy before misdemeanor and felony courts, observing all defense safeguards guaranteed by law.",
    },
  },
  {
    slug: "family-law",
    icon: "family",
    title: {
      ar: "قضايا الأسرة والأحوال الشخصية",
      en: "Family Law and Personal Status",
    },
    description: {
      ar: "متابعة قضايا الأحوال الشخصية والأسرة من نفقات وحضانة وطلاق ومواريث، بمراعاة الطابع الإنساني لهذه المنازعات.",
      en: "Handling personal status and family cases — maintenance, custody, divorce and inheritance — with due regard for the sensitive human nature of these disputes.",
    },
  },
  {
    slug: "administrative-litigation",
    icon: "building",
    title: {
      ar: "قضايا مجلس الدولة والقضاء الإداري",
      en: "State Council and Administrative Litigation",
    },
    description: {
      ar: "إقامة ومتابعة الدعاوى الإدارية والطعون أمام مجلس الدولة في القرارات الإدارية ومنازعات العقود الإدارية.",
      en: "Filing and pursuing administrative claims and appeals before the State Council concerning administrative decisions and public-contract disputes.",
    },
  },
  {
    slug: "constitutional-court",
    icon: "column",
    title: {
      ar: "المحكمة الدستورية العليا",
      en: "Supreme Constitutional Court Matters",
    },
    description: {
      ar: "إعداد ومتابعة الدعاوى والدفوع المتعلقة بالرقابة على دستورية القوانين واللوائح أمام المحكمة الدستورية العليا.",
      en: "Preparing and pursuing actions and pleas relating to constitutional review of laws and regulations before the Supreme Constitutional Court.",
    },
  },
  {
    slug: "cassation-appeals",
    icon: "gavel",
    title: {
      ar: "قضايا النقض",
      en: "Cassation Appeals",
    },
    description: {
      ar: "إعداد وصياغة أسباب الطعن بالنقض ومتابعة الطعون أمام محكمة النقض في المواد المدنية والجنائية والتجارية.",
      en: "Drafting grounds of cassation and pursuing appeals before the Court of Cassation in civil, criminal and commercial matters.",
    },
  },
  {
    slug: "company-formation",
    icon: "briefcase",
    title: {
      ar: "تأسيس الشركات والاستشارات القانونية للشركات",
      en: "Company Formation and Corporate Legal Consulting",
    },
    description: {
      ar: "تأسيس الشركات واستكمال إجراءاتها القانونية، وتقديم الاستشارات المتعلقة بالحوكمة والالتزام القانوني للشركات.",
      en: "Company incorporation and completion of legal formalities, together with consulting on corporate governance and legal compliance.",
    },
  },
  {
    slug: "contracts",
    icon: "document",
    title: {
      ar: "صياغة العقود ومراجعتها",
      en: "Contract Drafting and Legal Review",
    },
    description: {
      ar: "صياغة ومراجعة العقود والاتفاقيات بمختلف أنواعها، مع بيان المخاطر القانونية وتوضيح الالتزامات والحقوق.",
      en: "Drafting and reviewing contracts and agreements of all kinds, identifying legal risks and clarifying rights and obligations.",
    },
  },
  {
    slug: "commercial-litigation",
    icon: "chart",
    title: {
      ar: "القضايا التجارية",
      en: "Commercial Litigation",
    },
    description: {
      ar: "تمثيل الشركات والتجار في المنازعات التجارية والمنافسة والمطالبات المالية أمام المحاكم والجهات المختصة.",
      en: "Representing companies and traders in commercial, competition and financial-claim disputes before the courts and competent authorities.",
    },
  },
  {
    slug: "tax-disputes",
    icon: "percent",
    title: {
      ar: "منازعات الضرائب",
      en: "Tax Disputes",
    },
    description: {
      ar: "الدفاع في المنازعات الضريبية والتظلمات والطعون أمام اللجان والمحاكم المختصة وفق الإجراءات القانونية.",
      en: "Defense in tax disputes, objections and appeals before the competent committees and courts, following the prescribed legal procedures.",
    },
  },
  {
    slug: "real-estate",
    icon: "home",
    title: {
      ar: "تسجيل العقارات والشهر العقاري",
      en: "Real Estate Registration and Notary Services",
    },
    description: {
      ar: "إجراءات تسجيل العقارات والشهر العقاري ونقل الملكية، ومتابعة المستندات والموافقات المطلوبة قانونًا.",
      en: "Real estate registration, notarization and transfer-of-ownership procedures, together with follow-up on required documents and legal approvals.",
    },
  },
  {
    slug: "legal-consulting",
    icon: "handshake",
    title: {
      ar: "الاستشارات القانونية للأفراد والشركات",
      en: "Legal Consulting for Individuals and Businesses",
    },
    description: {
      ar: "استشارات قانونية متخصصة للأفراد والشركات في مختلف الفروع القانونية، تُقدَّم بوضوح وموضوعية ودون التزام بنتيجة محددة.",
      en: "Specialized legal consulting for individuals and businesses across legal fields — delivered clearly and objectively, with no guarantee of any particular outcome.",
    },
  },
];

export const ui = {
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    contact: "تواصل معنا",
    homeTitle: "الدفاع القانوني الموثوق بخبرة تزيد على 30 عامًا",
    homeSub:
      "نقدم خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون.",
    readMore: "اقرأ المزيد",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    bookConsultation: "حجز استشارة",
    whyChoose: "لماذا تختار مكتبنا؟",
    whyTitle: "شراكة قانونية موثوقة",
    whySub:
      "مكتب المستشارين للمحاماة والاستشارات القانونية هو شريكك القانوني الموثوق لحماية حقوقك ومصالحك.",
    features: [
      {
        title: "خبرة تزيد على 30 عامًا",
        desc: "تمثيل قانوني أمام محكمة النقض والمحكمة الدستورية العليا والمحاكم الإدارية.",
      },
      {
        title: "التزام مهني",
        desc: "دقة في التفاصيل، سرية تامة، والتزام بأخلاقيات المهنة وأحكام القانون.",
      },
      {
        title: "استشارات للأفراد والشركات",
        desc: "خدمات قانونية متكاملة للأفراد والشركات في مختلف المجالات.",
      },
    ],
    ctaTitle: "هل تحتاج إلى استشارة قانونية؟",
    ctaSub: "فريقنا القانوني جاهز لمساعدتك في تقييم قضيتك وتقديم الحلول المناسبة.",
    aboutTitle: "من نحن",
    bioHeading: "السيرة الذاتية الرسمية",
    qualifications: "المؤهلات المهنية",
    qualificationItems: [
      "محامية أمام محكمة النقض",
      "محامية أمام المحاكم الإدارية",
      "محامية أمام المحكمة الدستورية العليا",
      "أكثر من 30 عامًا من الخبرة القانونية",
    ],
    vision: "رؤيتنا",
    visionText:
      "أن نكون الخيار الأول للأفراد والشركات الباحثين عن تمثيل قانوني موثوق ومحترف في مصر.",
    mission: "رسالتنا",
    missionText:
      "تقديم خدمات قانونية عالية الجودة مع الحفاظ على سرية تامة، احترام كامل لحقوق العملاء، والتزام صارم بأحكام القانون.",
    servicesTitle: "خدماتنا القانونية",
    servicesSub:
      "نقدم مجموعة شاملة من الخدمات القانونية التي تغطي الجوانب المختلفة للمنازعات القانونية للأفراد والشركات.",
    requestConsultation: "اطلب استشارة",
    contactTitle: "تواصل معنا",
    contactSub: "نسعد بخدمتك. يمكنك التواصل معنا عبر الهاتف أو واتساب أو النموذج التالي.",
    addressLabel: "العنوان",
    phonesLabel: "أرقام الهاتف",
    emailLabel: "البريد الإلكتروني",
    openInMaps: "افتح الموقع على خرائط جوجل",
    visitFacebook: "صفحة المكتب على فيسبوك",
    form: {
      heading: "نموذج طلب استشارة",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني (اختياري)",
      service: "نوع الخدمة القانونية",
      preferred: "طريقة التواصل المفضلة",
      preferredOptions: ["هاتف", "واتساب", "بريد إلكتروني"],
      message: "تفاصيل طلب الاستشارة",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال...",
      success: "تم إرسال طلبك بنجاح. سنتواصل معك في أقرب وقت.",
      error: "تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا هاتفيًا.",
      selectService: "اختر نوع الخدمة",
      required: "هذا الحقل مطلوب",
      invalidPhone: "يرجى إدخال رقم هاتف صحيح",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      privacy:
        "بإرسال هذا النموذج فإنك توافق على أن تُستخدم بياناتك للتواصل بشأن طلب الاستشارة فقط.",
    },
    testimonialsTitle: "آراء العملاء",
    testimonialsPlaceholder:
      "هذا القسم مخصص لعرض آراء العملاء الحقيقية فقط. سيُضاف المحتوى بعد الحصول على الموافقات اللازمة.",
    footerRights: "جميع الحقوق محفوظة",
    langSwitch: "English",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    homeTitle: "Trusted legal defense with more than 30 years of experience",
    homeSub:
      "We provide legal representation and specialized consulting services to individuals and companies, with professionalism and a careful commitment to protecting rights and interests in accordance with the law.",
    readMore: "Read more",
    callNow: "Call now",
    whatsapp: "WhatsApp",
    bookConsultation: "Book a consultation",
    whyChoose: "Why choose our firm",
    whyTitle: "A trusted legal partnership",
    whySub:
      "AL MOSTASHAREEN LAW FIRM is your trusted legal partner for protecting your rights and interests.",
    features: [
      {
        title: "More than 30 years of experience",
        desc: "Legal representation before the Court of Cassation, the Supreme Constitutional Court and the Administrative Courts.",
      },
      {
        title: "Professional commitment",
        desc: "Attention to detail, full confidentiality, and adherence to professional ethics and the law.",
      },
      {
        title: "Consulting for individuals and companies",
        desc: "Comprehensive legal services for individuals and companies across different fields.",
      },
    ],
    ctaTitle: "Do you need legal advice?",
    ctaSub: "Our legal team is ready to help you assess your matter and consider appropriate solutions.",
    aboutTitle: "About Us",
    bioHeading: "Official Biography",
    qualifications: "Professional Qualifications",
    qualificationItems: [
      "Lawyer before the Court of Cassation",
      "Lawyer before the Administrative Courts",
      "Lawyer before the Supreme Constitutional Court",
      "More than 30 years of legal experience",
    ],
    vision: "Our Vision",
    visionText:
      "To be the first choice for individuals and companies seeking reliable, professional legal representation in Egypt.",
    mission: "Our Mission",
    missionText:
      "To deliver high-quality legal services with full confidentiality, complete respect for clients' rights, and strict adherence to the law.",
    servicesTitle: "Our Legal Services",
    servicesSub:
      "We provide a comprehensive range of legal services covering the different aspects of legal disputes for individuals and companies.",
    requestConsultation: "Request a consultation",
    contactTitle: "Contact Us",
    contactSub: "We are pleased to assist you. Reach us by phone, WhatsApp, or the form below.",
    addressLabel: "Address",
    phonesLabel: "Phone numbers",
    emailLabel: "Email",
    openInMaps: "Open location in Google Maps",
    visitFacebook: "Office page on Facebook",
    form: {
      heading: "Consultation Request Form",
      name: "Full name",
      phone: "Phone number",
      email: "Email (optional)",
      service: "Legal service category",
      preferred: "Preferred contact method",
      preferredOptions: ["Phone", "WhatsApp", "Email"],
      message: "Consultation details",
      submit: "Send request",
      sending: "Sending...",
      success: "Your request has been sent successfully. We will contact you as soon as possible.",
      error: "We couldn't send your request. Please try again or contact us by phone.",
      selectService: "Select a service",
      required: "This field is required",
      invalidPhone: "Please enter a valid phone number",
      invalidEmail: "Please enter a valid email address",
      privacy:
        "By submitting this form, you agree that your data will be used only to contact you regarding this consultation request.",
    },
    testimonialsTitle: "Client Testimonials",
    testimonialsPlaceholder:
      "This section is reserved for genuine client testimonials only. Content will be added once the necessary approvals are obtained.",
    footerRights: "All rights reserved",
    langSwitch: "العربية",
    quickLinks: "Quick links",
    followUs: "Follow us",
  },
} as const;

export function getContent(locale: Locale) {
  return ui[locale];
}
