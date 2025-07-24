import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-end px-6 py-4 bg-primary text-white">
      <ThemeToggle />
    </nav>
  );
}
