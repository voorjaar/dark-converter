import type { Theme } from "./interfaces";

export const DEFAULT_COLORS = {
  darkScheme: {
    background: "#181a1b",
    text: "#e8e6e3",
  },
  lightScheme: {
    background: "#dcdad7",
    text: "#181a1b",
  },
};

export const DEFAULT_THEME: Theme = {
  mode: 1,
  brightness: 100,
  contrast: 100,
  grayscale: 0,
  sepia: 0,
  darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
  darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
  lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
  lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
};
