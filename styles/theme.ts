import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {

  text: "#333333",
  primary: "#0B65C6",
  up: "#18AA73",
  down: "#EA3943",
  secondary: "#7F8798",
  border: "#ECEEF3",
  background: "#F8F8F8",
  clean: "#FFFFFF",


  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1800px)`,
    desktop: `(max-width: 2560px)`,
  },
};
