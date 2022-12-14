import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl px-4 py-6 m-auto min-h-main-mobile md:min-h-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
