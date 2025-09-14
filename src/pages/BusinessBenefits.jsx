import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  DollarSign, TrendingDown, Clock, Shield, Users, Award,
  BarChart3, Zap, ArrowRight, Phone, CheckCircle, Target,
  Briefcase, Calculator, Leaf, Globe, Building2, LineChart
} from 'lucide-react'

const BusinessBenefits = () => {
  const keyBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Significant Cost Savings',
      description: 'Save up to 45% on your annual energy bills through competitive market comparison and expert negotiation.',
      details: [
        'Average savings of 15-45% on energy bills',
        'Fixed price contracts protect against market volatility',
        'Bulk buying power reduces unit costs',
        'No hidden fees or charges'
      ],
      emoji: '💰',
      stat: 'Up to 45%',
      statLabel: 'Average Savings'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time & Resource Efficiency',
      description: 'Free up valuable time and resources by letting our experts handle all aspects of your energy procurement.',
      details: [
        'No need to research suppliers yourself',
        'We handle all paperwork and administration',
        'Dedicated account management',
        'Streamlined switching process'
      ],
      emoji: '⏰',
      stat: '95%',
      statLabel: 'Time Saved'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Protect your business from energy price volatility with strategic contract planning and market insights.',
      details: [
        'Price protection against market spikes',
        'Contract term flexibility',
        'Budget certainty with fixed rates',
        'Expert market timing advice'
      ],
      emoji: '🛡️',
      stat: '100%',
      statLabel: 'Price Protection'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Access to dedicated energy consultants with deep market knowledge and industry expertise.',
      details: [
        '24/7 customer support available',
        'Dedicated account managers',
        'Market insights and updates',
        'Ongoing contract monitoring'
      ],
      emoji: '👥',
      stat: '24/7',
      statLabel: 'Support Available'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability Options',
      description: 'Access to green energy tariffs and renewable options to meet your environmental commitments.',
      details: [
        '100% renewable energy options',
        'Carbon footprint reduction',
        'Green credentials for marketing',
        'Compliance with sustainability targets'
      ],
      emoji: '🌱',
      stat: '100%',
      statLabel: 'Renewable Options'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Market Intelligence',
      description: 'Stay informed with regular market updates, price forecasts, and strategic energy insights.',
      details: [
        'Weekly market price updates',
        'Renewal timing recommendations',
        'Industry trend analysis',
        'Regulatory change notifications'
      ],
      emoji: '📊',
      stat: '30+',
      statLabel: 'Suppliers Compared'
    }
  ]

  const businessTypes = [
    {
      title: 'Small Businesses',
      description: 'Tailored solutions for businesses with modest energy requirements',
      benefits: [
        'Simple switching process',
        'Competitive rates for small users',
        'Flexible contract terms',
        'Personal service approach'
      ],
      icon: '🏪',
      size: '1-50 employees'
    },
    {
      title: 'Medium Enterprises',
      description: 'Comprehensive energy management for growing businesses',
      benefits: [
        'Volume discount opportunities',
        'Advanced contract structures',
        'Energy usage analysis',
        'Strategic procurement planning'
      ],
      icon: '🏢',
      size: '50-500 employees'
    },
    {
      title: 'Large Corporations',
      description: 'Complex energy solutions for multi-site operations',
      benefits: [
        'Multi-site contract management',
        'Bespoke pricing structures',
        'Risk management strategies',
        'Dedicated relationship managers'
      ],
      icon: '🏛️',
      size: '500+ employees'
    }
  ]

  const roi = [
    {
      title: 'Energy Cost Reduction',
      before: '£25,000',
      after: '£16,250',
      saving: '£8,750',
      percentage: '35%',
      description: 'Annual electricity bill for medium-sized office'
    },
    {
      title: 'Time Investment Return',
      before: '40 hours',
      after: '2 hours',
      saving: '38 hours',
      percentage: '95%',
      description: 'Staff time spent on energy procurement'
    },
    {
      title: 'Administrative Costs',
      before: '£2,500',
      after: '£0',
      saving: '£2,500',
      percentage: '100%',
      description: 'Annual cost of managing energy contracts'
    }
  ]

  const testimonialStats = [
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '£2.5M+', label: 'Annual Savings' },
    { number: '4.8/5', label: 'Customer Rating' },
    { number: '98%', label: 'Renewal Rate' }
  ]

  return (
    <>
      <Helmet>
        <title>Business Energy Benefits | Why Switch Energy Supplier | Watt Savings</title>
        <meta name="description" content="Discover the key benefits of switching your business energy supplier. Save up to 45% on bills, reduce admin time, access expert support and green energy options." />
        <meta name="keywords" content="business energy benefits, energy switching advantages, business energy savings, energy cost reduction, energy management benefits" />
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
                <Target className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Maximize Your Benefits</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unlock Your Business <span className="text-yellow-300">Energy Benefits</span> 🚀
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Discover how switching your energy supplier can transform your business operations, 
                reduce costs, and improve efficiency across all areas of your enterprise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Discover Your Savings
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

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Business with Smart Energy Choices 💡
            </h2>
            <p className="text-xl text-gray-600">
              Experience these key benefits when you switch your business energy supplier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <div className="text-4xl">{benefit.emoji}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-primary-600">{benefit.stat}</div>
                  <div className="text-sm text-primary-700">{benefit.statLabel}</div>
                </div>
                
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Benefits for Every Business Size 📈
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions and benefits for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:from-primary-100 hover:to-primary-200 transition-all duration-300">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{type.size}</p>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3 text-left">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              See Your Potential Return on Investment 💼
            </h2>
            <p className="text-xl text-gray-600">
              Real examples of savings achieved by businesses like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {roi.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <h3 className="text-lg font-bold mb-6">{item.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Before:</span>
                    <span className="font-bold text-red-600">{item.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">After:</span>
                    <span className="font-bold text-green-600">{item.after}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="font-semibold">Saving:</span>
                    <span className="font-bold text-primary-600">{item.saving}</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-primary-600 text-white rounded-lg p-4">
                  <div className="text-3xl font-bold">{item.percentage}</div>
                  <div className="text-sm opacity-90">Improvement</div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Thousands of UK Businesses</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Unlock These Benefits? 🔓
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of UK businesses already enjoying these benefits. 
              Start your energy transformation today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Savings
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-primary-500"
              >
                <Users className="w-5 h-5" />
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BusinessBenefits