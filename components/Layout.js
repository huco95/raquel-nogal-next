import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl m-auto">{children}</main>
    </>
  );
}
