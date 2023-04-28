import Head from "next/head";

export default function Schema({ navigation, siteLink }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(navigation)}</script>
      <script type="application/ld+json">{JSON.stringify(siteLink)}</script>
    </Head>
  );
}