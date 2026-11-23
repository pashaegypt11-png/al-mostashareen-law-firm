export type StatKey = "experience" | "cases" | "confidentiality";

export interface StatConfig {
  key: StatKey;
  value: number;
  suffix: "+" | "%";
  ringProgress: number;
  approved: boolean;
}

export const stats: readonly StatConfig[] = [
  {
    key: "experience",
    value: 30,
    suffix: "+",
    ringProgress: 100,
    approved: true,
  },
  {
    key: "cases",
    value: 10000,
    suffix: "+",
    ringProgress: 100,
    // Hidden until this real, approved value is supplied.
    approved: false,
  },
  {
    key: "confidentiality",
    value: 100,
    suffix: "%",
    ringProgress: 100,
    // Hidden until this real, approved value is supplied.
    approved: false,
  },
];

export const approvedStats = stats.filter((stat) => stat.approved);
