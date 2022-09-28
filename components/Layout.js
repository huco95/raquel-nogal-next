import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl m-auto my-6">{children}</main>
    </>
  );
}
