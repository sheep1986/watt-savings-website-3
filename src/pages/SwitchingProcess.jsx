import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  CheckCircle, Clock, Shield, Users, FileText, Zap,
  ArrowRight, Phone, Mail, AlertCircle, Star, Award
} from 'lucide-react'

const SwitchingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Details',
      description: 'Complete our simple online form with your business details and current energy usage. This takes just 2-3 minutes.',
      emoji: '📝',
      details: [
        'Business name and address',
        'Current supplier information',
        'Annual energy consumption',
        'Contract renewal dates'
      ]
    },
    {
      number: '02',
      title: 'Market Comparison',
      description: 'Our energy experts compare prices from 30+ suppliers to find the best deals tailored to your business needs.',
      emoji: '🔍',
      details: [
        'Real-time price comparison',
        'Contract terms analysis',
        'Green energy options',
        'Supplier reliability check'
      ]
    },
    {
      number: '03',
      title: 'Quote Presentation',
      description: 'We present you with the best options, clearly explaining the savings and contract terms.',
      emoji: '📊',
      details: [
        'Detailed savings breakdown',
        'Contract comparison table',
        'Terms and conditions review',
        'Expert recommendations'
      ]
    },
    {
      number: '04',
      title: 'Contract Approval',
      description: 'Once you approve your chosen supplier, we handle all the paperwork and switching administration.',
      emoji: '✅',
      details: [
        'Contract preparation',
        'Paperwork completion',
        'Switching authorization',
        'Confirmation documentation'
      ]
    },
    {
      number: '05',
      title: 'Seamless Switch',
      description: 'Your new supplier takes over - no interruption to your energy supply or business operations.',
      emoji: '⚡',
      details: [
        'Automatic meter readings',
        'Supply transfer coordination',
        'Final bill settlement',
        'New supplier activation'
      ]
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'We continue to monitor your contract and provide ongoing support throughout your energy journey.',
      emoji: '🎧',
      details: [
        '24/7 customer support',
        'Bill monitoring service',
        'Renewal reminders',
        'Market update alerts'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How long does the switching process take?',
      answer: 'The entire process typically takes 2-4 weeks from approval to completion. We handle all administration, so there\'s minimal input required from you.'
    },
    {
      question: 'Will my energy supply be interrupted?',
      answer: 'No, there is never any interruption to your energy supply during the switching process. The changeover is completely seamless.'
    },
    {
      question: 'What if I\'m still in contract with my current supplier?',
      answer: 'We can still help! We\'ll note your contract end date and arrange the switch to begin when your current contract expires, avoiding any early termination fees.'
    },
    {
      question: 'Are there any fees for switching?',
      answer: 'Our comparison and switching service is completely free. We\'re paid by the energy suppliers, so there are no costs to your business.'
    },
    {
      question: 'What documents do I need?',
      answer: 'We typically only need your latest energy bill to get started. We can obtain other necessary information from your current supplier.'
    }
  ]

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'No Interruption Guarantee',
      description: 'Your energy supply will never be interrupted during the switching process.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '14-Day Cooling Off',
      description: 'You have 14 days to cancel your new contract if you change your mind.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Price Promise',
      description: 'We guarantee to find you the best available deal in the market.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Energy Switching Process | How to Switch Energy Supplier | Watt Savings</title>
        <meta name="description" content="Learn how to switch your business energy supplier in 6 simple steps. Free switching service with no interruption to supply. Compare 30+ suppliers and save up to 45%." />
        <meta name="keywords" content="energy switching process, how to switch business energy, energy supplier switch, business electricity switching, energy broker process" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Simple & Seamless</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Energy Switching Made <span className="text-yellow-300">Simple</span> 🔄
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Our 6-step process ensures a smooth transition to your new energy supplier 
                with zero interruption to your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Start Your Switch Today
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:01618338661"
                  className="inline-flex items-center justify-center gap-2 bg-primary-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900/70 transition-all duration-300 border-2 border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  0161 833 8661
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How Our Switching Process Works
            </h2>
            <p className="text-xl text-gray-600">
              Follow these 6 simple steps to switch your business energy supplier
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1 max-w-md">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{step.emoji}</div>
                      <div className="text-6xl font-bold text-primary-100">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1 text-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-6xl">
                      {step.emoji}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Switching Guarantees 🛡️
            </h2>
            <p className="text-xl text-gray-600">
              Switch with confidence knowing you're protected
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions ❓
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about the switching process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Switch? ⚡
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of UK businesses who have already switched and saved with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
              >
                <Mail className="w-5 h-5" />
                Contact Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SwitchingProcess