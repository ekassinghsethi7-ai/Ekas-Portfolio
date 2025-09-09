import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react';

const PortfolioPerformance = () => {
  const [timeframe, setTimeframe] = useState('YTD');

  const portfolioData = [
    {
      company: 'Apple Inc.',
      ticker: 'AAPL',
      currentPrice: 185.92,
      change: 14.73,
      changePercent: 8.6,
      position: 'Long',
      notes: 'Strong balance sheet + AI integration into devices'
    },
    {
      company: 'Shopify Inc.',
      ticker: 'SHOP',
      currentPrice: 89.45,
      change: -4.67,
      changePercent: -5.0,
      position: 'Long',
      notes: 'High growth, but valuation stretched'
    },
    {
      company: 'HDFC Bank',
      ticker: 'HDB',
      currentPrice: 67.23,
      change: 7.18,
      changePercent: 12.0,
      position: 'Long',
      notes: 'Benefitting from India\'s credit expansion'
    },
    {
      company: 'Tesla Inc.',
      ticker: 'TSLA',
      currentPrice: 248.87,
      change: -15.43,
      changePercent: -5.8,
      position: 'Long',
      notes: 'EV leadership but execution concerns'
    },
    {
      company: 'Microsoft Corp.',
      ticker: 'MSFT',
      currentPrice: 421.56,
      change: 23.89,
      changePercent: 6.0,
      position: 'Long',
      notes: 'Azure growth + AI monetization potential'
    },
    {
      company: 'Brookfield Asset',
      ticker: 'BAM',
      currentPrice: 45.67,
      change: 3.42,
      changePercent: 8.1,
      position: 'Long',
      notes: 'Alternative asset management with yield'
    }
  ];

  const performanceMetrics = {
    totalReturn: 7.2,
    benchmark: 4.8,
    sharpeRatio: 1.34,
    maxDrawdown: -8.7,
    winRate: 67
  };

  const timeframes = ['1M', '3M', '6M', 'YTD', '1Y', '3Y'];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">
            PORTFOLIO<span className="text-green-400">.</span>PERFORMANCE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real money. Real positions. Real performance. 
            Transparency in an industry built on opacity.
          </p>
        </div>

        {/* Performance Summary */}
        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          <div className="text-center p-6 bg-slate-900/50 border border-green-400/30 rounded">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">+{performanceMetrics.totalReturn}%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Total Return</div>
          </div>
          
          <div className="text-center p-6 bg-slate-900/50 border border-blue-400/30 rounded">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">+{performanceMetrics.benchmark}%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">S&P/TSX</div>
          </div>
          
          <div className="text-center p-6 bg-slate-900/50 border border-orange-400/30 rounded">
            <DollarSign className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{performanceMetrics.sharpeRatio}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Sharpe Ratio</div>
          </div>
          
          <div className="text-center p-6 bg-slate-900/50 border border-red-400/30 rounded">
            <TrendingDown className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{performanceMetrics.maxDrawdown}%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Max Drawdown</div>
          </div>
          
          <div className="text-center p-6 bg-slate-900/50 border border-purple-400/30 rounded">
            <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{performanceMetrics.winRate}%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Win Rate</div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-900/50 rounded-lg p-1 border border-gray-700">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded font-medium text-sm transition-all duration-300 ${
                  timeframe === tf
                    ? 'bg-green-400 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Holdings Table */}
        <div className="bg-slate-900/50 border border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50 border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="text-left p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Ticker
                  </th>
                  <th className="text-right p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-right p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Change
                  </th>
                  <th className="text-right p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Change %
                  </th>
                  <th className="text-left p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.map((stock, index) => (
                  <tr key={stock.ticker} className="border-b border-gray-700/50 hover:bg-slate-800/30 transition-colors duration-300">
                    <td className="p-4">
                      <div className="font-medium text-white">{stock.company}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-sm font-mono text-gray-300">
                        {stock.ticker}
                      </span>
                    </td>
                    <td className="p-4 text-right font-mono text-white">
                      ${stock.currentPrice.toFixed(2)}
                    </td>
                    <td className={`p-4 text-right font-mono ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}
                    </td>
                    <td className={`p-4 text-right font-mono ${stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      <div className="flex items-center justify-end space-x-1">
                        {stock.changePercent >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span>{stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300 text-sm max-w-xs">
                      {stock.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance vs Benchmark */}
        <div className="mt-12 text-center">
          <div className="bg-slate-900/50 border border-gray-700 rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-4 text-green-400">YTD OUTPERFORMANCE</h4>
            <div className="text-6xl font-bold text-white mb-4">
              +{(performanceMetrics.totalReturn - performanceMetrics.benchmark).toFixed(1)}%
            </div>
            <p className="text-gray-300">
              vs S&P/TSX Composite • Risk-adjusted alpha through disciplined security selection
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            * Performance data is for educational purposes. Past performance does not guarantee future results. 
            All investments carry risk of loss. This is not investment advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPerformance;