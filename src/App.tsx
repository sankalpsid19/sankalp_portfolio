import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <MobileMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
