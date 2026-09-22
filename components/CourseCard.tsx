"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang, useT } from "@/lib/i18n";
import type { Course } from "@/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  const { lang } = useLang();
  const t = useT();

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group relative content-soft overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/20"
    >
      <div className="relative h-32 w-full overflow-hidden sm:h-36">
        <Image
          src={course.image}
          alt={course.title[lang]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${course.color}45, rgba(10,10,10,0.78) 72%)`,
          }}
        />

        <div className="absolute inset-0 flex items-end justify-between p-3 sm:p-4">
          <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[11px] text-silver sm:px-3 sm:text-xs">
            {course.language[lang]}
          </span>
          <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[11px] text-silver sm:px-3 sm:text-xs">
            {course.level[lang]}
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <h3 className="mb-1 line-clamp-2 min-h-[2.75rem] text-sm font-semibold text-white sm:min-h-[3rem] sm:text-base">
          {course.title[lang]}
        </h3>
        <p className="mb-3 text-xs text-silver sm:text-sm">
          {course.teacher[lang]}
        </p>

        <div className="flex items-center justify-between gap-3">
          <span className="font-en text-sm text-white">
            {course.price === 0
              ? t("free")
              : `${course.price.toLocaleString(lang === "fa" ? "fa-IR" : "en-US")} ${
                  lang === "fa" ? "تومان" : "T"
                }`}
          </span>
          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white transition-colors group-hover:border-white/20 group-hover:bg-white/[0.08]">
            {t("enroll")}
          </span>
        </div>
      </div>
    </Link>
  );
}
