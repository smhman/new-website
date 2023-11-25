import { Analytics } from '@vercel/analytics/react';
import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.sundei.eu/weather.js';
    script.async = true;
  
    script.onload = () => {
      console.log('External script has been loaded successfully.');
    };
  
    script.onerror = () => {
      console.error('Error loading external script.');
    };
  
    document.body.appendChild(script);
  
    return () => {
      console.log('Cleanup: Removing script element.');
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>sundei</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;