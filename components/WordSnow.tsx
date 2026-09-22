"use client";

import { useEffect, useRef } from "react";
import { snowWords } from "@/lib/data";

type Word = {
  text: string;
  x: number;
  y: number;
  speed: number;
  drift: number;
  opacity: number;
  size: number;
  neon: boolean;
};

/** Floating words for onboarding — low FPS, no shadowBlur, pauses off-tab. */
export default function WordSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const isSmall = window.innerWidth < 640;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    let width = 0;
    let height = 0;
    let visible = !document.hidden;
    let raf = 0;
    let last = 0;
    const frameMs = 1000 / 24;

    const wordCount = isSmall ? 8 : 14;
    const words: Word[] = Array.from({ length: wordCount }, () => ({
      text: snowWords[Math.floor(Math.random() * snowWords.length)],
      x: Math.random(),
      y: Math.random(),
      speed: Math.random() * 0.32 + 0.1,
      drift: Math.random() * 0.18 - 0.09,
      opacity: Math.random() * 0.14 + 0.05,
      size: Math.random() * (isSmall ? 5 : 7) + 11,
      neon: Math.random() < 0.16,
    }));

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(now: number) {
      if (!ctx || !visible) {
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(draw);
      if (now - last < frameMs) return;
      last = now;

      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = "center";

      for (const w of words) {
        ctx.font = `${w.size}px var(--font-vazirmatn), sans-serif`;
        ctx.fillStyle = w.neon
          ? `rgba(57,255,143,${w.opacity})`
          : `rgba(255,255,255,${w.opacity})`;
        ctx.fillText(w.text, w.x * width, w.y * height);

        w.y += w.speed / height;
        w.x += w.drift / width;
        if (w.y > 1.05) {
          w.y = -0.05;
          w.x = Math.random();
          w.text = snowWords[Math.floor(Math.random() * snowWords.length)];
        }
        if (w.x > 1) w.x = 0;
        if (w.x < 0) w.x = 1;
      }
    }

    function onVisibility() {
      visible = !document.hidden;
      if (visible && !raf) {
        last = 0;
        raf = requestAnimationFrame(draw);
      }
    }

    let resizeTimer = 0;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    }

    resize();
    raf = requestAnimationFrame(draw);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
