import React from 'react';
import { Zap, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const EdenSneakerHeroes = () => {
  return (
    <section id="ventures" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-wider">
            VENTURES<span className="text-green-400">.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building brands that resonate. Creating communities that matter. 
            Bridging the gap between commerce and culture.
          </p>
        </div>

        {/* Eden Collective */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                  Fashion • Tech • Storytelling
                </span>
              </div>
              
              <h3 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                EDEN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">
                  COLLECTIVE
                </span>
              </h3>
              
              <div className="text-lg text-gray-300 mb-8 space-y-4">
                <p>
                  Fashion-tech label integrating NFC for authenticity & affirmations. 
                  Storytelling rooted in healing, resilience, and intentional expression.
                </p>
                <p>
                  Expanded into clothing, sunglasses, and rugs. Inspired by brands 
                  like Off-White, BLUORNG, and Nude Project.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 border border-green-400/30 rounded">
                  <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">NFC</div>
                  <div className="text-sm text-gray-400">Tech Integration</div>
                </div>
                <div className="text-center p-4 border border-orange-400/30 rounded">
                  <ShoppingBag className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Product Lines</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400/20 to-orange-400/20 rounded-lg border border-green-400/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-4">EC</div>
                  <p className="text-gray-400">Eden Collective Showcase</p>
                  <p className="text-sm text-gray-500 mt-2">Fashion • Tech • Culture</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-orange-400/50 rotate-45"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-green-400/50"></div>
            </div>
          </div>
        </div>

        {/* SneakerHeroes */}
        <div className="border-t border-gray-800 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg border border-blue-400/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">SH</div>
                  <p className="text-gray-400">SneakerHeroes Platform</p>
                  <p className="text-sm text-gray-500 mt-2">Community • Commerce • Culture</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-blue-400/50 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-purple-400/50 rotate-45"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                  Marketplace • Community • Authenticity
                </span>
              </div>
              
              <h3 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                SNEAKER<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  HEROES
                </span>
              </h3>
              
              <div className="text-lg text-gray-300 mb-8 space-y-4">
                <p>
                  Built a community-driven sneaker resell platform. Scaled operations 
                  to hundreds of active users with focus on authenticity and trust.
                </p>
                <p>
                  Lessons: scalability, trust, and brand positioning in niche markets. 
                  Achieved 6-figure GMV before strategic pivot.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 border border-blue-400/30 rounded">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center p-4 border border-purple-400/30 rounded">
                  <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">6-FIG</div>
                  <div className="text-sm text-gray-400">GMV Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-20 text-center">
          <h4 className="text-3xl font-bold mb-8 text-green-400">KEY INSIGHTS</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded bg-slate-900/50">
              <h5 className="text-xl font-bold text-white mb-3">Community First</h5>
              <p className="text-gray-300">Building authentic relationships drives sustainable growth more than any marketing campaign.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded bg-slate-900/50">
              <h5 className="text-xl font-bold text-white mb-3">Technology Amplifies</h5>
              <p className="text-gray-300">NFC and digital integration enhance physical products when purposefully implemented.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded bg-slate-900/50">
              <h5 className="text-xl font-bold text-white mb-3">Culture Sells</h5>
              <p className="text-gray-300">Storytelling and cultural connection create premium value beyond functional benefits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdenSneakerHeroes;