export type Lang = "fa" | "en";

export type Course = {
  id: string;
  title: { fa: string; en: string };
  teacher: { fa: string; en: string };
  language: { fa: string; en: string };
  langCode: "en" | "de" | "fr" | "es" | "zh" | "ja" | "ru";
  level: { fa: string; en: string };
  levelCode: "beginner" | "intermediate" | "advanced";
  price: number; // 0 = free
  lessons: number;
  students: number;
  rating: number;
  color: string;
  image: string;
};
export const courses: Course[] = [
  {
    id: "c1",
    title: {
      fa: "انگلیسی مکالمه‌محور روزمره",
      en: "Everyday Conversational English",
    },
    teacher: { fa: "استاد سارا احمدی", en: "Coach Sara Ahmadi" },
    language: { fa: "انگلیسی", en: "English" },
    langCode: "en",
    level: { fa: "مبتدی", en: "Beginner" },
    levelCode: "beginner",
    price: 0,
    lessons: 24,
    students: 3210,
    rating: 4.8,
    color: "#39ff8f",
    image: "/1.avif",
  },
  {
    id: "c2",
    title: { fa: "آلمانی از صفر تا B1", en: "German from Zero to B1" },
    teacher: { fa: "استاد یوهانس مولر", en: "Coach Johannes Müller" },
    language: { fa: "آلمانی", en: "German" },
    langCode: "de",
    level: { fa: "مبتدی تا میانی", en: "Beginner to Intermediate" },
    levelCode: "beginner",
    price: 890000,
    lessons: 40,
    students: 1520,
    rating: 4.7,
    color: "#7dffb8",
    image: "/2.avif",
  },
  {
    id: "c3",
    title: {
      fa: "فرانسه برای سفر و تجارت",
      en: "French for Travel & Business",
    },
    teacher: { fa: "استاد کلوئه برنارد", en: "Coach Chloé Bernard" },
    language: { fa: "فرانسوی", en: "French" },
    langCode: "fr",
    level: { fa: "میانی", en: "Intermediate" },
    levelCode: "intermediate",
    price: 650000,
    lessons: 18,
    students: 980,
    rating: 4.6,
    color: "#39ff8f",
    image: "/3.avif",
  },
  {
    id: "c4",
    title: {
      fa: "چینی کاربردی - مهارت شنیداری",
      en: "Practical Chinese - Listening Skills",
    },
    teacher: { fa: "استاد لی وی", en: "Coach Li Wei" },
    language: { fa: "چینی", en: "Chinese" },
    langCode: "zh",
    level: { fa: "مبتدی", en: "Beginner" },
    levelCode: "beginner",
    price: 720000,
    lessons: 30,
    students: 640,
    rating: 4.5,
    color: "#7dffb8",
    image: "/4.avif",
  },
  {
    id: "c5",
    title: {
      fa: "ژاپنی برای علاقه‌مندان انیمه",
      en: "Japanese for Anime Fans",
    },
    teacher: { fa: "استاد یوکی تاناکا", en: "Coach Yuki Tanaka" },
    language: { fa: "ژاپنی", en: "Japanese" },
    langCode: "ja",
    level: { fa: "مبتدی", en: "Beginner" },
    levelCode: "beginner",
    price: 0,
    lessons: 20,
    students: 2210,
    rating: 4.9,
    color: "#39ff8f",
    image: "/5.avif",
  },
  {
    id: "c6",
    title: {
      fa: "روسی پیشرفته - ادبیات و گفتار",
      en: "Advanced Russian - Literature & Speech",
    },
    teacher: { fa: "استاد النا پتروا", en: "Coach Elena Petrova" },
    language: { fa: "روسی", en: "Russian" },
    langCode: "ru",
    level: { fa: "پیشرفته", en: "Advanced" },
    levelCode: "advanced",
    price: 990000,
    lessons: 26,
    students: 410,
    rating: 4.4,
    color: "#7dffb8",
    image: "/6.avif",
  },
  {
    id: "c7",
    title: { fa: "اسپانیایی سریع و روان", en: "Fast & Fluent Spanish" },
    teacher: { fa: "استاد کارلوس رویز", en: "Coach Carlos Ruiz" },
    language: { fa: "اسپانیایی", en: "Spanish" },
    langCode: "es",
    level: { fa: "میانی", en: "Intermediate" },
    levelCode: "intermediate",
    price: 540000,
    lessons: 22,
    students: 1330,
    rating: 4.6,
    color: "#39ff8f",
    image: "/7.avif",
  },
  {
    id: "c8",
    title: {
      fa: "انگلیسی تجاری و مصاحبه شغلی",
      en: "Business English & Interviews",
    },
    teacher: { fa: "استاد سارا احمدی", en: "Coach Sara Ahmadi" },
    language: { fa: "انگلیسی", en: "English" },
    langCode: "en",
    level: { fa: "پیشرفته", en: "Advanced" },
    levelCode: "advanced",
    price: 780000,
    lessons: 16,
    students: 2040,
    rating: 4.9,
    color: "#7dffb8",
    image: "/8.avif",
  },
];

