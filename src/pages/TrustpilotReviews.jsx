import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, ArrowRight, ExternalLink, Award, Shield } from 'lucide-react'

const TrustpilotReviews = () => {
  return (
    <>
      <Helmet>
        <title>Trustpilot Reviews | Independent Customer Ratings | Watt Savings</title>
        <meta name="description" content="View our verified Trustpilot reviews and ratings from real UK business customers. See why we're rated 4.9/5 stars for business energy switching services." />
        <meta name="keywords" content="trustpilot reviews, customer ratings, energy broker reviews, business energy testimonials, verified reviews" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-primary-300" />
                <span className="text-sm font-semibold">Verified Reviews</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-yellow-300">Trustpilot</span> Reviews ⭐
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Read independent, verified reviews from our customers on Trustpilot. 
                See why UK businesses trust us with their energy switching needs.
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                ))}
                <span className="text-2xl font-bold ml-2">4.9/5</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://uk.trustpilot.com/review/wattsavings.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  View on Trustpilot
                  <ExternalLink className="w-5 h-5" />
                </a>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  Get Your Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Customers Love Watt Savings 💚</h2>
            <p className="text-xl text-gray-600">Trustpilot reviews highlight our key strengths</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Exceptional Service</h3>
              <p className="text-gray-600">"Outstanding customer service from start to finish"</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Significant Savings</h3>
              <p className="text-gray-600">"Saved more than we ever expected on our energy bills"</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Seamless Process</h3>
              <p className="text-gray-600">"Switching was so easy, no hassle whatsoever"</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">See All Our Trustpilot Reviews</h3>
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Our Trustpilot profile contains hundreds of verified reviews from real customers.
                  Visit our Trustpilot page to read detailed feedback about our service.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>✓ Verified Reviews</span>
                  <span>✓ Independent Platform</span>
                  <span>✓ Real Customer Feedback</span>
                </div>
              </div>
              <a
                href="https://uk.trustpilot.com/review/wattsavings.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors"
              >
                <Award className="w-5 h-5" />
                Read All Reviews on Trustpilot
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our 5-Star Rated Service 🌟
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Experience the same exceptional service that earns us 5-star reviews. 
              Start saving on your business energy costs today.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TrustpilotReviews