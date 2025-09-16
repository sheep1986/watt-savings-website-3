import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react'

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Show CTA after scrolling 300px
      setIsVisible(currentScrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile-only sticky CTA */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-2xl border-t border-primary-500">
              {/* Expanded actions */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-primary-800"
                  >
                    <div className="grid grid-cols-2 gap-2 p-3">
                      <a
                        href="https://app.watt.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsExpanded(false)}
                        className="flex items-center justify-center gap-2 bg-white text-primary-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Get Quote</span>
                      </a>
                      <a
                        href="tel:01618338661"
                        onClick={() => setIsExpanded(false)}
                        className="flex items-center justify-center gap-2 bg-primary-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-600"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call Now</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main CTA bar */}
              <div className="flex items-center justify-between p-3">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Ready to save on energy?</p>
                  <p className="text-primary-100 text-xs">Get your free quote in 60 seconds</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="tel:01618338661"
                    className="flex items-center justify-center w-10 h-10 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-center w-10 h-10 bg-primary-800 text-white rounded-full hover:bg-primary-900 transition-colors border border-primary-600"
                  >
                    {isExpanded ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <ChevronUp className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating action button for quick call */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="fixed bottom-20 right-4 z-40 lg:hidden"
          >
            <a
              href="tel:01618338661"
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)'
              }}
            >
              <Phone className="w-6 h-6" />
            </a>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-primary-500 opacity-30 animate-ping"></div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileCTA