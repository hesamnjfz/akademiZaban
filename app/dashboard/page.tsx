"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Flame, Clock3, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import { useLang, useT } from "@/lib/i18n";
import { courses, teachers, ongoingCourses } from "@/lib/data";

export default function Dashboard() {
  const { lang } = useLang();
  const t = useT();
  const [showLoadingBar, setShowLoadingBar] = useState(true);

  const dashboardHighlights = useMemo(
    () => [t("highlightDaily"), t("highlightPath"), t("highlightPractice")],
    [lang],
  );

  useEffect(() => {
    if (!showLoadingBar) return;
    const timer = window.setTimeout(() => setShowLoadingBar(false), 1600);
    return () => window.clearTimeout(timer);
  }, [showLoadingBar]);

  const quickStats = useMemo(
    () => [
      { icon: Flame, value: formatStatValue(lang, 12), label: t("streak") },
      {
        icon: Clock3,
        value: formatStatValue(lang, 36),
        label: t("totalHours"),
      },
      {
        icon: Target,
        value: formatStatValue(lang, 480),
        label: t("wordsLearned"),
      },
    ],
    [lang],
  );

  return (
    <main className="min-h-screen bg-transparent pb-20 md:pb-0">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="dashboard-welcome-shell mb-10 overflow-hidden rounded-3xl border border-silverline bg-panel p-6 sm:p-8 md:flex md:items-center md:justify-between">
          <div className="dashboard-ambient dashboard-ambient-one" />
          <div className="dashboard-ambient dashboard-ambient-two" />

          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-[11px] text-neon backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_rgba(57,255,143,0.95)]" />
              {t("welcomeBack")}, {t("demoUser")}
            </div>
            <h1 className="mt-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {t("recommendedForYou")}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {dashboardHighlights.map((item) => (
                <span
                  key={item}
                  className="dashboard-chip rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-silver"
                >
                  {item}
                </span>
              ))}
            </div>

            {showLoadingBar ? (
              <div className="mt-5 max-w-md">
                <div className="mb-2 flex items-center justify-between text-[11px] text-silver">
                  <span>{t("loadingCourses")}</span>
                </div>

                <div className="dashboard-progress-track h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="dashboard-progress-bar dashboard-progress-bar-run h-full rounded-full" />
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative z-10 mt-6 grid w-full gap-3 sm:grid-cols-3 md:mt-0 md:w-auto md:min-w-[420px]">
            {quickStats.map((s) => (
              <div
                key={s.label}
                className="dashboard-stat-card flex min-h-[78px] items-center justify-center gap-2 rounded-2xl border border-silverline bg-panel2 px-3.5 py-2.5 text-center"
              >
                <s.icon size={16} className="text-neon" strokeWidth={2} />
                <span className="font-en text-sm text-white">{s.value}</span>
                <span className="text-xs text-silver">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {t("continueLearning")}
            </h2>
            <Link href="/courses" className="text-sm text-neon hover:underline">
              {t("viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {t("recommendedForYou")}
            </h2>
            <Link href="/courses" className="text-sm text-neon hover:underline">
              {t("viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 4).map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {t("yourTeachers")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {teachers.map((tch) => (
              <TeacherCard key={tch.id} teacher={tch} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function formatStatValue(lang: "fa" | "en", value: number) {
  if (lang === "fa") {
    return String(value)
      .split("")
      .map(
        (digit) =>
          ({
            "0": "۰",
            "1": "۱",
            "2": "۲",
            "3": "۳",
            "4": "۴",
            "5": "۵",
            "6": "۶",
            "7": "۷",
            "8": "۸",
            "9": "۹",
          })[digit] ?? digit,
      )
      .join("");
  }

  return String(value);
}
