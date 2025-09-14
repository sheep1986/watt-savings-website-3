// Postcode validation and address lookup using Postcodes.io API
// Free UK postcode validation service

export const validatePostcode = async (postcode) => {
  try {
    // Clean the postcode
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase()
    
    if (!cleanPostcode) {
      return { valid: false, error: 'Postcode is required' }
    }

    // Basic UK postcode format validation
    const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[0-9][A-Z]{2}$/
    if (!postcodeRegex.test(cleanPostcode)) {
      return { valid: false, error: 'Invalid postcode format' }
    }

    // Format for API call (add space before last 3 characters)
    const formattedPostcode = cleanPostcode.slice(0, -3) + ' ' + cleanPostcode.slice(-3)

    const response = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(formattedPostcode)}`)
    
    if (response.status === 404) {
      return { valid: false, error: 'Postcode not found' }
    }
    
    if (!response.ok) {
      throw new Error('Postcode API error')
    }

    const data = await response.json()
    
    if (data.status === 200 && data.result) {
      return {
        valid: true,
        postcode: data.result.postcode,
        region: data.result.region,
        country: data.result.country,
        district: data.result.admin_district,
        ward: data.result.admin_ward,
        constituency: data.result.parliamentary_constituency,
        coordinates: {
          latitude: data.result.latitude,
          longitude: data.result.longitude
        }
      }
    }

    return { valid: false, error: 'Invalid postcode' }
    
  } catch (error) {
    console.error('Postcode validation error:', error)
    
    // Fallback to basic regex validation if API fails
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase()
    const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[0-9][A-Z]{2}$/
    
    if (postcodeRegex.test(cleanPostcode)) {
      return {
        valid: true,
        postcode: cleanPostcode.slice(0, -3) + ' ' + cleanPostcode.slice(-3),
        fallback: true,
        error: 'Address details unavailable (using basic validation)'
      }
    }
    
    return { valid: false, error: 'Unable to validate postcode' }
  }
}

export const formatPostcode = (postcode) => {
  if (!postcode) return ''
  
  const clean = postcode.replace(/\s/g, '').toUpperCase()
  if (clean.length < 5) return clean
  
  // Add space before last 3 characters
  return clean.slice(0, -3) + ' ' + clean.slice(-3)
}

// Validate if postcode is in supported regions for energy switching
export const isSupportedRegion = (postcodeData) => {
  if (!postcodeData.valid) return false
  
  const supportedCountries = ['England', 'Scotland', 'Wales']
  return supportedCountries.includes(postcodeData.country)
}

// Get energy region for pricing (simplified)
export const getEnergyRegion = (postcodeData) => {
  if (!postcodeData.valid) return null
  
  const { region, country } = postcodeData
  
  // Map to energy supply regions
  const energyRegions = {
    'London': 'London',
    'South East': 'Southern England',
    'South West': 'South West England',
    'East of England': 'Eastern England',
    'West Midlands': 'Midlands',
    'East Midlands': 'Midlands',
    'Yorkshire and The Humber': 'Yorkshire',
    'North West': 'North West England',
    'North East': 'North East England',
    'Scotland': 'Scotland',
    'Wales': 'Wales',
    'Northern Ireland': 'Northern Ireland'
  }
  
  return energyRegions[region] || country || 'Unknown'
}

// Enhanced validation with business address lookup
export const validateBusinessAddress = async (postcode, addressLine1 = '') => {
  try {
    const postcodeResult = await validatePostcode(postcode)
    
    if (!postcodeResult.valid) {
      return postcodeResult
    }
    
    // Check if it's a supported region for business energy switching
    const supported = isSupportedRegion(postcodeResult)
    const energyRegion = getEnergyRegion(postcodeResult)
    
    return {
      ...postcodeResult,
      businessSupported: supported,
      energyRegion,
      addressLine1: addressLine1.trim()
    }
    
  } catch (error) {
    console.error('Business address validation error:', error)
    return { valid: false, error: 'Address validation failed' }
  }
}