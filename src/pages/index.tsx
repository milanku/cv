import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

import { styled } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const headshot = {
  size: {
    PC: "220px",
    M: "100px",
  },
};

const PageContainer = styled.div`
  width: calc(100vw - 360px);
  height: calc(100vh - 220px);
  padding-left: 120px;

  display: flex;
  flex-direction: row;
  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    color: white;
    font: 1.5em Source Sans Pro;
  }
`;

const Headshot = styled.div`
  margin: 20px;
  width: ${headshot.size.PC};
  height: ${headshot.size.PC};
  border-radius: 100%;
  overflow: hidden;
  background: white;

  img {
    width: 100%;
    height: auto;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Milan Kubala</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Socials />
      <Footer />
      <PageContainer>
        <div className="text">
          <h1>Milan Kubala</h1>
          <p>Frontend Developer, redaktor, editor</p>
        </div>
        <Headshot>
          <Image
            src={"/imgs/headshot01-right-sm.png"}
            width={900}
            height={900}
            alt="Milan Kubala"
          />
        </Headshot>
      </PageContainer>
    </>
  );
}