export const courseRegistrationData: Record<
  string,
  { day: string; registrations: number }[]
> = {
  c1: [
    { day: "شنبه", registrations: 18 },
    { day: "یکشنبه", registrations: 24 },
    { day: "دوشنبه", registrations: 21 },
    { day: "سه‌شنبه", registrations: 29 },
    { day: "چهارشنبه", registrations: 26 },
    { day: "پنجشنبه", registrations: 34 },
    { day: "جمعه", registrations: 31 },
  ],
  c2: [
    { day: "شنبه", registrations: 9 },
    { day: "یکشنبه", registrations: 11 },
    { day: "دوشنبه", registrations: 13 },
    { day: "سه‌شنبه", registrations: 16 },
    { day: "چهارشنبه", registrations: 15 },
    { day: "پنجشنبه", registrations: 19 },
    { day: "جمعه", registrations: 17 },
  ],
  c3: [
    { day: "شنبه", registrations: 8 },
    { day: "یکشنبه", registrations: 10 },
    { day: "دوشنبه", registrations: 12 },
    { day: "سه‌شنبه", registrations: 14 },
    { day: "چهارشنبه", registrations: 13 },
    { day: "پنجشنبه", registrations: 18 },
    { day: "جمعه", registrations: 16 },
  ],
  c4: [
    { day: "شنبه", registrations: 6 },
    { day: "یکشنبه", registrations: 8 },
    { day: "دوشنبه", registrations: 9 },
    { day: "سه‌شنبه", registrations: 10 },
    { day: "چهارشنبه", registrations: 12 },
    { day: "پنجشنبه", registrations: 11 },
    { day: "جمعه", registrations: 14 },
  ],
  c5: [
    { day: "شنبه", registrations: 12 },
    { day: "یکشنبه", registrations: 15 },
    { day: "دوشنبه", registrations: 14 },
    { day: "سه‌شنبه", registrations: 18 },
    { day: "چهارشنبه", registrations: 21 },
    { day: "پنجشنبه", registrations: 24 },
    { day: "جمعه", registrations: 22 },
  ],
  c6: [
    { day: "شنبه", registrations: 4 },
    { day: "یکشنبه", registrations: 5 },
    { day: "دوشنبه", registrations: 6 },
    { day: "سه‌شنبه", registrations: 7 },
    { day: "چهارشنبه", registrations: 8 },
    { day: "پنجشنبه", registrations: 9 },
    { day: "جمعه", registrations: 10 },
  ],
  c7: [
    { day: "شنبه", registrations: 7 },
    { day: "یکشنبه", registrations: 9 },
    { day: "دوشنبه", registrations: 10 },
    { day: "سه‌شنبه", registrations: 11 },
    { day: "چهارشنبه", registrations: 14 },
    { day: "پنجشنبه", registrations: 13 },
    { day: "جمعه", registrations: 15 },
  ],
  c8: [
    { day: "شنبه", registrations: 11 },
    { day: "یکشنبه", registrations: 14 },
    { day: "دوشنبه", registrations: 16 },
    { day: "سه‌شنبه", registrations: 18 },
    { day: "چهارشنبه", registrations: 20 },
    { day: "پنجشنبه", registrations: 23 },
    { day: "جمعه", registrations: 25 },
  ],
};

