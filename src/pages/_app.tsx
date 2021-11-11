import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
