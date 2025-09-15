import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AlertCircle, Phone, Mail, Clock, CheckCircle, Users, FileText } from 'lucide-react'

const ComplaintsPage = () => {
  const complaintProcess = [
    {
      step: '1',
      title: 'Contact Us Directly',
      description: 'Reach out to us via phone, email, or our online form',
      timeframe: 'Immediate',
      icon: '📞'
    },
    {
      step: '2', 
      title: 'Acknowledgment',
      description: 'We acknowledge receipt of your complaint',
      timeframe: '3 working days',
      icon: '✅'
    },
    {
      step: '3',
      title: 'Investigation',
      description: 'We thoroughly investigate your complaint',
      timeframe: '10 working days',
      icon: '🔍'
    },
    {
      step: '4',
      title: 'Resolution',
      description: 'We provide our findings and proposed resolution',
      timeframe: '15 working days',
      icon: '🎯'
    },
    {
      step: '5',
      title: 'Escalation (if needed)',
      description: 'Refer to Energy Ombudsman if unresolved',
      timeframe: 'After 8 weeks',
      icon: '⬆️'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Complaints Procedure | Customer Service | Watt Savings</title>
        <meta name="description" content="Our comprehensive complaints procedure ensures fair resolution of any service issues. Learn how to raise a complaint and our commitment to customer satisfaction." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <AlertCircle className="w-8 h-8 text-primary-600" />
                <div>
                  <h1 className="text-3xl font-bold">Complaints Procedure</h1>
                  <p className="text-gray-600 mt-2">We're committed to resolving any issues quickly and fairly</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
                <h2 className="text-xl font-bold text-blue-800 mb-2">Our Commitment to You</h2>
                <p className="text-blue-700">
                  We strive to provide excellent service, but if something goes wrong, we're here to help. 
                  Our complaints procedure is designed to address your concerns promptly and fairly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Make a Complaint</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">By Phone</h3>
                  <p className="text-gray-600 mb-3">Speak directly to our customer service team</p>
                  <a href="tel:01618338661" className="text-primary-600 font-semibold hover:underline">
                    0161 833 8661
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-6pm</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">By Email</h3>
                  <p className="text-gray-600 mb-3">Send us detailed information about your complaint</p>
                  <a href="mailto:complaints@wattsavings.co.uk" className="text-primary-600 font-semibold hover:underline">
                    complaints@wattsavings.co.uk
                  </a>
                  <p className="text-sm text-gray-500 mt-1">24/7 availability</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Online Form</h3>
                  <p className="text-gray-600 mb-3">Fill out our structured complaint form</p>
                  <button className="text-primary-600 font-semibold hover:underline">
                    Complete Form
                  </button>
                  <p className="text-sm text-gray-500 mt-1">Detailed submission</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Information to Include</h3>
                <ul className="list-disc ml-6 text-yellow-700">
                  <li>Your full name and contact details</li>
                  <li>Account or reference number (if applicable)</li>
                  <li>Clear description of the issue</li>
                  <li>When the problem occurred</li>
                  <li>What resolution you're seeking</li>
                  <li>Any relevant documentation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Complaints Process</h2>
              
              <div className="space-y-6">
                {complaintProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center gap-1 text-primary-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">{step.timeframe}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">External Resolution Options</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Energy Ombudsman</h3>
                  <p className="text-gray-600 mb-4">
                    If we haven't resolved your complaint within 8 weeks, or you're not satisfied 
                    with our final response, you can refer your complaint to the Energy Ombudsman.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Website:</strong> <a href="https://www.ombudsman-services.org/sectors/energy" className="text-primary-600 hover:underline">ombudsman-services.org</a></p>
                    <p><strong>Phone:</strong> 0330 440 1624</p>
                    <p><strong>Email:</strong> enquiry@ombudsman-services.org</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Citizens Advice</h3>
                  <p className="text-gray-600 mb-4">
                    For free, confidential advice about energy issues and your rights as a consumer.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Website:</strong> <a href="https://www.citizensadvice.org.uk" className="text-primary-600 hover:underline">citizensadvice.org.uk</a></p>
                    <p><strong>Phone:</strong> 0808 223 1133</p>
                    <p><strong>Local offices:</strong> Find your nearest bureau online</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Our Service Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    What We Promise
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Treat all complaints seriously and fairly</li>
                    <li>• Acknowledge complaints within 3 working days</li>
                    <li>• Provide regular updates on progress</li>
                    <li>• Resolve complaints within 15 working days</li>
                    <li>• Learn from complaints to improve our service</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    Customer Satisfaction
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">95%</div>
                      <div className="text-sm text-primary-700">Complaints resolved at first contact</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2.1 days</div>
                      <div className="text-sm text-blue-700">Average resolution time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComplaintsPage