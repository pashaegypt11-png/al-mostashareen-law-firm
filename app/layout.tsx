import type { Metadata } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://al-mostashareen-law-firm.vercel.app"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "المستشارين للمحاماة والاستشارات القانونية | AL MOSTASHAREEN LAW FIRM",
    template: "%s | المستشارين للمحاماة",
  },
  description: "المستشار شيماء ذو الفقار — محامية بالنقض والإدارية والدستورية العليا. خبرة تزيد على 30 عامًا في التمثيل القانوني والاستشارات المتخصصة للأفراد والشركات.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${playfair.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
