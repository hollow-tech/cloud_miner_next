import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    primary: string;
    up: string;
    down: string;
    secondary: string;
    border: string;
    background: string;
    clean: string;

    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
