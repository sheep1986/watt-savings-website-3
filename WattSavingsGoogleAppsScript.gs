/**
 * Watt Savings - Google Apps Script for Form Submissions
 * This script handles form submissions from the Watt Savings website
 * and stores them in a Google Sheet with email notifications
 */

// The name of your Google Sheet tab (must match exactly)
const SHEET_NAME = 'Watt Savings Leads';

// Email configuration - UPDATE THIS WITH YOUR EMAIL
const NOTIFICATION_EMAIL = 'info@wattsavings.co.uk';

// Handle GET requests (for testing)
function doGet(e) {
  try {
    // If we have parameters, treat as form submission
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      return handleFormSubmission(e.parameter);
    }
    
    // Otherwise return status
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Watt Savings Google Apps Script is running! Use POST to submit data.',
        'timestamp': new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests (for form submissions)
function doPost(e) {
  try {
    let data = {};
    
    // Parse the incoming data
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        console.log('JSON parse failed, trying parameters');
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    return handleFormSubmission(data);
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleFormSubmission(data) {
  try {
    console.log('Processing form submission:', data);
    
    // Get or create the sheet
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = createSheetWithHeaders();
    }
    
    // Check if sheet has headers
    if (sheet.getLastColumn() === 0) {
      addHeaders(sheet);
    }
    
    // Create row data matching headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.formType || 'Unknown',
      data.businessName || '',
      data.contactName || '',
      data.email || '',
      data.phone || '',
      data.postcode || '',
      data.address || '',
      data.businessType || '',
      data.businessSize || '',
      data.tradingYears || '',
      data.position || '',
      data.servicesInterested || '',
      data.currentSupplier || '',
      data.currentGasSupplier || '',
      data.currentElectricSupplier || '',
      data.contractEndDate || '',
      data.gasContractEndDate || '',
      data.electricContractEndDate || '',
      data.annualSpend || '',
      data.annualUsage || '',
      data.monthlySpend || '',
      data.meterType || '',
      data.utilityType || '',
      data.greenEnergy || '',
      data.multiSite || '',
      data.numberOfSites || '',
      data.preferredContactTime || '',
      data.howDidYouHear || '',
      data.additionalNotes || '',
      data.pageUrl || '',
      data.userAgent || ''
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    console.log('Row added successfully for:', data.businessName || data.contactName || 'Unknown');
    
    // Send email notification
    if (data.email) {
      try {
        sendEmailNotification(data);
      } catch (emailError) {
        console.log('Email notification failed:', emailError);
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Submission recorded successfully',
        'timestamp': new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error handling form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function createSheetWithHeaders() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (sheet) {
    return sheet;
  }
  
  sheet = spreadsheet.insertSheet(SHEET_NAME);
  addHeaders(sheet);
  return sheet;
}

function addHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Form Type',
    'Business Name',
    'Contact Name',
    'Email',
    'Phone',
    'Postcode',
    'Address',
    'Business Type',
    'Business Size',
    'Trading Years',
    'Position',
    'Services Interested',
    'Current Supplier',
    'Current Gas Supplier',
    'Current Electric Supplier',
    'Contract End Date',
    'Gas Contract End Date',
    'Electric Contract End Date',
    'Annual Spend',
    'Annual Usage',
    'Monthly Spend',
    'Meter Type',
    'Utility Type',
    'Green Energy',
    'Multi Site',
    'Number of Sites',
    'Preferred Contact Time',
    'How Did You Hear',
    'Additional Notes',
    'Page URL',
    'User Agent'
  ];
  
  // Add headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#16a34a'); // Watt Savings green
  headerRange.setFontColor('#ffffff');
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    try {
      sheet.autoResizeColumn(i);
    } catch (e) {
      console.log('Could not resize column', i);
    }
  }
}

function sendEmailNotification(data) {
  try {
    const subject = `New ${data.formType || 'Form'} Submission - ${data.businessName || data.contactName || 'Unknown'}`;
    
    const emailBody = `
New Form Submission - Watt Savings

Form Type: ${data.formType || 'N/A'}
Timestamp: ${data.timestamp || new Date().toISOString()}

CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Business Name: ${data.businessName || 'N/A'}
• Contact Name: ${data.contactName || 'N/A'}
• Email: ${data.email || 'N/A'}
• Phone: ${data.phone || 'N/A'}
• Postcode: ${data.postcode || 'N/A'}
• Address: ${data.address || 'N/A'}

BUSINESS INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Business Type: ${data.businessType || 'N/A'}
• Business Size: ${data.businessSize || 'N/A'}
• Trading Years: ${data.tradingYears || 'N/A'}
• Position: ${data.position || 'N/A'}

SERVICES & ENERGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Services Interested: ${data.servicesInterested || 'N/A'}
• Current Supplier: ${data.currentSupplier || 'N/A'}
• Contract End Date: ${data.contractEndDate || 'N/A'}
• Annual Spend: ${data.annualSpend || 'N/A'}
• Monthly Spend: ${data.monthlySpend || 'N/A'}
• Multi-Site: ${data.multiSite || 'N/A'}
• Green Energy Interest: ${data.greenEnergy || 'N/A'}

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Preferred Contact Time: ${data.preferredContactTime || 'N/A'}
• How They Found Us: ${data.howDidYouHear || 'N/A'}
• Additional Notes: ${data.additionalNotes || 'None'}

TECHNICAL INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Page URL: ${data.pageUrl || 'N/A'}
• Form Type: ${data.formType || 'N/A'}

---
This is an automated notification from the Watt Savings website.
Please respond to this lead within 24 hours for best conversion rates.

Watt Savings - Business Energy Made Simple
Phone: 0161 833 8661
Email: info@wattsavings.co.uk
    `;
    
    // Send email
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: emailBody
    });
    
    console.log('Email notification sent to:', NOTIFICATION_EMAIL);
    
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
}

// Test function to verify setup
function testWattSavingsSetup() {
  console.log('Testing Watt Savings Google Apps Script...');
  
  const testData = {
    timestamp: new Date().toISOString(),
    formType: 'TEST SUBMISSION',
    businessName: 'Test Energy Solutions Ltd',
    contactName: 'Test Manager',
    email: 'test@example.com',
    phone: '0161 833 8661',
    postcode: 'M1 1AA',
    address: '123 Test Street, Manchester',
    businessType: 'Manufacturing',
    businessSize: 'Small (1-50 employees)',
    servicesInterested: 'Business Electricity, Business Gas',
    currentSupplier: 'British Gas',
    contractEndDate: '2024-12-31',
    monthlySpend: '£500',
    additionalNotes: 'Test submission to verify Google Sheets integration is working correctly.',
    pageUrl: 'https://wattsavings.co.uk/test',
    formType: 'QUOTE_FORM'
  };
  
  const result = handleFormSubmission(testData);
  console.log('Test result:', result.getContent());
  
  // Check sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (sheet) {
    const lastRow = sheet.getLastRow();
    console.log('Sheet now has', lastRow, 'rows (including header)');
    
    if (lastRow > 1) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, 6).getValues()[0];
      console.log('Most recent submission:', lastRowData);
    }
  }
  
  return 'Watt Savings test completed - check your sheet and email!';
}

// Alternative direct test
function directTestWattSavings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || createSheetWithHeaders();
  
  const testRow = [
    new Date().toISOString(),
    'DIRECT TEST',
    'Direct Test Business Ltd',
    'Direct Tester',
    'direct@test.wattsavings.com',
    '0161 833 8661',
    'M2 7LP',
    'St Anns House, Manchester',
    'Technology',
    'Medium (51-200 employees)',
    '10',
    'Energy Manager',
    'Business Electricity, Solar Energy',
    'E.ON',
    'Scottish Power',
    'EDF',
    '2024-06-30',
    '2024-08-15',
    '2024-12-31',
    '£12,000',
    '120,000 kWh',
    '£1,000',
    'Smart Meter',
    'Dual Fuel',
    'Yes',
    'Yes',
    '3',
    'Morning (9am-12pm)',
    'Google Search',
    'Looking for better energy rates for our growing business. Interested in solar options.',
    'https://wattsavings.co.uk',
    'Mozilla/5.0 (Test Browser)'
  ];
  
  sheet.appendRow(testRow);
  console.log('Direct test row added to Watt Savings sheet');
  return 'Watt Savings direct test completed';
}