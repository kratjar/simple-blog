const media = (_: any, width: string) => `@media (min-width: ${width})`

const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export const theme = {
  density: 4,
  spacing: (multiplicatior: number) => `${theme.density * multiplicatior}px`,
  breakpoints,
  mediaMin: (breakpoint: keyof typeof breakpoints) => media`${theme.breakpoints[breakpoint]}`,
}

export type Theme = typeof theme

export interface ThemeProps {
  theme?: Theme
}
