"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  opacity: number;
  neon: boolean;
};

/** Lightweight particle snow — pauses off-tab, capped FPS, no blur shadows. */
export default function NeonSnow({ density = 10 }: { density?: number }) {
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
    const dpr = Math.min(window.devicePixelRatio || 1, isSmall ? 1 : 1.5);
    let width = 0;
    let height = 0;
    let visible = !document.hidden;
    let raf = 0;
    let last = 0;
    const frameMs = 1000 / 28;

    const count = Math.round(density * (isSmall ? 0.45 : 0.75));
    const flakes: Flake[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.4,
      speed: Math.random() * 0.28 + 0.08,
      drift: Math.random() * 0.22 - 0.11,
      opacity: Math.random() * 0.28 + 0.1,
      neon: Math.random() < 0.18,
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

      for (const f of flakes) {
        const x = f.x * width;
        const y = f.y * height;
        ctx.beginPath();
        ctx.arc(x, y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = f.neon
          ? `rgba(57,255,143,${f.opacity})`
          : `rgba(255,255,255,${f.opacity * 0.75})`;
        ctx.fill();

        f.y += f.speed / height;
        f.x += f.drift / width;
        if (f.y > 1.02) {
          f.y = -0.02;
          f.x = Math.random();
        }
        if (f.x > 1) f.x = 0;
        if (f.x < 0) f.x = 1;
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
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
