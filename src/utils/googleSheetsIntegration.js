// Google Sheets Integration for Quote Forms
// This handles form submissions to Google Sheets via Google Apps Script

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

export const submitQuoteToSheets = async (formData) => {
  try {
    // Add submission timestamp
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'Watt Savings Website',
      status: 'New Lead'
    }

    // Log submission for debugging (remove in production)
    console.log('Submitting quote data:', submissionData)

    // For development - simulate success
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return {
        success: true,
        message: 'Quote submitted successfully!'
      }
    }

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(submissionData)
    })

    // Since mode is 'no-cors', we can't read the response
    // We assume success if no error is thrown
    return {
      success: true,
      message: 'Quote submitted successfully! We\'ll contact you within 24 hours.'
    }

  } catch (error) {
    console.error('Error submitting quote:', error)
    
    return {
      success: false,
      message: 'There was an error submitting your quote. Please try calling us directly at 0800 123 456.'
    }
  }
}

export const submitContactForm = async (formData) => {
  try {
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      type: 'Contact Form',
      source: 'Watt Savings Website'
    }

    // For development
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 1500))
      return {
        success: true,
        message: 'Message sent successfully!'
      }
    }

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    })

    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    }

  } catch (error) {
    console.error('Error submitting contact form:', error)
    
    return {
      success: false,
      message: 'There was an error sending your message. Please try calling us directly.'
    }
  }
}

// Email validation utility
export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Phone validation utility
export const validatePhone = (phone) => {
  const re = /^[\+]?[1-9][\d]{0,15}$/
  return re.test(String(phone).replace(/\s/g, ''))
}

// Format form data for better readability
export const formatQuoteData = (data) => {
  return {
    'Business Name': data.businessName,
    'Contact Name': data.contactName,
    'Email': data.email,
    'Phone': data.phone,
    'Energy Type': data.energyType,
    'Current Supplier': data.currentSupplier || 'Not specified',
    'Annual Spend': data.annualSpend || 'Not specified',
    'Contract End Date': data.contractEndDate || 'Not specified',
    'Additional Information': data.message || 'None',
    'Submission Date': new Date().toLocaleDateString('en-GB'),
    'Submission Time': new Date().toLocaleTimeString('en-GB')
  }
}