import React from 'react';
import { Quote, ArrowRight, Zap } from 'lucide-react';

const MMABlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Discipline Is Destiny',
      excerpt: 'Training camps teach the same thing as boardrooms: execution beats ideas.',
      quote: 'Every round in the gym is a lesson in resource allocation. Every sparring session strips away ego.',
      readTime: '5 min read',
      date: 'Jan 20, 2025',
      category: 'Philosophy'
    },
    {
      id: 2,
      title: 'Boxing as Strategy',
      excerpt: 'Every fight is a case study in resource allocation, timing, and risk-taking.',
      quote: 'The best boxers think three moves ahead. The best strategists think three quarters ahead.',
      readTime: '4 min read',
      date: 'Jan 18, 2025',
      category: 'Strategy'
    },
    {
      id: 3,
      title: 'The MMA Mindset',
      excerpt: 'You can\'t fake preparation. Combat sports strip away ego — and so does real competition in business.',
      quote: 'In the cage, your preparation speaks before you do. In the market, your fundamentals fight for you.',
      readTime: '6 min read',
      date: 'Jan 15, 2025',
      category: 'Mindset'
    },
    {
      id: 4,
      title: 'Pressure Makes Diamonds',
      excerpt: 'How high-pressure situations in MMA translate to high-stakes financial decisions.',
      quote: 'Under pressure, technique reveals itself. Under market stress, strategy shows its true strength.',
      readTime: '7 min read',
      date: 'Jan 12, 2025',
      category: 'Performance'
    }
  ];

  return (
    <section id="mma" className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-orange-400 mr-4" />
            <h2 className="text-5xl lg:text-6xl font-bold tracking-wider">
              MMA<span className="text-orange-400">.</span>MINDSET
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Combat sports and capital markets share the same DNA: preparation, 
            timing, and the relentless pursuit of edge in high-pressure environments.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <article className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-orange-400/30 rounded-lg overflow-hidden group">
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-orange-400/20 text-orange-400 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded">
                  Featured
                </span>
                <span className="text-gray-400">{blogPosts[0].date}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{blogPosts[0].readTime}</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors duration-300">
                {blogPosts[0].title}
              </h3>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <blockquote className="relative bg-black/30 border-l-4 border-orange-400 p-6 rounded-r mb-8">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-400/30" />
                <p className="text-lg italic text-gray-300 pl-6">
                  {blogPosts[0].quote}
                </p>
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                    {blogPosts[0].category}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-orange-400 font-medium hover:text-orange-300 transition-colors duration-300 group"
                >
                  <span>READ FULL ARTICLE</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group bg-slate-800/50 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {post.title}
                </h4>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <blockquote className="relative bg-black/20 border-l-2 border-orange-400/50 p-3 rounded-r mb-4">
                  <p className="text-sm italic text-gray-400">
                    {post.quote}
                  </p>
                </blockquote>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="h-1 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </article>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold mb-8 text-orange-400">THE FIGHTER'S MINDSET IN FINANCE</h4>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-slate-800/30 border border-orange-400/20 p-6 rounded">
                <h5 className="text-xl font-bold text-white mb-4">Preparation Over Prediction</h5>
                <p className="text-gray-300">
                  Markets are unpredictable, opponents are unpredictable. But preparation never lies. 
                  Train for every scenario, then execute with confidence.
                </p>
              </div>
              <div className="bg-slate-800/30 border border-orange-400/20 p-6 rounded">
                <h5 className="text-xl font-bold text-white mb-4">Pressure Reveals Truth</h5>
                <p className="text-gray-300">
                  Under pressure, everything fake falls away. Your training, your strategy, 
                  your fundamentals - that's what remains when the stakes are highest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MMABlog;