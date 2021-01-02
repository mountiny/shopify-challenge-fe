import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  
  return (
    <>
      <Head>  
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <title>Shopify Internship Code Challenge</title>
        <meta
          name="Description"
          content="Shopify Frontend Developer Internship Code Challenge"
        />
        <link href="favicon/favicon.ico" rel="shortcut icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#306060" />
        <meta name="msapplication-TileColor" content="#306060" />
        <meta name="theme-color" content="#306060"></meta>
      </Head>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
