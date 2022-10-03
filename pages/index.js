import Image from "next/image";
import Links from "../components/Links";
import ThemeSelector from "../components/ThemeSelector";
import profilePic from "../public/images/raquel-nogal.webp";

export default function Home() {
  return (
    <>
      <div className="fixed top-5 right-5">
        <ThemeSelector></ThemeSelector>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <main className="flex items-center justify-center gap-x-20">
          <div className="w-2/6">
            <div className="mb-7">
              <h1 className="text-2xl font-medium tracking-wider">
                Raquel Nogal
              </h1>
              <h2 className="text-sm italic font-light">
                Periodismo | Marketing Digital
              </h2>
            </div>

            <Links classNames="leading-7" />
          </div>

          <div className="w-4/6">
            <Image
              priority
              src={profilePic}
              alt="Raquel Nogal"
              width={500}
              height={500}
              className="object-cover rounded-lg "
            />
          </div>
        </main>
      </div>
    </>
  );
}
