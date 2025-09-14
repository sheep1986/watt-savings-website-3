/**
 * Google Sheets Form Submission Integration for Watt Savings
 * Handles form submissions to Google Sheets backend
 */

// IMPORTANT: Replace with your actual Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

/**
 * Submit form data to Google Sheets
 */
export const submitToGoogleSheets = async (formData, formType) => {
  try {
    // Add metadata
    const submissionData = {
      ...formData,
      formType: formType,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent.substring(0, 200)
    };

    // Normalize the data
    const normalizedData = normalizeFormData(submissionData, formType);

    console.log('Submitting to Google Sheets:', normalizedData);

    // Method 1: POST request with JSON body
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(normalizedData)
      });
      console.log('POST request sent');
    } catch (fetchError) {
      console.log('POST request failed, trying backup methods');
    }

    // Method 2: GET request with URL parameters as backup
    const params = new URLSearchParams();
    Object.keys(normalizedData).forEach(key => {
      let value = normalizedData[key];
      if (value === undefined || value === null) {
        value = '';
      } else if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      } else if (typeof value === 'object') {
        value = JSON.stringify(value);
      } else {
        value = String(value);
      }
      params.append(key, value);
    });

    const getUrl = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
    
    // Create hidden image for GET request
    const img = new Image();
    img.src = getUrl;

    console.log('Form submitted to Google Sheets successfully');
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

/**
 * Normalize form data to match Google Sheets columns
 */
export const normalizeFormData = (rawFormData, formType) => {
  const normalized = {
    // Timestamp and metadata
    timestamp: rawFormData.timestamp || new Date().toISOString(),
    formType: formType || rawFormData.formType || '',
    
    // Common fields across all forms
    businessName: rawFormData.businessName || rawFormData.companyName || '',
    contactName: rawFormData.contactName || rawFormData.name || '',
    email: rawFormData.email || '',
    phone: rawFormData.phone || rawFormData.phoneNumber || '',
    postcode: rawFormData.postcode || '',
    address: rawFormData.address || rawFormData.businessAddress || '',
    
    // Business details
    businessType: rawFormData.businessType || rawFormData.industry || '',
    businessSize: rawFormData.businessSize || rawFormData.companySize || '',
    tradingYears: rawFormData.tradingYears || '',
    position: rawFormData.position || rawFormData.jobTitle || '',
    
    // Energy/Utility specific
    currentSupplier: rawFormData.currentSupplier || rawFormData.currentProvider || '',
    currentGasSupplier: rawFormData.currentGasSupplier || '',
    currentElectricSupplier: rawFormData.currentElectricSupplier || '',
    contractEndDate: rawFormData.contractEndDate || '',
    gasContractEndDate: rawFormData.gasContractEndDate || '',
    electricContractEndDate: rawFormData.electricContractEndDate || '',
    annualSpend: rawFormData.annualSpend || '',
    annualUsage: rawFormData.annualUsage || '',
    monthlySpend: rawFormData.monthlySpend || '',
    meterType: rawFormData.meterType || '',
    utilityType: rawFormData.utilityType || rawFormData.serviceType || '',
    
    // Service preferences
    servicesInterested: rawFormData.servicesInterested || '',
    greenEnergy: rawFormData.greenEnergy || false,
    multiSite: rawFormData.multiSite || false,
    numberOfSites: rawFormData.numberOfSites || '',
    
    // Contact preferences
    preferredContactTime: rawFormData.preferredContactTime || '',
    howDidYouHear: rawFormData.howDidYouHear || '',
    additionalNotes: rawFormData.additionalNotes || rawFormData.notes || rawFormData.message || '',
    
    // Page metadata
    pageUrl: rawFormData.pageUrl || '',
    userAgent: rawFormData.userAgent || ''
  };

  return normalized;
};

/**
 * Handle form submission for quote forms
 */
export const handleQuoteFormSubmission = async (formElement) => {
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());
  
  // Extract services interested from checkboxes
  const services = [];
  if (data.electricityService) services.push('Business Electricity');
  if (data.gasService) services.push('Business Gas');
  if (data.multiSiteService) services.push('Multi-Site Energy');
  if (data.solarService) services.push('Solar Energy');
  
  const submissionData = {
    ...data,
    servicesInterested: services.join(', ')
  };
  
  return await submitToGoogleSheets(submissionData, 'QUOTE_FORM');
};

/**
 * Handle LOA form submission
 */
export const handleLOAFormSubmission = async (formElement) => {
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());
  
  // Extract services interested from checkboxes
  const services = [];
  if (data.electricityService) services.push('Business Electricity');
  if (data.gasService) services.push('Business Gas');
  if (data.multiSiteService) services.push('Multi-Site Energy');
  if (data.solarService) services.push('Solar Energy');
  
  const submissionData = {
    ...data,
    servicesInterested: services.join(', ')
  };
  
  return await submitToGoogleSheets(submissionData, 'LOA_FORM');
};

/**
 * Simple contact form submission
 */
export const handleContactFormSubmission = async (formElement) => {
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());
  
  return await submitToGoogleSheets(data, 'CONTACT_FORM');
};

/**
 * Test function to verify Google Sheets integration
 */
export const testGoogleSheetsSubmission = () => {
  const testData = {
    businessName: 'Test Company ' + Date.now(),
    contactName: 'Test User',
    email: 'test@example.com',
    phone: '01618338661',
    postcode: 'M1 1AA',
    additionalNotes: 'Test submission at ' + new Date().toLocaleString()
  };
  
  console.log('Sending test data:', testData);
  return submitToGoogleSheets(testData, 'TEST-FORM');
};