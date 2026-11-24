export const serviceGroups = [
  {
    title: {
      ar: "التقاضي",
      en: "Litigation",
    },
    subtitle: {
      ar: "تمثيل قانوني أمام المحاكم بمختلف درجاتها",
      en: "Legal representation before courts of all levels",
    },
    slugs: [
      "civil-litigation",
      "criminal-law",
      "family-law",
      "commercial-litigation",
      "tax-disputes",
    ],
  },
  {
    title: {
      ar: "المحاكم العليا",
      en: "Higher Courts",
    },
    subtitle: {
      ar: "الطعون والدعاوى أمام أعلى الجهات القضائية",
      en: "Appeals and cases before the highest judicial bodies",
    },
    slugs: [
      "cassation-appeals",
      "constitutional-court",
      "administrative-litigation",
    ],
  },
  {
    title: {
      ar: "الشركات والعقود والعقارات",
      en: "Companies, Contracts & Property",
    },
    subtitle: {
      ar: "حماية مصالحك التجارية والعقارية قبل النزاع",
      en: "Protecting your business and property interests before disputes arise",
    },
    slugs: [
      "company-formation",
      "contracts",
      "real-estate",
    ],
  },
  {
    title: {
      ar: "الاستشارات",
      en: "Consulting",
    },
    subtitle: {
      ar: "رأي قانوني واضح قبل أي قرار",
      en: "A clear legal opinion before any decision",
    },
    slugs: ["legal-consulting"],
  },
] as const;
