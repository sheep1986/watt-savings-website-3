import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Calendar, AlertCircle } from 'lucide-react'

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Watt Savings</title>
        <meta name="description" content="Read our comprehensive terms and conditions for using Watt Savings business energy comparison and switching services." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-3xl font-bold">Terms and Conditions</h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 2024</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <p className="text-sm font-semibold text-yellow-800">Important Notice</p>
                </div>
                <p className="text-sm text-yellow-700 mt-2">
                  Please read these terms and conditions carefully before using our services. 
                  By using our website or services, you agree to be bound by these terms.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. About Our Services</h2>
                <p className="mb-4">
                  Watt Savings Limited ("we", "us", "our") provides business energy comparison and switching services. 
                  We act as an intermediary between business customers and energy suppliers to help find suitable 
                  energy contracts.
                </p>
                <p className="mb-4">
                  Our services include:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Energy price comparison across multiple suppliers</li>
                  <li>Contract negotiation and arrangement</li>
                  <li>Switching administration and support</li>
                  <li>Ongoing account management</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Use of Our Website</h2>
                <p className="mb-4">
                  By accessing and using our website, you agree to:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use the website for lawful purposes only</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                  <li>Not transmit any harmful or malicious code</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Our Service Terms</h2>
                <h3 className="text-xl font-semibold mb-3">3.1 Commission Arrangements</h3>
                <p className="mb-4">
                  We receive commission payments from energy suppliers when customers switch through our service. 
                  This commission does not affect the prices you pay for your energy supply.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">3.2 Service Standards</h3>
                <p className="mb-4">
                  We commit to:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Provide impartial comparison of available tariffs</li>
                  <li>Handle your switching process professionally</li>
                  <li>Keep your personal information secure</li>
                  <li>Provide ongoing support throughout your contract</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Customer Responsibilities</h2>
                <p className="mb-4">
                  As our customer, you agree to:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Provide accurate information about your energy requirements</li>
                  <li>Review contract terms before signing with suppliers</li>
                  <li>Pay energy bills directly to your chosen supplier</li>
                  <li>Notify us of any changes to your business circumstances</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Limitations of Liability</h2>
                <p className="mb-4">
                  While we strive to provide accurate information and excellent service:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>We cannot guarantee specific savings amounts</li>
                  <li>Energy prices are subject to market conditions</li>
                  <li>Supplier terms and conditions apply to all contracts</li>
                  <li>We are not liable for supplier performance issues</li>
                </ul>
                <p className="mb-4">
                  Our liability is limited to the amount of commission received from your switch, 
                  except where prohibited by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Data Protection</h2>
                <p className="mb-4">
                  We process your personal data in accordance with UK GDPR and our Privacy Policy. 
                  Your data is used to provide our services and may be shared with energy suppliers 
                  for quotation and switching purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Complaints Procedure</h2>
                <p className="mb-4">
                  If you have a complaint about our service:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li>Contact us directly at complaints@wattsavings.co.uk</li>
                  <li>We will acknowledge your complaint within 3 working days</li>
                  <li>We aim to resolve complaints within 15 working days</li>
                  <li>If unresolved, you may escalate to the Energy Ombudsman</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="mb-4">
                  Either party may terminate our service relationship at any time with reasonable notice. 
                  Termination does not affect existing energy contracts arranged through our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  We may update these terms from time to time. Changes will be posted on this page 
                  with the updated date. Continued use of our services constitutes acceptance of revised terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                <p className="mb-4">
                  These terms are governed by English law and subject to the exclusive jurisdiction 
                  of English courts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Watt Savings Limited</strong></p>
                  <p>Email: info@wattsavings.co.uk</p>
                  <p>Phone: 0161 833 8661</p>
                  <p>Address: [Company Address]</p>
                  <p>Company Registration: [Registration Number]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsPage