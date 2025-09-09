import React, { useState } from 'react';
import { Building, TrendingUp, Users, Briefcase, Zap, X } from 'lucide-react';

const CareerMap = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const careerNodes = [
    {
      id: 1,
      company: 'Extendicare',
      position: 'Financial Analyst Intern',
      year: '2023',
      icon: <Building className="w-6 h-6" />,
      description: 'Supported $100M+ healthcare transactions, built valuation & integration models',
      highlights: [
        'Developed DCF models for healthcare acquisitions',
        'Built integration cost analysis frameworks',
        'Streamlined due diligence reporting processes'
      ],
      left: '10%',
      top: '20%'
    },
    {
      id: 2,
      company: 'Goodmans LLP',
      position: 'Financial Analyst',
      year: '2023',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Designed transaction models, streamlined reporting using VBA automation',
      highlights: [
        'Created automated financial reporting systems',
        'Built transaction modeling frameworks',
        'Reduced manual processes by 40% through automation'
      ],
      left: '25%',
      top: '40%'
    },
    {
      id: 3,
      company: 'Softron Tax',
      position: 'Tax Associate',
      year: '2022',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Prepared 200+ returns, advised clients on planning strategies',
      highlights: [
        'Processed 200+ individual and corporate tax returns',
        'Developed tax optimization strategies for high-net-worth clients',
        'Led client advisory sessions on tax planning'
      ],
      left: '45%',
      top: '25%'
    },
    {
      id: 4,
      company: 'Waterloo Aerial Robotics Group',
      position: 'Finance Lead',
      year: '2021-2022',
      icon: <Zap className="w-6 h-6" />,
      description: 'Managed $20K+ budget for engineering projects',
      highlights: [
        'Oversaw budget allocation for 5+ engineering projects',
        'Implemented financial tracking and reporting systems',
        'Secured additional funding through grant applications'
      ],
      left: '65%',
      top: '45%'
    },
    {
      id: 5,
      company: 'SneakerHeroes',
      position: 'Founder',
      year: '2019-2021',
      icon: <Users className="w-6 h-6" />,
      description: 'Built sneaker marketplace, scaled operations and marketing',
      highlights: [
        'Scaled platform to hundreds of active users',
        'Built community-driven authentication system',
        'Achieved 6-figure GMV in 18 months'
      ],
      left: '80%',
      top: '30%'
    },
    {
      id: 6,
      company: 'Eden Collective',
      position: 'Founder',
      year: '2022-Present',
      icon: <Zap className="w-6 h-6" />,
      description: 'Fashion-tech brand with NFC-enabled clothing and cultural storytelling',
      highlights: [
        'Launched NFC-enabled fashion line',
        'Built authentic storytelling brand narrative',
        'Expanded product line to clothing, sunglasses, and home goods'
      ],
      left: '90%',
      top: '15%'
    }
  ];

  return (
    <section id="career" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">
            CAREER<span className="text-green-400">.</span>MAP
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From finance floors to fight gyms, from boardrooms to building brands - 
            every stop shapes the strategy.
          </p>
        </div>

        <div className="relative h-96 bg-slate-900/50 rounded-lg border border-gray-700 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {careerNodes.slice(0, -1).map((node, index) => {
              const nextNode = careerNodes[index + 1];
              return (
                <line
                  key={`line-${node.id}`}
                  x1={`${parseFloat(node.left) + 2}%`}
                  y1={`${parseFloat(node.top) + 5}%`}
                  x2={`${parseFloat(nextNode.left) + 2}%`}
                  y2={`${parseFloat(nextNode.top) + 5}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            })}
          </svg>

          {/* Career Nodes */}
          {careerNodes.map((node) => (
            <div
              key={node.id}
              className="absolute group cursor-pointer"
              style={{ left: node.left, top: node.top }}
              onClick={() => setSelectedNode(node)}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {node.icon}
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/90 px-3 py-2 rounded text-sm font-medium text-center min-w-max">
                    <div className="text-green-400 font-bold">{node.company}</div>
                    <div className="text-gray-300">{node.year}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedNode && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-slate-800 border border-green-400/50 max-w-2xl w-full rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-blue-400 p-6 text-black">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedNode.company}</h3>
                    <p className="text-lg">{selectedNode.position}</p>
                    <p className="font-medium">{selectedNode.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-white">
                <p className="text-lg mb-6 text-gray-300">{selectedNode.description}</p>
                
                <h4 className="text-xl font-bold mb-4 text-green-400">KEY HIGHLIGHTS</h4>
                <ul className="space-y-2">
                  {selectedNode.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerMap;