import "../styles/globals.css";
import Header from './../components/common/Header';
import Head from "next/head"
import Search from './../components/common/Search';
import {useEffect} from "react"
import Footer from './../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className="light-theme"
  }, [])
  return (
    <>
   
      <Header />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
