# Watt Savings - Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically capture form submissions from your Watt Savings website.

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Rename it to "Watt Savings Leads" (or your preferred name)
4. The script will automatically create headers when the first form is submitted

## Step 2: Open Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. This will open Google Apps Script in a new tab
3. Delete any existing code in the editor

## Step 3: Add the Watt Savings Script

1. Copy the entire contents of `WattSavingsGoogleAppsScript.gs` 
2. Paste it into the Apps Script editor
3. **IMPORTANT**: Update the email address on line 11:
   ```javascript
   const NOTIFICATION_EMAIL = 'your-email@wattsavings.co.uk';
   ```
4. Save the project (Ctrl+S or Cmd+S)
5. Give your project a name like "Watt Savings Form Handler"

## Step 4: Deploy the Script as a Web App

1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon next to "Type" and select **Web app**
4. Configure the deployment:
   - **Description**: "Watt Savings Form Submissions"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web app URL** - you'll need this for the next step
7. Click **Done**

## Step 5: Update Your Website Files

Replace `YOUR_SCRIPT_ID_HERE` in the following files with your actual Web app URL:

### In `index-premium.html` (line 521):
```javascript
const GOOGLE_SHEETS_URL = 'YOUR_ACTUAL_WEB_APP_URL_HERE';
```

### In `loa.html` (line 719):
```javascript
const GOOGLE_SHEETS_URL = 'YOUR_ACTUAL_WEB_APP_URL_HERE';
```

### In `googleSheets.js` (line 7):
```javascript
const GOOGLE_SHEETS_URL = 'YOUR_ACTUAL_WEB_APP_URL_HERE';
```

## Step 6: Test the Integration

1. Go back to Google Apps Script
2. Click on the **testWattSavingsSetup** function
3. Click **Run**
4. Check your Google Sheet - you should see a test row added
5. Check your email - you should receive a notification

## Step 7: Test from Your Website

1. Open your website (`index-premium.html`)
2. Fill out the quote form and submit
3. Check your Google Sheet - the submission should appear
4. Check your email for the notification

## Step 8: Monitor and Troubleshoot

### View Logs:
1. In Google Apps Script, click **Executions** in the left sidebar
2. This shows all script executions and any errors

### Common Issues:
- **No data appearing**: Check the Web app URL is correct
- **No email notifications**: Verify the email address in the script
- **Permission errors**: Re-deploy the script and ensure "Anyone" has access

## What Data is Captured

The system captures these fields from your forms:

- **Basic Info**: Business name, contact name, email, phone, postcode
- **Business Details**: Business type, size, trading years, position
- **Energy Info**: Current supplier, contract dates, spending, usage
- **Services**: Which services they're interested in
- **Preferences**: Contact time, how they found you, notes
- **Technical**: Form type, timestamp, page URL, browser info

## Email Notifications

You'll receive an email for each form submission containing:
- All form data organized by category
- Clear contact information for follow-up
- Business and energy details
- Any additional notes from the customer

## Security & Privacy

- All data is stored securely in your Google account
- The script runs with your permissions only
- No third-party services have access to the data
- Submissions include timestamps and source tracking

## Need Help?

If you encounter issues:
1. Check the Google Apps Script execution log
2. Verify all URLs are correctly updated
3. Test the script directly in Google Apps Script
4. Ensure your Google Sheet permissions are correct

---

**Important**: Keep your Web app URL private and secure. Anyone with this URL could potentially submit data to your sheet.