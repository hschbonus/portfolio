import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills.jsx";
import "./index.css";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
  );
}

export default App;