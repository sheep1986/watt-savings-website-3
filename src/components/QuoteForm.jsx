import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Zap, MapPin, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { validateBusinessAddress } from '../utils/postcodeValidation'

const QuoteForm = ({ variant = 'default' }) => {
  const [postcode, setPostcode] = useState('')
  const [postcodeValidation, setPostcodeValidation] = useState(null)
  const [validatingPostcode, setValidatingPostcode] = useState(false)

  const handlePostcodeChange = (e) => {
    const value = e.target.value.toUpperCase()
    setPostcode(value)

    // Validate postcode when it changes
    if (value.length >= 5) {
      handlePostcodeValidation(value)
    } else if (value.length < 5) {
      setPostcodeValidation(null)
    }
  }

  const handlePostcodeValidation = async (postcodeValue) => {
    setValidatingPostcode(true)
    setPostcodeValidation(null)
    
    try {
      const result = await validateBusinessAddress(postcodeValue, '')
      setPostcodeValidation(result)
      
      if (result.valid) {
        // Auto-format the postcode
        setPostcode(result.postcode)
      }
    } catch (error) {
      console.error('Postcode validation error:', error)
    } finally {
      setValidatingPostcode(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate postcode is entered and valid
    if (!postcode) {
      toast.error('Please enter your business postcode')
      return
    }

    if (!postcodeValidation || !postcodeValidation.valid) {
      toast.error('Please enter a valid UK postcode')
      return
    }

    if (postcodeValidation && !postcodeValidation.businessSupported) {
      toast.error('Sorry, we currently only serve England, Scotland, and Wales')
      return
    }

    // Redirect to watt app with postcode
    const wattAppUrl = `https://app.watt.co.uk/quote?postcode=${encodeURIComponent(postcode)}`
    window.open(wattAppUrl, '_blank')
    
    // Show success message
    toast.success('Redirecting to our quote system...')
  }

  const inputClasses = variant === 'dark' 
    ? "w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/20 focus:ring-4 focus:ring-primary-400/20 transition-all duration-300 backdrop-blur-sm text-lg"
    : "w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300 bg-white shadow-sm hover:shadow-md text-lg"

  const labelClasses = variant === 'dark'
    ? "block text-lg font-semibold mb-4 text-white/90 flex items-center gap-2"
    : "block text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl max-w-md mx-auto"
    >
      {/* Simple Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <img 
            src="/watt-logo-new.png" 
            alt="Watt Savings" 
            className="h-12 w-auto"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Your Free Quote ⚡
        </h3>
        <p className="text-gray-600">
          Enter your postcode to start saving
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Clean Postcode Input */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-500" />
            Business Postcode
          </label>
          <div className="relative">
            <input
              type="text"
              name="postcode"
              value={postcode}
              onChange={handlePostcodeChange}
              required
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-lg font-medium focus:outline-none focus:border-primary-500 focus:ring-0 transition-all duration-200 bg-gray-50 hover:bg-white hover:border-gray-300"
              placeholder="e.g. SW1A 1AA"
              maxLength="8"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {validatingPostcode ? (
                <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
              ) : postcodeValidation ? (
                postcodeValidation.valid ? (
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )
              ) : null}
            </div>
          </div>
          
          {/* Clean Validation Messages */}
          {postcodeValidation && postcodeValidation.valid && (
            <p className="text-primary-600 text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {postcodeValidation.district}, {postcodeValidation.region}
            </p>
          )}
          {postcodeValidation && !postcodeValidation.valid && (
            <p className="text-red-500 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {postcodeValidation.error}
            </p>
          )}
        </div>

        {/* Clean Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          <ArrowRight className="w-5 h-5" />
          Get My Free Quote 🚀
        </motion.button>

        {/* Simple Security Badge */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-primary-600 font-medium">
            <CheckCircle className="w-4 h-4" />
            100% Free • No Obligation • Instant Quote
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Compare 30+ suppliers instantly
          </p>
        </div>
      </form>
    </motion.div>
  )
}

export default QuoteForm