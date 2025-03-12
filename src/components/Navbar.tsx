import { useEffect } from "react";

interface NavbarProps {
  setMenuOpen: (value: boolean) => void;
  menuOpen: boolean;
}

export const Navbar = ({ setMenuOpen, menuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <h1 className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Hey
          </a>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden "
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {"  "}
              Home{"  "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {"  "}
              About{"  "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {"  "}
              Projects{"  "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {"  "}
              Contact {"  "}
            </a>
          </div>
        </div>
      </h1>{" "}
    </nav>
  );
};
