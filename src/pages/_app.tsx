import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@/style/globals.css";
import Favicon from "@/components/Favicon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Favicon />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
