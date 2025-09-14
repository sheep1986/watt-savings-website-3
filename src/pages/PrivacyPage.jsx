import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Calendar, Eye, Lock, UserCheck, AlertCircle } from 'lucide-react'

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Data Protection | Watt Savings</title>
        <meta name="description" content="Read our comprehensive privacy policy explaining how Watt Savings collects, uses, and protects your personal data in compliance with UK GDPR." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 2024</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <p className="text-sm font-semibold text-blue-800">Your Privacy Matters</p>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  We are committed to protecting your privacy and handling your personal data responsibly 
                  in accordance with UK GDPR and Data Protection Act 2018.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Watt Savings Limited is the data controller for the personal information we collect about you. 
                  We are registered with the Information Commissioner's Office (ICO) under registration number [ICO Number].
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Data Controller:</strong> Watt Savings Limited</p>
                  <p><strong>Email:</strong> privacy@wattsavings.co.uk</p>
                  <p><strong>Phone:</strong> 0161 833 8661</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. What Information We Collect</h2>
                <p className="mb-4">We collect and process the following types of personal information:</p>
                
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Name and job title</li>
                  <li>Business name and address</li>
                  <li>Email address and phone number</li>
                  <li>Preferred contact methods</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Business Information</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Business type and size</li>
                  <li>Energy usage patterns</li>
                  <li>Current supplier details</li>
                  <li>Contract renewal dates</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>IP address and browser type</li>
                  <li>Website usage data</li>
                  <li>Cookie preferences</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your personal information for the following purposes:</p>
                
                <h3 className="text-xl font-semibold mb-3">Service Provision</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Comparing energy prices and tariffs</li>
                  <li>Arranging energy supply contracts</li>
                  <li>Managing the switching process</li>
                  <li>Providing ongoing customer support</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Communication</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Responding to enquiries</li>
                  <li>Providing service updates</li>
                  <li>Sending contract renewal reminders</li>
                  <li>Marketing communications (with consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
                <p className="mb-4">We process your personal data under the following legal bases:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Contract:</strong> To provide our energy comparison and switching services</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                  <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                  <li><strong>Legal Obligation:</strong> To comply with regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Who We Share Information With</h2>
                <p className="mb-4">We may share your personal information with:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Energy Suppliers:</strong> To obtain quotes and arrange contracts</li>
                  <li><strong>Service Providers:</strong> For technical support and data processing</li>
                  <li><strong>Regulatory Bodies:</strong> When required by law</li>
                  <li><strong>Professional Advisors:</strong> Legal and financial advisors</li>
                </ul>
                <p className="mb-4">
                  We ensure all third parties maintain appropriate security measures and use your data 
                  only for the specified purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p className="mb-4">We implement comprehensive security measures including:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and regular backups</li>
                  <li>Access controls and staff training</li>
                  <li>Regular security audits and updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                <p className="mb-4">Under UK GDPR, you have the following rights:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate information</li>
                  <li><strong>Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Portability:</strong> Receive your data in a usable format</li>
                  <li><strong>Restriction:</strong> Limit how we use your data</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, contact us at privacy@wattsavings.co.uk
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                <p className="mb-4">
                  We retain personal data only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Customer data: 6 years after contract ends</li>
                  <li>Marketing data: Until consent is withdrawn</li>
                  <li>Website analytics: 26 months maximum</li>
                  <li>Legal requirements: As required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking</h2>
                <p className="mb-4">
                  We use cookies to enhance your website experience. Our cookie policy explains:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Types of cookies we use</li>
                  <li>How to manage cookie preferences</li>
                  <li>Third-party cookies and tracking</li>
                  <li>Analytics and performance cookies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes and post updates on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Complaints</h2>
                <p className="mb-4">
                  If you have concerns about how we handle your personal data, you can:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li>Contact us directly at privacy@wattsavings.co.uk</li>
                  <li>Lodge a complaint with the ICO at ico.org.uk</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Data Protection Officer</strong></p>
                  <p>Email: privacy@wattsavings.co.uk</p>
                  <p>Phone: 0161 833 8661</p>
                  <p>Address: [Company Address]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPage