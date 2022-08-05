import "../styles/globals.css";
import Header from './../components/common/Header';
import Head from "next/head"
import Search from './../components/common/Search';
import {useEffect} from "react"
import Footer from './../components/common/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className="light-theme"
  }, [])
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
    </Head>
      <Header />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
