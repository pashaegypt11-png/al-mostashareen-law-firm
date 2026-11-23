"use client";

import { useEffect, useRef, useState } from "react";
import { approvedStats } from "@/config/stats";
import { getContent } from "@/lib/content";

type Locale = "ar" | "en";

const CIRCUMFERENCE = 2 * Math.PI * 94;

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function StatCircle({
  value,
  suffix,
  ringProgress,
  label,
  index,
}: {
  value: number;
  suffix: "+" | "%";
  ringProgress: number;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [count, setCount] = useState(value);
  const [started, setStarted] = useState(false);
  const [ringOffset, setRingOffset] = useState(CIRCUMFERENCE * (1 - ringProgress / 100));
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          setRingOffset(CIRCUMFERENCE);
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion, ringProgress, value]);

  useEffect(() => {
    if (!started) return;

    if (reducedMotion) {
      return;
    }

    let frame = 0;
    const duration = 2000;
    const startTime = performance.now() + index * 150;
    const targetOffset = CIRCUMFERENCE * (1 - ringProgress / 100);

    const animate = (now: number) => {
      if (now < startTime) {
        frame = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      setRingOffset(CIRCUMFERENCE - CIRCUMFERENCE * (ringProgress / 100) * eased);

      if (progress < 1) frame = requestAnimationFrame(animate);
      else {
        setCount(value);
        setRingOffset(targetOffset);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [index, reducedMotion, ringProgress, started, value]);

  const finalText = `${formatNumber(value)}${suffix}`;
  const ariaText = `${finalText} ${label}`;

  return (
    <li ref={ref} className="flex min-w-0 flex-col items-center text-center" aria-label={ariaText}>
      <div className="relative aspect-square w-full max-w-[230px]">
        <svg
          viewBox="0 0 220 220"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle cx="110" cy="110" r="94" fill="none" stroke="var(--color-gold-200)" strokeWidth="3" />
          <circle
            cx="110"
            cy="110"
            r="94"
            fill="none"
            stroke="var(--color-gold-500)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={ringOffset}
            transform="rotate(-90 110 110)"
          />
        </svg>
        <div className="absolute inset-[12px] flex items-center justify-center rounded-full border border-gold-300/70 bg-paper shadow-[0_12px_32px_-18px_rgba(6,58,47,0.55)]">
          <div className="flex items-baseline justify-center font-serif font-bold tabular-nums text-brand-900" dir="ltr">
            <span aria-hidden="true" className="text-5xl md:text-6xl">
              {formatNumber(count)}
            </span>
            <span aria-hidden="true" className="text-2xl md:text-3xl text-gold-700">{suffix}</span>
          </div>
          <span className="sr-only">{finalText}</span>
        </div>
      </div>
      <p className="mt-4 max-w-[220px] text-sm md:text-base font-bold leading-snug text-brand-900">
        {label}
      </p>
    </li>
  );
}

export function StatsSection({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = {
    experience: content.statsExperienceLabel,
    cases: content.statsCasesLabel,
    confidentiality: content.statsConfidentialityLabel,
  };

  return (
    <section aria-label={content.statsHeading} className="border-y border-gold-200/70 bg-paper py-14 md:py-20">
      <h2 className="sr-only">{content.statsHeading}</h2>
      <div className="container-xl">
        <ul className="flex flex-wrap items-start justify-center gap-10 md:gap-14">
          {approvedStats.map((stat, index) => (
            <StatCircle
              key={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              ringProgress={stat.ringProgress}
              label={labels[stat.key]}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
