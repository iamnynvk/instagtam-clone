import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("screen");

export const COLORS = {
  blue: "#405DE6",
  purpleBlue: "#5851DB",
  purpleRed: "#C13584",
  rose: "#E1306C",
  brightRed: "#FD1D1D",
  RedOrange: "#F56040",
  orange: "#F77737",
  orangeYellow: "#FCAF45",
  yellow: "#FFDC80",
  black: "#000000",
  white: "#FFFFFF",
  border: "#d6d6d6",
  text: "#3c8bd6",
  button: "#4d95d9",
  gray: "#e3e3e3",
  facebook: "#3399f6",
  lightWhite: "#c9c9c9",
  lightBlack: "#222b2a",
};

const appTheme = { COLORS };
export default appTheme;
