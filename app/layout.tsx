import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://al-mostashareen-law-firm.vercel.app"),
  title: {
    default: "المستشارين للمحاماة والاستشارات القانونية | AL MOSTASHAREEN LAW FIRM",
    template: "%s | المستشارين للمحاماة",
  },
  description:
    "المستشار شيماء ذو الفقار — محامية بالنقض والإدارية والدستورية العليا. خبرة تزيد على 30 عامًا في التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات.",
  keywords: [
    "مكتب المستشارين للمحاماة والاستشارات القانونية",
    "المستشار شيماء ذو الفقار",
    "محامية بالنقض",
    "محامية بالمحكمة الإدارية العليا",
    "محامية بالمحكمة الدستورية العليا",
    "استشارات قانونية في المهندسين",
    "مكتب محاماة في ميدان لبنان",
    "AL MOSTASHAREEN LAW FIRM",
    "Shaimaa Zulfiqar",
  ],
  openGraph: {
    type: "website",
    siteName: "AL MOSTASHAREEN LAW FIRM",
    title: "المستشارين للمحاماة والاستشارات القانونية",
    description:
      "المستشار شيماء ذو الفقار — محامية بالنقض والإدارية والدستورية العليا. خبرة تزيد على 30 عامًا.",
    locale: "ar_EG",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const locale = h.get("x-locale") === "en" ? "en" : "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable} ${amiri.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
