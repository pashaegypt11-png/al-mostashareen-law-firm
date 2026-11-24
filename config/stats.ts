export type StatKey = "experience" | "cases" | "confidentiality";

export type StatDefinition = {
  key: StatKey;
  value: number;
  suffix: "+" | "%";
  label: {
    en: string;
    ar: string;
  };
  // Edit this value or the approved flag to control this stat.
  approved: boolean;
};

export const stats: readonly StatDefinition[] = [
  {
    key: "experience",
    value: 30,
    suffix: "+",
    label: {
      en: "Years of Legal Experience",
      ar: "سنوات من الخبرة القانونية",
    },
    approved: true,
  },
  {
    key: "cases",
    value: 7800,
    suffix: "+",
    label: {
      en: "Cases Successfully Managed",
      ar: "قضية تمت إدارتها بنجاح",
    },
    approved: true,
  },
  {
    key: "confidentiality",
    value: 100,
    suffix: "%",
    label: {
      en: "Absolute Data Confidentiality",
      ar: "سرية تامة للبيانات",
    },
    approved: true,
  },
];
