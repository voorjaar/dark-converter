export enum FilterMode {
  light = 0,
  dark = 1
}

export interface Theme {
  mode: FilterMode;
  brightness: number;
  contrast: number;
  grayscale: number;
  sepia: number;
  darkSchemeBackgroundColor: string;
  darkSchemeTextColor: string;
  lightSchemeBackgroundColor: string;
  lightSchemeTextColor: string;
}

export type FilterConfig = Theme;