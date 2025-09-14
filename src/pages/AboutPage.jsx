import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, Heart, Award, Target, TrendingUp, Shield, 
  Clock, CheckCircle, Star, Building2, 
  ArrowRight, Phone, Mail, MapPin, Calendar,
  Lightbulb, Zap, Globe, BookOpen
} from 'lucide-react'

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const companyStats = [
    { number: '15+', label: 'Years Experience', desc: 'In commercial energy markets' },
    { number: '12,000+', label: 'Businesses Helped', desc: 'Across the UK' },
    { number: '£45M+', label: 'Total Savings', desc: 'Generated for our clients' },
    { number: '98%', label: 'Client Satisfaction', desc: 'Based on customer feedback' }
  ]

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client First',
      desc: 'Every decision we make is guided by what\'s best for our clients, not our bottom line.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Transparency',
      desc: 'Clear communication, honest advice, and no hidden fees or surprises.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      desc: 'We strive for perfection in every aspect of our service delivery.'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Integrity',
      desc: 'Building lasting relationships through trust, honesty, and reliability.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      desc: 'Continuously improving our processes and embracing new technologies.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainability',
      desc: 'Promoting renewable energy and environmentally conscious solutions.'
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      desc: 'Started as a small energy consultancy with a mission to help businesses reduce costs.'
    },
    {
      year: '2012',
      title: 'Market Expansion',
      desc: 'Expanded services nationwide and partnered with major energy suppliers.'
    },
    {
      year: '2016',
      title: '5,000 Clients Milestone',
      desc: 'Reached our first major milestone helping 5,000+ businesses save on energy.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      desc: 'Launched online platform and enhanced digital customer experience.'
    },
    {
      year: '2022',
      title: 'Green Energy Focus',
      desc: 'Became leading advocate for renewable energy adoption in business sector.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      desc: 'Now helping 12,000+ businesses with £45M+ in total energy savings generated.'
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      experience: '20+ years in energy sector',
      expertise: 'Commercial energy strategy, market analysis'
    },
    {
      name: 'David Thompson',
      role: 'Head of Procurement',
      experience: '15+ years in energy procurement',
      expertise: 'Contract negotiation, supplier relationships'
    },
    {
      name: 'Emma Richards',
      role: 'Customer Success Director',
      experience: '12+ years in client services',
      expertise: 'Account management, customer retention'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      experience: '18+ years in energy systems',
      expertise: 'Smart metering, energy analytics'
    }
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Best Energy Broker 2023',
      org: 'UK Business Energy Awards',
      year: '2023'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Customer Service Excellence',
      org: 'Institute of Customer Service',
      year: '2023'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Certified Carbon Neutral',
      org: 'Carbon Trust',
      year: '2022'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'SME Supplier of the Year',
      org: 'Energy & Utilities Alliance',
      year: '2022'
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Watt Savings | Leading UK Energy Broker | Our Story & Mission</title>
        <meta name="description" content="Learn about Watt Savings - 15+ years helping UK businesses save on energy costs. Our mission, values, and expert team dedicated to reducing your energy bills." />
        <meta name="keywords" content="about watt savings, energy broker UK, business energy consultants, company history, energy experts, commercial energy advisors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wattsavings.co.uk/about" />
        <meta property="og:title" content="About Watt Savings | Leading UK Energy Broker | Our Story & Mission" />
        <meta property="og:description" content="Discover our 15+ year journey helping UK businesses save on energy costs. Meet our expert team and learn about our mission." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wattsavings.co.uk/about" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
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
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-red-300 animate-pulse" />
                <span className="text-sm font-semibold">Passionate About Energy Savings Since 2008</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Powering British Business <span className="text-yellow-300">Success</span> 🏆
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                For over 15 years, we've been helping UK businesses cut energy costs and 
                achieve their sustainability goals. Our mission is simple: to make commercial 
                energy procurement transparent, efficient, and profitable for every client.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Zap className="w-5 h-5" />
                  Work With Us
                </Link>
                <a
                  href="#our-story"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <BookOpen className="w-5 h-5" />
                  Our Story
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
                src="/images/london.jpg" 
                alt="Watt Savings London Office" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers 📊
            </h2>
            <p className="text-xl text-gray-600">
              The results speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-lg text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Journey 🚀
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to industry leaders
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">The Watt Savings Story</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Watt Savings was born from a simple observation: UK businesses were overpaying for energy 
                  due to complex procurement processes and lack of market transparency. Founded in 2008 by 
                  energy industry veterans, we set out to level the playing field.
                </p>
                <p className="mb-4">
                  Starting with just three employees and a commitment to honest, client-focused service, 
                  we began helping small businesses navigate the complex world of commercial energy contracts. 
                  Our approach was different - no hard sales tactics, no hidden fees, just transparent advice 
                  and genuine expertise.
                </p>
                <p className="mb-4">
                  As the energy market evolved, so did we. We invested in technology, expanded our supplier 
                  network, and most importantly, never lost sight of our core mission: helping businesses 
                  save money while contributing to a more sustainable future.
                </p>
                <p>
                  Today, we're proud to be one of the UK's most trusted energy brokers, but our values 
                  remain unchanged. Every client, whether a small startup or large corporation, receives 
                  the same level of dedication and expertise that built our reputation.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values 💎
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership Team 👥
            </h2>
            <p className="text-xl text-gray-600">
              Industry experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
                <div className="text-sm text-gray-500">{member.expertise}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Awards & Recognition 🏅
            </h2>
            <p className="text-xl text-gray-600">
              Industry recognition for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center hover:shadow-lg transition-all"
              >
                <div className="text-yellow-600 mb-4 flex justify-center">{achievement.icon}</div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <div className="text-gray-600 text-sm mb-1">{achievement.org}</div>
                <div className="text-yellow-600 font-semibold">{achievement.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Mission & Vision 🎯
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Target className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-primary-100">
                    To empower UK businesses with transparent, expert energy procurement services 
                    that reduce costs, improve efficiency, and support sustainability goals.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Lightbulb className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-primary-100">
                    To be the UK's most trusted energy partner, leading the transition to a 
                    sustainable energy future while maximizing value for our clients.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Watt Savings?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <Clock className="w-8 h-8 text-yellow-300 mb-3" />
                    <h4 className="font-bold mb-2">15+ Years Experience</h4>
                    <p className="text-sm text-primary-100">Deep industry knowledge and proven track record</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-yellow-300 mb-3" />
                    <h4 className="font-bold mb-2">12,000+ Happy Clients</h4>
                    <p className="text-sm text-primary-100">Trusted by businesses across all sectors</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-yellow-300 mb-3" />
                    <h4 className="font-bold mb-2">100% Transparent</h4>
                    <p className="text-sm text-primary-100">No hidden fees, clear communication always</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Story? 🤝
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve significant energy savings
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 border-2 border-primary-600"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 833 8661
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>London • Manchester • Birmingham</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-600" />
                <span>hello@wattsavings.co.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span>Mon-Fri 8AM-6PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPage