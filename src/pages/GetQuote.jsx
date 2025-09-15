import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calculator, Clock, Shield, Award, CheckCircle, Zap, Flame,
  Building2, Phone, Mail, Users, Star, TrendingDown, Target,
  AlertCircle, FileText, Headphones, ArrowRight, Send
} from 'lucide-react'
import toast from 'react-hot-toast'

const GetQuote = () => {
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    postcode: '',
    currentSupplier: '',
    annualSpend: '',
    contractEndDate: '',
    energyType: 'both',
    businessType: '',
    employees: '',
    operatingHours: '',
    multiSite: false,
    mpanMprn: '',
    currentRate: '',
    message: '',
    marketingConsent: false,
    hearAboutUs: ''
  })

  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success('🎉 Quote request submitted successfully! Our energy experts will contact you within 2 hours.')
      setLoading(false)
    }, 2000)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const benefits = [
    { icon: <TrendingDown className="w-8 h-8" />, title: 'Save Up to 45%', desc: 'Reduce your energy bills with competitive rates' },
    { icon: <Clock className="w-8 h-8" />, title: '2-Hour Response', desc: 'Get your personalized quote within 2 hours' },
    { icon: <Shield className="w-8 h-8" />, title: 'Zero Risk', desc: 'No interruption to your energy supply' },
    { icon: <Award className="w-8 h-8" />, title: 'Expert Support', desc: '15+ years in commercial energy markets' },
    { icon: <Headphones className="w-8 h-8" />, title: '24/7 Support', desc: 'Ongoing account management included' },
    { icon: <FileText className="w-8 h-8" />, title: 'Contract Management', desc: 'We handle all the paperwork and switching' }
  ]

  const steps = [
    { number: 1, title: 'Business Details', desc: 'Tell us about your company' },
    { number: 2, title: 'Energy Information', desc: 'Current usage and requirements' },
    { number: 3, title: 'Contact Preferences', desc: 'How we should reach you' }
  ]

  const testimonialQuotes = [
    { quote: "Saved us £8,400 annually on our electricity", company: "Manufacturing Ltd", saving: "£8,400", stars: 5 },
    { quote: "Exceptional service from start to finish", company: "Retail Chain", saving: "£12,600", stars: 5 },
    { quote: "Cut our energy costs by 38% in the first year", company: "Tech Startup", saving: "£4,200", stars: 5 }
  ]

  return (
    <>
      <Helmet>
        <title>Get Your Free Energy Quote | Business Electricity & Gas | Watt Savings</title>
        <meta name="description" content="Get a free business energy quote in 60 seconds. Compare electricity and gas prices from 30+ UK suppliers. Save up to 45% on your energy bills with expert support." />
        <meta name="keywords" content="free energy quote, business energy quote, commercial energy prices, electricity gas comparison, energy quote form, business energy savings" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wattsavings.co.uk/get-quote" />
        <meta property="og:title" content="Get Your Free Energy Quote | Business Electricity & Gas | Watt Savings" />
        <meta property="og:description" content="Free business energy quote in 60 seconds. Compare prices from 30+ suppliers and save up to 45% on energy bills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wattsavings.co.uk/get-quote" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/images/lightbulb.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />
        
        <div className="container relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Calculator className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-sm font-semibold">Free Quote • No Obligation • Expert Service</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Get Your Free Business Energy Quote 💰
              </h1>
              
              <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
                Compare electricity and gas prices from 30+ UK suppliers in just 60 seconds. 
                Join thousands of businesses saving up to 45% on their energy bills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                  <div className="text-lg font-bold">2-Hour Response</div>
                  <div className="text-sm text-primary-100">Get your quote fast</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <TrendingDown className="w-8 h-8 text-primary-300 mx-auto mb-2" />
                  <div className="text-lg font-bold">Save Up to 45%</div>
                  <div className="text-sm text-primary-100">On your energy bills</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-lg font-bold">No Hidden Charges</div>
                  <div className="text-sm text-primary-100">Complete transparency</div>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Calculator className="w-5 h-5" />
                  Start Your Free Quote Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Watt Savings for Your Energy Quote? ⭐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another comparison site - we're energy procurement experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say 💬
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialQuotes.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.company}</div>
                  <div className="text-primary-600 font-bold">Annual Savings: {testimonial.saving}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" ref={formRef} className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Your Energy Quote Request 📋
              </h2>
              <p className="text-xl text-gray-600">
                The more details you provide, the more accurate your quote will be
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      currentStep >= step.number 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        currentStep >= step.number 
                          ? 'bg-white text-primary-600' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
                      </div>
                      <div className="hidden md:block">
                        <div className="font-semibold text-sm">{step.title}</div>
                        <div className="text-xs opacity-80">{step.desc}</div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Business Details */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-primary-600" />
                      Tell Us About Your Business
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="07123 456789"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Business Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="SW1A 1AA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select your industry...</option>
                          <option value="retail">Retail & Shops</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="office">Office & Professional</option>
                          <option value="hospitality">Hospitality & Restaurants</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Number of Employees
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select range...</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-100">51-100 employees</option>
                          <option value="101-250">101-250 employees</option>
                          <option value="250+">250+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Operating Hours
                        </label>
                        <select
                          name="operatingHours"
                          value={formData.operatingHours}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select hours...</option>
                          <option value="9-5">Standard (9am-5pm)</option>
                          <option value="extended">Extended (6am-10pm)</option>
                          <option value="24-7">24/7 Operations</option>
                          <option value="shift">Shift Patterns</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="multiSite"
                        checked={formData.multiSite}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600"
                      />
                      <label className="text-sm font-medium text-gray-700">
                        This is a multi-site business with multiple locations
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Energy Information */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-primary-600" />
                      Your Current Energy Setup
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Energy Type Required *
                        </label>
                        <select
                          name="energyType"
                          value={formData.energyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="both">⚡ Electricity & Gas</option>
                          <option value="electricity">💡 Electricity Only</option>
                          <option value="gas">🔥 Gas Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Current Energy Supplier
                        </label>
                        <input
                          type="text"
                          name="currentSupplier"
                          value={formData.currentSupplier}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="e.g., British Gas, EDF, EON"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Annual Energy Spend
                        </label>
                        <select
                          name="annualSpend"
                          value={formData.annualSpend}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select range...</option>
                          <option value="0-2000">£0 - £2,000</option>
                          <option value="2000-5000">£2,000 - £5,000</option>
                          <option value="5000-10000">£5,000 - £10,000</option>
                          <option value="10000-25000">£10,000 - £25,000</option>
                          <option value="25000-50000">£25,000 - £50,000</option>
                          <option value="50000-100000">£50,000 - £100,000</option>
                          <option value="100000+">£100,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Current Contract End Date
                        </label>
                        <input
                          type="date"
                          name="contractEndDate"
                          value={formData.contractEndDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Current Rate (p/kWh) - Optional
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          name="currentRate"
                          value={formData.currentRate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="e.g., 15.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          MPAN/MPRN Number - Optional
                        </label>
                        <input
                          type="text"
                          name="mpanMprn"
                          value={formData.mpanMprn}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="Found on your energy bill"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Preferences */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Phone className="w-6 h-6 text-primary-600" />
                      Final Details & Preferences
                    </h3>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        How did you hear about us?
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      >
                        <option value="">Please select...</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Friend/Colleague Referral</option>
                        <option value="existing-customer">Existing Customer</option>
                        <option value="social-media">Social Media</option>
                        <option value="advertising">Online Advertising</option>
                        <option value="directory">Business Directory</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Additional Information or Questions
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        placeholder="Tell us about any specific requirements, questions, or challenges you're facing with your current energy supply..."
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="marketingConsent"
                          checked={formData.marketingConsent}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-600 mt-0.5"
                        />
                        <label className="text-sm text-gray-600">
                          I'd like to receive energy market updates, tips, and exclusive offers from Watt Savings. 
                          You can unsubscribe at any time.
                        </label>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <strong>Your Privacy Matters:</strong> We'll only use your information to provide your quote 
                            and energy comparison service. We never share your details with third parties without permission.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation */}
                <div className="flex justify-between items-center pt-6 border-t">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      ← Previous Step
                    </button>
                  ) : <div />}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                        loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting Quote...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get My Free Quote 🚀
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

                <p className="text-xs text-center text-gray-500 pt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="underline hover:no-underline">Privacy Policy</a> and{' '}
                  <a href="/terms" className="underline hover:no-underline">Terms & Conditions</a>.<br />
                  We'll contact you within 2 hours with your personalized quote.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prefer to Speak to Someone? 📞
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our energy experts are available to discuss your requirements over the phone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01618338661"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call: 0161 833 8661
            </a>
            <a
              href="mailto:quotes@wattsavings.co.uk"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-400"
            >
              <Mail className="w-5 h-5" />
              quotes@wattsavings.co.uk
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetQuote