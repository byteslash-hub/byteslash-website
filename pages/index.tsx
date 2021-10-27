import Head from "next/head";
import type { NextPage } from "next";
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-[#2C384F] h-screen p-10">
      <Head>
        <title>ByteSlash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  );
};

export default Home;
