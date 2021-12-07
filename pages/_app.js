import NavBar from "../components/NavBar";
import '../styles/globals.css'
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          My blog
        </title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;