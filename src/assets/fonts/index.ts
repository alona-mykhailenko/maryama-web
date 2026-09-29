import { Montserrat } from "next/font/google";

export interface Font {
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  className: string;
  fontStyle: string;
}

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WEIGHTS = {
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
} as const;

/**
 * Type scale. Each size carries its own line height; most display sizes
 * (22px and up) are fluid and shrink on narrow screens, capped at their nominal
 * size; 30px stays fixed for the hero wordmark.
 */
const SIZES = {
  T9px: { fontSize: "9px", lineHeight: 1.5 },
  T10px: { fontSize: "10px", lineHeight: 1.5 },
  T12px: { fontSize: "12px", lineHeight: 1.8 },
  T13px: { fontSize: "13px", lineHeight: 2 },
  T14px: { fontSize: "14px", lineHeight: 2 },
  T16px: { fontSize: "16px", lineHeight: 1.6 },
  T22px: { fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.3 },
  T24px: { fontSize: "clamp(20px, 1.8vw, 24px)", lineHeight: 1.3 },
  T30px: { fontSize: "30px", lineHeight: 1.2 },
  T34px: { fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.35 },
  T40px: { fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.35 },
  T56px: { fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1 },
} as const;

export type FontWeightName = keyof typeof WEIGHTS;
export type FontSizeName = keyof typeof SIZES;
export type FontScale = Record<FontSizeName, Record<FontWeightName, Font>>;

export interface Fonts {
  /** Typeface 1 — Montserrat. */
  T1: FontScale;
}

const scale = (className: string): FontScale =>
  Object.fromEntries(
    Object.entries(SIZES).map(([sizeName, size]) => [
      sizeName,
      Object.fromEntries(
        Object.entries(WEIGHTS).map(([weightName, fontWeight]) => [
          weightName,
          { className, fontWeight, ...size, fontStyle: "normal" },
        ]),
      ),
    ]),
  ) as FontScale;

/**
 * Typography tokens: `FONTS.<typeface>.<size>.<weight>`, e.g.
 * `FONTS.T1.T14px.Regular`. Pass one to the core `Text` via its `font` prop.
 */
const FONTS: Fonts = {
  T1: scale(montserrat.className),
};

export default FONTS;
