"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type StatDefinition } from "@/config/stats";
import { getContent, type Locale } from "@/lib/content";

function formatNumber(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function AnimatedStat({
  stat,
  locale,
  index,
}: {
  stat: StatDefinition;
  locale: Locale;
  index: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(stat.value);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      setCount(stat.value);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setCount(stat.value);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [stat.value]);

  useEffect(() => {
    if (!visible) return;
    if (reduceMotion) {
      setCount(stat.value);
      return;
    }

    if (!("requestAnimationFrame" in window)) {
      setCount(stat.value);
      return;
    }

    setCount(0);
    let frameId = 0;
    const timeout = window.setTimeout(() => {
      const duration = 2000;
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(stat.value * eased));
        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };
      frameId = window.requestAnimationFrame(tick);
    }, index * 150);

    return () => {
      window.clearTimeout(timeout);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [index, reduceMotion, stat.value, visible]);

  const content = getContent(locale);
  const label =
    stat.key === "experience"
      ? content.statsExperienceLabel
      : stat.key === "cases"
        ? content.statsCasesLabel
        : content.statsConfidentialityLabel;
  const ariaLabel = `${formatNumber(stat.value)}${stat.suffix} ${label}`;
  const radius = 108;
  const circumference = 2 * Math.PI * radius;
  const ringProgress = reduceMotion ? 1 : visible ? 1 : 0;
  const dashOffset = circumference * (1 - ringProgress);

  return (
    <article className="flex min-w-0 flex-col items-center text-center">
      <div
        ref={elementRef}
        className="relative flex size-[200px] items-center justify-center rounded-full md:size-[240px] lg:size-[260px]"
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full -rotate-90"
          viewBox="0 0 240 240"
          fill="none"
        >
          <circle
            cx="120"
            cy="120"
            r={radius}
            stroke="var(--color-gold-300)"
            strokeOpacity="0.28"
            strokeWidth="3"
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            stroke="var(--color-gold-500)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={reduceMotion ? 0 : dashOffset}
            style={{
              transition: reduceMotion
                ? "none"
                : `stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
            }}
          />
        </svg>
        <div className="flex size-[calc(100%-16px)] flex-col items-center justify-center rounded-full border border-gold-300/70 bg-paper text-brand-950 shadow-sm">
          <span className="sr-only">{ariaLabel}</span>
          <span
            aria-hidden="true"
            dir="ltr"
            className="inline-flex items-baseline justify-center font-serif text-[2.35rem] font-bold leading-none tabular-nums md:text-[2.7rem]"
          >
            {formatNumber(count)}
            <span className="text-gold-600">{stat.suffix}</span>
          </span>
        </div>
      </div>
      <p className="font-arabic mt-5 max-w-[18rem] text-base font-bold leading-snug text-brand-900 md:text-lg">
        {label}
      </p>
    </article>
  );
}

export default function StatsSection({ locale }: { locale: Locale }) {
  const approvedStats = stats.filter((stat) => stat.approved);
  if (approvedStats.length === 0) return null;

  const heading =
    locale === "ar" ? "أرقام المكتب" : "Our Firm in Numbers";

  return (
    <section
      aria-label={heading}
      className="bg-cream py-16 md:py-20"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <h2 className="sr-only">{heading}</h2>
      <div className="container-xl">
        <div
          className={
            approvedStats.length === 1
              ? "grid grid-cols-1 justify-items-center"
              : approvedStats.length === 2
                ? "grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-10"
                : "grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3"
          }
        >
          {approvedStats.map((stat, index) => (
            <AnimatedStat
              key={stat.key}
              stat={stat}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