export const teachers = [
  {
    id: "t1",
    name: { fa: "سارا احمدی", en: "Sara Ahmadi" },
    spec: { fa: "انگلیسی مکالمه", en: "Conversational English" },
    rating: 4.8,
    students: 5200,
  },
  {
    id: "t2",
    name: { fa: "یوهانس مولر", en: "Johannes Müller" },
    spec: { fa: "آلمانی عمومی", en: "General German" },
    rating: 4.7,
    students: 1520,
  },
  {
    id: "t3",
    name: { fa: "یوکی تاناکا", en: "Yuki Tanaka" },
    spec: { fa: "ژاپنی مبتدی", en: "Beginner Japanese" },
    rating: 4.9,
    students: 2210,
  },
  {
    id: "t4",
    name: { fa: "کلوئه برنارد", en: "Chloé Bernard" },
    spec: { fa: "فرانسه کاربردی", en: "Practical French" },
    rating: 4.6,
    students: 980,
  },
];

// onboarding: 4 pages x 3 questions, transformed into a quiz-like card flow
// every question now offers fixed options so the mobile experience feels like a real assessment.
export const onboardingSteps: {
  prompt: { fa: string; en: string };
  options: { fa: string[]; en: string[] };
}[][] = [
  [
    {
      prompt: {
        fa: "کدوم زبان برای شروع بیشتر جذابه؟",
        en: "Which language feels most exciting to start with?",
      },
      options: {
        fa: ["انگلیسی", "آلمانی", "فرانسوی", "ژاپنی"],
        en: ["English", "German", "French", "Japanese"],
      },
    },
    {
      prompt: {
        fa: "هدف اصلی‌ات از یادگیری زبان چه چیزی است؟",
        en: "What's your main motivation for learning a language?",
      },
      options: {
        fa: ["سفر", "کار و مصاحبه", "مهاجرت", "تفریح و سرگرمی"],
        en: ["Travel", "Work & interviews", "Immigration", "Fun & hobbies"],
      },
    },
  ],
  [
    {
      prompt: {
        fa: "اگر همین الان یک نفر به زبان انتخابی‌ات صحبت کند، چند درصد می‌فهمی؟",
        en: "If someone spoke your target language right now, how much would you understand?",
      },
      options: {
        fa: ["۰ تا ۲۵٪", "۲۶ تا ۵۰٪", "۵۱ تا ۷۵٪", "۷۶ تا ۱۰۰٪"],
        en: ["0–25%", "26–50%", "51–75%", "76–100%"],
      },
    },
    {
      prompt: {
        fa: "در هفته چند ساعت می‌توانی برای یادگیری وقت بگذاری؟",
        en: "How many hours per week can you realistically commit?",
      },
      options: {
        fa: ["کم‌تر از ۲ ساعت", "۲ تا ۴ ساعت", "۴ تا ۶ ساعت", "۶+ ساعت"],
        en: ["Under 2 hrs", "2–4 hrs", "4–6 hrs", "6+ hrs"],
      },
    },
    {
      prompt: {
        fa: "اولویت اصلی‌ات در مسیر یادگیری چیست؟",
        en: "What matters most in your learning journey?",
      },
      options: {
        fa: ["تکلم سریع", "گرامر قوی", "خواندن و نوشتن", "تعامل با استاد"],
        en: [
          "Speaking fast",
          "Strong grammar",
          "Reading & writing",
          "Teacher interaction",
        ],
      },
    },
  ],
  [
    {
      prompt: {
        fa: "چه نوع محیطی برای پیشرفت به تو کمک می‌کند؟",
        en: "What kind of learning environment helps you learn faster?",
      },
      options: {
        fa: ["استاد خصوصی", "کلاس گروهی", "تمرین فردی", "مسابقه و پاداش"],
        en: [
          "Private tutor",
          "Group class",
          "Solo practice",
          "Challenge & rewards",
        ],
      },
    },
    {
      prompt: {
        fa: "چه زمانی از روز برای تمرین بهتر باز می‌شوی؟",
        en: "What time of day do you feel most focused?",
      },
      options: {
        fa: ["صبح", "ظهر", "عصر", "شب"],
        en: ["Morning", "Noon", "Afternoon", "Night"],
      },
    },
    {
      prompt: {
        fa: "اگر ۶ ماه آینده بتوانی با زبان انتخابی‌ات راحت حرف بزنی، این برای تو چه معنایی دارد؟",
        en: "If in 6 months you could speak confidently, what does that unlock for you?",
      },
      options: {
        fa: ["افزایش اعتماد", "فرصت شغلی", "سفر راحت‌تر", "حس پیشرفت روزانه"],
        en: [
          "More confidence",
          "Career growth",
          "Easier travel",
          "Daily motivation",
        ],
      },
    },
  ],
  [
    {
      prompt: {
        fa: "موضوع‌هایی که بیشتر دوست داری درباره‌شان حرف بزنی چه هستند؟",
        en: "Which topics make you want to speak the language more?",
      },
      options: {
        fa: ["فیلم و سریال", "سفر", "فناوری", "کسب‌وکار"],
        en: ["Movies & series", "Travel", "Tech", "Business"],
      },
    },
    {
      prompt: {
        fa: "قبلاً برای یادگیری این زبان تلاش کرده‌ای؟",
        en: "Have you tried learning this language before?",
      },
      options: {
        fa: [
          "نه، برای اولین بار است",
          "بله، اما متوقف شدم",
          "بله و ادامه می‌دهم",
          "فقط نگاه می‌کردم",
        ],
        en: [
          "No, first time",
          "Yes, but stopped",
          "Yes and continuing",
          "Just browsing",
        ],
      },
    },
    {
      prompt: {
        fa: "در این مسیر چه چیزی می‌تواند باعث شود به‌خاطر این بار موفق شوی؟",
        en: "What will make this attempt feel different and stick?",
      },
      options: {
        fa: [
          "برنامه‌ی منظم",
          "پشتیبانی استاد",
          "تمرین روزانه",
          "حس پیشرفت واضح",
        ],
        en: [
          "A clear schedule",
          "Teacher support",
          "Daily practice",
          "Visible progress",
        ],
      },
    },
  ],
];

