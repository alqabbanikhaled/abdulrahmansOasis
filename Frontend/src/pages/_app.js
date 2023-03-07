import "../styles/globals.scss";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
