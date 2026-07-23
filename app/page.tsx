import Hero from "./components/Hero";
import IntentCards from "./components/IntentCards";
import SpeciesSection from "./components/SpeciesSection";
import TrendingSearches from "./components/TrendingSearches";
import ComparativasSection from "./components/ComparativasSection";
import LatestArticles from "./components/LatestArticles";
import TopicsExplorer from "./components/TopicsExplorer";
import Newsletter from "./components/Newsletter";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg-soft">
      <Hero />
      <Reveal>
        <IntentCards />
      </Reveal>
      <Reveal>
        <SpeciesSection />
      </Reveal>
      <Reveal>
        <TrendingSearches />
      </Reveal>
      <Reveal>
        <ComparativasSection />
      </Reveal>
      <Reveal>
        <LatestArticles />
      </Reveal>
      <Reveal>
        <TopicsExplorer />
      </Reveal>
      <Reveal>
        <Newsletter />
      </Reveal>
    </div>
  );
}
