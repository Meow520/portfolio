import Head from "next/head";
import ContactForm from "../components/Contact/ContactForm";
import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";

const Contact:NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Mao Yamaguchi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="text-5xl text-center font-semibold my-5">CONTACT</div>
        <div>
          <ContactForm />
        </div>
      </main>
    </Layout>
  );
};
export default Contact;
