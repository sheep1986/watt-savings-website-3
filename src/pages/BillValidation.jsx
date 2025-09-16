import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, Calculator, AlertTriangle, DollarSign, TrendingDown, Shield, Clock, Award,
  ChevronRight, Check, ArrowRight, BarChart3, Search,
  Building2, Factory, Store, Users, Phone, Mail, 
  Eye, Zap, Receipt, Scale
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierCarousel from '../components/SupplierCarousel'

const BillValidation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const validationBenefits = [
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: 'Identify Overcharges', 
      desc: 'Discover billing errors and incorrect tariff applications that cost you money',
      emoji: '💰'
    },
    { 
      icon: <Calculator className="w-8 h-8" />, 
      title: 'Verify Calculations', 
      desc: 'Ensure all meter readings, rates, and charges are calculated correctly',
      emoji: '🧮'
    },
    { 
      icon: <Receipt className="w-8 h-8" />, 
      title: 'Spot Hidden Fees', 
      desc: 'Uncover unexpected charges and fees that shouldn\'t be on your bill',
      emoji: '📋'
    },
    { 
      icon: <Scale className="w-8 h-8" />, 
      title: 'Compare Market Rates', 
      desc: 'Check if you\'re paying competitive rates compared to market averages',
      emoji: '⚖️'
    },
    { 
      icon: <AlertTriangle className="w-8 h-8" />, 
      title: 'Prevent Future Issues', 
      desc: 'Set up monitoring to catch billing problems before they accumulate',
      emoji: '🚨'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Expert Analysis', 
      desc: 'Professional energy bill auditors review every line item',
      emoji: '🔍'
    }
  ]

  const commonErrors = [
    { 
      error: 'Incorrect Tariff Application',
      description: 'Being charged on wrong rate structure or time-of-use periods',
      frequency: '35%',
      avgSaving: '£500-2,000/year'
    },
    { 
      error: 'Meter Reading Errors',
      description: 'Estimated readings when actual readings are available',
      frequency: '25%',
      avgSaving: '£200-800/year'
    },
    { 
      error: 'Standing Charge Mistakes',
      description: 'Incorrect daily or monthly standing charges applied',
      frequency: '20%',
      avgSaving: '£150-500/year'
    },
    { 
      error: 'VAT Rate Errors',
      description: 'Wrong VAT percentage applied to energy charges',
      frequency: '15%',
      avgSaving: '£100-400/year'
    },
    { 
      error: 'Duplicate Charges',
      description: 'Same charges applied multiple times to your account',
      frequency: '10%',
      avgSaving: '£300-1,200/year'
    },
    { 
      error: 'Backdated Price Changes',
      description: 'Retroactive price increases applied incorrectly',
      frequency: '8%',
      avgSaving: '£400-1,500/year'
    }
  ]

  const businessTypes = [
    { 
      icon: <Store className="w-8 h-8" />, 
      name: 'Retail & Commercial', 
      issues: ['Multiple meter readings', 'Complex tariff structures', 'Seasonal adjustments'],
      recovery: 'Average £800/year'
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: 'Manufacturing', 
      issues: ['Power factor charges', 'Capacity charges', 'Time-of-use errors'],
      recovery: 'Average £2,500/year'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      name: 'Office Buildings', 
      issues: ['HVAC billing discrepancies', 'Lighting circuit errors', 'Tenant billing'],
      recovery: 'Average £600/year'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      name: 'Multi-Site Operations', 
      issues: ['Cross-site billing errors', 'Consolidated invoice mistakes', 'Site allocation errors'],
      recovery: 'Average £1,200/year'
    }
  ]

  const validationStats = [
    { number: '67%', label: 'Bills Contain Errors', icon: '⚠️' },
    { number: '£850', label: 'Average Recovery', icon: '💷' },
    { number: '48hrs', label: 'Typical Review Time', icon: '⏱️' },
    { number: '94%', label: 'Error Detection Rate', icon: '🎯' }
  ]

  const auditProcess = [
    { 
      step: 1, 
      title: 'Bill Collection & Analysis', 
      desc: 'We gather 12-24 months of bills and perform initial assessment',
      emoji: '📊'
    },
    { 
      step: 2, 
      title: 'Detailed Line-by-Line Review', 
      desc: 'Expert auditors examine every charge, rate, and calculation',
      emoji: '🔍'
    },
    { 
      step: 3, 
      title: 'Error Identification & Documentation', 
      desc: 'Create detailed report of all billing errors and overcharges',
      emoji: '📝'
    },
    { 
      step: 4, 
      title: 'Supplier Challenge & Recovery', 
      desc: 'We negotiate with suppliers to recover overcharges and fix future billing',
      emoji: '🤝'
    }
  ]

  const redFlags = [
    {
      flag: 'Bills Fluctuate Wildly',
      description: 'Energy usage varies dramatically month-to-month without operational changes',
      action: 'Check for estimated readings and meter faults',
      icon: '📈'
    },
    {
      flag: 'Rates Seem High',
      description: 'Your unit rates appear higher than market averages or previous periods',
      action: 'Verify tariff structure and rate applications',
      icon: '💸'
    },
    {
      flag: 'Unexplained Charges',
      description: 'Line items on bills that aren\'t clearly explained or seem excessive',
      action: 'Request detailed breakdown from supplier',
      icon: '❓'
    },
    {
      flag: 'Estimated Readings',
      description: 'Bills consistently showing \'E\' for estimated rather than actual readings',
      action: 'Ensure meters are accessible and readings submitted',
      icon: '📏'
    },
    {
      flag: 'Late Payment Charges',
      description: 'Frequent late fees despite paying bills on time',
      action: 'Check payment processing and billing dates',
      icon: '⏰'
    },
    {
      flag: 'Multiple Invoices',
      description: 'Receiving several bills for the same period or property',
      action: 'Consolidate accounts and check for duplicates',
      icon: '📄'
    }
  ]

  const recoveryExamples = [
    {
      business: 'Manufacturing Company',
      issue: 'Incorrect power factor charges applied for 18 months',
      recovery: '£3,200',
      timeline: '6 weeks'
    },
    {
      business: 'Retail Chain (15 sites)',
      issue: 'Wrong VAT rates on multiple locations',
      recovery: '£1,850',
      timeline: '4 weeks'
    },
    {
      business: 'Office Complex',
      issue: 'Estimated readings when actual readings available',
      recovery: '£920',
      timeline: '3 weeks'
    },
    {
      business: 'Restaurant Group',
      issue: 'Duplicate standing charges on consolidated billing',
      recovery: '£1,400',
      timeline: '5 weeks'
    }
  ]

  const faqs = [
    {
      q: 'How common are energy bill errors?',
      a: 'Studies show that 60-70% of business energy bills contain some form of error. These range from simple calculation mistakes to complex tariff misapplications. Even small errors can add up to significant overpayments over time.'
    },
    {
      q: 'What types of errors do you typically find?',
      a: 'The most common errors include incorrect tariff applications, meter reading mistakes, wrong VAT rates, duplicate charges, and inappropriate standing charges. We also find billing for services not received and retroactive price changes applied incorrectly.'
    },
    {
      q: 'How far back can you recover overcharges?',
      a: 'Generally, we can recover overcharges going back 6 years for most billing errors. However, the time limit depends on the type of error and your supplier\'s terms. We recommend regular bill validation to catch errors early.'
    },
    {
      q: 'Do you charge for bill validation if no errors are found?',
      a: 'We offer different service models. Some clients prefer a no-find-no-fee arrangement, while others opt for fixed-fee comprehensive audits. We\'ll discuss the best approach based on your specific situation.'
    },
    {
      q: 'How long does the bill validation process take?',
      a: 'A typical bill audit takes 1-2 weeks for initial assessment and 4-8 weeks total including supplier negotiations. Complex multi-site audits may take longer, but we provide regular updates throughout the process.'
    },
    {
      q: 'Will this affect my relationship with my energy supplier?',
      a: 'Not at all. Bill validation is a standard business practice. Suppliers are used to billing queries and corrections. In fact, identifying errors helps improve their billing accuracy and prevents future disputes.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Energy Bill Validation UK | Business Bill Audit Services | Watt Savings</title>
        <meta name="description" content="Professional energy bill validation and audit services. 67% of business bills contain errors. We identify overcharges and recover money you're owed. Free initial assessment available." />
        <meta name="keywords" content="energy bill validation, bill audit, energy bill errors, overcharge recovery, business energy audit, bill checking service" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
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
                <FileText className="w-5 h-5 text-blue-200 animate-pulse" />
                <span className="text-sm font-semibold">67% of Bills Contain Errors</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Are You <span className="text-blue-200">Overpaying</span> for Energy? 📊
              </h1>
              
              <p className="text-xl mb-8 text-blue-100">
                Our expert bill validation service identifies billing errors and recovers 
                money you're owed. Most businesses recover £500-2,500 annually.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-200">£850</div>
                  <div className="text-sm">Average Recovery</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-200">67%</div>
                  <div className="text-sm">Bills with Errors</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <FileText className="w-5 h-5" />
                  Validate My Bills
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-blue-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900/70 transition-all duration-300 border-2 border-white/30"
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
                alt="Bill Validation Services" 
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
            {validationStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
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
                Why Validate Your Energy Bills? 🔍
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional bill validation protects your business from costly billing errors
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{benefit.emoji}</div>
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Errors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most Common Billing Errors 🚨
            </h2>
            <p className="text-xl text-gray-600">
              These are the mistakes we find most frequently on business energy bills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonErrors.map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-purple-600">{error.error}</h3>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {error.frequency}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{error.description}</p>
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                  <div className="font-semibold text-primary-800 text-sm">Typical Recovery:</div>
                  <div className="text-primary-600 font-bold">{error.avgSaving}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sector-Specific Bill Issues 🏢
            </h2>
            <p className="text-xl text-gray-600">
              Different business types face unique billing challenges
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
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-4 text-center">{type.name}</h3>
                <ul className="space-y-2 mb-4">
                  {type.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="bg-primary-100 text-primary-800 px-3 py-2 rounded-full text-sm font-semibold">
                    {type.recovery}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bill Validation Red Flags 🚩
            </h2>
            <p className="text-xl text-gray-600">
              Warning signs that your energy bills may contain errors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redFlags.map((flag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{flag.icon}</div>
                  <h3 className="font-bold text-lg text-red-600">{flag.flag}</h3>
                </div>
                <p className="text-gray-600 mb-4">{flag.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="font-semibold text-blue-800 text-sm mb-1">Action Required:</div>
                  <div className="text-blue-600 text-sm">{flag.action}</div>
                </div>
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
              Our Bill Validation Process 🔧
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive 4-step audit to identify and recover overcharges
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {auditProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg relative">
                    {item.step}
                    <div className="absolute -right-1 -bottom-1 text-2xl">{item.emoji}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  {index < auditProcess.length - 1 && (
                    <div className="border-l-2 border-dashed border-purple-200 h-8 ml-8 mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Examples */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Recovery Examples 💰
            </h2>
            <p className="text-xl text-gray-600">
              Actual case studies from our bill validation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recoveryExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-purple-600">{example.business}</h3>
                  <div className="bg-primary-100 text-primary-800 px-3 py-2 rounded-full text-lg font-bold">
                    {example.recovery}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{example.issue}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Recovery Time:</div>
                  <div className="font-semibold text-blue-600">{example.timeline}</div>
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
            We Validate Bills from All Major Suppliers
          </h2>
          <SupplierCarousel />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Bill Assessment 📊
              </h2>
              <p className="text-xl text-purple-100">
                Send us your recent bills for a complimentary error check • No obligation • Confidential service
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
              Bill Validation FAQs ❓
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
                    <span className="text-purple-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-6">
                    <span className="font-semibold text-purple-600">A:</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Overpaying for Energy Today! 💸
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join thousands of businesses that have recovered money through our bill validation service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Validate My Bills Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-purple-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-900 transition-all duration-300 border-2 border-purple-500"
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

export default BillValidation