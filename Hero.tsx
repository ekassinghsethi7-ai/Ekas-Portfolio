import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = ['FINANCE', 'CONSULTING', 'MMA', 'CULTURE', 'ENTREPRENEURSHIP'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Professional Headshot */}
        <div className="relative">
          <div className="relative w-80 h-96 mx-auto lg:mx-0">
            {/* Placeholder for professional headshot */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl flex items-center justify-center border border-green-400/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-400/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-green-400">ES</span>
                </div>
                <p className="text-gray-400 text-sm">Professional Headshot</p>
              </div>
            </div>
            
            {/* Accent Lines */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-green-400/50"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-blue-400/50"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <span className="text-green-400 font-medium tracking-wider text-sm uppercase">
              Portfolio • Strategy • Culture
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            STRATEGY<br />
            MEETS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              GRIT
            </span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-gray-300 mb-8">
            Finance × Creativity × Combat
          </div>

          {/* Rotating Keywords */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
            <Play className="w-6 h-6 text-green-400" />
            <div className="text-lg font-medium overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${currentKeyword * 1.75}rem)`
                }}
              >
                {keywords.map((keyword, index) => (
                  <div key={index} className="h-7 flex items-center">
                    <span className={index === currentKeyword ? 'text-green-400' : 'text-gray-400'}>
                      {keyword}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#career"
              className="group bg-green-400 text-black px-8 py-3 rounded-none font-bold tracking-wider hover:bg-green-300 transition-colors duration-300 flex items-center justify-center"
            >
              EXPLORE WORK
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#portfolio"
              className="group border border-green-400 text-green-400 px-8 py-3 rounded-none font-bold tracking-wider hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              VIEW PORTFOLIO
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-green-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;