import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, TrendingDown, Shield, Clock, Award, Building2,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Factory, Store, Briefcase, Phone, Mail
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const BusinessElectricity = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const businessTypes = [
    { icon: <Store className="w-8 h-8" />, name: 'Retail & Shops', savings: 'Up to 40%' },
    { icon: <Factory className="w-8 h-8" />, name: 'Manufacturing', savings: 'Up to 45%' },
    { icon: <Building2 className="w-8 h-8" />, name: 'Offices', savings: 'Up to 35%' },
    { icon: <Briefcase className="w-8 h-8" />, name: 'Professional Services', savings: 'Up to 38%' }
  ]

  const features = [
    { title: 'Fixed Rate Contracts', desc: 'Lock in competitive rates for up to 5 years' },
    { title: 'Flexible Contracts', desc: 'Adapt to market changes with variable pricing' },
    { title: 'Green Energy Options', desc: '100% renewable electricity available' },
    { title: 'Smart Meter Installation', desc: 'Free smart meter upgrades available' },
    { title: 'Half-Hourly Metering', desc: 'For high-consumption businesses' },
    { title: 'Load Management', desc: 'Optimize your energy usage patterns' }
  ]

  const process = [
    { step: 1, title: 'Share Your Details', desc: 'Tell us about your business electricity needs' },
    { step: 2, title: 'Market Comparison', desc: 'We compare 30+ suppliers for the best rates' },
    { step: 3, title: 'Review Options', desc: 'Choose from tailored electricity contracts' },
    { step: 4, title: 'Seamless Switch', desc: 'We handle everything - no supply interruption' }
  ]

  const faqs = [
    {
      q: 'How much can I save on business electricity?',
      a: 'Most businesses save between 20-45% when switching through us. The exact amount depends on your current rates, usage patterns, and contract terms.'
    },
    {
      q: 'Will my electricity supply be interrupted?',
      a: 'No, absolutely not. The switch happens behind the scenes with no interruption to your power supply. You won\'t even notice the changeover.'
    },
    {
      q: 'How long does the switching process take?',
      a: 'The entire process typically takes 4-6 weeks from start to finish. We handle all the paperwork and coordination with suppliers.'
    },
    {
      q: 'Are there any fees for your service?',
      a: 'Our comparison and switching service is completely free for businesses. We receive a commission from energy suppliers, not from you.'
    },
    {
      q: 'Can I switch if I\'m in a contract?',
      a: 'You can start the switching process up to 6 months before your contract ends. We\'ll time everything perfectly to avoid any penalties.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Electricity Comparison UK | Save Up to 45% | Watt Savings</title>
        <meta name="description" content="Compare business electricity prices from 30+ UK suppliers. Save up to 45% on your electricity bills. Free comparison service, no interruption to supply. Get a quote in 60 seconds." />
        <meta name="keywords" content="business electricity, commercial electricity, business electricity comparison, compare business electricity prices, business electricity suppliers UK, cheap business electricity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
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
                <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-sm font-semibold">Trusted by 10,000+ UK Businesses</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Business Electricity That Powers Your <span className="text-yellow-300">Success</span> ⚡
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Compare business electricity prices from the UK's leading suppliers. 
                Save up to 45% with our free comparison service.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-300">45%</div>
                  <div className="text-sm">Average Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-300">30+</div>
                  <div className="text-sm">Suppliers Compared</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Calculator className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
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
                alt="Business Electricity" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Electricity Solutions for Every Business 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Tailored energy contracts for your industry
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
                <div className="text-primary-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                <div className="text-2xl font-bold text-primary-600">{type.savings}</div>
                <div className="text-sm text-gray-600">Potential Savings</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Business Electricity Services 💡
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just comparison - we provide complete energy management solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 text-white rounded-lg p-2">
                    <Check className="w-6 h-6" />
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
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            We Compare All Major Electricity Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Help You Switch & Save 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to cheaper business electricity
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
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="border-l-2 border-dashed border-primary-200 h-8 ml-6 mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Business Electricity Quote 📊
              </h2>
              <p className="text-xl text-primary-100">
                Takes less than 60 seconds • No obligation • Free service
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
              Frequently Asked Questions ❓
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
                    <span className="text-primary-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-6">
                    <span className="font-semibold text-primary-600">A:</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Cut Your Electricity Costs? ⚡
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of UK businesses already saving with Watt Savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Start Saving Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
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

export default BusinessElectricity