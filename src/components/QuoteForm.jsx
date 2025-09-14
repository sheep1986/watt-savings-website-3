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
      className={`rounded-2xl p-8 ${variant === 'dark' ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10' : 'bg-gradient-to-br from-white to-gray-50/50 shadow-2xl border border-gray-100'}`}
    >
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h3 className={`text-3xl font-bold mb-3 ${variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Get Your Free Quote ⚡
        </h3>
        <p className={`text-lg ${variant === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          Enter your postcode to start saving on business energy
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Postcode Input */}
        <div className="space-y-3">
          <label className={labelClasses}>
            <MapPin className="w-6 h-6 text-primary-600" />
            Business Postcode
          </label>
          <div className="relative">
            <input
              type="text"
              name="postcode"
              value={postcode}
              onChange={handlePostcodeChange}
              required
              className={`${inputClasses} pr-16`}
              placeholder="e.g. SW1A 1AA"
              maxLength="8"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {validatingPostcode ? (
                <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              ) : postcodeValidation ? (
                postcodeValidation.valid ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-500" />
                )
              ) : (
                <MapPin className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </div>
          
          {/* Validation Messages */}
          {postcodeValidation && !postcodeValidation.valid && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {postcodeValidation.error}
            </p>
          )}
          {postcodeValidation && postcodeValidation.valid && (
            <p className="text-green-600 text-sm mt-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {postcodeValidation.district}, {postcodeValidation.region}
              {postcodeValidation.energyRegion && ` • ${postcodeValidation.energyRegion}`}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
            variant === 'dark'
              ? 'bg-white text-primary-600 hover:bg-gray-100'
              : 'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white hover:from-primary-700 hover:via-primary-800 hover:to-primary-900'
          }`}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span>Get My Free Quote 🚀</span>
        </motion.button>

        {/* Security Badge */}
        <div className={`text-center space-y-2 ${variant === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>
          <div className="flex items-center justify-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-green-600 font-semibold">100% Free • No Obligation • Instant Quote</span>
          </div>
          <p className="text-xs">
            Secure postcode check • Compare 30+ suppliers instantly
          </p>
        </div>
      </form>
    </motion.div>
  )
}

export default QuoteForm