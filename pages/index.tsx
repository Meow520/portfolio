import Head from "next/head";
import { NextPage } from "next";
import HeadingPhoto from "@/components/Home/HeadingPhoto";
import TopNews from "@/components/Home/TopNews";
import Layout from "@/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Mao Yamaguchi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HeadingPhoto />
        <TopNews />
      </main>
    </Layout>
  );
};


export default Home;
