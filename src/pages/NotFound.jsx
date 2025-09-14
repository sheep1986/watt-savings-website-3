import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Home, Search, ArrowRight, Phone, Lightbulb } from 'lucide-react'

const NotFound = () => {
  const quickLinks = [
    { title: 'Get a Quote', link: '/get-quote', icon: '📝' },
    { title: 'Business Electricity', link: '/business-electricity', icon: '⚡' },
    { title: 'Business Gas', link: '/business-gas', icon: '🔥' },
    { title: 'Green Energy', link: '/green-energy', icon: '🌱' },
    { title: 'About Us', link: '/about', icon: 'ℹ️' },
    { title: 'Contact', link: '/contact', icon: '📞' }
  ]

  return (
    <>
      <Helmet>
        <title>Page Not Found - 404 Error | Watt Savings</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our helpful links or contact our energy experts for assistance." />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl mb-8">🔍</div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                4<span className="text-yellow-300">0</span>4
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Oops! Page Not Found
              </h2>
              
              <p className="text-xl mb-8 text-primary-100">
                The page you're looking for seems to have wandered off like energy savings 
                without the right supplier! Let's get you back on track.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Link>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <Lightbulb className="w-5 h-5" />
                  Get Quote Instead
                </Link>
              </div>
              
              <p className="text-sm text-primary-200">
                Or call our energy experts: <a href="tel:01618338661" className="text-yellow-300 font-semibold hover:underline">0161 833 8661</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Looking for Something Specific? 🎯</h3>
            <p className="text-xl text-gray-600">Here are some popular pages that might help</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.link}
                  className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary-600">
                    {link.title}
                  </h4>
                  <div className="flex items-center gap-2 text-primary-600 text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">💡</div>
            <h3 className="text-2xl font-bold mb-4">Need Energy Advice?</h3>
            <p className="text-gray-600 mb-6">
              Even though you've hit a dead end, your energy savings journey doesn't have to! 
              Our experts are here to help you find the perfect energy solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 833 8661
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound