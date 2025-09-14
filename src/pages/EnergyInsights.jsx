import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  TrendingUp, Calendar, User, ArrowRight, Eye, Clock,
  BarChart3, Zap, Globe, Shield, Lightbulb, DollarSign
} from 'lucide-react'

const EnergyInsights = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'UK Energy Market Outlook 2024: What Businesses Need to Know',
      excerpt: 'Navigate the evolving energy landscape with insights into price forecasts, regulatory changes, and strategic planning for your business energy needs.',
      author: 'Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.3k',
      category: 'Market Analysis',
      image: '/images/lightbulb.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'The Rise of Renewable Energy in UK Business Operations',
      excerpt: 'Explore how businesses are transitioning to green energy solutions and the impact on operational costs and sustainability goals.',
      author: 'James Wilson',
      date: '2024-01-12',
      readTime: '6 min read',
      views: '1.8k',
      category: 'Green Energy',
      image: '/images/solar.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Energy Price Volatility: Hedging Strategies for Businesses',
      excerpt: 'Learn about effective procurement strategies and contract structures to protect your business from energy price fluctuations.',
      author: 'Michael Brown',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '1.5k',
      category: 'Strategy',
      image: '/images/london.jpg',
      featured: false
    }
  ]

  const articles = [
    {
      id: 4,
      title: 'Understanding Your Business Energy Bill: A Complete Guide',
      excerpt: 'Break down the complex components of your energy bill and identify potential areas for cost savings.',
      author: 'Emma Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      views: '2.1k',
      category: 'Education'
    },
    {
      id: 5,
      title: 'Smart Meter Benefits for Small to Medium Businesses',
      excerpt: 'Discover how smart meters can provide real-time insights and help optimize your energy consumption patterns.',
      author: 'David Clark',
      date: '2024-01-05',
      readTime: '5 min read',
      views: '1.2k',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Energy Efficiency Grants and Incentives for UK Businesses',
      excerpt: 'Comprehensive overview of government schemes and financial support available for energy efficiency improvements.',
      author: 'Lisa Anderson',
      date: '2024-01-03',
      readTime: '9 min read',
      views: '1.7k',
      category: 'Funding'
    },
    {
      id: 7,
      title: 'Net Zero Commitments: How Energy Choice Impacts Your Carbon Footprint',
      excerpt: 'Align your energy procurement with environmental goals and meet corporate sustainability targets.',
      author: 'Robert Taylor',
      date: '2023-12-28',
      readTime: '6 min read',
      views: '1.4k',
      category: 'Sustainability'
    },
    {
      id: 8,
      title: 'Energy Market Deregulation: Opportunities for Business Savings',
      excerpt: 'How the competitive energy market creates opportunities for significant cost reductions through strategic switching.',
      author: 'Helen Martinez',
      date: '2023-12-25',
      readTime: '8 min read',
      views: '1.9k',
      category: 'Market Analysis'
    },
    {
      id: 9,
      title: 'Peak Demand Management: Reducing Energy Costs Through Smart Usage',
      excerpt: 'Strategies to minimize peak demand charges and optimize your energy consumption schedule.',
      author: 'Steven Lee',
      date: '2023-12-22',
      readTime: '7 min read',
      views: '1.3k',
      category: 'Optimization'
    }
  ]

  const categories = [
    'All', 'Market Analysis', 'Green Energy', 'Strategy', 'Education', 
    'Technology', 'Funding', 'Sustainability', 'Optimization'
  ]

  const marketStats = [
    {
      value: '£47.2bn',
      label: 'UK Energy Market Size',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      value: '28%',
      label: 'Renewable Energy Share',
      icon: <Globe className="w-6 h-6" />
    },
    {
      value: '15%',
      label: 'Average Business Savings',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: '2.5M',
      label: 'Business Customers',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const quickTips = [
    {
      tip: 'Review your energy contracts 3-6 months before renewal',
      icon: '📅'
    },
    {
      tip: 'Monitor energy usage patterns to identify optimization opportunities',
      icon: '📊'
    },
    {
      tip: 'Consider green energy options for sustainability and PR benefits',
      icon: '🌱'
    },
    {
      tip: 'Implement energy efficiency measures before switching suppliers',
      icon: '💡'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Energy Market Insights & Analysis | Business Energy News | Watt Savings</title>
        <meta name="description" content="Stay informed with the latest UK energy market insights, analysis, and trends. Expert commentary on business energy pricing, regulations, and market developments." />
        <meta name="keywords" content="energy market insights, UK energy analysis, business energy news, energy market trends, energy pricing forecast" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BarChart3 className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Expert Analysis</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Energy Market <span className="text-yellow-300">Insights</span> 📊
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Stay ahead of the curve with expert analysis, market trends, and actionable insights 
                to optimize your business energy strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Market Analysis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <div className="flex justify-center mb-4 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Insights 🌟</h2>
            <p className="text-xl text-gray-600">
              In-depth analysis and expert commentary on current energy market developments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredArticles.filter(article => article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/insights/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Energy Tips 💡</h2>
            <p className="text-lg text-gray-600">
              Expert recommendations for optimizing your energy strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <p className="text-gray-700">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Articles 📚</h2>
            <p className="text-xl text-gray-600">
              Stay up-to-date with the latest energy market developments
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/insights/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Informed 📬
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Subscribe to our weekly energy market newsletter and receive expert insights 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default EnergyInsights