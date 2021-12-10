import NavBar from "../components/NavBar";
import '../styles/globals.css'
import Head from "next/head";
import Link from "next/link";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;