export const snowWords = [
  "Hello",
  "سلام",
  "Привет",
  "Hallo",
  "Bonjour",
  "你好",
  "こんにちは",
  "زبان",
  "Language",
  "Sprache",
  "Langue",
  "语言",
  "言語",
  "Язык",
  "Learn",
  "یادگیری",
  "Lernen",
  "Apprendre",
  "学习",
  "学ぶ",
  "Учить",
  "Bonjour",
  "Danke",
  "شکراً" /* keep light, purely decorative */,
  "Merci",
  "谢谢",
  "ありがとう",
  "Спасибо",
  "متشکرم",
];

// profile activity: last 14 days minutes studied
export const activityData = [
  { day: "1", fa: "۱", minutes: 20 },
  { day: "2", fa: "۲", minutes: 35 },
  { day: "3", fa: "۳", minutes: 15 },
  { day: "4", fa: "۴", minutes: 50 },
  { day: "5", fa: "۵", minutes: 40 },
  { day: "6", fa: "۶", minutes: 60 },
  { day: "7", fa: "۷", minutes: 30 },
  { day: "8", fa: "۸", minutes: 45 },
  { day: "9", fa: "۹", minutes: 70 },
  { day: "10", fa: "۱۰", minutes: 55 },
  { day: "11", fa: "۱۱", minutes: 65 },
  { day: "12", fa: "۱۲", minutes: 80 },
  { day: "13", fa: "۱۳", minutes: 50 },
  { day: "14", fa: "۱۴", minutes: 90 },
];

export const purchasedCourses = [courses[0], courses[4], courses[6]];
export const ongoingCourses = [courses[0], courses[4]];

export const achievements = [
  { id: "a1", title: { fa: "۷ روز پیاپی", en: "7-day streak" }, icon: "🔥" },
  { id: "a2", title: { fa: "۱۰۰ واژه جدید", en: "100 new words" }, icon: "📚" },
  {
    id: "a3",
    title: { fa: "اولین مکالمه", en: "First conversation" },
    icon: "💬",
  },
  {
    id: "a4",
    title: { fa: "تکمیل یک دوره", en: "Course completed" },
    icon: "🏆",
  },
];
