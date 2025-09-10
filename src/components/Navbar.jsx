import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
<nav className="fixed top-0 w-full z-40 bg-white border-t-3 border-b-3 border-black">
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <a href="#home" className="text-xl font-black text-black">
        Hervé Schmidt
      </a>

      <div
        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        &#9776;
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-black">ACCUEIL</a>
        <a href="#about" className="text-black">À PROPOS</a>
        <a href="#projects" className="text-black">PROJETS</a>
        <a href="#contact" className="text-black">CONTACT</a>
      </div>
    </div>
  </div>
</nav>


  );
};