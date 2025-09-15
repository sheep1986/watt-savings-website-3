import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Lightbulb, Thermometer, Zap, TrendingDown, Shield, Clock, Award,
  ChevronRight, Check, ArrowRight, Calculator, BarChart3,
  Building2, Factory, Store, Users, Phone, Mail, 
  Sun, Moon, Snowflake, Flame, Settings, Eye
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const EnergySavingTips = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const quickTips = [
    { 
      icon: <Lightbulb className="w-8 h-8" />, 
      title: 'LED Lighting', 
      desc: 'Switch to LED bulbs - use 75% less energy than traditional bulbs',
      savings: '£200/year',
      emoji: '💡'
    },
    { 
      icon: <Thermometer className="w-8 h-8" />, 
      title: 'Smart Thermostats', 
      desc: 'Programmable heating controls can reduce bills by 10-15%',
      savings: '£300/year',
      emoji: '🌡️'
    },
    { 
      icon: <Snowflake className="w-8 h-8" />, 
      title: 'Insulation Upgrade', 
      desc: 'Proper insulation can cut heating costs by up to 25%',
      savings: '£500/year',
      emoji: '🏠'
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: 'Power Down Equipment', 
      desc: 'Turn off computers and equipment when not in use',
      savings: '£150/year',
      emoji: '⚡'
    },
    { 
      icon: <Sun className="w-8 h-8" />, 
      title: 'Solar Panels', 
      desc: 'Generate your own electricity and earn money from excess',
      savings: '£800/year',
      emoji: '☀️'
    },
    { 
      icon: <Settings className="w-8 h-8" />, 
      title: 'Energy Management', 
      desc: 'Smart meters and monitoring systems optimize usage',
      savings: '£250/year',
      emoji: '📊'
    }
  ]

  const businessSectors = [
    { 
      icon: <Store className="w-8 h-8" />, 
      name: 'Retail & Shops', 
      tips: ['LED shop lighting', 'Efficient refrigeration', 'Smart HVAC controls'],
      potential: 'Up to 35% savings'
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: 'Manufacturing', 
      tips: ['Motor efficiency upgrades', 'Waste heat recovery', 'Power factor correction'],
      potential: 'Up to 25% savings'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      name: 'Offices', 
      tips: ['Occupancy sensors', 'Desk-based heating', 'Server room optimization'],
      potential: 'Up to 30% savings'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      name: 'Hospitality', 
      tips: ['Guest room controls', 'Kitchen equipment upgrades', 'Pool heating systems'],
      potential: 'Up to 20% savings'
    }
  ]

  const savingsStats = [
    { number: '30%', label: 'Average Bill Reduction', icon: '💰' },
    { number: '£1,200', label: 'Annual Savings', icon: '💷' },
    { number: '5 Mins', label: 'Daily Time Investment', icon: '⏱️' },
    { number: '50%', label: 'Carbon Footprint Cut', icon: '🌱' }
  ]

  const heatingTips = [
    {
      title: 'Lower Thermostat by 1°C',
      description: 'Reducing temperature by just 1 degree can save 8-10% on heating bills',
      savings: '£80-120/year',
      difficulty: 'Easy',
      icon: '🌡️'
    },
    {
      title: 'Upgrade to Smart Heating Controls',
      description: 'Zone control and scheduling prevents heating empty spaces',
      savings: '£200-400/year',
      difficulty: 'Medium',
      icon: '📱'
    },
    {
      title: 'Service Boiler Annually',
      description: 'Well-maintained boilers run 5-10% more efficiently',
      savings: '£100-200/year',
      difficulty: 'Easy',
      icon: '🔧'
    },
    {
      title: 'Install Radiator Reflectors',
      description: 'Reflects heat back into room instead of warming walls',
      savings: '£30-50/year',
      difficulty: 'Easy',
      icon: '🪞'
    }
  ]

  const lightingTips = [
    {
      title: 'Switch to LED Bulbs',
      description: 'Use 75% less energy and last 25x longer than incandescent bulbs',
      savings: '£150-300/year',
      difficulty: 'Easy',
      icon: '💡'
    },
    {
      title: 'Install Motion Sensors',
      description: 'Automatically turn lights off in unoccupied areas',
      savings: '£100-200/year',
      difficulty: 'Medium',
      icon: '👁️'
    },
    {
      title: 'Use Natural Light',
      description: 'Open blinds, use light colors, and position workspaces near windows',
      savings: '£80-150/year',
      difficulty: 'Easy',
      icon: '☀️'
    },
    {
      title: 'Daylight Dimming Systems',
      description: 'Automatically adjust artificial lighting based on natural light levels',
      savings: '£200-400/year',
      difficulty: 'Hard',
      icon: '🌅'
    }
  ]

  const equipmentTips = [
    {
      title: 'Enable Power Management',
      description: 'Set computers and monitors to sleep/hibernate when inactive',
      savings: '£50-100/year',
      difficulty: 'Easy',
      icon: '💻'
    },
    {
      title: 'Unplug Phantom Loads',
      description: 'Equipment in standby mode still consumes 5-10% of full power',
      savings: '£75-150/year',
      difficulty: 'Easy',
      icon: '🔌'
    },
    {
      title: 'Regular Equipment Maintenance',
      description: 'Clean filters, service motors, and calibrate systems regularly',
      savings: '£100-250/year',
      difficulty: 'Medium',
      icon: '🛠️'
    },
    {
      title: 'Upgrade to Energy Star Equipment',
      description: 'Energy-efficient appliances use 10-50% less energy',
      savings: '£200-500/year',
      difficulty: 'Hard',
      icon: '⭐'
    }
  ]

  const seasonalTips = [
    {
      season: 'Spring',
      icon: '🌸',
      tips: [
        'Service air conditioning before summer',
        'Clean windows for maximum natural light',
        'Switch off heating earlier in the day',
        'Check and seal any winter damage to insulation'
      ]
    },
    {
      season: 'Summer',
      icon: '☀️',
      tips: [
        'Use fans instead of air conditioning when possible',
        'Close blinds during hottest part of day',
        'Take advantage of longer daylight hours',
        'Service refrigeration equipment for peak efficiency'
      ]
    },
    {
      season: 'Autumn',
      icon: '🍂',
      tips: [
        'Service heating systems before winter',
        'Check insulation and draft-proofing',
        'Clean gutters to prevent heating loss',
        'Adjust thermostats for shorter days'
      ]
    },
    {
      season: 'Winter',
      icon: '❄️',
      tips: [
        'Use curtains and blinds as extra insulation',
        'Avoid heating unused rooms',
        'Maximize use of natural heat from sun',
        'Consider heat recovery ventilation'
      ]
    }
  ]

  const faqs = [
    {
      q: 'What are the quickest wins for reducing energy costs?',
      a: 'Start with LED lighting, power management settings on equipment, and lowering your thermostat by 1-2 degrees. These simple changes can reduce bills by 10-15% immediately with minimal investment.'
    },
    {
      q: 'How much can I realistically save on my energy bills?',
      a: 'Most businesses achieve 15-30% savings through efficiency measures. The exact amount depends on your current setup, but typical savings range from £500-2000 per year for small to medium businesses.'
    },
    {
      q: 'Do I need to invest a lot of money to see savings?',
      a: 'Not at all! Many of our top tips are free or low-cost behavioral changes. While some upgrades require investment, simple changes like LED bulbs and thermostat adjustments pay for themselves within months.'
    },
    {
      q: 'How do I know which energy-saving measures to prioritize?',
      a: 'Start with an energy audit to identify your biggest energy users. Generally, heating/cooling, lighting, and major equipment offer the best savings opportunities. Focus on quick wins first, then plan larger investments.'
    },
    {
      q: 'Can energy-saving measures affect comfort or productivity?',
      a: 'When done correctly, energy efficiency actually improves comfort and productivity. Better lighting, consistent temperatures, and good air quality create a more pleasant working environment while saving money.'
    },
    {
      q: 'How can I track my energy savings?',
      a: 'Smart meters provide real-time usage data, and many energy management systems offer detailed analytics. Compare monthly bills before and after implementing changes, adjusting for weather differences.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Energy Saving Tips UK | Reduce Business Energy Bills | Watt Savings</title>
        <meta name="description" content="Practical energy saving tips to reduce your business electricity and gas bills. Simple changes can save 30% on energy costs. Free expert advice and comprehensive energy efficiency guide." />
        <meta name="keywords" content="energy saving tips, reduce energy bills, business energy efficiency, energy conservation, cut electricity costs, heating savings, lighting efficiency" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white overflow-hidden">
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
                <Lightbulb className="w-5 h-5 text-yellow-200 animate-pulse" />
                <span className="text-sm font-semibold">Smart Energy Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cut Your Energy Bills with <span className="text-yellow-200">Simple Tips</span> 💡
              </h1>
              
              <p className="text-xl mb-8 text-orange-100">
                Discover proven energy-saving strategies that can reduce your business bills by 
                up to 30%. Start saving money today with our expert tips and guidance.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-200">30%</div>
                  <div className="text-sm">Average Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-200">FREE</div>
                  <div className="text-sm">Expert Advice</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#tips"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Lightbulb className="w-5 h-5" />
                  View Energy Tips
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
                src="/images/lightbulb.jpg" 
                alt="Energy Saving Tips" 
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
            {savingsStats.map((stat, index) => (
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

      {/* Quick Tips Section */}
      <section id="tips" ref={ref} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Quick Energy-Saving Wins 🚀
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with these simple changes to see immediate savings on your energy bills
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{tip.emoji}</div>
                  <div className="text-orange-600">{tip.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.desc}</p>
                <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  Save {tip.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sector-Specific Energy Tips 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Tailored advice for your industry's unique energy challenges
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
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-600 mb-4 flex justify-center">{sector.icon}</div>
                <h3 className="font-bold text-lg mb-4 text-center">{sector.name}</h3>
                <ul className="space-y-2 mb-4">
                  {sector.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-semibold">
                    {sector.potential}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Tips Sections */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Energy-Saving Strategies 🔧
            </h2>
            <p className="text-xl text-gray-600">
              In-depth guidance for maximizing your energy efficiency
            </p>
          </div>

          {/* Heating Tips */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-orange-600" />
              Heating & Cooling Efficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {heatingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{tip.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{tip.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tip.difficulty === 'Easy' ? 'bg-primary-100 text-primary-800' :
                        tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tip.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <div className="font-semibold text-primary-600">{tip.savings}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lighting Tips */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-orange-600" />
              Lighting Optimization
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {lightingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{tip.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{tip.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tip.difficulty === 'Easy' ? 'bg-primary-100 text-primary-800' :
                        tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tip.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <div className="font-semibold text-primary-600">{tip.savings}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Equipment Tips */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Settings className="w-8 h-8 text-orange-600" />
              Equipment & Appliances
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {equipmentTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{tip.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{tip.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tip.difficulty === 'Easy' ? 'bg-primary-100 text-primary-800' :
                        tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tip.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <div className="font-semibold text-primary-600">{tip.savings}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seasonal Energy-Saving Tips 📅
            </h2>
            <p className="text-xl text-gray-600">
              Year-round strategies to keep your energy costs low
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalTips.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-orange-100"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-2">{season.icon}</div>
                  <h3 className="font-bold text-xl text-orange-600">{season.season}</h3>
                </div>
                <ul className="space-y-3">
                  {season.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Recommended Energy Efficient Suppliers
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
                Get Personalized Energy Advice 💡
              </h2>
              <p className="text-xl text-orange-100">
                Receive tailored energy-saving recommendations for your business • Free consultation
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
              Energy Saving FAQs ❓
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
              Ready to Start Saving Energy? ⚡
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Put these tips into action and start reducing your energy bills today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Get Energy Assessment
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

export default EnergySavingTips