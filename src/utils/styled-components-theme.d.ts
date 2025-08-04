import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    /* Cores de Fundo */
    colorBackground: string;
    colorSurface: string;
    colorCard: string;

    /* Cores de Texto */
    colorTextPrimary: string;
    colorTextSecondary: string;
    colorTextOnDark: string;

    /* Cores de Feedback */
    colorError: string;

    /* Cores de Linhas e Bordas */
    colorBorder: string;
    colorDivider: string;

    /* Cores Interativas e de Destaque */
    colorPrimary: string;
    colorPrimaryHover: string;
    colorAccent: string;

    /* Fontes */
    fontFamilySerif: string;
    fontFamily: string;
  }
}
