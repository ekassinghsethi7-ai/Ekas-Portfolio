import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'CAREER', href: '#career' },
    { label: 'FINANCE', href: '#finance' },
    { label: 'COMMENTARY', href: '#commentary' },
    { label: 'VENTURES', href: '#ventures' },
    { label: 'MMA', href: '#mma' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'READS', href: '#reads' }
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            EKAS<span className="text-green-400">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wider hover:text-green-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium tracking-wider hover:text-green-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;