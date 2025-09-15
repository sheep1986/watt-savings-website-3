import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Zap, Award, Shield, Users } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: '💡 Business Electricity', path: '/business-electricity' },
      { name: '🔥 Business Gas', path: '/business-gas' },
      { name: '🏢 Multi-Site Energy', path: '/multi-site-energy' },
      { name: '☀️ Solar Energy Solutions', path: '/solar-energy' },
      { name: '🌱 Green Energy Options', path: '/green-energy' },
      { name: '📊 Bill Validation', path: '/bill-validation' },
    ],
    resources: [
      { name: '💰 Energy Saving Tips', path: '/energy-saving-tips' },
      { name: '📄 Contract Types Guide', path: '/contract-types' },
      { name: '🔄 Switching Process', path: '/switching-process' },
      { name: '📈 Energy Market Insights', path: '/energy-insights' },
      { name: '🎯 Business Benefits', path: '/business-benefits' },
      { name: '❓ FAQ', path: '/faq' },
    ],
    company: [
      { name: '🏢 About Us', path: '/about' },
      { name: '⭐ Our Services', path: '/services' },
      { name: '📋 Case Studies', path: '/case-studies' },
      { name: '💬 Testimonials', path: '/testimonials' },
      { name: '🏭 Large Business Solutions', path: '/large-business' },
      { name: '⭐ Trustpilot Reviews', path: '/trustpilot-reviews' },
    ],
    legal: [
      { name: '📜 Terms & Conditions', path: '/terms' },
      { name: '🔒 Privacy Policy', path: '/privacy' },
      { name: '📝 Complaints Procedure', path: '/complaints' },
      { name: '✅ TPI Code of Practice', path: '/tpi-code' },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container py-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Save on Your Energy Bills? 💰
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of businesses saving up to 45% on their energy costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Zap className="animate-pulse" />
                Get Your Free Quote Now
              </Link>
              <a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-900 transition-all duration-300 border-2 border-primary-500"
              >
                <Phone />
                Call: 0161 833 8661
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b border-gray-800">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-primary-400 mb-2" />
              <span className="font-semibold">Ofgem Registered</span>
              <span className="text-sm text-gray-400">Trusted Broker</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary-400 mb-2" />
              <span className="font-semibold">Data Protected</span>
              <span className="text-sm text-gray-400">GDPR Compliant</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-primary-400 mb-2" />
              <span className="font-semibold">10,000+</span>
              <span className="text-sm text-gray-400">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-primary-400 mb-2" />
              <span className="font-semibold">£2M+ Saved</span>
              <span className="text-sm text-gray-400">This Year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/watt-logo-new.png" 
              alt="Watt Savings" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Your trusted energy partner, helping UK businesses save on gas and electricity since 2015.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61580022617531" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/wattutilities" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/watt-co-uk-ltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/watt_choice" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Energy Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Get In Touch</h3>
            <div className="space-y-3">
              <a href="tel:01618338661" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone size={18} />
                <span>0161 833 8661</span>
              </a>
              <a href="mailto:info@wattsavings.co.uk" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={18} />
                <span>info@wattsavings.co.uk</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>
                  123 Energy House<br />
                  Business Park<br />
                  London, SW1A 1AA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container">
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} Watt Utilities UK Ltd. All rights reserved. Company Registration: 03912588</p>
            <p className="mt-1">
              Registered Office: St Ann's House, Manchester, M2 7LP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer