import Social from "./social/Social";

export default function Footer() {
  return (
    <footer className="h-footer">
      <div class="w-4/6 h-px bg-gray-200 m-auto mb-4"></div>
      <div className="flex flex-row justify-center gap-x-4">
        <p className="font-medium tracking-wider">Raquel Nogal</p>
        <span>·</span>
        <Social className="flex flex-row gap-x-4" />
      </div>
    </footer>
  );
}
