"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowLeft,
  CalendarDays,
  GraduationCap,
  Users,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { courseRegistrationData, courses } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const courseId = typeof params?.id === "string" ? params.id : "";
  const { lang } = useLang();
  const t = useT();
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <main className="min-h-screen bg-transparent pb-20 md:pb-0">
        <Navbar />
        <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-4 py-10 text-white">
          <div className="rounded-3xl border border-silverline bg-panel px-6 py-5 text-center">
            <h1 className="text-xl font-bold">Course not found</h1>
          </div>
        </div>
      </main>
    );
  }

  const chartData = courseRegistrationData[course.id] ?? [];

  return (
    <main className="min-h-screen bg-transparent pb-20 md:pb-0">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <Link
          href="/courses"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel px-3 py-2 text-sm text-white transition-colors hover:border-neon/50"
        >
          <ArrowLeft size={16} />
          {lang === "fa" ? "بازگشت به دوره‌ها" : "Back to courses"}
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="overflow-hidden rounded-[30px] border border-white/10 bg-panel">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title[lang]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${course.color}55, rgba(11,11,11,0.9) 72%)`,
                }}
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white">
                  {course.language[lang]}
                </span>
                <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white">
                  {course.level[lang]}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="mb-2 text-sm text-white/80">
                  {course.teacher[lang]}
                </p>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  {course.title[lang]}
                </h1>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-silver">
                  <GraduationCap size={16} className="text-neon" />
                  {t("lessons")}
                </div>
                <div className="text-xl font-bold text-white">
                  {course.lessons}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-silver">
                  <Users size={16} className="text-neon" />
                  {t("students")}
                </div>
                <div className="text-xl font-bold text-white">
                  {course.students.toLocaleString(
                    lang === "fa" ? "fa-IR" : "en-US",
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-silver">
                  <Star size={16} className="text-neon" />
                  Rating
                </div>
                <div className="text-xl font-bold text-white">
                  {course.rating}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-silver">
                  <CalendarDays size={16} className="text-neon" />
                  {lang === "fa" ? "قیمت" : "Price"}
                </div>
                <div className="text-xl font-bold text-white">
                  {course.price === 0
                    ? t("free")
                    : `${course.price.toLocaleString(lang === "fa" ? "fa-IR" : "en-US")} ${
                        lang === "fa" ? "تومان" : "T"
                      }`}
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-4">
            <section className="rounded-[30px] border border-white/10 bg-panel p-5 sm:p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-white">
                  {lang === "fa"
                    ? "ثبت‌نام در یک هفته گذشته"
                    : "Registrations in the last week"}
                </h2>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3 sm:p-4">
                <div className="h-[300px] w-full sm:h-[360px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 8, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="regGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#39ff8f"
                            stopOpacity={0.78}
                          />
                          <stop
                            offset="55%"
                            stopColor="#39ff8f"
                            stopOpacity={0.24}
                          />
                          <stop
                            offset="100%"
                            stopColor="#39ff8f"
                            stopOpacity={0.04}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        stroke="#2a2a2a"
                        strokeDasharray="3 3"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="day"
                        stroke="#9aa5a1"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        hide
                        stroke="#9aa5a1"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        cursor={{
                          stroke: "rgba(57,255,143,0.35)",
                          strokeWidth: 1,
                        }}
                        contentStyle={{
                          background: "#101010",
                          border: "1px solid #2a2a2a",
                          borderRadius: 12,
                          color: "#fff",
                        }}
                        labelStyle={{ color: "#9aa5a1" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="registrations"
                        stroke="#39ff8f"
                        strokeWidth={3}
                        fill="url(#regGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            <button className="w-full rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(57,255,143,0.18),rgba(255,255,255,0.05))] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-neon/50 hover:bg-[linear-gradient(135deg,rgba(57,255,143,0.28),rgba(255,255,255,0.08))]">
              {lang === "fa" ? "ثبت‌نام در دوره" : "Enroll in course"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
