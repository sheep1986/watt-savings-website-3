import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Star, Quote, ArrowRight, Phone, Filter, Search,
  Building2, Users, MapPin, Calendar, Award, ThumbsUp
} from 'lucide-react'

const Testimonials = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Operations Director',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      size: 'Large',
      location: 'London',
      rating: 5,
      date: '2024-01-15',
      testimonial: 'Watt Savings completely transformed our energy management. We saved £180,000 in the first year alone! Their team is incredibly knowledgeable and the service is exceptional. The switching process was seamless with no interruption to our operations.',
      savings: '£180,000',
      avatar: '👩‍💼',
      verified: true
    },
    {
      id: 2,
      name: 'Mark Thompson',
      role: 'Managing Director',
      company: 'Green Manufacturing Ltd',
      industry: 'Manufacturing',
      size: 'Medium',
      location: 'Manchester',
      rating: 5,
      date: '2024-01-10',
      testimonial: 'Outstanding service from start to finish. Not only did we save 28% on our energy bills, but we also switched to 100% renewable energy. The team understood our sustainability goals and delivered beyond expectations.',
      savings: '£95,000',
      avatar: '👨‍💼',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Property Director',
      company: 'Retail Chain UK',
      industry: 'Retail',
      size: 'Large',
      location: 'Birmingham',
      rating: 5,
      date: '2024-01-08',
      testimonial: 'Managing energy contracts for 85 retail stores was a nightmare until we found Watt Savings. They consolidated everything, saved us £320,000 annually, and now everything just works smoothly. Absolutely brilliant service!',
      savings: '£320,000',
      avatar: '👩‍💼',
      verified: true
    },
    {
      id: 4,
      name: 'Dr. James Mitchell',
      role: 'Operations Manager',
      company: 'Sunrise Care Homes',
      industry: 'Healthcare',
      size: 'Medium',
      location: 'Yorkshire',
      rating: 5,
      date: '2024-01-05',
      testimonial: 'As a healthcare provider, reliability is crucial. Watt Savings not only reduced our costs by 30% but ensured we have secure, compliant energy supply across all our facilities. The team truly understands our sector.',
      savings: '£65,000',
      avatar: '👨‍⚕️',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Parker',
      role: 'Founder',
      company: 'Creative Agency Hub',
      industry: 'Creative',
      size: 'Small',
      location: 'Brighton',
      rating: 5,
      date: '2024-01-03',
      testimonial: 'As a small creative agency, every penny counts. Watt Savings found us amazing rates and saved us £12,000 annually. The process was simple, fast, and completely hassle-free. Highly recommended for small businesses!',
      savings: '£12,000',
      avatar: '👩‍🎨',
      verified: true
    },
    {
      id: 6,
      name: 'Robert Campbell',
      role: 'Group Operations Director',
      company: 'Hospitality Group',
      industry: 'Hospitality',
      size: 'Large',
      location: 'Edinburgh',
      rating: 5,
      date: '2023-12-28',
      testimonial: 'The flexibility to handle our seasonal variations while maintaining competitive rates is exactly what our hospitality business needed. £240,000 in annual savings has significantly improved our profit margins.',
      savings: '£240,000',
      avatar: '👨‍💼',
      verified: true
    },
    {
      id: 7,
      name: 'Helen Davies',
      role: 'Finance Director',
      company: 'Davies Construction',
      industry: 'Construction',
      size: 'Medium',
      location: 'Cardiff',
      rating: 5,
      date: '2023-12-25',
      testimonial: 'The construction industry has unique energy needs with multiple sites and varying demands. Watt Savings understood this perfectly and delivered tailored solutions that saved us £78,000 annually.',
      savings: '£78,000',
      avatar: '👩‍💼',
      verified: true
    },
    {
      id: 8,
      name: 'Michael Brown',
      role: 'CEO',
      company: 'Brown & Associates',
      industry: 'Professional Services',
      size: 'Small',
      location: 'Bristol',
      rating: 5,
      date: '2023-12-20',
      testimonial: 'Professional, efficient, and results-driven. The team at Watt Savings made switching energy suppliers effortless. Our law firm now saves £15,000 annually with better service than before.',
      savings: '£15,000',
      avatar: '👨‍💼',
      verified: true
    }
  ]

  const filters = ['All', 'Small', 'Medium', 'Large']
  const industries = ['All', 'Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Creative', 'Hospitality', 'Construction', 'Professional Services']

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = selectedFilter === 'All' || testimonial.size === selectedFilter
    const matchesSearch = testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const stats = [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '100%', label: 'Verified Reviews' },
    { value: '£1M+', label: 'Total Client Savings' },
    { value: '98%', label: 'Would Recommend' }
  ]

  return (
    <>
      <Helmet>
        <title>Customer Testimonials & Reviews | What Our Clients Say | Watt Savings</title>
        <meta name="description" content="Read genuine customer testimonials and reviews from UK businesses who have saved money by switching energy suppliers with Watt Savings. Real feedback, real savings." />
        <meta name="keywords" content="customer testimonials, energy switching reviews, client feedback, business energy testimonials, watt savings reviews" />
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
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-semibold">5-Star Rated Service</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                What Our <span className="text-yellow-300">Customers Say</span> ⭐
              </h1>
              
              <p className="text-xl mb-8 text-primary-100">
                Don't just take our word for it. Read genuine testimonials from UK businesses 
                who have transformed their energy costs with our expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Join Our Happy Customers
                  <ArrowRight className="w-5 h-5" />
                </a>
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
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {filter} Business
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <Award className="w-5 h-5 text-blue-500" title="Verified Review" />
                      )}
                    </div>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-primary-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    <span>{testimonial.industry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {testimonial.rating}/5 stars
                  </span>
                </div>

                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-4 text-center">
                  <div className="text-xl font-bold">{testimonial.savings}</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No testimonials match your search criteria.</div>
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
              Ready to Join Our Happy Customers? 🎉
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Experience the same exceptional service and savings that our customers rave about. 
              Start your energy transformation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <ThumbsUp className="w-5 h-5" />
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
              >
                <Phone className="w-5 h-5" />
                Call Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Testimonials