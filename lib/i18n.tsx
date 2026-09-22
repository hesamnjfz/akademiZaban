"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fa" | "en";

type Dict = Record<string, { fa: string; en: string }>;

export const dict: Dict = {
  brand: { fa: "همراه‌زبان", en: "LinguaMate" },
  tagline: {
    fa: "همین الان آموزش زبانت رو شروع کن!",
    en: "Start learning your language now!",
  },
  heroSub: {
    fa: "یک همراه هوشمند که از اولین قدم تا تسلط کامل، کنار توئه.",
    en: "A smart companion that walks with you from your first step to full fluency.",
  },
  langToggleFa: { fa: "فارسی", en: "فارسی" },
  langToggleEn: { fa: "English", en: "English" },
  startCta: {
    fa: "همین الان آموزش زبانت رو شروع کن",
    en: "Start your language journey now",
  },

  // onboarding
  onboardingTitle: { fa: "بذار بهتر بشناسمت", en: "Let's get to know you" },
  stepOf: { fa: "مرحله", en: "Step" },
  typing: { fa: "در حال نوشتن...", en: "typing..." },
  yourAnswer: { fa: "پاسخت رو بنویس...", en: "Type your answer..." },
  send: { fa: "ارسال", en: "Send" },
  finishing: {
    fa: "در حال آماده‌سازی دوره‌های پیشنهادی...",
    en: "Preparing your recommended courses...",
  },

  // nav
  navHome: { fa: "خانه", en: "Home" },
  navCourses: { fa: "دوره‌ها", en: "Courses" },
  navProfile: { fa: "پروفایل", en: "Profile" },
  navSupport: { fa: "پشتیبانی", en: "Support" },

  // dashboard
  welcomeBack: { fa: "خوش برگشتی", en: "Welcome back" },
  recommendedForYou: {
    fa: "دوره‌های پیشنهادی برای تو",
    en: "Recommended for you",
  },
  yourTeachers: { fa: "استادهای پیشنهادی", en: "Suggested teachers" },
  continueLearning: { fa: "ادامه‌ی یادگیری", en: "Continue learning" },
  viewAll: { fa: "مشاهده همه", en: "View all" },
  enroll: { fa: "ثبت‌نام در دوره", en: "Enroll" },
  lessons: { fa: "درس", en: "lessons" },
  students: { fa: "دانشجو", en: "students" },
  loadingCourses: {
    fa: "وضعیت بارگذاری دوره‌ها",
    en: "Loading your courses",
  },
  highlightDaily: { fa: "پیشرفت روزانه", en: "Daily progress" },
  highlightPath: { fa: "ترتیب یادگیری", en: "Learning path" },
  highlightPractice: { fa: "تمرین هدفمند", en: "Focused practice" },
  demoUser: { fa: "مبین", en: "Mobin" },

  // courses
  allCourses: { fa: "همه‌ی دوره‌ها", en: "All courses" },
  searchPlaceholder: {
    fa: "جست‌وجوی دوره یا استاد...",
    en: "Search courses or teachers...",
  },
  filterLanguage: { fa: "زبان", en: "Language" },
  filterLevel: { fa: "سطح", en: "Level" },
  filterPrice: { fa: "قیمت", en: "Price" },
  all: { fa: "همه", en: "All" },
  free: { fa: "رایگان", en: "Free" },
  paid: { fa: "پولی", en: "Paid" },
  noResults: { fa: "دوره‌ای پیدا نشد.", en: "No courses found." },

  // profile
  profileTitle: { fa: "پروفایل من", en: "My profile" },
  activityOverview: { fa: "روند فعالیت من", en: "My activity overview" },
  myCourses: { fa: "دوره‌های خریداری‌شده", en: "Purchased courses" },
  ongoing: { fa: "در حال برگزاری", en: "Ongoing" },
  completed: { fa: "تکمیل‌شده", en: "Completed" },
  streak: { fa: "روز پیاپی یادگیری", en: "day streak" },
  totalHours: { fa: "ساعت یادگیری", en: "hours learned" },
  wordsLearned: { fa: "واژه‌ی یادگرفته‌شده", en: "words learned" },
  achievements: { fa: "دستاوردها", en: "Achievements" },

  // support
  supportTitle: { fa: "ارتباط با پشتیبانی", en: "Contact support" },
  supportSub: {
    fa: "هر سوالی داری، تیم ما همیشه کنارته.",
    en: "Whatever your question, our team is always here for you.",
  },
  name: { fa: "نام", en: "Name" },
  email: { fa: "ایمیل", en: "Email" },
  subject: { fa: "موضوع", en: "Subject" },
  message: { fa: "پیام", en: "Message" },
  sendMessage: { fa: "ارسال پیام", en: "Send message" },
  liveChat: { fa: "گفت‌وگوی آنلاین", en: "Live chat" },
  callUs: { fa: "تماس تلفنی", en: "Call us" },
  faq: { fa: "سوالات متداول", en: "FAQ" },
};

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);
}

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextType>({
  lang: "fa",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? window.localStorage.getItem("lang")
        : null;
    if (saved === "en" || saved === "fa") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
