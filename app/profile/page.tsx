"use client";

import Image from "next/image";
import { Flame, Clock3, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import ActivityChart from "@/components/ActivityChart";
import { useLang, useT } from "@/lib/i18n";
import { purchasedCourses, ongoingCourses, achievements } from "@/lib/data";

export default function Profile() {
  const { lang } = useLang();
  const t = useT();

  const stats = [
    { icon: Flame, label: t("streak") },
    { icon: Clock3, label: t("totalHours") },
    { icon: Target, label: t("wordsLearned") },
  ];

  return (
    <main className="min-h-screen bg-transparent pb-20 md:pb-0">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-8 flex flex-col items-center gap-4 rounded-3xl border border-silverline bg-panel p-6 text-center sm:flex-row sm:p-8 sm:text-start">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-silverline sm:h-20 sm:w-20">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
              alt="پروفایل مبین اسدی"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white sm:text-xl">
              مبین اسدی
            </h1>
            <p className="text-sm text-silver">mobin.asadi@example.com</p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-2xl border border-silverline bg-panel p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-silverline bg-panel2">
                <s.icon size={18} className="text-neon" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs text-silver">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-10 rounded-2xl border border-silverline bg-panel p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("activityOverview")}
          </h2>
          <ActivityChart />
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("myCourses")} · {t("ongoing")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("myCourses")} · {t("completed")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {purchasedCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("achievements")}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.id}
                className="flex flex-col items-center gap-2 rounded-2xl border border-silverline bg-panel p-5 text-center transition-colors hover:border-neon/50"
              >
                <span className="text-3xl">{a.icon}</span>
                <span className="text-sm text-silver">{a.title[lang]}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
