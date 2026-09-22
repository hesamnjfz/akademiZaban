"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, User, LifeBuoy } from "lucide-react";
import { useT } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useT();
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: t("navHome"), icon: Home },
    { href: "/courses", label: t("navCourses"), icon: BookOpen },
    { href: "/profile", label: t("navProfile"), icon: User },
    { href: "/support", label: t("navSupport"), icon: LifeBuoy },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden items-center justify-start gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-white/5 text-white"
                      : "text-silver hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <l.icon size={16} strokeWidth={2} />
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>

          <div className="hidden md:block" />
        </div>
      </header>

      <nav className="fixed inset-x-3 bottom-3 z-30 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-[26px] border border-white/10 bg-black/70 px-2 py-2 shadow-[0_12px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex flex-1 flex-col items-center justify-center rounded-[18px] px-2 py-2 text-[10px] transition-all ${
                  active
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-silver hover:bg-white/5 hover:text-white"
                }`}
              >
                <l.icon size={18} strokeWidth={active ? 2.4 : 1.8} />
                <span className="mt-1">{l.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
