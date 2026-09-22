"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RobotLogo from "@/components/RobotLogo";
import { useT } from "@/lib/i18n";

export default function Home() {
  const t = useT();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute top-4 z-10 w-full px-4 sm:top-6">
        <div className="flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center animate-fadeUp">
        <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-neon/8 blur-2xl sm:h-52 sm:w-52" />

        <Link
          href="/onboarding"
          aria-label={t("startCta")}
          className="relative mt-4 block"
        >
          <RobotLogo className="w-44 sm:w-56 md:w-64" />
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          <span className="font-en text-4xl tracking-tight text-white sm:text-5xl">
            VANOS
          </span>
        </h1>

        <p className="mt-3 max-w-xl px-2 text-sm leading-7 text-silver sm:text-base">
          {t("heroSub")}
        </p>

        <Link
          href="/onboarding"
          className="mt-8 w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        >
          {t("tagline")}
        </Link>
      </div>

      <p className="relative z-10 mt-12 px-4 text-center text-xs text-silver/50 sm:mt-16">
        © {new Date().getFullYear()}
      </p>
    </main>
  );
}
