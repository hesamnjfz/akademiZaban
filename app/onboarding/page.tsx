"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import WordSnow from "@/components/WordSnow";
import RobotLogo from "@/components/RobotLogo";
import { useLang, useT } from "@/lib/i18n";
import { onboardingSteps } from "@/lib/data";

export default function Onboarding() {
  const { lang } = useLang();
  const t = useT();
  const router = useRouter();

  const [pageIndex, setPageIndex] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string>("");
  const [finishing, setFinishing] = useState(false);

  const totalPages = onboardingSteps.length;
  const totalQuestions = onboardingSteps.reduce(
    (sum, page) => sum + page.length,
    0,
  );
  const activeQuestion = onboardingSteps[pageIndex][qIndex];
  const currentPageLength = onboardingSteps[pageIndex].length;

  const progress = useMemo(() => {
    const completedQuestions = onboardingSteps
      .slice(0, pageIndex)
      .reduce((sum, page) => sum + page.length, 0);
    const currentProgress = (qIndex + 1) / currentPageLength;
    const ratio = (completedQuestions + currentProgress) / totalQuestions;
    return Math.min(100, ratio * 100);
  }, [currentPageLength, pageIndex, qIndex, totalQuestions]);

  useEffect(() => {
    setSelected("");
  }, [pageIndex, qIndex]);

  function answerQuestion(option: string) {
    setSelected(option);

    const nextQ = qIndex + 1;
    const nextPage = pageIndex + 1;

    window.setTimeout(() => {
      if (nextQ < onboardingSteps[pageIndex].length) {
        setQIndex(nextQ);
      } else if (nextPage < totalPages) {
        setPageIndex(nextPage);
        setQIndex(0);
      } else {
        setFinishing(true);
        window.setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      }
    }, 260);
  }

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-3 pb-28 pt-6 sm:px-4 sm:pb-10 sm:pt-8">
      <WordSnow />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center justify-center lg:max-w-3xl">
        <RobotLogo className="w-36 sm:w-44 lg:w-52" />

        <div className="mt-0 w-full overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.55)] sm:p-[1.25px]">
          <div className="rounded-[29px] bg-[linear-gradient(180deg,rgba(12,12,12,0.94),rgba(8,8,8,0.92))] p-4 backdrop-blur-xl sm:p-5 lg:p-8">
            <div className="mb-3 flex items-center justify-between text-[11px] text-silver sm:text-xs lg:text-sm">
              <span dir="ltr">
                {t("stepOf")} {pageIndex + 1} / {totalPages}
              </span>
              <span className="hidden sm:inline">{t("onboardingTitle")}</span>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5 lg:h-2">
              <div
                className="h-full rounded-full bg-white transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-3 sm:p-4 lg:p-6">
              <p className="text-[15px] leading-8 text-white sm:text-base lg:text-lg lg:leading-9">
                {activeQuestion.prompt[lang]}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-3">
              {activeQuestion.options[lang].map((option) => {
                const isSelected = selected === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answerQuestion(option)}
                    className={`rounded-2xl border px-3 py-3 text-right text-sm backdrop-blur-md transition-all duration-200 sm:text-[15px] lg:px-4 lg:py-4 lg:text-base ${
                      isSelected
                        ? "border-white bg-white text-black shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
                        : "border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(255,255,255,0.06)]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {finishing && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-silver">
                {t("finishing")}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
