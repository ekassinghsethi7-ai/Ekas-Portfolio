import React from 'react';
import Header from './Header';
import Hero from './Hero';
import CareerMap from './CareerMap';
import FinanceProjects from './FinanceProjects';
import ArticleCommentary from './ArticleCommentary';
import EdenSneakerHeroes from './EdenSneakerHeroes';
import MMABlog from './MMABlog';
import PortfolioPerformance from './PortfolioPerformance';
import CurrentReads from './CurrentReads';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <Hero />
      <CareerMap />
      <FinanceProjects />
      <ArticleCommentary />
      <EdenSneakerHeroes />
      <MMABlog />
      <PortfolioPerformance />
      <CurrentReads />
      <Footer />
    </div>
  );
}

export default App;