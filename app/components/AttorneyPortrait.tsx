import Image from "next/image";

interface AttorneyPortraitProps {
  name: string;
  isArabic: boolean;
  src?: string;
}

export function AttorneyPortrait({
  name,
  isArabic,
  src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
}: AttorneyPortraitProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/80 p-1">
      <Image
        src={src}
        alt={name}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="rounded-[calc(1rem-4px)] object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brand-950/10" aria-hidden="true"></div>
      <span className="absolute bottom-4 end-4 rounded-full border border-gold-300 bg-paper/95 px-4 py-2 text-sm font-bold text-brand-900 shadow-md">
        30+ {isArabic ? "عامًا" : "years"}
      </span>
    </div>
  );
}
