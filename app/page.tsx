import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularArticles from "./components/PopularArticles";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg-soft">
      <Header />
      <Hero />
      <Features />
      <PopularArticles />
    </div>
  );
}
