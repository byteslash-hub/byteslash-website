import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/byteslash-logo.png"></link>
          <meta name="theme-color" content="#202631" />
          <meta name="title" content="Byteslash" />
          <meta
            name="description"
            content="Byteslash is a community where developers and designers of all levels learn and grow by building projects."
          />
          <meta name="language" content="English" />
          <meta name="author" content="Byteslash" />
          <meta property="og:title" content="Byteslash" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Byteslash is a community where developers and designers of all levels learn and grow by building projects."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
