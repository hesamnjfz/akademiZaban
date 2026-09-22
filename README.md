# VANOS Language Academy

نمونه کار فرانت‌اند آکادمی زبان — ساخته‌شده با Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## ویژگی‌ها

- لندینگ برند VANOS با افکت برف نئون
- آنبوردینگ چندمرحله‌ای (شبیه کوییز)
- داشبورد، لیست دوره‌ها، جزئیات دوره با نمودار
- پروفایل، پشتیبانی، و سوییچ فارسی / انگلیسی (RTL/LTR)

## اجرا محلی

```bash
npm install
npm run dev
```

سپس برو به `http://localhost:3000`.

## بیلد پروداکشن

```bash
npm run build
npm start
```

## دیپلوی روی Vercel

1. ریپو را روی GitHub پوش کن
2. در [vercel.com](https://vercel.com) پروژه را Import کن
3. Framework: **Next.js** (خودکار تشخیص داده می‌شود)
4. Build Command: `npm run build` — Output: پیش‌فرض Next.js

اختیاری: متغیر محیطی `NEXT_PUBLIC_SITE_URL` را روی دامنه نهایی تنظیم کن (مثلاً `https://your-app.vercel.app`).

## لوگو

فایل لوگو در مسیر زیر قرار دارد:

```
public/robot-logo.png
```

## صفحات

| مسیر | توضیح |
|------|--------|
| `/` | لندینگ |
| `/onboarding` | آنبوردینگ |
| `/dashboard` | داشبورد |
| `/courses` | لیست دوره‌ها |
| `/courses/[id]` | جزئیات دوره |
| `/profile` | پروفایل |
| `/support` | پشتیبانی |

داده‌های دمو در `lib/data.ts` هستند.
