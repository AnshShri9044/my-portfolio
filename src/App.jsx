import { useEffect, useState } from "react";
import { roles } from "./data/data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
      setText(roles[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero text={text} />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
