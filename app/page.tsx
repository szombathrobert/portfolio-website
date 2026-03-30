import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-bloodOrange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}