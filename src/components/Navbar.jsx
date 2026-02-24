import { Menu } from "lucide-react";

export default function Navbar({ toggleTheme }) {
  return (
    <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-40">
      <h1 className="text-2xl font-bold">Ansh Shrivastav</h1>
      <div className="space-x-8 hidden md:flex">
        {["Skills", "Projects"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
}
