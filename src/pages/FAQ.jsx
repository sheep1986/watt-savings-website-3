import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HelpCircle, ChevronDown, ChevronUp, Search, 
  Zap, Flame, Building2, Calculator, Clock,
  Shield, Phone, Mail, ArrowRight, CheckCircle,
  AlertCircle, FileText, Users, Globe, Lightbulb
} from 'lucide-react'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'electricity', name: 'Business Electricity', icon: <Zap className="w-5 h-5" /> },
    { id: 'gas', name: 'Business Gas', icon: <Flame className="w-5 h-5" /> },
    { id: 'switching', name: 'Switching Process', icon: <ArrowRight className="w-5 h-5" /> },
    { id: 'pricing', name: 'Pricing & Costs', icon: <Calculator className="w-5 h-5" /> },
    { id: 'contracts', name: 'Contracts & Terms', icon: <FileText className="w-5 h-5" /> },
    { id: 'support', name: 'Support & Service', icon: <Users className="w-5 h-5" /> }
  ]

  const faqs = [
    // Business Electricity FAQs
    {
      category: 'electricity',
      question: 'How much can I save on business electricity?',
      answer: 'Most businesses save between 20-45% on their electricity bills when switching through us. The exact amount depends on your current rates, usage patterns, contract terms, and business type. Our clients typically save £3,000-£50,000 annually depending on their size.',
      popular: true
    },
    {
      category: 'electricity',
      question: 'Will switching electricity suppliers affect my power supply?',
      answer: 'No, absolutely not. Your electricity supply will continue uninterrupted during the switching process. The same distribution network delivers your power - only the billing changes. You won\'t experience any outages or disruptions.',
      popular: true
    },
    {
      category: 'electricity',
      question: 'What\'s the difference between fixed and variable electricity rates?',
      answer: 'Fixed rates stay the same throughout your contract period, providing budget certainty. Variable rates can change with market conditions - they may go up or down. Fixed rates are typically better for budget planning, while variable rates might offer savings if market prices fall.'
    },
    {
      category: 'electricity',
      question: 'Do I need a smart meter for business electricity?',
      answer: 'Smart meters aren\'t mandatory for smaller businesses but are required for businesses using over 100,000 kWh annually (Profile Class 5-8). Smart meters provide better usage data and can help optimize your energy consumption and costs.'
    },
    {
      category: 'electricity',
      question: 'What are peak and off-peak electricity rates?',
      answer: 'Peak rates apply during high-demand periods (typically 4-7pm weekdays). Off-peak rates are cheaper during low-demand times (nights, weekends). Businesses with flexible operations can save significantly by shifting usage to off-peak hours.'
    },

    // Business Gas FAQs
    {
      category: 'gas',
      question: 'How much can my business save on gas costs?',
      answer: 'Businesses typically save 20-40% on gas bills when switching through our service. Savings depend on your current rates, annual consumption, and contract terms. Industrial users often see the highest savings due to volume discounts.',
      popular: true
    },
    {
      category: 'gas',
      question: 'What\'s the difference between commercial and industrial gas contracts?',
      answer: 'Commercial gas contracts are for standard business use (offices, shops, restaurants). Industrial contracts are for high-volume users (factories, manufacturing) and often include specialized terms like interruptible supply and volume discounts.'
    },
    {
      category: 'gas',
      question: 'Can I get green gas for my business?',
      answer: 'Yes! We offer renewable biogas and carbon-neutral gas options. These include biogas from organic waste, green gas certificates, and carbon offsetting programs. It\'s an excellent way to reduce your carbon footprint while potentially saving money.'
    },
    {
      category: 'gas',
      question: 'What happens if my gas supplier goes bust?',
      answer: 'If your supplier ceases trading, Ofgem will automatically transfer you to a \'supplier of last resort\' at regulated rates. Your gas supply continues uninterrupted, and you can then switch to a new supplier of your choice.'
    },

    // Switching Process FAQs
    {
      category: 'switching',
      question: 'How long does the business energy switching process take?',
      answer: 'The complete switching process typically takes 4-8 weeks from contract signing. This includes cooling-off periods, supplier notifications, and meter readings. We handle all the paperwork and keep you informed throughout.',
      popular: true
    },
    {
      category: 'switching',
      question: 'Can I switch if I\'m currently in a contract?',
      answer: 'You can begin the switching process up to 12 months before your contract ends (6 months for electricity, 12 months for gas). We\'ll time everything perfectly to avoid early termination charges and ensure a seamless transition.',
      popular: true
    },
    {
      category: 'switching',
      question: 'What information do I need to switch energy suppliers?',
      answer: 'You\'ll need your business address, current supplier details, account numbers, meter readings, and MPAN/MPRN numbers (found on your bill). We can help gather this information if you don\'t have it readily available.'
    },
    {
      category: 'switching',
      question: 'Do I need to inform my current supplier I\'m switching?',
      answer: 'No, we handle all supplier communications for you. We\'ll notify your current supplier, manage the switching process, and ensure all regulatory requirements are met. You don\'t need to contact your current supplier directly.'
    },
    {
      category: 'switching',
      question: 'Can I cancel a switch after I\'ve signed up?',
      answer: 'Yes, you have a 14-day cooling-off period after signing any energy contract during which you can cancel without penalty. After this period, contract terms apply, though you may still be able to cancel with appropriate notice.'
    },

    // Pricing & Costs FAQs
    {
      category: 'pricing',
      question: 'Do you charge businesses for your energy comparison service?',
      answer: 'Our energy comparison and switching service is completely free for businesses. We earn commission from energy suppliers when you switch, so there\'s no cost to you. We\'re transparent about this arrangement.',
      popular: true
    },
    {
      category: 'pricing',
      question: 'What factors affect business energy prices?',
      answer: 'Energy prices are influenced by wholesale market rates, government policies, network charges, environmental levies, VAT, and your usage profile. Businesses with higher consumption typically get better rates per unit.'
    },
    {
      category: 'pricing',
      question: 'How do standing charges work for business energy?',
      answer: 'Standing charges are fixed daily fees covering network maintenance and administrative costs. They\'re charged regardless of usage. For electricity, there\'s typically one standing charge; gas may have separate charges for different network components.'
    },
    {
      category: 'pricing',
      question: 'What\'s a deemed contract and why are rates higher?',
      answer: 'A deemed contract applies when you use energy without a signed agreement (e.g., moving to new premises). Rates are typically 20-50% higher than standard contracts. It\'s important to arrange a proper contract as soon as possible.'
    },
    {
      category: 'pricing',
      question: 'Can I get volume discounts for multiple business premises?',
      answer: 'Yes! Multi-site businesses can often secure significant discounts through portfolio agreements. We can consolidate your sites under one contract or structure individual site agreements for optimal pricing.'
    },

    // Contracts & Terms FAQs
    {
      category: 'contracts',
      question: 'What\'s the typical length of business energy contracts?',
      answer: 'Business energy contracts typically range from 1-5 years. Longer contracts often secure better rates but reduce flexibility. We help you choose the optimal contract length based on your business needs and market conditions.'
    },
    {
      category: 'contracts',
      question: 'What happens at the end of my energy contract?',
      answer: 'Without action, you\'ll automatically move to your supplier\'s default rates (usually higher). We monitor contract end dates and contact you 3-4 months before expiry to arrange renewal or switching at the best available rates.'
    },
    {
      category: 'contracts',
      question: 'Can I terminate my energy contract early?',
      answer: 'Early termination is possible but usually incurs charges. These vary by supplier and remaining contract length. We can help negotiate exit terms or find situations where early termination might be cost-effective.'
    },
    {
      category: 'contracts',
      question: 'What\'s a pass-through contract for business gas?',
      answer: 'Pass-through contracts link your gas price to wholesale market rates plus a fixed margin. They offer transparency and can provide savings when wholesale prices fall, but expose you to market volatility.'
    },
    {
      category: 'contracts',
      question: 'Do I need separate contracts for electricity and gas?',
      answer: 'Typically yes, though some suppliers offer dual-fuel contracts. Separate contracts often provide better rates and more flexibility. We compare both options to find the most cost-effective solution for your business.'
    },

    // Support & Service FAQs
    {
      category: 'support',
      question: 'What ongoing support do you provide after switching?',
      answer: 'We provide ongoing account management including bill validation, usage monitoring, contract renewal assistance, and resolving any supplier issues. You have access to our team throughout your contract period.',
      popular: true
    },
    {
      category: 'support',
      question: 'How do I read my business energy bill?',
      answer: 'Business energy bills include unit rates, standing charges, VAT, and various levies. We provide bill explanation services and can help identify any errors or unusual charges. Regular bill reviews help optimize your costs.'
    },
    {
      category: 'support',
      question: 'What should I do if I have a problem with my energy supplier?',
      answer: 'Contact us immediately if you experience any issues. We maintain relationships with all major suppliers and can resolve problems faster than dealing with suppliers directly. We escalate issues when necessary and ensure swift resolution.'
    },
    {
      category: 'support',
      question: 'Do you provide energy efficiency advice?',
      answer: 'Yes, we offer energy efficiency consultations including usage analysis, equipment recommendations, and advice on reducing consumption. Many efficiency improvements can significantly reduce your energy bills.'
    },
    {
      category: 'support',
      question: 'How often should I review my business energy contracts?',
      answer: 'We recommend annual reviews even if you\'re in a longer contract. Market conditions change, and your business needs may evolve. We track your usage patterns and market rates to identify optimization opportunities.'
    },

    // General Business Energy FAQs
    {
      category: 'all',
      question: 'What\'s the difference between business and domestic energy contracts?',
      answer: 'Business contracts offer more flexibility, competitive rates, and professional account management. Businesses aren\'t covered by the domestic price cap, allowing for better rates through competitive procurement. Terms and conditions also differ significantly.'
    },
    {
      category: 'all',
      question: 'How do you ensure you get the best rates for my business?',
      answer: 'We compare rates from 30+ suppliers daily, negotiate bulk discounts, understand market timing, and match contracts to your specific usage patterns. Our industry relationships and volume enable us to secure rates not available directly.'
    },
    {
      category: 'all',
      question: 'Can small businesses get competitive energy rates?',
      answer: 'Absolutely! While larger businesses typically get better unit rates, small businesses can still achieve significant savings. We aggregate smaller accounts and use our buying power to secure competitive rates for all business sizes.'
    },
    {
      category: 'all',
      question: 'What accreditations and regulations do you follow?',
      answer: 'We\'re regulated by relevant industry bodies, hold appropriate licenses, and comply with all Ofgem regulations. We maintain professional indemnity insurance and follow strict data protection and consumer protection guidelines.'
    },
    {
      category: 'all',
      question: 'Do you work with businesses in all UK locations?',
      answer: 'Yes, we serve businesses throughout England, Scotland, and Wales. Energy markets are UK-wide, though some regional variations exist. We understand local network charges and regional supplier coverage.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularFAQs = faqs.filter(faq => faq.popular)

  const quickStats = [
    { number: '50+', label: 'FAQ Topics', desc: 'Comprehensive coverage' },
    { number: '2min', label: 'Avg Response', desc: 'Quick answers' },
    { number: '95%', label: 'Issues Resolved', desc: 'First contact resolution' },
    { number: '24/7', label: 'Support', desc: 'Always available' }
  ]

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Business Energy FAQ | Common Questions Answered | Watt Savings</title>
        <meta name="description" content="Get answers to the most common questions about business electricity, gas switching, contracts, pricing and our services. Expert answers from energy professionals." />
        <meta name="keywords" content="business energy FAQ, electricity questions, gas switching, energy broker questions, commercial energy help, energy contract advice" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wattsavings.co.uk/faq" />
        <meta property="og:title" content="Business Energy FAQ | Common Questions Answered | Watt Savings" />
        <meta property="og:description" content="Expert answers to common questions about business energy, switching suppliers, contracts, and pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wattsavings.co.uk/faq" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 text-white overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-sm font-semibold">Expert Answers to Your Energy Questions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Business Energy <span className="text-yellow-300">FAQ</span> ❓
              </h1>
              
              <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
                Find instant answers to the most common questions about business energy, 
                switching suppliers, contracts, and our services. Expert insights at your fingertips.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">{stat.number}</div>
                    <div className="text-sm font-semibold">{stat.label}</div>
                    <div className="text-xs text-primary-200">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="hidden md:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      {activeCategory === 'all' && !searchTerm && (
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Most Popular Questions 🔥
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {popularFAQs.slice(0, 6).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-3 text-primary-600">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {faq.answer}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium">
                      <Flame className="w-4 h-4" />
                      Popular
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center mb-4">
                {activeCategory === 'all' ? 'All Questions' : categories.find(c => c.id === activeCategory)?.name} 📚
              </h2>
              <p className="text-center text-gray-600">
                {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search terms or browse different categories
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('all')
                  }}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View All Questions
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-grow">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          faq.category === 'electricity' ? 'bg-blue-100 text-blue-600' :
                          faq.category === 'gas' ? 'bg-orange-100 text-orange-600' :
                          faq.category === 'switching' ? 'bg-green-100 text-green-600' :
                          faq.category === 'pricing' ? 'bg-purple-100 text-purple-600' :
                          faq.category === 'contracts' ? 'bg-indigo-100 text-indigo-600' :
                          faq.category === 'support' ? 'bg-pink-100 text-pink-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {faq.category === 'electricity' && <Zap className="w-5 h-5" />}
                          {faq.category === 'gas' && <Flame className="w-5 h-5" />}
                          {faq.category === 'switching' && <ArrowRight className="w-5 h-5" />}
                          {faq.category === 'pricing' && <Calculator className="w-5 h-5" />}
                          {faq.category === 'contracts' && <FileText className="w-5 h-5" />}
                          {faq.category === 'support' && <Users className="w-5 h-5" />}
                          {!['electricity', 'gas', 'switching', 'pricing', 'contracts', 'support'].includes(faq.category) && <HelpCircle className="w-5 h-5" />}
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg text-gray-900 mb-1 pr-4">
                            {faq.question}
                          </h3>
                          {faq.popular && (
                            <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium">
                              <Flame className="w-4 h-4" />
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-6 h-6 text-primary-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 bg-gray-50 p-6"
                      >
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions? 🤔
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Our energy experts are here to help with personalized advice for your business
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Call Our Experts</h3>
                <p className="text-primary-100 mb-4">Speak to an energy specialist</p>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0161 833 8661
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Email Support</h3>
                <p className="text-primary-100 mb-4">Get detailed written answers</p>
                <a
                  href="mailto:support@wattsavings.co.uk"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Calculator className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Get a Quote</h3>
                <p className="text-primary-100 mb-4">Free energy comparison</p>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Calculator className="w-4 h-4" />
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <AlertCircle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-primary-100 mb-6">
                Our comprehensive FAQ covers most questions, but every business is unique. 
                Contact our team for personalized answers to your specific energy questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Get Personalized Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center gap-2 bg-primary-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-900 transition-colors border-2 border-primary-400"
                >
                  <Phone className="w-4 h-4" />
                  Speak to Expert Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Helpful Resources 📖
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Energy Market Guide</h3>
                <p className="text-gray-600 mb-4">
                  Understand how the UK energy market works and how it affects your business.
                </p>
                <Link
                  to="/energy-insights"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Lightbulb className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Energy Saving Tips</h3>
                <p className="text-gray-600 mb-4">
                  Practical advice to reduce your business energy consumption and costs.
                </p>
                <Link
                  to="/energy-saving-tips"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Read Tips →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Our Services</h3>
                <p className="text-gray-600 mb-4">
                  Explore our complete range of business energy and consultancy services.
                </p>
                <Link
                  to="/services"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  View Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