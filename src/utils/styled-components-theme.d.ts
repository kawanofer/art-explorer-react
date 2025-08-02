import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    white: string;
    black: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    textOnDark: string;
    textError: string;
    grey: string;
    border: string;
    interactivePrimary: string;
    interactiveHover: string;
    accentSubtle: string;
    fontFamilySerif: string;
    fontFamily: string;
  }
}
