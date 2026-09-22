import type { Metadata } from "next";
import { Vazirmatn, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import NeonSnow from "@/components/NeonSnow";
import SiteAtmosphere from "@/components/SiteAtmosphere";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-mono",
  display: "swap",
});

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return new URL(raw).toString();
    } catch {
      // fall through to default
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://akademizaban.vercel.app";
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "VANOS | Language Academy",
    template: "%s | VANOS",
  },
  description: "یک تجربه‌ی مدرن و تستی برای یادگیری زبان در موبایل و دسکتاپ.",
  keywords: [
    "language academy",
    "language learning",
    "mobile learning",
    "dashboard",
    "VANOS",
  ],
  openGraph: {
    title: "VANOS | Language Academy",
    description: "یک تجربه‌ی مدرن و تستی برای یادگیری زبان در موبایل و دسکتاپ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} ${rubikMono.variable} font-fa bg-[var(--bg-deep)] text-white antialiased`}
      >
        <SiteAtmosphere />
        <NeonSnow density={8} />
        <div className="relative z-10">
          <LangProvider>{children}</LangProvider>
        </div>
      </body>
    </html>
  );
}
