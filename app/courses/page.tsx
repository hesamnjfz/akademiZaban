"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { useLang, useT } from "@/lib/i18n";
import { courses } from "@/lib/data";

type LevelFilter = "all" | "beginner" | "intermediate" | "advanced";
type PriceFilter = "all" | "free" | "paid";

export default function Courses() {
  const { lang } = useLang();
  const t = useT();

  const [query, setQuery] = useState("");
  const [langFilter, setLangFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");

  const languageOptions = useMemo(() => {
    const set = new Map<string, string>();
    courses.forEach((c) => set.set(c.langCode, c.language[lang]));
    return Array.from(set.entries());
  }, [lang]);

  const filtered = courses.filter((c) => {
    const matchesQuery =
      c.title[lang].toLowerCase().includes(query.toLowerCase()) ||
      c.teacher[lang].toLowerCase().includes(query.toLowerCase());
    const matchesLang = langFilter === "all" || c.langCode === langFilter;
    const matchesLevel = levelFilter === "all" || c.levelCode === levelFilter;
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" ? c.price === 0 : c.price > 0);
    return matchesQuery && matchesLang && matchesLevel && matchesPrice;
  });

  return (
    <main className="min-h-screen bg-transparent pb-20 md:pb-0">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="mb-6 text-2xl font-bold text-white">
          {t("allCourses")}
        </h1>

        <div className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:p-4">
          <div className="grid gap-3 md:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr] md:items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-silver/60 outline-none transition focus:border-neon/60 focus:bg-black/40"
            />

            <div className="relative">
              <select
                value={langFilter}
                onChange={(e) => setLangFilter(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.96),rgba(10,10,10,0.92))] px-3 py-3 pr-9 text-xs text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_24px_rgba(0,0,0,0.25)] outline-none transition focus:border-neon/60 focus:ring-2 focus:ring-neon/20 sm:text-sm"
              >
                <option value="all">
                  {lang === "fa" ? "همه زبان‌ها" : "All languages"}
                </option>
                {languageOptions.map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-silver/80" />
            </div>

            <div className="relative">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as LevelFilter)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.96),rgba(10,10,10,0.92))] px-3 py-3 pr-9 text-xs text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_24px_rgba(0,0,0,0.25)] outline-none transition focus:border-neon/60 focus:ring-2 focus:ring-neon/20 sm:text-sm"
              >
                <option value="all">
                  {lang === "fa" ? "همه سطوح" : "All levels"}
                </option>
                <option value="beginner">
                  {lang === "fa" ? "مبتدی" : "Beginner"}
                </option>
                <option value="intermediate">
                  {lang === "fa" ? "میانی" : "Intermediate"}
                </option>
                <option value="advanced">
                  {lang === "fa" ? "پیشرفته" : "Advanced"}
                </option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-silver/80" />
            </div>

            <div className="relative">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as PriceFilter)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.96),rgba(10,10,10,0.92))] px-3 py-3 pr-9 text-xs text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_24px_rgba(0,0,0,0.25)] outline-none transition focus:border-neon/60 focus:ring-2 focus:ring-neon/20 sm:text-sm"
              >
                <option value="all">
                  {lang === "fa" ? "همه قیمت‌ها" : "All prices"}
                </option>
                <option value="free">{t("free")}</option>
                <option value="paid">{t("paid")}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-silver/80" />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-silver">{t("noResults")}</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
