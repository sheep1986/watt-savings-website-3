import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Sun, TrendingDown, Shield, Clock, Award, Building2,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Zap, Leaf, DollarSign, Phone, Mail, Battery,
  Home, Factory, Store, Users
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const SolarEnergy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const solarBenefits = [
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: 'Reduce Energy Bills', 
      desc: 'Cut your electricity costs by up to 70% with solar panels',
      emoji: '💰'
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: 'Environmental Impact', 
      desc: 'Reduce your carbon footprint and contribute to a greener future',
      emoji: '🌱'
    },
    { 
      icon: <Battery className="w-8 h-8" />, 
      title: 'Energy Independence', 
      desc: 'Generate your own clean energy and reduce grid dependency',
      emoji: '🔋'
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: 'Government Incentives', 
      desc: 'Take advantage of Smart Export Guarantee and tax benefits',
      emoji: '🏆'
    },
    { 
      icon: <TrendingDown className="w-8 h-8" />, 
      title: 'Long-term Savings', 
      desc: '25+ year warranty with guaranteed performance',
      emoji: '📈'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Property Value', 
      desc: 'Increase your property value with renewable energy systems',
      emoji: '🏠'
    }
  ]

  const businessTypes = [
    { 
      icon: <Store className="w-8 h-8" />, 
      name: 'Retail & Commercial', 
      savings: 'Up to 60%',
      desc: 'Perfect for shops, offices, and commercial properties'
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: 'Manufacturing', 
      savings: 'Up to 70%',
      desc: 'Large-scale solar solutions for industrial facilities'
    },
    { 
      icon: <Home className="w-8 h-8" />, 
      name: 'Residential', 
      savings: 'Up to 50%',
      desc: 'Home solar panels with battery storage options'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      name: 'Public Sector', 
      savings: 'Up to 65%',
      desc: 'Schools, hospitals, and government buildings'
    }
  ]

  const solarStats = [
    { number: '25+', label: 'Year Warranty', icon: '🛡️' },
    { number: '90%+', label: 'Efficiency Rating', icon: '⚡' },
    { number: '70%', label: 'Cost Reduction', icon: '💷' },
    { number: '24/7', label: 'Monitoring', icon: '📊' }
  ]

  const process = [
    { 
      step: 1, 
      title: 'Site Assessment', 
      desc: 'Our experts evaluate your property for solar potential',
      emoji: '🔍'
    },
    { 
      step: 2, 
      title: 'Custom Design', 
      desc: 'We create a tailored solar solution for your needs',
      emoji: '📐'
    },
    { 
      step: 3, 
      title: 'Professional Installation', 
      desc: 'Certified technicians install your solar system',
      emoji: '🔧'
    },
    { 
      step: 4, 
      title: 'Start Saving', 
      desc: 'Begin generating clean energy and saving money',
      emoji: '💡'
    }
  ]

  const solarTypes = [
    {
      type: 'Monocrystalline',
      efficiency: '20-22%',
      lifespan: '25+ years',
      features: ['Highest efficiency', 'Space efficient', 'Performs well in low light'],
      bestFor: 'Limited roof space, maximum output'
    },
    {
      type: 'Polycrystalline',
      efficiency: '15-17%',
      lifespan: '25+ years',
      features: ['Good value for money', 'Reliable performance', 'Eco-friendly manufacturing'],
      bestFor: 'Budget-conscious installations'
    },
    {
      type: 'Thin Film',
      efficiency: '10-12%',
      lifespan: '20+ years',
      features: ['Flexible installation', 'Better shade tolerance', 'Lightweight'],
      bestFor: 'Complex roof shapes, partial shading'
    }
  ]

  const faqs = [
    {
      q: 'How much can I save with solar panels?',
      a: 'Most businesses and homes save 50-70% on their electricity bills. The exact savings depend on your energy usage, roof size, and local solar conditions. With current energy prices, most solar systems pay for themselves within 6-8 years.'
    },
    {
      q: 'Do solar panels work on cloudy days?',
      a: 'Yes! Solar panels still generate electricity on cloudy days, typically producing 10-25% of their peak capacity. The UK receives enough sunlight to make solar a viable option, even with our variable weather.'
    },
    {
      q: 'What happens to excess energy generated?',
      a: 'Excess energy can be stored in batteries for later use or exported back to the grid through the Smart Export Guarantee (SEG), earning you money for the energy you don\'t use.'
    },
    {
      q: 'How long do solar panels last?',
      a: 'Quality solar panels come with 25+ year warranties and can last 30-40 years. They\'re designed to withstand harsh weather conditions and maintain 80% of their original efficiency after 25 years.'
    },
    {
      q: 'Do I need planning permission?',
      a: 'Most residential solar installations fall under permitted development rights and don\'t require planning permission. Commercial installations may need approval depending on size and location.'
    },
    {
      q: 'What maintenance do solar panels require?',
      a: 'Solar panels require minimal maintenance - occasional cleaning and annual inspections. Most systems include monitoring to alert you to any performance issues.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Solar Energy Solutions UK | Commercial & Residential Solar Panels | Watt Savings</title>
        <meta name="description" content="Discover solar energy solutions for your business or home. Save up to 70% on electricity bills with professional solar panel installation. Free consultation, 25+ year warranty, government incentives available." />
        <meta name="keywords" content="solar energy, solar panels UK, commercial solar, residential solar, solar installation, renewable energy, solar power systems, solar savings" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/solar.jpg')`,
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
                <Sun className="w-5 h-5 text-yellow-200 animate-pulse" />
                <span className="text-sm font-semibold">Clean Energy Revolution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Harness the Power of the <span className="text-yellow-200">Sun</span> ☀️
              </h1>
              
              <p className="text-xl mb-8 text-orange-100">
                Transform your energy costs with professional solar panel installation. 
                Save up to 70% on electricity bills while contributing to a greener future.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-200">70%</div>
                  <div className="text-sm">Bill Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-200">25+</div>
                  <div className="text-sm">Year Warranty</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Sun className="w-5 h-5" />
                  Get Solar Quote
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
                src="/images/solar.jpg" 
                alt="Solar Energy Solutions" 
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
            {solarStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
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
                Why Choose Solar Energy? 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful benefits of switching to clean, renewable solar energy
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{benefit.emoji}</div>
                  <div className="text-orange-600">{benefit.icon}</div>
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
              Solar Solutions for Every Sector 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solar installations for homes, businesses, and industries
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
                <div className="text-2xl font-bold text-orange-600 mb-2">{type.savings}</div>
                <div className="text-sm text-gray-600 mb-3">Potential Savings</div>
                <p className="text-xs text-gray-500">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Panel Types */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose the Right Solar Technology 🔧
            </h2>
            <p className="text-xl text-gray-600">
              We offer different types of solar panels to match your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solarTypes.map((solar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-100"
              >
                <h3 className="font-bold text-xl mb-3 text-orange-600">{solar.type}</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Efficiency:</span>
                    <span className="font-bold text-orange-600">{solar.efficiency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lifespan:</span>
                    <span className="font-bold text-orange-600">{solar.lifespan}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Best For:</h4>
                  <p className="text-sm text-gray-600">{solar.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Solar Installation Process 🚀
            </h2>
            <p className="text-xl text-gray-600">
              From assessment to activation in 4 simple steps
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg relative">
                    {item.step}
                    <div className="absolute -right-1 -bottom-1 text-2xl">{item.emoji}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="border-l-2 border-dashed border-orange-200 h-8 ml-8 mt-4"></div>
                  )}
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
            Partnered with Leading Solar Manufacturers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Solar Assessment ☀️
              </h2>
              <p className="text-xl text-orange-100">
                Discover how much you could save with solar energy • No obligation • Free service
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
              Solar Energy FAQs ❓
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Solar? 🌞
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Join thousands who have already made the switch to clean, renewable solar energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Solar Journey
                <ArrowRight className="w-5 h-5" />
              </a>
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

export default SolarEnergy