"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 28,
  onDone,
  className,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
  className?: string;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className}>
      {shown}
      <span className="animate-blink text-neon">▍</span>
    </span>
  );
}
