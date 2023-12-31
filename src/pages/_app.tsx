import { Analytics } from '@vercel/analytics/react';
import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>sundei</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script async src="https://sundei.ee/_vercel/insights/script.js"></script>

      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;