"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const rand = (seed) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export default function BackgroundCanvas() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => {
        const s1 = rand(i * 4 + 1);
        const s2 = rand(i * 4 + 2);
        const s3 = rand(i * 4 + 3);
        const s4 = rand(i * 4 + 4);
        return {
          sizeW: 1 + s1 * 2,
          sizeH: 1 + s2 * 2,
          top: s3 * 100,
          left: s4 * 100,
          opacity: 0.2 + s1 * 0.6,
          duration: 2 + s2 * 3,
        };
      }),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: s.opacity }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full"
          style={{
            width: `${s.sizeW}px`,
            height: `${s.sizeH}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            background: "rgba(255, 193, 7, 0.9)",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
