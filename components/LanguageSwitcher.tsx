"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div
      dir="ltr"
      className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
    >
      <button
        onClick={() => setLang("fa")}
        className={`rounded-full px-4 py-1.5 text-xs transition-all sm:px-5 sm:text-sm ${
          lang === "fa"
            ? "bg-white text-black shadow-sm shadow-white/40"
            : "text-silver hover:text-white"
        }`}
      >
        فارسی
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-4 py-1.5 text-xs font-en transition-all sm:px-5 sm:text-sm ${
          lang === "en"
            ? "bg-white text-black shadow-sm shadow-white/40"
            : "text-silver hover:text-white"
        }`}
      >
        English
      </button>
    </div>
  );
}
