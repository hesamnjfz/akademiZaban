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

export default function NeonSnow({ density = 26 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // fewer flakes on small screens, and respect user's motion preference
    const isSmall = width < 640;
    const count = reduceMotion ? 0 : Math.round(density * (isSmall ? 0.5 : 1));

    const flakes: Flake[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.5,
      speed: Math.random() * 0.35 + 0.1,
      drift: Math.random() * 0.3 - 0.15,
      opacity: Math.random() * 0.35 + 0.12,
      // only ~1 in 5 flakes is neon green, the rest are soft white — keeps the accent rare
      neon: Math.random() < 0.2,
    }));

    let raf = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        if (f.neon) {
          ctx.fillStyle = `rgba(57,255,143,${f.opacity})`;
          ctx.shadowColor = "rgba(57,255,143,0.7)";
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${f.opacity * 0.8})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        f.y += f.speed;
        f.x += f.drift;
        if (f.y > height) {
          f.y = -5;
          f.x = Math.random() * width;
        }
        if (f.x > width) f.x = 0;
        if (f.x < 0) f.x = width;
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
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
