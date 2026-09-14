import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const printedMoments = localFont({
  src: "../fonts/printedmoments.woff",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description:
    "Therapy for adults navigating anxiety, stress, trauma, burnout, and perfectionism in Santa Monica and across California. Grounded, evidence-based in-person and telehealth care.",
  keywords: [
    "Dr. Maya Reynolds",
    "Clinical Psychologist Santa Monica",
    "Therapy Santa Monica CA",
    "Anxiety therapy",
    "Trauma therapy California",
    "Burnout counseling",
    "EMDR Santa Monica",
    "CBT California telehealth",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
    description:
      "Compassionate, grounded therapy for adults experiencing anxiety, trauma, and burnout. In-person in Santa Monica and online across California.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${printedMoments.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#1F2421] font-sans flex flex-col selection:bg-[#8FA698] selection:text-white">
        {children}
      </body>
    </html>
  );
}
