import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CareerMap from './components/CareerMap';
import FinanceProjects from './components/FinanceProjects';
import ArticleCommentary from './components/ArticleCommentary';
import EdenSneakerHeroes from './components/EdenSneakerHeroes';
import MMABlog from './components/MMABlog';
import PortfolioPerformance from './components/PortfolioPerformance';
import CurrentReads from './components/CurrentReads';
import Footer from './components/Footer';

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