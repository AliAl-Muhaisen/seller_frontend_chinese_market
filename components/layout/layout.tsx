import { ThemeProvider } from "@emotion/react";

import theme from "@/lib/mui/theme/theme";
import { PropsWithChildren } from "react";
import Header from "./header/header";
const Layout = ({ children }: PropsWithChildren) => {
  return (
  <ThemeProvider theme={theme}>
      <div>
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
      </div>
  </ThemeProvider>
  );
};

export default Layout;
