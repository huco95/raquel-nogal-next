import HomeLink from "./menu/HomeLink";
import Menu from "./menu/Menu";
import MobileMenu from "./menu/MobileMenu";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-5 md:px-4 m-auto border-b max-w-7xl border-b-gray-200 header-mobile md:h-header">
        <HomeLink />

        <div className="hidden md:flex items-center justify-around gap-4">
          <Menu className="flex items-center justify-around gap-4" />
          <ThemeSelector />
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
