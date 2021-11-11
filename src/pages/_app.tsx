import { AppProps } from "next/app";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
