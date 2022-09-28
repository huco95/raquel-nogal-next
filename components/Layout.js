import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl py-6 m-auto min-h-main">{children}</main>
    </>
  );
}
