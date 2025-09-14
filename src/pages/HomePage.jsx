import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import { 
  Zap, TrendingDown, Shield, Users, Award, Clock, 
  ChevronRight, Check, Star, Phone, ArrowRight,
  Building2, Lightbulb, Leaf, Calculator
} from 'lucide-react'
import SupplierCarousel from '../components/SupplierCarousel'
import QuoteForm from '../components/QuoteForm'
import TrustpilotWidget from '../components/TrustpilotWidget'
import GlassCard from '../components/GlassCard'
import ShimmerButton from '../components/ShimmerButton'

const HomePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [energySaved, setEnergySaved] = useState(0)

  useEffect(() => {
    if (statsInView) {
      const timer = setInterval(() => {
        setEnergySaved(prev => {
          if (prev < 2000000) return prev + 50000
          clearInterval(timer)
          return 2000000
        })
      }, 50)
      return () => clearInterval(timer)
    }
  }, [statsInView])

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      emoji: '💡',
      title: 'Business Electricity',
      description: 'Compare electricity tariffs from top UK suppliers and secure the best rates for your business.',
      link: '/business-electricity',
      image: '/images/lightbulb.jpg'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      emoji: '🔥',
      title: 'Business Gas',
      description: 'Find competitive gas prices and switch to save on your business energy costs.',
      link: '/business-gas',
      image: '/images/london.jpg'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      emoji: '🌱',
      title: 'Green Energy',
      description: 'Switch to renewable energy sources and reduce your carbon footprint.',
      link: '/green-energy',
      image: '/images/solar.jpg'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      emoji: '📊',
      title: 'Bill Validation',
      description: 'Ensure you\'re not overpaying with our comprehensive bill checking service.',
      link: '/bill-validation',
      image: '/images/job.jpg'
    }
  ]

  const benefits = [
    { icon: '💰', title: 'Save Up to 45%', description: 'On your annual energy bills' },
    { icon: '⚡', title: 'Quick Switch', description: 'Complete the process in minutes' },
    { icon: '🏆', title: 'Expert Support', description: 'Dedicated account management' },
    { icon: '🔒', title: 'No Interruption', description: 'Seamless supplier transition' },
    { icon: '📈', title: 'Market Analysis', description: 'Real-time price monitoring' },
    { icon: '✅', title: 'Free Service', description: 'No fees for our comparison' }
  ]

  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: '😊' },
    { number: '£2M+', label: 'Saved This Year', icon: '💷' },
    { number: '45%', label: 'Average Savings', icon: '📉' },
    { number: '24/7', label: 'Support Available', icon: '🎧' }
  ]

  return (
    <>
      <Helmet>
        <title>Watt Savings - Compare Business Energy Prices & Save Up to 45%</title>
        <meta name="description" content="Watt Savings helps UK businesses compare and switch energy suppliers. Save up to 45% on gas and electricity bills. Free comparison, expert support, no interruption to supply." />
        <meta name="keywords" content="business energy comparison, compare business electricity, business gas prices, energy switching, UK energy broker" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/lightbulb.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        ></div>
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard variant="hero" className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" hover={false}>
                <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-sm font-semibold">Trusted by 10,000+ UK Businesses</span>
              </GlassCard>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Save Up to <span className="text-yellow-300">45%</span> on Your
                <span className="block">Business Energy Bills ⚡</span>
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Compare prices from 30+ trusted suppliers in seconds. 
                Free service, expert support, and no interruption to your supply.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-quote">
                  <ShimmerButton variant="white" size="large" className="shadow-xl">
                    <span className="text-xl">🚀</span>
                    Get Free Quote Now
                    <ArrowRight className="w-5 h-5" />
                  </ShimmerButton>
                </Link>
                <a href="tel:01618338661">
                  <GlassCard variant="hero" className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 font-bold border-2 border-white/30" hover={true}>
                    <Phone className="w-5 h-5" />
                    0161 833 8661
                  </GlassCard>
                </a>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                  <p className="text-sm">Rated 4.9/5 on Trustpilot</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <GlassCard variant="light" className="shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  ⚡ Get Your Free Energy Quote
                </h3>
                <QuoteForm />
              </GlassCard>
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
            {stats.map((stat, index) => (
              <div
                key={index}
                data-animate="zoom-in"
                data-delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            We Compare <span className="text-primary-600">30+ Energy Suppliers</span>
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Energy <span className="text-gradient">Services</span> 🎯
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-animate="fade-up"
                data-delay={index * 150}
              >
                <Link to={service.link} className="block group h-full">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white transform hover:-translate-y-2">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                          {service.emoji}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Watt Savings</span>? 🏆
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of working with energy experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Switch your business energy in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', emoji: '📝', title: 'Submit Your Details', desc: 'Fill in our quick form with your business energy requirements' },
              { step: '2', emoji: '🔍', title: 'We Compare Prices', desc: 'Our experts compare 30+ suppliers to find your best deal' },
              { step: '3', emoji: '✅', title: 'Switch & Save', desc: 'We handle the switch - no interruption to your supply' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                    {item.step}
                  </div>
                  <div className="absolute -right-2 -bottom-2 text-4xl">
                    {item.emoji}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <TrustpilotWidget />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Saving? 💰
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of UK businesses already saving with Watt Savings. 
              Get your free quote in under 60 seconds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Zap className="w-6 h-6" />
                Get Your Free Quote
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

export default HomePage