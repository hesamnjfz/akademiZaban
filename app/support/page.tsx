"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLang, useT } from "@/lib/i18n";

export default function Support() {
  const t = useT();
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const faqs = [
    {
      q: { fa: "چطور در یک دوره ثبت‌نام کنم؟", en: "How do I enroll in a course?" },
      a: {
        fa: "کافیه وارد صفحه‌ی دوره‌ها بشی، دوره‌ی مدنظرت رو انتخاب کنی و روی دکمه‌ی ثبت‌نام بزنی.",
        en: "Just open the Courses page, pick the course you like, and click Enroll.",
      },
    },
    {
      q: { fa: "آیا امکان بازپرداخت وجود داره؟", en: "Is a refund possible?" },
      a: {
        fa: "بله، تا ۷ روز پس از خرید امکان بازپرداخت کامل وجود دارد.",
        en: "Yes, a full refund is available within 7 days of purchase.",
      },
    },
    {
      q: { fa: "چطور با استاد دوره در ارتباط باشم؟", en: "How can I contact my teacher?" },
      a: {
        fa: "از طریق بخش پیام‌رسان داخل صفحه‌ی دوره می‌تونی مستقیم با استاد در ارتباط باشی.",
        en: "You can message your teacher directly from the course page's chat section.",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-transparent pb-20 md:pb-0">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-white">{t("supportTitle")}</h1>
          <p className="mt-2 text-silver">{t("supportSub")}</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-silverline bg-panel p-5 text-center transition-colors hover:border-neon/40">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-silverline bg-panel2">
              <MessageCircle size={18} className="text-neon" strokeWidth={2} />
            </div>
            <div className="text-sm font-semibold text-white">{t("liveChat")}</div>
            <div className="mt-1 text-xs text-silver">
              {lang === "fa" ? "۹ صبح تا ۹ شب" : "9 AM – 9 PM"}
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-silverline bg-panel p-5 text-center transition-colors hover:border-neon/40">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-silverline bg-panel2">
              <Phone size={18} className="text-neon" strokeWidth={2} />
            </div>
            <div className="text-sm font-semibold text-white">{t("callUs")}</div>
            <div dir="ltr" className="mt-1 text-xs text-silver">
              021-91234567
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-silverline bg-panel p-5 text-center transition-colors hover:border-neon/40">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-silverline bg-panel2">
              <Mail size={18} className="text-neon" strokeWidth={2} />
            </div>
            <div className="text-sm font-semibold text-white">Email</div>
            <div dir="ltr" className="mt-1 text-xs text-silver">
              support@linguamate.app
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-silverline bg-panel p-6"
          >
            <div className="mb-4">
              <label className="mb-1 block text-sm text-silver">{t("name")}</label>
              <input className="w-full rounded-xl border border-silverline bg-ink px-4 py-2.5 text-sm text-white outline-none focus:border-neon" />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm text-silver">{t("email")}</label>
              <input
                type="email"
                dir="ltr"
                className="w-full rounded-xl border border-silverline bg-ink px-4 py-2.5 text-sm text-white outline-none focus:border-neon"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm text-silver">{t("subject")}</label>
              <input className="w-full rounded-xl border border-silverline bg-ink px-4 py-2.5 text-sm text-white outline-none focus:border-neon" />
            </div>
            <div className="mb-5">
              <label className="mb-1 block text-sm text-silver">{t("message")}</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-silverline bg-ink px-4 py-2.5 text-sm text-white outline-none focus:border-neon"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl border border-neon/30 bg-neon/10 py-3 text-sm font-semibold text-neon transition-colors hover:bg-neon/20"
            >
              {sent ? "✓" : t("sendMessage")}
            </button>
          </form>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">{t("faq")}</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-silverline bg-panel p-4 open:border-neon/40"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-white">
                    {f.q[lang]}
                  </summary>
                  <p className="mt-3 text-sm text-silver">{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
