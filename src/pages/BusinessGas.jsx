import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Flame, TrendingDown, Shield, Clock, Award, Building2,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Factory, Store, Briefcase, Phone, Mail, Thermometer,
  Home, Gauge, Users, Target, AlertTriangle
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const BusinessGas = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const businessTypes = [
    { icon: <Store className="w-8 h-8" />, name: 'Retail & Hospitality', savings: 'Up to 35%' },
    { icon: <Factory className="w-8 h-8" />, name: 'Manufacturing', savings: 'Up to 40%' },
    { icon: <Building2 className="w-8 h-8" />, name: 'Offices & Commercial', savings: 'Up to 30%' },
    { icon: <Home className="w-8 h-8" />, name: 'Healthcare & Education', savings: 'Up to 38%' }
  ]

  const gasFeatures = [
    { title: 'Fixed Rate Contracts', desc: 'Lock in competitive gas rates for up to 5 years', icon: <Shield className="w-6 h-6" /> },
    { title: 'Flexible Pricing', desc: 'Variable rates that adapt to market conditions', icon: <BarChart3 className="w-6 h-6" /> },
    { title: 'Industrial Gas Solutions', desc: 'High-volume contracts for heavy industry', icon: <Factory className="w-6 h-6" /> },
    { title: 'Smart Meter Upgrades', desc: 'Free installation and monitoring systems', icon: <Gauge className="w-6 h-6" /> },
    { title: 'Emergency Support', desc: '24/7 emergency gas supply assistance', icon: <AlertTriangle className="w-6 h-6" /> },
    { title: 'Carbon Offsetting', desc: 'Green gas options to reduce carbon footprint', icon: <Target className="w-6 h-6" /> }
  ]

  const process = [
    { step: 1, title: 'Gas Usage Analysis', desc: 'We analyze your current gas consumption and costs' },
    { step: 2, title: 'Market Comparison', desc: 'Compare rates from 25+ commercial gas suppliers' },
    { step: 3, title: 'Contract Selection', desc: 'Choose the perfect gas contract for your needs' },
    { step: 4, title: 'Seamless Transfer', desc: 'We handle the switch with zero supply interruption' }
  ]

  const gasStats = [
    { number: '40%', label: 'Average Savings', desc: 'Typical business gas cost reduction' },
    { number: '25+', label: 'Gas Suppliers', desc: 'Commercial providers compared' },
    { number: '8,500+', label: 'Businesses Helped', desc: 'UK companies we\'ve assisted' },
    { number: '100%', label: 'No Interruption', desc: 'Guaranteed supply continuity' }
  ]

  const faqs = [
    {
      q: 'How much can my business save on gas costs?',
      a: 'Most businesses save between 20-40% on their gas bills when switching through us. The exact amount depends on your current rates, usage patterns, and the contract terms we secure for you.'
    },
    {
      q: 'Will switching affect my gas supply?',
      a: 'No, absolutely not. Your gas supply will continue uninterrupted during the switching process. The change happens at the billing level only - you\'ll keep receiving the same reliable gas supply.'
    },
    {
      q: 'What types of business gas contracts are available?',
      a: 'We offer fixed-rate contracts (1-5 years), flexible contracts with variable pricing, deemed contracts for immediate supply, and specialized industrial contracts for high-consumption businesses.'
    },
    {
      q: 'How long does the business gas switching process take?',
      a: 'The complete switching process typically takes 4-8 weeks from contract signing to your first bill from the new supplier. We handle all paperwork and coordination during this time.'
    },
    {
      q: 'Do you charge businesses for gas comparison services?',
      a: 'Our gas comparison and switching service is completely free for businesses. We earn commission from gas suppliers when you switch, so there\'s no cost to you for our expertise.'
    },
    {
      q: 'Can I switch if I\'m currently in a gas contract?',
      a: 'You can begin the switching process up to 12 months before your current contract expires. We\'ll plan the timing perfectly to avoid early termination charges.'
    }
  ]

  const gasTypes = [
    { name: 'Natural Gas', desc: 'Standard commercial gas supply for most businesses', usage: 'Heating, cooking, industrial processes' },
    { name: 'Green Gas', desc: 'Renewable biogas and carbon-neutral options', usage: 'Environmentally conscious businesses' },
    { name: 'Industrial Gas', desc: 'High-volume supply for manufacturing', usage: 'Factories, production facilities' },
    { name: 'Interruptible Gas', desc: 'Lower rates with supply flexibility terms', usage: 'Businesses with backup heating' }
  ]

  return (
    <>
      <Helmet>
        <title>Business Gas Comparison UK | Save Up to 40% | Watt Savings</title>
        <meta name="description" content="Compare commercial gas prices from 25+ UK suppliers. Save up to 40% on business gas bills. Free comparison service with no supply interruption. Get your quote today." />
        <meta name="keywords" content="business gas, commercial gas, business gas comparison, compare business gas prices, business gas suppliers UK, cheap business gas, industrial gas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wattsavings.co.uk/business-gas" />
        <meta property="og:title" content="Business Gas Comparison UK | Save Up to 40% | Watt Savings" />
        <meta property="og:description" content="Compare commercial gas prices from 25+ UK suppliers. Save up to 40% on business gas bills with our free comparison service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wattsavings.co.uk/business-gas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/job.jpg')`,
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
                <Flame className="w-5 h-5 text-orange-300 animate-pulse" />
                <span className="text-sm font-semibold">8,500+ UK Businesses Trust Us</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Business Gas That <span className="text-orange-300">Ignites</span> Your Growth 🔥
              </h1>
              
              <p className="text-xl mb-8 text-orange-100">
                Compare commercial gas prices from the UK's leading suppliers. 
                Save up to 40% with our expert gas procurement service.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-300">40%</div>
                  <div className="text-sm">Average Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-300">25+</div>
                  <div className="text-sm">Gas Suppliers</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Calculator className="w-5 h-5" />
                  Get Free Gas Quote
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-orange-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-900/70 transition-all duration-300 border-2 border-white/30"
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
                src="/images/job.jpg" 
                alt="Business Gas Solutions" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gasStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
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
              Gas Solutions for Every Business Type 🏭
            </h2>
            <p className="text-xl text-gray-600">
              Specialized commercial gas contracts tailored to your industry
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
                <div className="text-orange-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                <div className="text-2xl font-bold text-orange-600">{type.savings}</div>
                <div className="text-sm text-gray-600">Potential Savings</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Types Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Gas Types & Solutions 💨
            </h2>
            <p className="text-xl text-gray-600">
              Different gas products to match your business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gasTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100"
              >
                <h3 className="font-bold text-xl mb-3 text-orange-700">{type.name}</h3>
                <p className="text-gray-600 mb-3">{type.desc}</p>
                <div className="text-sm text-orange-600 font-medium">
                  <Thermometer className="w-4 h-4 inline mr-1" />
                  Best for: {type.usage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Business Gas Services 🔥
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From procurement to ongoing support - we handle every aspect of your gas supply
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gasFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white rounded-lg p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            We Compare All Major Gas Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Reduce Your Gas Costs 📊
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 4-step process to cheaper business gas
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
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="border-l-2 border-dashed border-orange-200 h-8 ml-6 mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Business Gas Quote 🔥
              </h2>
              <p className="text-xl text-orange-100">
                Compare prices in under 60 seconds • No obligation • Expert advice included
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
              Business Gas FAQs ❓
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
                    <span className="text-orange-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-6">
                    <span className="font-semibold text-orange-600">A:</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Slash Your Gas Bills? 🔥
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Join thousands of UK businesses already saving with our gas comparison service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Start Saving Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-orange-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-900 transition-all duration-300 border-2 border-orange-500"
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

export default BusinessGas