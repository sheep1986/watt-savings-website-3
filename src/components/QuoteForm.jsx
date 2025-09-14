import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Building2, Phone, Mail, Users, Zap, Send, MapPin, CheckCircle, AlertCircle, TrendingDown, Calendar, MessageSquare, Shield } from 'lucide-react'
import { submitQuoteToSheets, validateEmail, validatePhone } from '../utils/googleSheetsIntegration'
import { validateBusinessAddress, formatPostcode } from '../utils/postcodeValidation'

const QuoteForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    postcode: '',
    addressLine1: '',
    currentSupplier: '',
    annualSpend: '',
    contractEndDate: '',
    energyType: 'both',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [postcodeValidation, setPostcodeValidation] = useState(null)
  const [validatingPostcode, setValidatingPostcode] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value
    })

    // Validate postcode when it changes
    if (name === 'postcode' && value.length >= 5) {
      handlePostcodeValidation(value)
    } else if (name === 'postcode' && value.length < 5) {
      setPostcodeValidation(null)
    }
  }

  const handlePostcodeValidation = async (postcode) => {
    setValidatingPostcode(true)
    setPostcodeValidation(null)
    
    try {
      const result = await validateBusinessAddress(postcode, formData.addressLine1)
      setPostcodeValidation(result)
      
      if (result.valid) {
        // Auto-format the postcode
        setFormData(prev => ({
          ...prev,
          postcode: result.postcode
        }))
      }
    } catch (error) {
      console.error('Postcode validation error:', error)
    } finally {
      setValidatingPostcode(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate required fields
    if (!formData.businessName || !formData.contactName || !formData.email || !formData.phone || !formData.postcode) {
      toast.error('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Validate postcode
    if (!postcodeValidation || !postcodeValidation.valid) {
      toast.error('Please enter a valid UK postcode')
      setLoading(false)
      return
    }

    if (postcodeValidation && !postcodeValidation.businessSupported) {
      toast.error('Sorry, we currently only serve England, Scotland, and Wales')
      setLoading(false)
      return
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      setLoading(false)
      return
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      toast.error('Please enter a valid phone number')
      setLoading(false)
      return
    }

    try {
      const result = await submitQuoteToSheets(formData)
      
      if (result.success) {
        toast.success(result.message)
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          postcode: '',
          addressLine1: '',
          currentSupplier: '',
          annualSpend: '',
          contractEndDate: '',
          energyType: 'both',
          message: ''
        })
        setPostcodeValidation(null)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.')
    }

    setLoading(false)
  }

  const inputClasses = variant === 'dark' 
    ? "w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/20 focus:ring-4 focus:ring-primary-400/20 transition-all duration-300 backdrop-blur-sm"
    : "w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300 bg-white shadow-sm hover:shadow-md"

  const labelClasses = variant === 'dark'
    ? "block text-sm font-semibold mb-3 text-white/90 flex items-center gap-2"
    : "block text-sm font-semibold mb-3 text-gray-800 flex items-center gap-2"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-2xl p-6 ${variant === 'dark' ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10' : 'bg-gradient-to-br from-white to-gray-50/50 shadow-2xl border border-gray-100'}`}
    >
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Get Your Free Quote ⚡
        </h3>
        <p className={`text-sm ${variant === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          Join 10,000+ businesses saving money
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClasses}>
              <Building2 className="w-4 h-4 text-primary-600" />
              Business Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Your Company Ltd"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Building2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClasses}>
              <Users className="w-4 h-4 text-primary-600" />
              Contact Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="John Smith"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Users className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClasses}>
              <Mail className="w-4 h-4 text-primary-600" />
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="john@company.com"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClasses}>
              <Phone className="w-4 h-4 text-primary-600" />
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="07123 456789"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClasses}>
              <MapPin className="w-4 h-4 text-primary-600" />
              Business Postcode *
            </label>
            <div className="relative">
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                className={`${inputClasses} pr-12`}
                placeholder="SW1A 1AA"
                maxLength="8"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {validatingPostcode ? (
                  <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                ) : postcodeValidation ? (
                  postcodeValidation.valid ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )
                ) : (
                  <MapPin className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
            {postcodeValidation && !postcodeValidation.valid && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {postcodeValidation.error}
              </p>
            )}
            {postcodeValidation && postcodeValidation.valid && (
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                {postcodeValidation.district}, {postcodeValidation.region}
                {postcodeValidation.energyRegion && ` • ${postcodeValidation.energyRegion}`}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className={labelClasses}>
              <Building2 className="w-4 h-4 text-primary-600" />
              Address Line 1
            </label>
            <div className="relative">
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className={inputClasses}
                placeholder="123 Business Street"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Building2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClasses}>
              <Zap className="w-4 h-4 text-primary-600" />
              Energy Type *
            </label>
            <div className="relative">
              <select
                name="energyType"
                value={formData.energyType}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="both">⚡ Electricity & Gas</option>
                <option value="electricity">💡 Electricity Only</option>
                <option value="gas">🔥 Gas Only</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Zap className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClasses}>
              <Building2 className="w-4 h-4 text-primary-600" />
              Current Supplier
            </label>
            <div className="relative">
              <input
                type="text"
                name="currentSupplier"
                value={formData.currentSupplier}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., British Gas"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Building2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClasses}>
              <TrendingDown className="w-4 h-4 text-primary-600" />
              Annual Energy Spend
            </label>
            <div className="relative">
              <select
                name="annualSpend"
                value={formData.annualSpend}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select range...</option>
                <option value="0-5000">£0 - £5,000</option>
                <option value="5000-10000">£5,000 - £10,000</option>
                <option value="10000-25000">£10,000 - £25,000</option>
                <option value="25000-50000">£25,000 - £50,000</option>
                <option value="50000-100000">£50,000 - £100,000</option>
                <option value="100000+">£100,000+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <TrendingDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClasses}>
              <Calendar className="w-4 h-4 text-primary-600" />
              Contract End Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="contractEndDate"
                value={formData.contractEndDate}
                onChange={handleChange}
                className={inputClasses}
                min={new Date().toISOString().split('T')[0]}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelClasses}>
            <MessageSquare className="w-4 h-4 text-primary-600" />
            Additional Information
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`${inputClasses} min-h-[120px] resize-none`}
              placeholder="Any specific requirements or questions? Tell us about your business energy needs..."
            />
            <div className="absolute top-4 right-3">
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
            variant === 'dark'
              ? 'bg-white text-primary-600 hover:bg-gray-100'
              : 'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white hover:from-primary-700 hover:via-primary-800 hover:to-primary-900'
          } ${loading ? 'opacity-50 cursor-not-allowed transform-none' : ''}`}
        >
          {loading ? (
            <>
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing Your Quote...</span>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                <Send className="w-5 h-5" />
              </div>
              <span>Get My Free Quote 🚀</span>
            </>
          )}
        </motion.button>

        <div className={`text-center space-y-2 ${variant === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-green-600 font-semibold">100% Free • No Obligation • Secure</span>
          </div>
          <p className="text-xs">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-primary-600 hover:text-primary-700 transition-colors">Privacy Policy</a> and{' '}
            <a href="/terms" className="text-primary-600 hover:text-primary-700 transition-colors">Terms & Conditions</a>.
            <br />
            We'll never share your information with third parties.
          </p>
        </div>
      </form>
    </motion.div>
  )
}

export default QuoteForm