"use client";

import { useLang } from "@/lib/i18n";

export default function TeacherCard({
  teacher,
}: {
  teacher: {
    id: string;
    name: { fa: string; en: string };
    spec: { fa: string; en: string };
    rating: number;
    students: number;
  };
}) {
  const { lang } = useLang();
  const initials = teacher.name[lang].slice(0, 1);

  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-base font-bold text-white sm:h-14 sm:w-14 sm:text-lg">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate font-semibold text-white">
          {teacher.name[lang]}
        </h4>
        <p className="truncate text-sm text-silver">{teacher.spec[lang]}</p>
      </div>
      <div className="shrink-0 text-end text-xs text-silver">
        <div className="text-white">⭐ {teacher.rating}</div>
        <div>
          {teacher.students.toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
        </div>
      </div>
    </div>
  );
}
