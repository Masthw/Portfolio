import React from "react";
import "./App.css";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />

      <Contact />
    </main>
  );
}

export default App;
