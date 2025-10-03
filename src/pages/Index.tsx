import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
