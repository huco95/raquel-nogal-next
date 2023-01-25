import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Social from "../social/Social";
import ThemeSelector from "../ThemeSelector";
import HomeLink from "./HomeLink";
import Menu from "./Menu";

export default function MobileMenu({ buttonClassName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (isMenuOpen) {
      if (width > 768) {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      } else {
        document.body.classList.add("overflow-hidden");
      }
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [width, isMenuOpen]);

  const toggleMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div onClick={toggleMenu} className="cursor-pointer">
        <Bars3Icon className={"w-5 h-5 " + buttonClassName} />
      </div>

      <div
        className={
          "fixed h-screen w-screen inset-0 bg-white dark:bg-gray-800 p-5 z-10" +
          (isMenuOpen ? "" : " hidden")
        }
      >
        <div className="flex items-center justify-between">
          <HomeLink />

          <div onClick={toggleMenu} className="cursor-pointer">
            <XMarkIcon className="float-right w-5 h-5" />
          </div>
        </div>

        <Menu className="flex flex-col gap-10 mt-10" />
        <div className="flex flex-row justify-between items-center mt-10">
          <Social className="flex flex-row gap-x-4" />
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
