import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  TrendingDown, Building2, Users, ArrowRight, Phone,
  Award, BarChart3, Clock, DollarSign, CheckCircle,
  Filter, Search, Calendar, MapPin, Target, Zap
} from 'lucide-react'

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const caseStudies = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Technology',
      size: 'Large (500+ employees)',
      location: 'London',
      challenge: 'High electricity costs across 12 office locations with unpredictable usage patterns and expensive legacy contracts.',
      solution: 'Implemented flexible contracts with real-time monitoring and optimized pricing structures across all sites.',
      results: [
        'Annual savings of £180,000 (35% reduction)',
        'Improved energy visibility across all sites',
        'Reduced administrative overhead by 80%',
        'Carbon footprint reduced by 25%'
      ],
      savingAmount: '£180,000',
      savingPercentage: '35%',
      timeframe: '12 months',
      image: '/images/london.jpg',
      testimonial: 'Watt Savings transformed our energy management. The savings exceeded our expectations and the service is exceptional.',
      contactName: 'Sarah Johnson',
      contactRole: 'Operations Director',
      category: 'Large Business'
    },
    {
      id: 2,
      company: 'Green Manufacturing Ltd',
      industry: 'Manufacturing',
      size: 'Medium (50-500 employees)',
      location: 'Manchester',
      challenge: 'Rising gas costs impacting profitability with old inefficient contracts and no green energy options.',
      solution: 'Negotiated competitive rates with renewable energy options and implemented energy efficiency measures.',
      results: [
        'Annual savings of £95,000 (28% reduction)',
        'Switched to 100% renewable energy',
        'Improved sustainability credentials',
        'Fixed pricing protected against volatility'
      ],
      savingAmount: '£95,000',
      savingPercentage: '28%',
      timeframe: '6 months',
      image: '/images/solar.jpg',
      testimonial: 'The switch to green energy aligned with our values while delivering significant cost savings.',
      contactName: 'Mark Thompson',
      contactRole: 'Managing Director',
      category: 'Medium Business'
    },
    {
      id: 3,
      company: 'Retail Chain UK',
      industry: 'Retail',
      size: 'Large (500+ employees)',
      location: 'Nationwide',
      challenge: 'Managing energy contracts across 85 retail stores with varying consumption patterns and renewal dates.',
      solution: 'Consolidated all sites under unified contracts with site-specific optimization and centralized management.',
      results: [
        'Annual savings of £320,000 (42% reduction)',
        'Streamlined contract management',
        'Consistent pricing across all stores',
        'Improved budgeting and forecasting'
      ],
      savingAmount: '£320,000',
      savingPercentage: '42%',
      timeframe: '8 months',
      image: '/images/job.jpg',
      testimonial: 'Managing 85 stores energy contracts is now simple and cost-effective thanks to Watt Savings.',
      contactName: 'Emma Wilson',
      contactRole: 'Property Director',
      category: 'Large Business'
    },
    {
      id: 4,
      company: 'Sunrise Care Homes',
      industry: 'Healthcare',
      size: 'Medium (50-500 employees)',
      location: 'Yorkshire',
      challenge: '24/7 operations across 6 care homes with high energy costs and complex requirements.',
      solution: 'Specialized healthcare energy strategy with focus on reliability and cost optimization.',
      results: [
        'Annual savings of £65,000 (30% reduction)',
        'Enhanced energy security',
        'Compliance with healthcare regulations',
        'Improved resident comfort systems'
      ],
      savingAmount: '£65,000',
      savingPercentage: '30%',
      timeframe: '4 months',
      image: '/images/lightbulb.jpg',
      testimonial: 'Reliable energy supply and significant savings - exactly what our care homes needed.',
      contactName: 'Dr. James Mitchell',
      contactRole: 'Operations Manager',
      category: 'Medium Business'
    },
    {
      id: 5,
      company: 'Creative Agency Hub',
      industry: 'Creative Services',
      size: 'Small (1-50 employees)',
      location: 'Brighton',
      challenge: 'Small creative agency struggling with high electricity bills in shared workspace.',
      solution: 'Found competitive small business rates and implemented smart usage monitoring.',
      results: [
        'Annual savings of £12,000 (38% reduction)',
        'Better budget predictability',
        'Green energy credentials',
        'Simple, hassle-free management'
      ],
      savingAmount: '£12,000',
      savingPercentage: '38%',
      timeframe: '2 months',
      image: '/images/london.jpg',
      testimonial: 'As a small business, every penny counts. Watt Savings delivered impressive savings.',
      contactName: 'Lisa Parker',
      contactRole: 'Founder',
      category: 'Small Business'
    },
    {
      id: 6,
      company: 'Hospitality Group',
      industry: 'Hospitality',
      size: 'Large (500+ employees)',
      location: 'Edinburgh',
      challenge: 'Complex energy needs across hotels and restaurants with seasonal variations.',
      solution: 'Flexible contracts accommodating seasonal patterns with competitive base rates.',
      results: [
        'Annual savings of £240,000 (31% reduction)',
        'Seasonal flexibility maintained',
        'Reduced energy management time',
        'Improved profit margins'
      ],
      savingAmount: '£240,000',
      savingPercentage: '31%',
      timeframe: '10 months',
      image: '/images/solar.jpg',
      testimonial: 'The seasonal flexibility and savings have significantly improved our operations.',
      contactName: 'Robert Campbell',
      contactRole: 'Group Operations Director',
      category: 'Large Business'
    }
  ]

  const industries = ['All', 'Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Creative Services', 'Hospitality']
  const businessSizes = ['All', 'Small Business', 'Medium Business', 'Large Business']

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesFilter = selectedFilter === 'All' || 
      study.industry === selectedFilter || 
      study.category === selectedFilter
    const matchesSearch = study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const totalSavings = caseStudies.reduce((sum, study) => {
    return sum + parseInt(study.savingAmount.replace(/[^0-9]/g, ''))
  }, 0)

  const averageSavings = Math.round(caseStudies.reduce((sum, study) => {
    return sum + parseInt(study.savingPercentage.replace('%', ''))
  }, 0) / caseStudies.length)

  const stats = [
    { value: `£${(totalSavings / 1000).toFixed(0)}k+`, label: 'Total Client Savings' },
    { value: `${averageSavings}%`, label: 'Average Savings' },
    { value: '6', label: 'Case Studies' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <>
      <Helmet>
        <title>Energy Switching Case Studies | Customer Success Stories | Watt Savings</title>
        <meta name="description" content="Read real customer success stories and case studies. See how UK businesses have saved money by switching energy suppliers with Watt Savings expert guidance." />
        <meta name="keywords" content="energy switching case studies, customer success stories, business energy savings, energy supplier switch results, client testimonials" />
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
                <Award className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Success Stories</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Customer <span className="text-yellow-300">Success Stories</span> 📈
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Real businesses, real savings, real results. Discover how our clients 
                have transformed their energy costs and operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Filter className="w-5 h-5 text-gray-600 mt-2" />
              {[...industries, ...businessSizes.slice(1)].map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{study.company}</h3>
                    <p className="text-sm opacity-90">{study.industry} • {study.location}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {study.savingPercentage} saved
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{study.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{study.timeframe}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-primary-600 text-white rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{study.savingAmount}</div>
                      <div className="text-sm opacity-90">Annual Savings</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <blockquote className="text-gray-700 italic mb-3">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold">{study.contactName}</div>
                      <div className="text-gray-600">{study.contactRole}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No case studies match your search criteria.</div>
              <button 
                onClick={() => { setSelectedFilter('All'); setSearchTerm('') }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
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
              Ready to Create Your Own Success Story? 🎯
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join these successful businesses and start saving on your energy costs today. 
              Your success story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <Target className="w-5 h-5" />
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
              >
                <Phone className="w-5 h-5" />
                Speak to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies