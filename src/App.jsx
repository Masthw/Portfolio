import React from "react";
import "./App.css";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Project";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
