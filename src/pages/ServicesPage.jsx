import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, Flame, Leaf, Building2, Factory, Home, 
  Calculator, BarChart3, Shield, Clock, Award, 
  CheckCircle, ArrowRight, Phone, Mail, Target,
  TrendingDown, Users, Globe, Lightbulb, Settings,
  PieChart, FileText, Headphones, Star, Heart
} from 'lucide-react'

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const coreServices = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Business Electricity',
      desc: 'Compare and switch to cheaper business electricity rates from 30+ UK suppliers.',
      features: ['Fixed & flexible rates', 'Smart meter upgrades', 'Load management', 'Renewable options'],
      savings: 'Up to 45%',
      link: '/business-electricity',
      color: 'from-blue-500 to-primary-600'
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: 'Business Gas',
      desc: 'Reduce your commercial gas costs with our expert procurement and switching service.',
      features: ['Industrial gas solutions', 'Flexible contracts', 'Emergency support', 'Carbon offsetting'],
      savings: 'Up to 40%',
      link: '/business-gas',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Green Energy Solutions',
      desc: 'Transition to renewable energy while reducing costs and carbon footprint.',
      features: ['100% renewable energy', 'Carbon neutral options', 'Sustainability reporting', 'Green certificates'],
      savings: 'Carbon neutral',
      link: '/green-energy',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Multi-Site Energy',
      desc: 'Centralized energy management for businesses with multiple locations.',
      features: ['Consolidated billing', 'Site-specific rates', 'Portfolio management', 'Unified reporting'],
      savings: 'Up to 50%',
      link: '/multi-site-energy',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Energy Analytics',
      desc: 'Advanced reporting and insights to optimize your energy consumption.',
      features: ['Usage analytics', 'Cost breakdowns', 'Trend analysis', 'Optimization recommendations'],
      savings: 'Data-driven',
      link: '/energy-insights',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Energy Procurement',
      desc: 'Professional energy buying service for large commercial and industrial clients.',
      features: ['Market timing', 'Risk management', 'Contract negotiation', 'Ongoing monitoring'],
      savings: 'Bespoke',
      link: '/get-quote',
      color: 'from-amber-500 to-orange-600'
    }
  ]

  const businessTypes = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Manufacturing',
      desc: 'High-volume energy solutions for industrial processes',
      specialties: ['Heavy industry rates', '24/7 supply', 'Load balancing', 'Power factor correction']
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Retail & Commercial',
      desc: 'Flexible energy contracts for shops, offices, and services',
      specialties: ['Business hours optimization', 'Seasonal contracts', 'Multiple locations', 'Cost predictability']
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Healthcare & Education',
      desc: 'Reliable energy supply for critical public services',
      specialties: ['Uninterrupted supply', 'Budget certainty', 'Compliance support', 'Efficiency programs']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Hospitality',
      desc: 'Energy solutions for hotels, restaurants, and leisure',
      specialties: ['Peak demand management', 'Seasonal flexibility', 'Kitchen equipment efficiency', 'Guest comfort optimization']
    }
  ]

  const serviceFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk-Free Switching',
      desc: 'No interruption to your energy supply during the switching process'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      desc: 'Round-the-clock customer service and emergency assistance'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Advice',
      desc: '15+ years of commercial energy market experience'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Guaranteed Savings',
      desc: 'We only recommend switches that will save you money'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Contract Management',
      desc: 'We handle all paperwork and supplier communications'
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Performance Monitoring',
      desc: 'Ongoing tracking of your energy costs and usage patterns'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      desc: 'We analyze your current energy setup and requirements'
    },
    {
      step: 2,
      title: 'Market Analysis',
      desc: 'Compare rates and terms from our network of suppliers'
    },
    {
      step: 3,
      title: 'Solution Design',
      desc: 'Create a tailored energy strategy for your business'
    },
    {
      step: 4,
      title: 'Implementation',
      desc: 'Handle all switching and setup processes seamlessly'
    },
    {
      step: 5,
      title: 'Ongoing Support',
      desc: 'Continuous monitoring and optimization of your energy supply'
    }
  ]

  const testimonials = [
    {
      quote: "Watt Savings helped us reduce our energy costs by 42% across all our retail locations.",
      company: "National Retail Chain",
      industry: "Retail",
      savings: "£180,000 annually"
    },
    {
      quote: "Their expertise in industrial energy procurement saved us significant costs while ensuring reliable supply.",
      company: "Manufacturing Group",
      industry: "Manufacturing",
      savings: "£320,000 annually"
    },
    {
      quote: "The green energy transition was seamless, and we're now completely carbon neutral.",
      company: "Tech Company",
      industry: "Technology",
      savings: "100% renewable"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Energy Services UK | Electricity & Gas Solutions | Watt Savings</title>
        <meta name="description" content="Comprehensive business energy services including electricity, gas, renewable energy, and multi-site solutions. Save up to 45% with our expert procurement services." />
        <meta name="keywords" content="business energy services, commercial electricity, business gas, renewable energy, multi-site energy, energy procurement, energy consultancy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wattsavings.co.uk/services" />
        <meta property="og:title" content="Business Energy Services UK | Electricity & Gas Solutions | Watt Savings" />
        <meta property="og:description" content="Comprehensive business energy services including electricity, gas, renewable energy, and multi-site solutions. Save up to 45% with expert procurement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wattsavings.co.uk/services" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
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
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Settings className="w-5 h-5 text-yellow-300 animate-spin" />
                <span className="text-sm font-semibold">Complete Energy Solutions for UK Business</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Comprehensive Energy <span className="text-yellow-300">Services</span> ⚡
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                From electricity and gas procurement to renewable energy solutions and 
                multi-site management - we provide everything your business needs to 
                optimize energy costs and performance.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">6</div>
                  <div className="text-xs">Core Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">30+</div>
                  <div className="text-xs">Suppliers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Calculator className="w-5 h-5" />
                  Get Free Consultation
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <Target className="w-5 h-5" />
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/images/solar.jpg" 
                alt="Comprehensive Energy Services" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" ref={servicesRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services 🛠️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete energy solutions designed to reduce costs and optimize performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <div>
                      <h3 className="font-bold text-xl">{service.title}</h3>
                      <div className="text-sm opacity-90">Save {service.savings}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions 🏭
            </h2>
            <p className="text-xl text-gray-600">
              Tailored energy strategies for different business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-center">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{type.desc}</p>
                
                <div className="space-y-1">
                  {type.specialties.map((specialty, idx) => (
                    <div key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                      {specialty}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section ref={benefitsRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services? 🌟
            </h2>
            <p className="text-xl text-gray-600">
              The benefits that set us apart from other energy brokers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-lg transition-all"
              >
                <div className="text-primary-600 flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Process 🔄
            </h2>
            <p className="text-xl text-gray-600">
              A proven 5-step approach to optimizing your business energy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 mt-16 border-l-2 border-dashed border-primary-200 h-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Success Stories 💬
            </h2>
            <p className="text-xl text-gray-600">
              Real results from businesses across different industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">{testimonial.company}</div>
                  <div className="text-primary-600 font-semibold mb-1">{testimonial.industry}</div>
                  <div className="text-sm text-gray-600">
                    <TrendingDown className="w-4 h-4 inline mr-1" />
                    Savings: {testimonial.savings}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Energy Strategy? 🚀
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Let our experts design a comprehensive energy solution tailored to your business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-400"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 833 8661
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Heart className="w-12 h-12 text-red-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Client-Focused</h3>
                <p className="text-primary-100 text-sm">Your success is our priority</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="w-12 h-12 text-primary-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Sustainable</h3>
                <p className="text-primary-100 text-sm">Environmentally responsible solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Lightbulb className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Innovative</h3>
                <p className="text-primary-100 text-sm">Cutting-edge energy solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Get Expert Energy Advice Today 💡
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Speak to an Expert</h3>
                <p className="text-gray-600 mb-6">
                  Get immediate advice from our energy specialists
                </p>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  0161 833 8661
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Email Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Send us your requirements and we'll respond within 2 hours
                </p>
                <a
                  href="mailto:services@wattsavings.co.uk"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  services@wattsavings.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage