/**
 * Single source of truth for the firm's official information.
 * Do not invent data — every value here is supplied by the client.
 */
export const firm = {
  name: {
    ar: "المستشارين للمحاماة والاستشارات القانونية",
    en: "AL MOSTASHAREEN LAW FIRM",
  },
  attorney: {
    ar: "المستشارة شيماء ذو الفقار",
    en: "Shaimaa Zulfiqar",
  },
  title: {
    ar: "محامية بالنقض والإدارية والدستورية العليا",
    en: "Lawyer before the Court of Cassation, Administrative Courts, and Supreme Constitutional Court",
  },
  bio: {
    ar: "المستشارة شيماء ذو الفقار، محامية بالنقض والإدارية والدستورية العليا، تتمتع بخبرة تزيد على 30 عامًا في مجال المحاماة، وتقدم من خلال مكتب المستشارين للمحاماة والاستشارات القانونية خدمات التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات، بمهنية وحرص على حماية الحقوق والمصالح وفقًا لأحكام القانون.",
    en: "Ms. Shaimaa Zulfiqar is a lawyer before the Court of Cassation, the Administrative Courts, and the Supreme Constitutional Court. With more than 30 years of experience in the legal profession, she provides — through AL MOSTASHAREEN LAW FIRM — legal representation and specialized consulting services to individuals and companies, with professionalism and a careful commitment to protecting rights and interests in accordance with the law.",
  },
  experienceYears: 30,
  address: {
    ar: "88 شارع النيل الأبيض - ميدان لبنان - المهندسين - الجيزة - مصر.",
    en: "88 El Nile El Abyad Street, Lebanon Square, Mohandessin, Giza, Egypt.",
  },
  phones: ["01110666933", "01001693026"],
  phonesIntl: ["+201110666933", "+201001693026"],
  email: "shaimaazulfikar@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/1LmQuWdBN1fjTe9JA",
  facebookUrl: "https://www.facebook.com/share/1FSjhrwRc6/",
  whatsappNumber: "201110666933",
} as const;

export function whatsappLink(locale: "ar" | "en", message?: string): string {
  const text =
    message ??
    (locale === "ar"
      ? "السلام عليكم، أرغب في طلب استشارة قانونية."
      : "Hello, I would like to request a legal consultation.");
  return `https://wa.me/${firm.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telLink(index = 0): string {
  return `tel:${firm.phonesIntl[index] ?? firm.phonesIntl[0]}`;
}
