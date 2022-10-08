import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface PaletteOptions {
    ali: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
    dark: PaletteOptions["primary"];
    purple:PaletteOptions["primary"];

  }
  interface Palette {
    ali: Palette["primary"];
    white: PaletteOptions["primary"];
    dark: PaletteOptions["primary"];
    purple:PaletteOptions["primary"];
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}
