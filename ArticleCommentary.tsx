import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ArticleCommentary = () => {
  const articles = [
    {
      id: 1,
      source: 'WSJ',
      title: 'AI Disrupting Wall Street Research',
      commentary: 'The edge will belong to those who combine AI with human judgment — not replace it.',
      date: 'Jan 15, 2025',
      readTime: '3 min read',
      link: '#'
    },
    {
      id: 2,
      source: 'Harvard Business Review',
      title: 'The Future of Consulting',
      commentary: 'Consultants will win by being translators: turning data into strategy, not just producing decks.',
      date: 'Jan 12, 2025',
      readTime: '5 min read',
      link: '#'
    },
    {
      id: 3,
      source: 'The Economist',
      title: 'India\'s Growth Story',
      commentary: 'Demographics give momentum, but policy execution will decide if India reaches escape velocity.',
      date: 'Jan 10, 2025',
      readTime: '4 min read',
      link: '#'
    },
    {
      id: 4,
      source: 'Financial Times',
      title: 'Private Credit Market Evolution',
      commentary: 'Alternative lending fills the gap, but with great power comes great responsibility to borrowers.',
      date: 'Jan 8, 2025',
      readTime: '6 min read',
      link: '#'
    },
    {
      id: 5,
      source: 'Bloomberg',
      title: 'ESG Investing Maturity',
      commentary: 'Beyond compliance theater — ESG is becoming a competitive advantage for forward-thinking firms.',
      date: 'Jan 5, 2025',
      readTime: '4 min read',
      link: '#'
    },
    {
      id: 6,
      source: 'McKinsey Quarterly',
      title: 'Digital Transformation ROI',
      commentary: 'Technology without culture change is just expensive software. People drive transformation.',
      date: 'Jan 2, 2025',
      readTime: '7 min read',
      link: '#'
    }
  ];

  return (
    <section id="commentary" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">
            ARTICLE<span className="text-green-400">.</span>COMMENTARY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reading between the lines. Connecting dots across markets. 
            Perspectives that matter in a noisy world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group relative bg-slate-900/50 border border-gray-700 hover:border-green-400/50 transition-all duration-300 overflow-hidden ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 font-bold text-sm tracking-wider uppercase">
                      {article.source}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500 text-sm">
                    <span>{article.readTime}</span>
                    <ExternalLink className="w-4 h-4 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {article.title}
                </h3>

                <blockquote className={`relative italic text-gray-300 leading-relaxed ${
                  index === 0 ? 'text-lg lg:text-xl' : 'text-base'
                }`}>
                  <div className="absolute -left-2 -top-2 text-green-400/30 text-4xl font-serif">"</div>
                  {article.commentary}
                  <div className="absolute -right-2 -bottom-4 text-green-400/30 text-4xl font-serif">"</div>
                </blockquote>

                {/* Read More Link */}
                <div className="mt-6 flex items-center text-green-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-2">Read Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-blue-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-green-400 font-medium text-lg hover:text-green-300 transition-colors duration-300"
          >
            <span>VIEW ALL COMMENTARY</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleCommentary;