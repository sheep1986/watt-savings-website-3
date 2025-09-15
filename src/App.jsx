import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import MobileCTA from './components/MobileCTA'
import ScrollAnimations from './components/ScrollAnimations'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const BusinessElectricity = lazy(() => import('./pages/BusinessElectricity'))
const BusinessGas = lazy(() => import('./pages/BusinessGas'))
const MultiSiteEnergy = lazy(() => import('./pages/MultiSiteEnergy'))
const SolarEnergy = lazy(() => import('./pages/SolarEnergy'))
const GreenEnergy = lazy(() => import('./pages/GreenEnergy'))
const EnergySavingTips = lazy(() => import('./pages/EnergySavingTips'))
const BillValidation = lazy(() => import('./pages/BillValidation'))
const ContractTypes = lazy(() => import('./pages/ContractTypes'))
const SwitchingProcess = lazy(() => import('./pages/SwitchingProcess'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const FAQ = lazy(() => import('./pages/FAQ'))
const GetQuote = lazy(() => import('./pages/GetQuote'))
const EnergyInsights = lazy(() => import('./pages/EnergyInsights'))
const BusinessBenefits = lazy(() => import('./pages/BusinessBenefits'))
const LargeBusiness = lazy(() => import('./pages/LargeBusiness'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const ComplaintsPage = lazy(() => import('./pages/ComplaintsPage'))
const TPICodePage = lazy(() => import('./pages/TPICodePage'))
const TrustpilotReviews = lazy(() => import('./pages/TrustpilotReviews'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Energy Services */}
            <Route path="/business-electricity" element={<BusinessElectricity />} />
            <Route path="/business-gas" element={<BusinessGas />} />
            <Route path="/multi-site-energy" element={<MultiSiteEnergy />} />
            <Route path="/solar-energy" element={<SolarEnergy />} />
            <Route path="/green-energy" element={<GreenEnergy />} />
            
            {/* Resources & Guides */}
            <Route path="/energy-saving-tips" element={<EnergySavingTips />} />
            <Route path="/bill-validation" element={<BillValidation />} />
            <Route path="/contract-types" element={<ContractTypes />} />
            <Route path="/switching-process" element={<SwitchingProcess />} />
            <Route path="/energy-insights" element={<EnergyInsights />} />
            <Route path="/business-benefits" element={<BusinessBenefits />} />
            
            {/* Company */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/large-business" element={<LargeBusiness />} />
            <Route path="/trustpilot-reviews" element={<TrustpilotReviews />} />
            
            {/* Support */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-quote" element={<GetQuote />} />
            
            {/* Legal */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/tpi-code" element={<TPICodePage />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileCTA />
      <ScrollAnimations />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#22c55e',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
    </div>
  )
}

export default App