import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBand from "./components/TrustBand";
import Features from "./components/Features";
import PopularArticles from "./components/PopularArticles";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg-soft">
      <Header />
      <Hero />
      <Reveal>
        <TrustBand />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <PopularArticles />
      </Reveal>
      <Reveal>
        <Newsletter />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
