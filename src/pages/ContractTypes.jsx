import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, Clock, TrendingUp, TrendingDown, Shield, Zap, Award,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Building2, Factory, Store, Users, Phone, Mail, 
  DollarSign, Calendar, Target, Scale, AlertTriangle
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const ContractTypes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contractTypes = [
    { 
      type: 'Fixed Rate',
      description: 'Your unit rate stays the same throughout the contract period',
      icon: <Shield className="w-8 h-8" />, 
      pros: ['Price certainty', 'Budget planning', 'Protection from price rises'],
      cons: ['May pay more if prices fall', 'Higher rates for certainty'],
      bestFor: 'Businesses wanting budget certainty',
      terms: '12-60 months',
      risk: 'Low',
      emoji: '🔒'
    },
    { 
      type: 'Variable Rate',
      description: 'Your rate changes in line with wholesale energy prices',
      icon: <TrendingUp className="w-8 h-8" />, 
      pros: ['Benefit from price falls', 'Often cheaper initially', 'No exit fees'],
      cons: ['Exposure to price rises', 'Unpredictable bills', 'Budget planning difficult'],
      bestFor: 'Businesses comfortable with price risk',
      terms: '1-12 months',
      risk: 'High',
      emoji: '📈'
    },
    { 
      type: 'Flexible/Tracker',
      description: 'Rates track wholesale prices with a fixed margin',
      icon: <BarChart3 className="w-8 h-8" />, 
      pros: ['Transparent pricing', 'Market rate benefits', 'Fair pricing'],
      cons: ['Price volatility', 'Complex billing', 'Market expertise needed'],
      bestFor: 'Large businesses with energy expertise',
      terms: '12-36 months',
      risk: 'Medium',
      emoji: '📊'
    },
    { 
      type: 'Capped Rate',
      description: 'Variable rate with a maximum price ceiling',
      icon: <Target className="w-8 h-8" />, 
      pros: ['Upside potential', 'Downside protection', 'Balanced approach'],
      cons: ['Premium for cap', 'Complex terms', 'May not hit cap'],
      bestFor: 'Risk-averse businesses wanting some flexibility',
      terms: '12-24 months',
      risk: 'Medium',
      emoji: '🎯'
    },
    { 
      type: 'Collar Contract',
      description: 'Price moves within agreed minimum and maximum rates',
      icon: <Scale className="w-8 h-8" />, 
      pros: ['Managed volatility', 'Shared risk/reward', 'Professional approach'],
      cons: ['Complex structure', 'Professional advice needed', 'Higher fees'],
      bestFor: 'Large sophisticated energy users',
      terms: '24-48 months',
      risk: 'Medium',
      emoji: '⚖️'
    },
    { 
      type: 'Basket Purchase',
      description: 'Energy bought in tranches over time to average prices',
      icon: <Calendar className="w-8 h-8" />, 
      pros: ['Price averaging', 'Reduced timing risk', 'Professional management'],
      cons: ['Complex management', 'Higher fees', 'No guarantee of savings'],
      bestFor: 'Large businesses with significant usage',
      terms: '12-36 months',
      risk: 'Low-Medium',
      emoji: '🗓️'
    }
  ]

  const contractTerms = [
    {
      duration: '12 Months',
      description: 'Short-term contract offering flexibility',
      advantages: ['Quick renegotiation', 'Market responsiveness', 'Less commitment'],
      disadvantages: ['Higher rates', 'Frequent renewal', 'Admin overhead'],
      suitableFor: 'New businesses, uncertain markets',
      pricing: 'Premium rates'
    },
    {
      duration: '24 Months',
      description: 'Most popular contract length for businesses',
      advantages: ['Balanced approach', 'Competitive rates', 'Planning security'],
      disadvantages: ['Medium-term commitment', 'Some inflexibility'],
      suitableFor: 'Established businesses with stable usage',
      pricing: 'Competitive rates'
    },
    {
      duration: '36-60 Months',
      description: 'Long-term contracts for maximum stability',
      advantages: ['Lowest rates', 'Long-term certainty', 'Budget planning'],
      disadvantages: ['Long commitment', 'Market changes risk', 'Exit penalties'],
      suitableFor: 'Large businesses, stable operations',
      pricing: 'Best rates'
    }
  ]

  const contractStats = [
    { number: '24', label: 'Average Contract Months', icon: '📅' },
    { number: '73%', label: 'Choose Fixed Rates', icon: '🔒' },
    { number: '15%', label: 'Savings vs Wrong Contract', icon: '💰' },
    { number: '4-6', label: 'Weeks Switch Time', icon: '⏱️' }
  ]

  const businessSizes = [
    {
      size: 'Small Business',
      usage: 'Under 100,000 kWh/year',
      recommended: ['Fixed Rate 12-24 months', 'Simple variable rates'],
      avoid: ['Complex flexible contracts', 'Basket purchasing'],
      focus: 'Price certainty and simplicity',
      icon: <Store className="w-8 h-8" />
    },
    {
      size: 'Medium Business',
      usage: '100,000 - 2 million kWh/year',
      recommended: ['Fixed rate 24-36 months', 'Capped contracts', 'Flexible rates'],
      avoid: ['Very short-term deals', 'Complex derivatives'],
      focus: 'Balance of price and risk management',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      size: 'Large Business',
      usage: 'Over 2 million kWh/year',
      recommended: ['All contract types', 'Bespoke solutions', 'Portfolio approach'],
      avoid: ['One-size-fits-all deals'],
      focus: 'Sophisticated energy management',
      icon: <Factory className="w-8 h-8" />
    }
  ]

  const decisionFactors = [
    {
      factor: 'Budget Certainty',
      description: 'How important is predictable monthly bills?',
      fixedRate: 'Excellent - identical bills',
      variableRate: 'Poor - bills fluctuate',
      recommendation: 'Choose fixed if budget certainty is crucial',
      icon: '💰'
    },
    {
      factor: 'Risk Tolerance',
      description: 'Comfortable with price volatility?',
      fixedRate: 'Low risk - prices locked in',
      variableRate: 'High risk - market exposure',
      recommendation: 'Match contract to risk appetite',
      icon: '⚖️'
    },
    {
      factor: 'Market Timing',
      description: 'Current market conditions',
      fixedRate: 'Good when prices are low',
      variableRate: 'Good when prices are high',
      recommendation: 'Consider current market position',
      icon: '📈'
    },
    {
      factor: 'Contract Management',
      description: 'Resources for energy management',
      fixedRate: 'Minimal management needed',
      variableRate: 'Active monitoring required',
      recommendation: 'Consider internal capabilities',
      icon: '⚙️'
    }
  ]

  const contractPitfalls = [
    {
      pitfall: 'Auto-Renewal Clauses',
      description: 'Contracts that automatically renew without notice',
      impact: 'Locked into expensive out-of-contract rates',
      avoidance: 'Set calendar reminders 4-6 months before expiry',
      icon: '🔄'
    },
    {
      pitfall: 'Exit Penalties',
      description: 'High fees for early contract termination',
      impact: 'Expensive to switch if better deals emerge',
      avoidance: 'Understand termination clauses before signing',
      icon: '🚪'
    },
    {
      pitfall: 'Rate Escalation',
      description: 'Variable contracts with uncapped increases',
      impact: 'Bills can rise dramatically without warning',
      avoidance: 'Ensure there are limits on price increases',
      icon: '📈'
    },
    {
      pitfall: 'Misleading Quotes',
      description: 'Quotes that don\'t include all costs',
      impact: 'Final bills much higher than expected',
      avoidance: 'Request all-inclusive quotes with breakdown',
      icon: '💸'
    },
    {
      pitfall: 'Poor Contract Terms',
      description: 'Unfavorable payment or billing terms',
      impact: 'Cash flow issues and administrative burden',
      avoidance: 'Review all terms, not just unit rates',
      icon: '📋'
    },
    {
      pitfall: 'Supplier Financial Risk',
      description: 'Choosing financially unstable suppliers',
      impact: 'Service disruption if supplier fails',
      avoidance: 'Check supplier financial ratings and reviews',
      icon: '⚠️'
    }
  ]

  const faqs = [
    {
      q: 'What\'s the most popular type of business energy contract?',
      a: 'Fixed rate contracts are chosen by about 73% of businesses because they provide price certainty and make budgeting easier. 24-month terms are most common as they balance competitive pricing with reasonable commitment.'
    },
    {
      q: 'When should I choose a variable rate contract?',
      a: 'Variable rates work best when energy prices are high and expected to fall, when you have flexible budgets, or for short-term arrangements. They require active monitoring but can offer savings in falling markets.'
    },
    {
      q: 'How long should my energy contract be?',
      a: 'Most businesses choose 24-month contracts for the best balance of price and flexibility. Shorter contracts (12 months) cost more but offer flexibility, while longer contracts (3-5 years) offer the best rates but less flexibility.'
    },
    {
      q: 'What happens when my energy contract expires?',
      a: 'If you don\'t renew, you\'ll automatically move to your supplier\'s out-of-contract rates, which are typically 20-40% more expensive. It\'s crucial to start renewal discussions 4-6 months before expiry.'
    },
    {
      q: 'Can I switch energy contracts early?',
      a: 'Most fixed-term contracts have early termination fees. However, you can usually start the switching process up to 49 days before your contract ends without penalties. Some contracts offer cooling-off periods.'
    },
    {
      q: 'What\'s the difference between unit rates and standing charges?',
      a: 'Unit rates are what you pay per kWh of energy used. Standing charges are daily fixed costs for your connection to the grid. Both vary by contract type and need to be considered when comparing deals.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Energy Contract Types UK | Fixed vs Variable Rates | Watt Savings</title>
        <meta name="description" content="Understand different business energy contract types: fixed, variable, flexible, and capped rates. Expert guidance on choosing the right contract for your business needs and risk tolerance." />
        <meta name="keywords" content="business energy contracts, fixed rate energy, variable rate energy, energy contract types, flexible energy contracts, business electricity contracts" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/lightbulb.jpg')`,
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
                <FileText className="w-5 h-5 text-indigo-200 animate-pulse" />
                <span className="text-sm font-semibold">Expert Contract Guidance</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Choose the Right <span className="text-indigo-200">Energy Contract</span> 📋
              </h1>
              
              <p className="text-xl mb-8 text-indigo-100">
                Understanding energy contract types is crucial for your business. 
                Make informed decisions with our comprehensive guide to contract options.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-indigo-200">6</div>
                  <div className="text-sm">Contract Types</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-indigo-200">15%</div>
                  <div className="text-sm">Average Savings</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contracts"
                  className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <FileText className="w-5 h-5" />
                  Explore Contracts
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-900/70 transition-all duration-300 border-2 border-white/30"
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
                src="/images/lightbulb.jpg" 
                alt="Energy Contract Types" 
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
            {contractStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section id="contracts" ref={ref} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Energy Contract Types Explained 📚
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the contract that best matches your business needs and risk tolerance
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{contract.emoji}</div>
                  <div className="text-indigo-600">{contract.icon}</div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-indigo-600">{contract.type}</h3>
                <p className="text-gray-600 mb-4">{contract.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                  <ul className="text-sm space-y-1">
                    {contract.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                  <ul className="text-sm space-y-1">
                    {contract.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Best for:</span>
                    <span className="font-semibold">{contract.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Terms:</span>
                    <span className="font-semibold">{contract.terms}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk:</span>
                    <span className={`font-semibold ${
                      contract.risk === 'Low' ? 'text-green-600' :
                      contract.risk === 'Medium' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{contract.risk}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contract Length Guide ⏰
            </h2>
            <p className="text-xl text-gray-600">
              How contract duration affects pricing and flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contractTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-6">
                  <h3 className="font-bold text-2xl text-indigo-600 mb-2">{term.duration}</h3>
                  <p className="text-gray-600">{term.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                    <ul className="text-sm space-y-1">
                      {term.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                    <ul className="text-sm space-y-1">
                      {term.disadvantages.map((disadvantage, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0" />
                          {disadvantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-sm mb-2">
                      <span className="font-semibold">Suitable for:</span> {term.suitableFor}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Pricing:</span> {term.pricing}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Size Guide */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contract Recommendations by Business Size 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Different business sizes have different energy contract needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessSizes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-100"
              >
                <div className="text-center mb-6">
                  <div className="text-indigo-600 mb-4 flex justify-center">{business.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{business.size}</h3>
                  <p className="text-gray-600 text-sm">{business.usage}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Recommended:</h4>
                    <ul className="text-sm space-y-1">
                      {business.recommended.map((rec, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Avoid:</h4>
                    <ul className="text-sm space-y-1">
                      {business.avoid.map((avoid, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          {avoid}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Focus:</h4>
                    <p className="text-sm text-gray-600">{business.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Factors */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contract Decision Factors 🤔
            </h2>
            <p className="text-xl text-gray-600">
              Key considerations when choosing between contract types
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {decisionFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{factor.icon}</div>
                  <h3 className="font-bold text-xl text-indigo-600">{factor.factor}</h3>
                </div>
                <p className="text-gray-600 mb-4">{factor.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-700 text-sm mb-1">Fixed Rate:</h4>
                    <p className="text-blue-600 text-sm">{factor.fixedRate}</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-700 text-sm mb-1">Variable Rate:</h4>
                    <p className="text-orange-600 text-sm">{factor.variableRate}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700">{factor.recommendation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Pitfalls */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Contract Pitfalls 🚨
            </h2>
            <p className="text-xl text-gray-600">
              Avoid these common mistakes when choosing energy contracts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractPitfalls.map((pitfall, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{pitfall.icon}</div>
                  <h3 className="font-bold text-lg text-red-600">{pitfall.pitfall}</h3>
                </div>
                <p className="text-gray-700 mb-4">{pitfall.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-red-700 text-sm mb-1">Impact:</h4>
                  <p className="text-red-600 text-sm">{pitfall.impact}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-green-700 text-sm mb-1">How to Avoid:</h4>
                  <p className="text-green-600 text-sm">{pitfall.avoidance}</p>
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
            Compare Contract Types from Leading Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Contract Recommendations 📋
              </h2>
              <p className="text-xl text-indigo-100">
                Receive personalized contract recommendations based on your business needs • Free consultation
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
              Energy Contract FAQs ❓
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
                    <span className="text-indigo-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-6">
                    <span className="font-semibold text-indigo-600">A:</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Contract? 🎯
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Let our experts help you choose the right contract type for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Get Contract Advice
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-900 transition-all duration-300 border-2 border-indigo-500"
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

export default ContractTypes