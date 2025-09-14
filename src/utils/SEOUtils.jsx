import React from 'react'
import { Helmet } from 'react-helmet-async'

// SEO Component for consistent meta tags across pages
export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = '/watt-savings-logo.png',
  type = 'website',
  article = false 
}) => {
  const baseUrl = 'https://wattsavings.co.uk'
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl
  const fullTitle = title ? `${title} | Watt Savings` : 'Watt Savings - Compare Business Energy Prices & Save'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Watt Savings" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Watt Savings" />
      <meta name="copyright" content="© 2024 Watt Savings Ltd" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Watt Savings",
          "url": baseUrl,
          "logo": `${baseUrl}/watt-savings-logo.png`,
          "description": "UK business energy comparison service helping companies save on gas and electricity bills",
          "sameAs": [
            "https://www.facebook.com/wattsavings",
            "https://www.twitter.com/wattsavings",
            "https://www.linkedin.com/company/wattsavings"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-800-123-456",
            "contactType": "Customer Service",
            "availableLanguage": "English"
          }
        })}
      </script>
      
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": `${baseUrl}${ogImage}`,
            "author": {
              "@type": "Organization",
              "name": "Watt Savings"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Watt Savings",
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/watt-savings-logo.png`
              }
            }
          })}
        </script>
      )}
    </Helmet>
  )
}

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: 'Compare Business Energy Prices & Save Up to 45%',
    description: 'Watt Savings helps UK businesses compare and switch energy suppliers. Save up to 45% on gas and electricity bills. Free comparison, expert support, no interruption to supply.',
    keywords: 'business energy comparison, compare business electricity, business gas prices, energy switching, UK energy broker, commercial energy',
    canonicalUrl: '/'
  },
  
  businessElectricity: {
    title: 'Business Electricity Comparison UK | Save Up to 45%',
    description: 'Compare business electricity prices from 30+ UK suppliers. Save up to 45% on your electricity bills. Free comparison service, no interruption to supply. Get a quote in 60 seconds.',
    keywords: 'business electricity, commercial electricity, business electricity comparison, compare business electricity prices, business electricity suppliers UK, cheap business electricity',
    canonicalUrl: '/business-electricity'
  },
  
  businessGas: {
    title: 'Business Gas Comparison UK | Commercial Gas Prices',
    description: 'Compare business gas prices from leading UK suppliers. Save up to 40% on commercial gas bills. Free comparison service with expert support. Switch without supply interruption.',
    keywords: 'business gas, commercial gas, business gas comparison, compare business gas prices, business gas suppliers UK, cheap business gas',
    canonicalUrl: '/business-gas'
  },
  
  getQuote: {
    title: 'Get Free Business Energy Quote | Compare Prices in 60 Seconds',
    description: 'Get your free business energy quote in under 60 seconds. Compare gas and electricity prices from 30+ UK suppliers. No obligation, completely free service.',
    keywords: 'business energy quote, free energy quote, business energy comparison, energy price comparison, commercial energy quote',
    canonicalUrl: '/get-quote'
  },
  
  about: {
    title: 'About Watt Savings | UK Business Energy Experts',
    description: 'Learn about Watt Savings, the UK\'s trusted business energy comparison service. Our expert team has helped over 10,000 businesses save millions on energy costs since 2015.',
    keywords: 'about watt savings, business energy experts, UK energy brokers, energy comparison company',
    canonicalUrl: '/about'
  },
  
  services: {
    title: 'Business Energy Services | Electricity, Gas & Solar Solutions',
    description: 'Comprehensive business energy services including electricity, gas, solar, and multi-site management. Expert energy solutions tailored to your business needs.',
    keywords: 'business energy services, commercial energy solutions, electricity services, gas services, solar energy',
    canonicalUrl: '/services'
  },
  
  faq: {
    title: 'Business Energy FAQ | Common Questions Answered',
    description: 'Find answers to common business energy questions. Learn about switching process, contracts, savings, and more from our energy experts.',
    keywords: 'business energy FAQ, energy switching questions, commercial energy help',
    canonicalUrl: '/faq'
  }
}

// Schema.org structured data for different page types
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Watt Savings",
  "image": "https://wattsavings.co.uk/watt-savings-logo.png",
  "description": "UK business energy comparison service helping companies save on gas and electricity bills",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Energy House, Business Park",
    "addressLocality": "London",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "url": "https://wattsavings.co.uk",
  "telephone": "+44-800-123-456",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:30"
  }
})

export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Watt Savings"
  }
})

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})