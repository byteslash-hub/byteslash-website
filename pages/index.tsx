import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header.component";
import ByteText from "../components/ByteText.component";

const Home: NextPage = () => {
  return (
    <div className="h-screen p-10">
      <Head>
        <title>ByteSlash</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/codegowdacloud/image/upload/v1635327710/image-removebg-preview_jq9vzi.png"
        />
      </Head>
      <Header />
      <ByteText />
    </div>
  );
};

export default Home;
