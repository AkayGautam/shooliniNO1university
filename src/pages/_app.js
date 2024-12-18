/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/inline-script-id */
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { SSRProvider } from "react-bootstrap";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

// styles
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/flaticon.css";
import "../styles/css/swiper.min.css";
import "../styles/fonts/stylesheet.css";
import "../styles/css/modal-video.min.css";
import "../styles/css/animate.css";
import "../styles/css/normalize.css";
import "../styles/fonts/fonts.css";
import "../styles/css/font-awesome.min.css";
import "../styles/fonts/gilroy.css"
export default function App({ Component, pageProps, metric }) {


  const router = useRouter();
  const canonicalUrl = (
    `https://shooliniuniversity.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const allSchemaData = 
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Shoolini University",
    "url": "https://shooliniuniversity.com/",
    "potentialAction": {
    "@type": "SearchAction",
    "target": "https://shooliniuniversity.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
    }
  }

  
  

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <link rel="shortcut icon" href="/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemaData) }} />

      

      </Head>
      <SSRProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
