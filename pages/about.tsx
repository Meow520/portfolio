import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import AboutContent from "@/components/About/AboutContent";
import profilePhoto from "../public/pictures/profile2.jpeg";
import Layout from "@/components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="Mao Yamaguchi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="text-5xl text-center font-semibold my-5">
          ABOUT
        </div>
        <div className="flex justify-center w-3/4 mx-auto">
          <div className="mx-auto">
            <AboutContent
              title="Mao Yamaguchi"
              contents={["Osaka, Japan", "Frontend Engineer"]}
            />
            <AboutContent
              title="Study"
              timeSeriesContents={[
                {
                  startYear: 2023,
                  startMonth: 3,
                  main: "Knowledge Acquisition and Dialogue Research Team from RIKEN (Joint Research)",
                },
                {
                  startYear: 2022,
                  startMonth: 12,
                  main: "Social Robotics Laboratory",
                },
                {
                  startYear: 2021,
                  startMonth: 4,
                  main: "Doshisha University, Faculty of Culture and Information Science",
                },
              ]}
            />
            <AboutContent
              title="Carrer"
              timeSeriesContents={[
                { startYear: 2023, startMonth: 1, main: "var" },
              ]}
            />
            <AboutContent
              title="Activity"
              timeSeriesContents={[
                {
                  startYear: 2022,
                  startMonth: 4,
                  main: "Do'er",
                },
                {
                  startYear: 2021,
                  startMonth: 4,
                  main: "Dosisha Co-op Student Committee",
                },
              ]}
            />
          </div>
          <div className="w-80 mt-10">
            <Image src={profilePhoto} alt="profile photo" />
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default About;
