import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Building2, MapPin, Zap, TrendingDown, Shield, Clock, Award,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Factory, Store, Users, Phone, Mail, 
  Database, Network, Globe, Settings
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const MultiSiteEnergy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const multisiteBenefits = [
    { 
      icon: <Database className="w-8 h-8" />, 
      title: 'Centralized Management', 
      desc: 'Manage all your sites from one dashboard with complete visibility',
      emoji: '📊'
    },
    { 
      icon: <TrendingDown className="w-8 h-8" />, 
      title: 'Bulk Purchasing Power', 
      desc: 'Negotiate better rates across all locations for maximum savings',
      emoji: '💰'
    },
    { 
      icon: <Network className="w-8 h-8" />, 
      title: 'Streamlined Billing', 
      desc: 'Single invoice covering all sites with detailed breakdowns',
      emoji: '📋'
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      title: 'Performance Analytics', 
      desc: 'Compare energy usage across sites and identify opportunities',
      emoji: '📈'
    },
    { 
      icon: <Settings className="w-8 h-8" />, 
      title: 'Flexible Contracts', 
      desc: 'Tailor contracts to each site\'s specific needs and usage patterns',
      emoji: '⚙️'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Risk Management', 
      desc: 'Spread risk across portfolio with diversified energy strategies',
      emoji: '🛡️'
    }
  ]

  const businessTypes = [
    { 
      icon: <Store className="w-8 h-8" />, 
      name: 'Retail Chains', 
      sites: '50+ Locations',
      desc: 'Supermarkets, restaurants, and retail stores across the UK',
      savings: 'Up to 35%'
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: 'Manufacturing', 
      sites: '10+ Facilities',
      desc: 'Production facilities, warehouses, and distribution centers',
      savings: 'Up to 45%'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      name: 'Office Portfolios', 
      sites: '25+ Offices',
      desc: 'Corporate headquarters, regional offices, and co-working spaces',
      savings: 'Up to 30%'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      name: 'Public Sector', 
      sites: '100+ Sites',
      desc: 'Schools, hospitals, councils, and government buildings',
      savings: 'Up to 40%'
    }
  ]

  const multisiteStats = [
    { number: '500+', label: 'Multi-Site Clients', icon: '🏢' },
    { number: '10,000+', label: 'Sites Managed', icon: '📍' },
    { number: '£50M+', label: 'Annual Savings', icon: '💷' },
    { number: '24/7', label: 'Portfolio Monitoring', icon: '📊' }
  ]

  const managementFeatures = [
    {
      title: 'Real-Time Monitoring',
      description: 'Track energy usage across all sites in real-time with smart meters and IoT sensors',
      icon: '📱'
    },
    {
      title: 'Automated Alerts',
      description: 'Receive instant notifications for unusual consumption patterns or billing anomalies',
      icon: '🚨'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting helps optimize energy procurement and budget planning',
      icon: '🧠'
    },
    {
      title: 'Custom Reporting',
      description: 'Generate detailed reports for stakeholders with site-by-site performance metrics',
      icon: '📊'
    },
    {
      title: 'Energy Optimization',
      description: 'Identify inefficient sites and implement targeted energy-saving measures',
      icon: '⚡'
    },
    {
      title: 'Compliance Tracking',
      description: 'Monitor regulatory compliance and carbon reporting across your entire portfolio',
      icon: '✅'
    }
  ]

  const process = [
    { 
      step: 1, 
      title: 'Portfolio Assessment', 
      desc: 'We analyze all your sites, contracts, and usage patterns',
      emoji: '🔍'
    },
    { 
      step: 2, 
      title: 'Strategy Development', 
      desc: 'Create tailored energy strategies for your multi-site portfolio',
      emoji: '📋'
    },
    { 
      step: 3, 
      title: 'Implementation', 
      desc: 'Seamlessly switch all sites with coordinated timing',
      emoji: '🚀'
    },
    { 
      step: 4, 
      title: 'Ongoing Management', 
      desc: 'Continuous monitoring and optimization of your energy portfolio',
      emoji: '📈'
    }
  ]

  const contractOptions = [
    {
      type: 'Umbrella Contract',
      description: 'Single master agreement covering all sites with standardized terms',
      benefits: ['Simplified management', 'Consistent pricing', 'Reduced admin'],
      bestFor: 'Similar sites with consistent usage'
    },
    {
      type: 'Flexible Portfolio',
      description: 'Individual contracts per site while maintaining portfolio benefits',
      benefits: ['Site-specific terms', 'Flexible end dates', 'Tailored pricing'],
      bestFor: 'Diverse sites with varying needs'
    },
    {
      type: 'Hybrid Approach',
      description: 'Combination of umbrella and individual contracts optimized per site',
      benefits: ['Best of both worlds', 'Optimized savings', 'Strategic flexibility'],
      bestFor: 'Complex portfolios with mixed requirements'
    }
  ]

  const faqs = [
    {
      q: 'How many sites do you need for multi-site energy management?',
      a: 'We work with businesses from 3 sites upwards. However, the most significant benefits typically start from 10+ sites where bulk purchasing power and management efficiencies become more pronounced.'
    },
    {
      q: 'Can sites have different contract end dates?',
      a: 'Absolutely. We can manage staggered contract renewals or align all sites to the same renewal date. Our flexible approach accommodates your existing contract commitments while optimizing future arrangements.'
    },
    {
      q: 'What if my sites have very different energy needs?',
      a: 'We specialize in diverse portfolios. Each site can have tailored pricing and contract terms while still benefiting from portfolio-wide negotiating power and centralized management.'
    },
    {
      q: 'How do you handle new site acquisitions?',
      a: 'New sites can be seamlessly added to your portfolio. We handle the switch process and integrate the new location into your existing management dashboard and reporting.'
    },
    {
      q: 'What reporting and analytics do you provide?',
      a: 'Our platform provides comprehensive reporting including site-by-site usage, cost analysis, benchmark comparisons, carbon footprint tracking, and predictive analytics for budget planning.'
    },
    {
      q: 'Is there a cost for multi-site energy management?',
      a: 'Our core multi-site management service is included at no extra charge. The savings we achieve through better rates and efficiency improvements far exceed any management costs.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Multi-Site Energy Management UK | Portfolio Energy Solutions | Watt Savings</title>
        <meta name="description" content="Comprehensive multi-site energy management for businesses with multiple locations. Centralized control, bulk purchasing power, and streamlined billing. Manage 10,000+ sites nationwide." />
        <meta name="keywords" content="multi-site energy, portfolio energy management, bulk energy purchasing, centralized energy management, multiple location energy, corporate energy solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/london.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-blue-200 animate-pulse" />
                <span className="text-sm font-semibold">10,000+ Sites Managed</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master Your <span className="text-blue-200">Multi-Site</span> Energy Portfolio 🏢
              </h1>
              
              <p className="text-xl mb-8 text-blue-100">
                Centralize control of all your locations with our comprehensive multi-site energy 
                management platform. Maximize savings through bulk purchasing power.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-200">45%</div>
                  <div className="text-sm">Maximum Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-200">24/7</div>
                  <div className="text-sm">Site Monitoring</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Building2 className="w-5 h-5" />
                  Manage My Portfolio
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-blue-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  0161 833 8661
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/images/london.jpg" 
                alt="Multi-Site Energy Management" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {multisiteStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Multi-Site Energy Benefits 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock the power of portfolio management for your energy needs
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multisiteBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{benefit.emoji}</div>
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Site Solutions by Sector 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Specialized energy management for different business types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                <div className="text-sm text-blue-600 font-semibold mb-2">{type.sites}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{type.savings}</div>
                <div className="text-xs text-gray-600 mb-3">Potential Savings</div>
                <p className="text-xs text-gray-500">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Portfolio Management 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and analytics for complete energy control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Options */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Contract Structures 📋
            </h2>
            <p className="text-xl text-gray-600">
              Choose the contract approach that best fits your business model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contractOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <h3 className="font-bold text-xl mb-3 text-blue-600">{option.type}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Best For:</h4>
                  <p className="text-sm text-gray-600">{option.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Site Implementation Process 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Seamless transition for all your locations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg relative">
                    {item.step}
                    <div className="absolute -right-1 -bottom-1 text-2xl">{item.emoji}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="border-l-2 border-dashed border-blue-200 h-8 ml-8 mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Trusted by Leading Multi-Site Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Optimize Your Multi-Site Portfolio 🏢
              </h2>
              <p className="text-xl text-blue-100">
                Get a comprehensive assessment of your multi-site energy opportunities • Free consultation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <QuoteForm variant="dark" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Multi-Site Energy FAQs ❓
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <span className="text-blue-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-6">
                    <span className="font-semibold text-blue-600">A:</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Portfolio? 🚀
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Take control of your multi-site energy management and start maximizing savings today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Start Portfolio Management
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-all duration-300 border-2 border-blue-500"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 833 8661
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default MultiSiteEnergy