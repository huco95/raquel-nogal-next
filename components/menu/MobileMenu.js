import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import HomeLink from "./HomeLink";
import Menu from "./Menu";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (isMenuOpen) {
      if (width > 640) {
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
        <Bars3Icon className="w-6 h-6 text-white" />
      </div>

      <div
        className={
          "fixed h-screen w-screen inset-0 bg-white dark:bg-gray-800 p-5" +
          (isMenuOpen ? "" : " hidden")
        }
      >
        <div className="flex items-center justify-between">
          <HomeLink />

          <div onClick={toggleMenu} className="cursor-pointer">
            <XMarkIcon className="w-6 h-6 float-right" />
          </div>
        </div>

        <Menu className="mt-10 flex flex-col gap-10" />
      </div>
    </div>
  );
}
