export type BilingualText = {
  ar: string;
  en: string;
};

export type Qualification = BilingualText & {
  detail?: BilingualText;
};

export const timeline: readonly never[] = [];

export const qualifications: readonly Qualification[] = [
  {
    ar: "ليسانس الحقوق",
    en: "Bachelor of Laws (LL.B.)",
    detail: {
      ar: "جامعة القاهرة — 2000",
      en: "Cairo University — 2000",
    },
  },
  {
    ar: "دبلوم القانون العام",
    en: "Diploma in Public Law",
  },
  {
    ar: "دبلوم القانون الخاص",
    en: "Diploma in Private Law",
  },
  {
    ar: "ماجستير في القانون المدني",
    en: "Master's Degree in Civil Law",
  },
];

export const professionalStatus: readonly BilingualText[] = [
  {
    ar: "محامية بالنقض والإدارية والدستورية العليا",
    en: "Attorney admitted before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court",
  },
  {
    ar: "درجات القيد الثلاث مثبتة في كارنيه النقابة الحالي",
    en: "All three registration grades recorded on her current Bar Association card",
  },
  {
    ar: "صاحبة مكتب محاماة خاص",
    en: "Owner of her own law practice",
  },
];

export const experience: readonly BilingualText[] = [
  {
    ar: "العمل مستشارة قانونية لشركات ومؤسسات",
    en: "Serving as legal counsel to companies and institutions",
  },
  {
    ar: "العمل مستشارة قانونية للبنك العربي الأفريقي الدولي",
    en: "Serving as legal counsel to the Arab African International Bank",
  },
  {
    ar: "تمثيل شركات كبرى في النزاعات والمنازعات القانونية",
    en: "Representing major companies in legal disputes",
  },
  {
    ar: "تقديم الاستشارات القانونية ودعم المؤسسات في المسائل القانونية والتعاقدية",
    en: "Providing legal advice and supporting institutions on legal and contractual matters",
  },
];
