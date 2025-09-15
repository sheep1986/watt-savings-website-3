import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TrustpilotWidget = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Solutions Ltd',
      rating: 5,
      date: '2 days ago',
      text: 'Absolutely brilliant service! Watt Savings saved us over £8,000 on our annual energy bills. The team was professional and handled everything seamlessly.',
      verified: true
    },
    {
      name: 'Michael Chen',
      company: 'Restaurant Group',
      rating: 5,
      date: '1 week ago',
      text: 'Switched both gas and electricity through Watt Savings. Process was quick and easy, and we\'re now saving 35% compared to our previous supplier!',
      verified: true
    },
    {
      name: 'Emma Williams',
      company: 'Manufacturing Co',
      rating: 5,
      date: '2 weeks ago',
      text: 'Professional team who really understand the energy market. They found us a fantastic deal and managed the entire switching process. Highly recommended!',
      verified: true
    },
    {
      name: 'David Thompson',
      company: 'Retail Chain',
      rating: 5,
      date: '3 weeks ago',
      text: 'We manage 12 sites and Watt Savings consolidated all our energy contracts. The savings have been incredible - over 40% reduction in costs!',
      verified: true
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Large Trustpilot Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
              alt="Trustpilot" 
              className="h-12 md:h-16"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say 💬
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-8 h-8 text-primary-500 fill-primary-500" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-gray-600">Based on 2,847 reviews</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
            <Star className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
            <span className="font-semibold text-gray-800">Excellent Rating on</span>
            <img 
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
              alt="Trustpilot" 
              className="h-5"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  {review.verified && (
                    <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-semibold">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{review.company}</p>
              </div>
              <Quote className="w-8 h-8 text-gray-200" />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-primary-500 fill-primary-500'
                        : 'text-gray-300 fill-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            <p className="text-gray-700 leading-relaxed">{review.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/trustpilot-reviews"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Reviews on Trustpilot
            <Star className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default TrustpilotWidget