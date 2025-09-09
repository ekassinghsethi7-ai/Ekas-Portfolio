import React, { useState } from 'react';
import { ExternalLink, TrendingUp, BarChart3, DollarSign, X } from 'lucide-react';

const FinanceProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Tesla DCF Model (2025)',
      category: 'Equity Valuation',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Built a discounted cash flow model projecting growth under different EV adoption scenarios.',
      keyTakeaway: 'Fair value ~12% above current market pricing.',
      details: [
        'Multi-scenario DCF with sensitivity analysis',
        'EV market penetration rate assumptions',
        'Energy storage and solar business valuation',
        'Risk-adjusted discount rates by segment'
      ],
      metrics: { accuracy: '94%', timeframe: '2025-2030', scenarios: '5' },
      link: '#'
    },
    {
      id: 2,
      title: 'Retail Sector Report',
      category: 'Sector Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Comparative multiples analysis of Nike, Adidas, and Lululemon.',
      keyTakeaway: 'Identified margin resilience in niche segments.',
      details: [
        'EV/EBITDA multiple comparison across regions',
        'Margin analysis during inflationary periods',
        'DTC vs wholesale channel profitability',
        'Brand strength correlation with pricing power'
      ],
      metrics: { companies: '15', coverage: 'Global', period: '5 years' },
      link: '#'
    },
    {
      id: 3,
      title: 'Canadian Banks Strategy Note',
      category: 'Financial Services',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'Modeled ROE under different interest rate environments.',
      keyTakeaway: 'Highlighted long-term risk in retail loan growth.',
      details: [
        'Net interest margin sensitivity analysis',
        'Credit loss provisioning across cycles',
        'Digital transformation impact on costs',
        'Regulatory capital requirements modeling'
      ],
      metrics: { institutions: '6', scenarios: '4', horizon: '10 years' },
      link: '#'
    },
    {
      id: 4,
      title: 'REIT Portfolio Optimization',
      category: 'Real Estate',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Geographic and sector diversification analysis for REIT investments.',
      keyTakeaway: 'Industrial REITs showed highest risk-adjusted returns.',
      details: [
        'Sharpe ratio optimization by property type',
        'Interest rate sensitivity analysis',
        'Occupancy rate correlation studies',
        'AFFO yield vs dividend sustainability'
      ],
      metrics: { reits: '25', regions: '4', timeframe: '7 years' },
      link: '#'
    }
  ];

  return (
    <section id="finance" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">
            FINANCE<span className="text-green-400">.</span>PROJECTS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Models that matter. Analysis that moves markets. Research that drives decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800 border border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-400/20 rounded text-green-400">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-green-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="bg-green-400/10 border-l-4 border-green-400 p-3 rounded-r">
                  <p className="text-green-400 font-medium text-sm">
                    KEY TAKEAWAY: {project.keyTakeaway}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-slate-800 border border-green-400/50 max-w-3xl w-full rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-400 to-blue-400 p-6 text-black">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm font-medium uppercase tracking-wider opacity-80">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-1">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-white">
                <p className="text-lg mb-6 text-gray-300">{selectedProject.description}</p>
                
                <div className="bg-green-400/10 border-l-4 border-green-400 p-4 rounded-r mb-8">
                  <p className="text-green-400 font-medium">
                    KEY TAKEAWAY: {selectedProject.keyTakeaway}
                  </p>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-green-400">DETAILED ANALYSIS</h4>
                <div className="grid gap-3 mb-8">
                  {selectedProject.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm uppercase tracking-wider text-gray-400">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={selectedProject.link}
                    className="bg-green-400 text-black px-6 py-3 rounded font-bold tracking-wider hover:bg-green-300 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>VIEW REPORT</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinanceProjects;