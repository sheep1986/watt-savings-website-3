import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Leaf, Wind, Sun, Zap, TrendingDown, Shield, Clock, Award,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Building2, Factory, Store, Users, Phone, Mail, 
  TreePine, Waves, Battery, Globe
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const GreenEnergy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const renewableSources = [
    { 
      icon: <Sun className="w-12 h-12" />, 
      name: 'Solar Power',
      description: 'Harness the power of the sun with photovoltaic panels',
      percentage: '25%',
      emoji: '☀️'
    },
    { 
      icon: <Wind className="w-12 h-12" />, 
      name: 'Wind Energy',
      description: 'Clean electricity from onshore and offshore wind farms',
      percentage: '35%',
      emoji: '💨'
    },
    { 
      icon: <Waves className="w-12 h-12" />, 
      name: 'Hydroelectric',
      description: 'Renewable power from rivers, dams, and water sources',
      percentage: '20%',
      emoji: '🌊'
    },
    { 
      icon: <TreePine className="w-12 h-12" />, 
      name: 'Biomass',
      description: 'Sustainable energy from organic materials and waste',
      percentage: '15%',
      emoji: '🌿'
    },
    { 
      icon: <Globe className="w-12 h-12" />, 
      name: 'Geothermal',
      description: 'Natural heat from the Earth\'s core for clean energy',
      percentage: '5%',
      emoji: '🌋'
    }
  ]

  const greenBenefits = [
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: 'Zero Carbon Emissions', 
      desc: 'Completely eliminate your carbon footprint with 100% renewable energy',
      emoji: '🌱'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Energy Security', 
      desc: 'Protect against volatile fossil fuel prices with stable renewable rates',
      emoji: '🛡️'
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: 'Corporate Responsibility', 
      desc: 'Enhance your brand reputation with sustainable energy choices',
      emoji: '🏆'
    },
    { 
      icon: <TrendingDown className="w-8 h-8" />, 
      title: 'Cost Savings', 
      desc: 'Long-term savings as renewable energy costs continue to fall',
      emoji: '💰'
    },
    { 
      icon: <Battery className="w-8 h-8" />, 
      title: 'Energy Storage', 
      desc: 'Advanced battery systems to store excess renewable energy',
      emoji: '🔋'
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: 'Future-Proof', 
      desc: 'Invest in technology that will power the future economy',
      emoji: '⚡'
    }
  ]

  const businessSectors = [
    { 
      icon: <Store className="w-8 h-8" />, 
      name: 'Retail & Hospitality', 
      impact: '40% Carbon Reduction',
      desc: 'Attract eco-conscious customers with green energy'
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: 'Manufacturing', 
      impact: '60% Carbon Reduction',
      desc: 'Meet sustainability targets and reduce operating costs'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      name: 'Office Buildings', 
      impact: '35% Carbon Reduction',
      desc: 'Create healthier workplaces with clean energy'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      name: 'Public Sector', 
      impact: '50% Carbon Reduction',
      desc: 'Lead by example with renewable energy initiatives'
    }
  ]

  const greenStats = [
    { number: '100%', label: 'Renewable Sources', icon: '🌿' },
    { number: '0', label: 'Carbon Emissions', icon: '🌱' },
    { number: '25+', label: 'Green Suppliers', icon: '⚡' },
    { number: '2030', label: 'Net Zero Target', icon: '🎯' }
  ]

  const certifications = [
    {
      name: 'REGO Certificates',
      description: 'Renewable Energy Guarantees of Origin prove your energy comes from renewable sources',
      icon: '📜'
    },
    {
      name: 'Carbon Trust',
      description: 'Independent verification of your carbon footprint reduction',
      icon: '✅'
    },
    {
      name: 'ISO 14001',
      description: 'Environmental management system certification',
      icon: '🏅'
    },
    {
      name: 'B-Corp Certified',
      description: 'Meet the highest standards of social and environmental performance',
      icon: '🌟'
    }
  ]

  const process = [
    { 
      step: 1, 
      title: 'Sustainability Assessment', 
      desc: 'We evaluate your current energy usage and carbon footprint',
      emoji: '📊'
    },
    { 
      step: 2, 
      title: 'Green Energy Selection', 
      desc: 'Choose from 100% renewable energy suppliers and tariffs',
      emoji: '🌿'
    },
    { 
      step: 3, 
      title: 'Certification & Reporting', 
      desc: 'Receive REGO certificates and detailed impact reports',
      emoji: '📋'
    },
    { 
      step: 4, 
      title: 'Ongoing Support', 
      desc: 'Monitor your environmental impact with regular updates',
      emoji: '📈'
    }
  ]

  const faqs = [
    {
      q: 'What makes energy "green" or renewable?',
      a: 'Green energy comes from natural sources that are constantly replenished, such as solar, wind, hydro, and biomass. Unlike fossil fuels, these sources don\'t produce harmful emissions and won\'t run out.'
    },
    {
      q: 'How do I know my energy is actually renewable?',
      a: 'All renewable energy comes with REGO (Renewable Energy Guarantees of Origin) certificates that prove the electricity was generated from renewable sources. These certificates track every unit of green energy.'
    },
    {
      q: 'Is green energy more expensive?',
      a: 'Green energy prices have become increasingly competitive. In many cases, renewable energy tariffs are now cheaper than fossil fuel alternatives, and prices are more stable over time.'
    },
    {
      q: 'Can green energy power my entire business?',
      a: 'Absolutely! Green energy can meet 100% of your business electricity needs. The renewable energy is fed into the national grid, so supply reliability is exactly the same as traditional energy.'
    },
    {
      q: 'What environmental impact will switching have?',
      a: 'Switching to green energy can reduce your carbon footprint by 100% for electricity usage. A typical business can save 20-50 tonnes of CO2 annually, equivalent to planting 500-1,000 trees.'
    },
    {
      q: 'How quickly can I switch to green energy?',
      a: 'The switching process typically takes 4-6 weeks. We handle all paperwork and coordination with suppliers to ensure a seamless transition to renewable energy.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Green Energy Solutions UK | 100% Renewable Business Energy | Watt Savings</title>
        <meta name="description" content="Switch to 100% renewable green energy for your business. Reduce carbon emissions, save money, and meet sustainability goals with certified green electricity and gas suppliers." />
        <meta name="keywords" content="green energy, renewable energy, sustainable energy, clean energy, carbon neutral, eco-friendly electricity, renewable energy suppliers UK" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
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
                <Leaf className="w-5 h-5 text-green-200 animate-pulse" />
                <span className="text-sm font-semibold">100% Renewable Energy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Power Your Business with <span className="text-green-200">Green Energy</span> 🌱
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Make the switch to 100% renewable energy. Reduce your carbon footprint, 
                enhance your brand reputation, and contribute to a sustainable future.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary-200">0%</div>
                  <div className="text-sm">Carbon Emissions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-200">100%</div>
                  <div className="text-sm">Renewable Sources</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Leaf className="w-5 h-5" />
                  Get Green Quote
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-green-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-green-900/70 transition-all duration-300 border-2 border-white/30"
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
                alt="Green Energy Solutions" 
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
            {greenStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renewable Sources Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Renewable Energy Sources 🌿
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse mix of renewable energy sources powering the UK's green energy revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {renewableSources.slice(0, -1).map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all group text-center"
              >
                <div className="text-4xl mb-4">{source.emoji}</div>
                <div className="text-green-600 mb-4 flex justify-center">{source.icon}</div>
                <h3 className="font-bold text-xl mb-3">{source.name}</h3>
                <p className="text-gray-600 mb-4">{source.description}</p>
                <div className="bg-green-600 text-white rounded-full px-4 py-2 font-semibold">
                  {source.percentage} of UK Mix
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-4">{renewableSources[4].emoji}</div>
            <div className="text-green-600 mb-4 flex justify-center">{renewableSources[4].icon}</div>
            <h3 className="font-bold text-xl mb-3">{renewableSources[4].name}</h3>
            <p className="text-gray-600 mb-4">{renewableSources[4].description}</p>
            <div className="bg-green-600 text-white rounded-full px-4 py-2 font-semibold">
              {renewableSources[4].percentage} of UK Mix
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Green Energy? 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with sustainable energy that benefits your bottom line and the planet
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{benefit.emoji}</div>
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Green Energy for Every Business 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Industries leading the way in sustainable energy adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">{sector.icon}</div>
                <h3 className="font-bold text-lg mb-2">{sector.name}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{sector.impact}</div>
                <p className="text-xs text-gray-600">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verified Green Credentials 📜
            </h2>
            <p className="text-xl text-gray-600">
              Prove your commitment to sustainability with recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center border-2 border-green-100 hover:border-green-300 transition-colors"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-green-600">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
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
              Your Green Energy Journey 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Switch to renewable energy in 4 simple steps
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg relative">
                    {item.step}
                    <div className="absolute -right-1 -bottom-1 text-2xl">{item.emoji}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="border-l-2 border-dashed border-green-200 h-8 ml-8 mt-4"></div>
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
            Certified Green Energy Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Green Energy Quote 🌱
              </h2>
              <p className="text-xl text-green-100">
                Start your sustainable energy journey today • Renewable energy consultation
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
              Green Energy FAQs ❓
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Green? 🌍
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join the sustainable energy revolution and make a positive impact on the planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Make the Switch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-900 transition-all duration-300 border-2 border-green-500"
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

export default GreenEnergy