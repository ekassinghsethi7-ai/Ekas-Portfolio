import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Star } from 'lucide-react';

const CurrentReads = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const books = [
    {
      id: 1,
      title: 'The Bhagavad Gita',
      author: 'Ancient Wisdom',
      quote: 'Discipline is the bridge between goals and reality.',
      rating: 5,
      category: 'Philosophy',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      quote: 'Mastery comes from subtlety, not brute force.',
      rating: 5,
      category: 'Strategy',
      color: 'from-red-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      quote: 'Cognitive biases shape every financial model.',
      rating: 5,
      category: 'Psychology',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Zero to One',
      author: 'Peter Thiel',
      quote: 'Competition is for losers. Monopoly is the condition of every successful business.',
      rating: 4,
      category: 'Business',
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 5,
      title: 'The Intelligent Investor',
      author: 'Benjamin Graham',
      quote: 'The market is a voting machine in the short run, but a weighing machine in the long run.',
      rating: 5,
      category: 'Investing',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 6,
      title: 'Antifragile',
      author: 'Nassim Nicholas Taleb',
      quote: 'Some things benefit from shocks; they thrive under stress and volatility.',
      rating: 4,
      category: 'Philosophy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 7,
      title: 'The Art of War',
      author: 'Sun Tzu',
      quote: 'Supreme excellence consists of breaking the enemy\'s resistance without fighting.',
      rating: 5,
      category: 'Strategy',
      color: 'from-red-600 to-orange-500'
    },
    {
      id: 8,
      title: 'Principles',
      author: 'Ray Dalio',
      quote: 'Pain plus reflection equals progress.',
      rating: 4,
      category: 'Business',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.min(books.length - 1, currentIndex + 1));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const bookWidth = 300;
        const newIndex = Math.round(scrollLeft / bookWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="reads" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-5xl lg:text-6xl font-bold tracking-wider">
              CURRENT<span className="text-blue-400">.</span>READS
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Knowledge compounds. These books shape perspective, strategy, and the relentless 
            pursuit of understanding in an increasingly complex world.
          </p>
        </div>

        {/* Books Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 border border-gray-600 hover:border-blue-400/50 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={currentIndex >= books.length - 3}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 border border-gray-600 hover:border-blue-400/50 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Books Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {books.map((book, index) => (
              <div
                key={book.id}
                className="flex-shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative bg-slate-800/50 border border-gray-700 hover:border-blue-400/50 rounded-lg overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Book Cover */}
                  <div className={`h-96 bg-gradient-to-br ${book.color} relative flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500`}>
                    {/* Neon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="text-center z-10">
                      <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg px-4 text-center leading-tight">
                        {book.title}
                      </h4>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        {book.category}
                      </span>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-400/0 via-blue-400/0 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Book Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-sm">{book.author}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(book.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="relative">
                      <div className="absolute -top-1 -left-1 text-blue-400/30 text-2xl font-serif">"</div>
                      <p className="text-gray-300 italic text-sm leading-relaxed pl-4">
                        {book.quote}
                      </p>
                      <div className="absolute -bottom-1 -right-1 text-blue-400/30 text-2xl font-serif">"</div>
                    </blockquote>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/50 rounded-lg transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-slate-900/30 border border-blue-400/20 rounded-lg p-8">
            <h4 className="text-3xl font-bold mb-6 text-blue-400">READING PHILOSOPHY</h4>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h5 className="text-xl font-bold text-white mb-3">Quality Over Quantity</h5>
                <p className="text-gray-300">
                  Better to deeply understand one transformative book than to skim through dozens. 
                  Each selection must earn its place on the shelf.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-3">Cross-Pollination</h5>
                <p className="text-gray-300">
                  The best insights emerge at intersections. Philosophy informs strategy, 
                  psychology shapes markets, history repeats in new forms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {books.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + 3
                  ? 'bg-blue-400'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentReads;