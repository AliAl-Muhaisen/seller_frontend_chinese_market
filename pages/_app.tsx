import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Layout from "@/components/layout/layout";
import store from '../store/store'
import { Provider } from 'react-redux'
// import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
export const config = {
  unstable_runtimeJS: false,
};
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    // <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    // </SessionProvider>
  );
}
export default MyApp;
