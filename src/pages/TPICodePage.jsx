import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Award, Shield, CheckCircle, Users, FileText, ExternalLink } from 'lucide-react'

const TPICodePage = () => {
  const principles = [
    {
      title: 'Integrity',
      description: 'We act with honesty and integrity in all our business dealings',
      icon: '🏆',
      details: [
        'Transparent pricing and commission structures',
        'Honest representation of products and services', 
        'No misleading claims or false promises',
        'Clear disclosure of all relevant information'
      ]
    },
    {
      title: 'Professional Competence',
      description: 'We maintain high standards of professional knowledge and skill',
      icon: '🎓',
      details: [
        'Regular training and professional development',
        'Up-to-date knowledge of energy markets',
        'Qualified and experienced staff',
        'Adherence to industry best practices'
      ]
    },
    {
      title: 'Customer Focus', 
      description: 'We put our customers’ interests at the heart of everything we do',
      icon: '❤️',
      details: [
        'Tailored advice based on customer needs',
        'Fair and reasonable recommendations',
        'Prompt and efficient service delivery',
        'Effective complaints handling procedures'
      ]
    },
    {
      title: 'Transparency',
      description: 'We are open and clear about our services and how we operate',
      icon: '🔍',
      details: [
        'Clear terms and conditions',
        'Open about commission arrangements',
        'Transparent comparison methodologies',
        'Honest communication throughout the process'
      ]
    },
    {
      title: 'Compliance',
      description: 'We comply with all relevant laws, regulations and industry standards',
      icon: '⚖️',
      details: [
        'Full regulatory compliance',
        'Data protection adherence',
        'Industry code compliance',
        'Regular compliance monitoring'
      ]
    }
  ]

  const commitments = [
    {
      area: 'Customer Service',
      commitments: [
        'Provide clear, accurate and timely information',
        'Respond to enquiries promptly and professionally',
        'Maintain appropriate records of all interactions',
        'Handle complaints fairly and efficiently'
      ]
    },
    {
      area: 'Market Conduct',
      commitments: [
        'Present a fair comparison of available options',
        'Only recommend suitable products and services',
        'Avoid conflicts of interest where possible',
        'Disclose any unavoidable conflicts clearly'
      ]
    },
    {
      area: 'Data Protection',
      commitments: [
        'Protect customer data in accordance with GDPR',
        'Use data only for legitimate business purposes',
        'Maintain secure systems and processes',
        'Respect customer privacy preferences'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>TPI Code of Practice | Professional Standards | Watt Savings</title>
        <meta name="description" content="Learn about our commitment to the Third Party Intermediary Code of Practice and how we maintain the highest professional standards in energy brokerage." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary-600" />
                <div>
                  <h1 className="text-3xl font-bold">TPI Code of Practice</h1>
                  <p className="text-gray-600 mt-2">Our commitment to professional standards and ethical business practices</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-bold text-green-800">Certified TPI</h2>
                </div>
                <p className="text-green-700">
                  Watt Savings is a certified Third Party Intermediary (TPI) committed to upholding 
                  the highest standards of professional conduct in the energy market.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What is the TPI Code?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  The Third Party Intermediary (TPI) Code of Practice is a voluntary code that sets out 
                  standards of conduct for businesses that help customers find and switch energy suppliers. 
                  The code is designed to protect customers and ensure they receive fair, transparent, 
                  and professional service.
                </p>
                <p className="mb-4">
                  As a certified TPI, we have committed to:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Operating to the highest professional standards</li>
                  <li>Putting customer interests first</li>
                  <li>Providing transparent and honest advice</li>
                  <li>Maintaining appropriate complaints procedures</li>
                  <li>Complying with all relevant regulations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">Our Core Principles</h2>
              <div className="space-y-8">
                {principles.map((principle, index) => (
                  <div key={index} className="border-l-4 border-primary-200 pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{principle.icon}</span>
                      <h3 className="text-xl font-bold">{principle.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    <ul className="space-y-1">
                      {principle.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">Our Specific Commitments</h2>
              <div className="grid md:grid-cols-1 gap-8">
                {commitments.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary-600">{section.area}</h3>
                    <ul className="space-y-2">
                      {section.commitments.map((commitment, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{commitment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Monitoring and Compliance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    Internal Monitoring
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular staff training on TPI principles</li>
                    <li>• Internal audits and compliance checks</li>
                    <li>• Customer feedback monitoring</li>
                    <li>• Continuous improvement processes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary-600" />
                    External Oversight
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular TPI code compliance reporting</li>
                    <li>• External audit processes</li>
                    <li>• Industry body membership and standards</li>
                    <li>• Regulatory compliance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Making a Complaint About TPI Standards</h2>
              <p className="text-gray-600 mb-6">
                If you believe we have not met the standards set out in the TPI Code, 
                you can make a complaint through our standard complaints procedure or 
                contact the TPI Code administrator directly.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Our Complaints Team</h3>
                  <p className="text-sm text-gray-600 mb-3">For issues related to TPI Code compliance</p>
                  <p><strong>Email:</strong> complaints@wattsavings.co.uk</p>
                  <p><strong>Phone:</strong> 0161 833 8661</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">TPI Code Administrator</h3>
                  <p className="text-sm text-gray-600 mb-3">For independent review of TPI standards</p>
                  <a 
                    href="https://tpicode.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:underline"
                  >
                    Visit TPI Code website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TPICodePage