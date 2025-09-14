import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Building2, Users, Globe, BarChart3, Shield, Award,
  ArrowRight, Phone, CheckCircle, Target, Zap, TrendingUp,
  Clock, DollarSign, Briefcase, Settings, FileText, Database
} from 'lucide-react'

const LargeBusiness = () => {
  const enterpriseFeatures = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Multi-Site Management',
      description: 'Centralized energy management across all your business locations with consolidated billing and reporting.',
      benefits: [
        'Single point of contact for all sites',
        'Consolidated invoicing and reporting',
        'Standardized contract terms',
        'Bulk purchasing advantages'
      ],
      emoji: '🏢'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive energy data analysis and insights to optimize consumption and reduce costs.',
      benefits: [
        'Real-time consumption monitoring',
        'Predictive analytics and forecasting',
        'Carbon footprint tracking',
        'Performance benchmarking'
      ],
      emoji: '📊'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Sophisticated risk management strategies to protect against market volatility and price fluctuations.',
      benefits: [
        'Price hedging strategies',
        'Market volatility protection',
        'Contract portfolio optimization',
        'Regulatory compliance support'
      ],
      emoji: '🛡️'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Team',
      description: 'Assigned team of energy experts providing personalized service and strategic guidance.',
      benefits: [
        'Dedicated account director',
        'Specialist energy consultants',
        'Priority customer support',
        'Regular strategic reviews'
      ],
      emoji: '👥'
    }
  ]

  const solutions = [
    {
      title: 'Enterprise Energy Procurement',
      description: 'Strategic procurement solutions for large-scale energy requirements',
      features: [
        'Complex tender management',
        'Bespoke contract structures',
        'Volume-based pricing',
        'Flexible payment terms'
      ],
      icon: '💼',
      bestFor: 'Organizations with 500+ employees or £500k+ annual energy spend'
    },
    {
      title: 'Multi-Site Portfolio Management',
      description: 'Comprehensive management of energy contracts across multiple locations',
      features: [
        'Centralized contract management',
        'Site-specific optimization',
        'Consolidated reporting',
        'Standardized processes'
      ],
      icon: '🏭',
      bestFor: 'Businesses with 10+ locations or complex property portfolios'
    },
    {
      title: 'Energy Strategy Consulting',
      description: 'Long-term energy strategy development and implementation support',
      features: [
        'Market analysis and forecasting',
        'Sustainability planning',
        'Technology integration',
        'Regulatory compliance'
      ],
      icon: '🎯',
      bestFor: 'Enterprise clients requiring strategic energy planning'
    }
  ]

  const caseStudies = [
    {
      company: 'National Retail Chain',
      industry: 'Retail',
      sites: '250+ stores',
      saving: '£680,000',
      percentage: '32%',
      challenge: 'Managing energy contracts across 250+ retail locations with varying consumption patterns',
      solution: 'Implemented centralized procurement with site-specific optimization',
      result: 'Annual savings of £680,000 with improved reporting and compliance'
    },
    {
      company: 'Manufacturing Group',
      industry: 'Manufacturing',
      sites: '8 facilities',
      saving: '£420,000',
      percentage: '28%',
      challenge: 'High energy costs across multiple manufacturing facilities',
      solution: 'Strategic procurement with demand management and efficiency improvements',
      result: '28% reduction in energy costs plus enhanced operational efficiency'
    },
    {
      company: 'Healthcare Trust',
      industry: 'Healthcare',
      sites: '15 hospitals',
      saving: '£290,000',
      percentage: '24%',
      challenge: 'Complex energy requirements across hospitals with 24/7 operations',
      solution: 'Specialized healthcare energy strategy with sustainability focus',
      result: 'Significant savings while meeting strict regulatory requirements'
    }
  ]

  const stats = [
    { value: '£50M+', label: 'Annual Client Energy Spend' },
    { value: '2,500+', label: 'Sites Under Management' },
    { value: '98%', label: 'Client Retention Rate' },
    { value: '£8.5M', label: 'Average Annual Savings' }
  ]

  return (
    <>
      <Helmet>
        <title>Large Business Energy Solutions | Enterprise Energy Management | Watt Savings</title>
        <meta name="description" content="Comprehensive energy solutions for large businesses and enterprises. Multi-site management, advanced analytics, risk management, and dedicated support teams." />
        <meta name="keywords" content="large business energy, enterprise energy solutions, multi-site energy management, corporate energy procurement, energy strategy consulting" />
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
                <Building2 className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Enterprise Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Large Business <span className="text-yellow-300">Energy Solutions</span> 🏢
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Comprehensive energy management solutions designed for large enterprises, 
                multi-site operations, and complex energy requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Enterprise Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  0161 833 8661
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise-Grade Energy Management 🏆
            </h2>
            <p className="text-xl text-gray-600">
              Advanced features and capabilities designed for large-scale operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div className="text-4xl">{feature.emoji}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Tailored Enterprise Solutions 🎯
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services designed for different enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:from-primary-100 hover:to-primary-200 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-1">Best For:</h4>
                  <p className="text-xs text-gray-600">{solution.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise Success Stories 📈
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our large business clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">{study.company}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{study.industry}</span>
                    <span>{study.sites}</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-primary-600 text-white rounded-lg p-4">
                    <div className="text-2xl font-bold">{study.saving}</div>
                    <div className="text-sm opacity-90">Annual Savings ({study.percentage})</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Result:</h4>
                    <p className="text-gray-600">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Enterprise-Level Energy Management? 🚀
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Transform your energy strategy with our comprehensive enterprise solutions. 
              Let our experts design a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <Briefcase className="w-5 h-5" />
                Request Enterprise Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
              >
                <FileText className="w-5 h-5" />
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default LargeBusiness