import type { Locale } from "./i18n";

export interface Service {
  slug: string;
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

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
    title: { ar: "القضايا الجنائية", en: "Criminal Law" },
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
    title: { ar: "قضايا النقض", en: "Cassation Appeals" },
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
    title: { ar: "صياغة العقود ومراجعتها", en: "Contract Drafting and Legal Review" },
    description: {
      ar: "صياغة ومراجعة العقود والاتفاقيات بمختلف أنواعها، مع بيان المخاطر القانونية وتوضيح الالتزامات والحقوق.",
      en: "Drafting and reviewing contracts and agreements of all kinds, identifying legal risks and clarifying rights and obligations.",
    },
  },
  {
    slug: "commercial-litigation",
    icon: "chart",
    title: { ar: "القضايا التجارية", en: "Commercial Litigation" },
    description: {
      ar: "تمثيل الشركات والتجار في المنازعات التجارية والمنافسة والمطالبات المالية أمام المحاكم والجهات المختصة.",
      en: "Representing companies and traders in commercial, competition and financial-claim disputes before the courts and competent authorities.",
    },
  },
  {
    slug: "tax-disputes",
    icon: "percent",
    title: { ar: "منازعات الضرائب", en: "Tax Disputes" },
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

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
