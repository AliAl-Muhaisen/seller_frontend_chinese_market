import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  // interface Theme{
  //   ali: {
  //     main: string;
  //   }
  // }
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  interface PaletteOptions  {
    ali: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
  }
  interface Palette {
    ali: Palette['primary'];
    white: PaletteOptions['primary'];
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  // interface ThemeOptions {
  //   ali: {
  //     main: React.CSSProperties["color"];
  //   };
  // }
}
