import Image from "next/image";
import ThemeSelector from "../components/ThemeSelector";
import profilePic from "../public/images/raquel-nogal.webp";
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/menu/MobileMenu";

export default function Home() {
  return (
    <>
      <div className="sm:hidden">
        <div className="fixed top-5 right-5 z-10">
          <MobileMenu />
        </div>

        <div className="relative h-screen">
          <Image
            priority
            src={profilePic}
            alt="Raquel Nogal"
            layout="fill"
            objectFit="cover"
            className="grayscale brightness-50"
          />
        </div>
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-4xl font-medium tracking-wider">Raquel Nogal</h1>
          <h2 className="italic font-light">
            Periodismo | Marketing Digital
          </h2>{" "}
        </div>
      </div>

      <div className="hidden sm:block">
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

              <Menu className="leading-7"></Menu>
            </div>

            <div className="w-4/6">
              <Image
                priority
                src={profilePic}
                alt="Raquel Nogal"
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
