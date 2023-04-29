import LocationProvider from "@/hooks/locationContext";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <LocationProvider>
      <Head>
        <title>Grab a meal</title>
      </Head>
      <Component {...pageProps} />
    </LocationProvider>
  );
}
