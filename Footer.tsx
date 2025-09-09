import React from 'react';
import { Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:ekas@example.com',
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: 'Resume',
      href: '#',
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold tracking-wider mb-4">
              EKAS<span className="text-green-400">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Strategy meets grit. Building bridges between finance and culture, 
              boardrooms and fight gyms, analysis and action.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-3 bg-slate-800/50 border border-gray-700 hover:border-green-400/50 rounded-lg transition-all duration-300 hover:scale-105 group"
                  aria-label={link.name}
                >
                  <div className="text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">NAVIGATION</h4>
            <div className="space-y-3">
              {[
                { label: 'Career Journey', href: '#career' },
                { label: 'Finance Projects', href: '#finance' },
                { label: 'Commentary', href: '#commentary' },
                { label: 'Ventures', href: '#ventures' },
                { label: 'MMA Blog', href: '#mma' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Current Reads', href: '#reads' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">GET IN TOUCH</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                Open to discussions about finance, strategy, entrepreneurship, 
                or the intersection of combat sports and business.
              </p>
              <div className="bg-slate-900/50 border border-gray-700 rounded-lg p-4">
                <p className="text-green-400 font-medium mb-2">Currently exploring:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Strategic finance roles</li>
                  <li>• Investment opportunities</li>
                  <li>• Speaking engagements</li>
                  <li>• Collaboration on Eden Collective</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Ekas Singh Sethi. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-500">Built with precision • Powered by purpose</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;