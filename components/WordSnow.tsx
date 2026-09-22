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
  glow: number;
  color: string;
};

export default function WordSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isSmall = width < 640;
    const wordCount = isSmall ? 14 : 24;

    const words: Word[] = Array.from({ length: wordCount }, () => {
      const neon = Math.random() < 0.18;
      return {
        text: snowWords[Math.floor(Math.random() * snowWords.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.4 + 0.14,
        drift: Math.random() * 0.24 - 0.12,
        opacity: Math.random() * 0.18 + 0.05,
        size: Math.random() * (isSmall ? 6 : 9) + 11,
        glow: neon ? 12 : 0,
        color: neon ? "rgba(57,255,143," : "rgba(255,255,255,",
      };
    });

    let raf = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const w of words) {
        const baseColor = `${w.color}${w.opacity})`;
        ctx.save();
        ctx.font = `${w.size}px var(--font-vazirmatn), sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = baseColor;
        ctx.shadowBlur = w.glow;
        ctx.shadowColor = w.glow
          ? "rgba(57,255,143,0.9)"
          : "rgba(255,255,255,0.3)";
        ctx.fillText(w.text, w.x, w.y);
        ctx.restore();

        if (!reduceMotion) {
          w.y += w.speed;
          w.x += Math.sin(w.y * 0.02) * 0.08 + w.drift;
        }

        if (w.y > height + 30) {
          w.y = -30;
          w.x = Math.random() * width;
          w.text = snowWords[Math.floor(Math.random() * snowWords.length)];
        }

        if (w.x > width) w.x = 0;
        if (w.x < 0) w.x = width;
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90"
      aria-hidden="true"
    />
  );
}
