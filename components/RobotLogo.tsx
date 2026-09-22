"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Transparent logo at /public/robot-logo.png.
 * Falls back to a neon SVG robot if the asset fails to load.
 *
 * Sizing is controlled through `className` (Tailwind width utilities).
 */
export default function RobotLogo({
  className = "w-16",
}: {
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ratio = 1415 / 1920;

  if (!failed) {
    return (
      <div
        className={`${className} relative select-none`}
        style={{ aspectRatio: `1 / ${ratio}` }}
      >
        <Image
          src="/robot-logo.png"
          alt="ربات همراه‌زبان"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 20vw"
          className="object-contain drop-shadow-[0_0_12px_rgba(57,255,143,0.18)]"
          draggable={false}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={`${className} select-none`}>
      <svg
        viewBox="0 0 300 221"
        className="h-auto w-full drop-shadow-[0_0_10px_rgba(57,255,143,0.15)]"
        aria-label="نماد ربات همراه‌زبان"
      >
        <defs>
          <linearGradient id="botGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39ff8f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0b6b3f" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect
          x="90"
          y="120"
          width="120"
          height="101"
          rx="18"
          fill="#0f1412"
          stroke="#3a4440"
          strokeOpacity="0.8"
        />
        <rect
          x="70"
          y="30"
          width="160"
          height="110"
          rx="26"
          fill="#0b0e0d"
          stroke="url(#botGlow)"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="30"
          x2="150"
          y2="10"
          stroke="#7dffb8"
          strokeWidth="2.5"
        />
        <circle cx="150" cy="7" r="4.5" fill="#39ff8f" />
        <circle cx="118" cy="85" r="11" fill="#39ff8f" opacity="0.85">
          <animate
            attributeName="opacity"
            values="0.85;0.25;0.85"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="182" cy="85" r="11" fill="#39ff8f" opacity="0.85">
          <animate
            attributeName="opacity"
            values="0.85;0.25;0.85"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
        <rect
          x="120"
          y="112"
          width="60"
          height="5"
          rx="2.5"
          fill="#7dffb8"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
