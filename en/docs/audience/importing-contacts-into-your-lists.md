# Importing Contacts into Your Lists

## Description

You can import contacts from a CSV (Comma Separated Values) file or add them manually to your contact list. As always, we adhere to a strict anti-spam policy, which means you must have consent from contacts before adding them to your contact list.

## Why It's Important

Our application allows you to send emails to a list you've acquired through your hard work and prospecting. You can use this feature to easily import the valuable list you've compiled into our system. We'll cover how to add contacts to your lists in this article.

## Step-by-Step Instructions

### Importing a CSV File

<Stepper>

1. **Convert Excel to CSV** (if necessary):
   - To import an Excel contact list into our system, you must first convert it using the software installed on your computer
   - Open the contact list file with Excel
   - Click **File** then **Save As**
   - Choose a name for your contact list. In the **File type** list, choose **CSV (Comma delimited)**
   - Click **Save**

1. Go to **Contacts**
![Navigate to Contacts tab](/images/audience/6179a82c226f1.jpeg)
Click on the circular button with the **+ sign**
![Contact add button](/images/audience/6179a82c7aea0.jpeg)

1. If you have multiple lists, select the appropriate list to import into
Follow the import wizard to map your CSV fields to contact attributes.

1. Select Import contacts
![Contact list selection](/images/audience/6179a82cd61ab.jpeg)

1. Select Import CSV file

1. Click Browse for a file to upload to find the contact list file on your computer
![CSV file import option](/images/audience/6179a82d3b4fa.png)

1. Once the file is selected, you can uncheck fields you want to remove from your list import
If custom fields aren't already in your list, you can create new fields at this step and copy their names from your CSV header columns. Click Continue.
![Contact import option](/images/audience/6179a82de54fd.jpeg)

1. Click Continue to confirm you have consent to add this list
![File browser dialogue](/images/audience/6179a82e7f2f0.jpeg)
You will be alerted once the process is complete. Once finished, you'll be able to see your new contacts under the active subscribers list. For now, fields that include dates/times must be added in yyyy-mm-dd hh:mm:ss format, otherwise the field will be replaced with N/A.
![Field mapping interface](/images/audience/6179a82f2d3ec.jpeg)
![Consent confirmation dialogue](/images/audience/6179a82fc8157.png)
</Stepper>

### Importing an Individual Contact

![Individual contact import process](/images/audience/import_a_contact.gif)

<Stepper>

1. Go to Contacts

1. Click on the circular button with the + sign

1. Click Add a contact
![Navigate to Contacts](/images/audience/6179a83108dc6.jpeg)

1. Fill in the contact information below and click Save. All attributes that are in the list will be available to fill
![Single contact add option](/images/audience/6179a8316584b.png)

1. Alternatively, click Save and add another, to import a new contact
</Stepper>

## Tips and Recommendations
We don't want to overstate it, but this can't be emphasized enough; your recipients must have subscribed to your list online and chosen to receive one or more types of emails. With everything in order, it's now time to start sending emails to your contacts!

#### Excel Tip #1
Some programs will import your data and combine fields like first name and last name into the same column. If this happens to you, make sure to select the "space" and "comma" separators in the options provided when opening a CSV from an external source. This will separate your data into different columns instead of grouping all information into a single field.

#### Excel Tip #2
Replace (Ctrl + h for Windows users, CMD+SHIFT+H for Mac users). Sometimes imports can get stuck because your files are full of unwanted punctuation. Think of Replace as search and destroy for stray characters. In the Edit menu, select Replace or press Ctrl + h on your keyboard (CMD+SHIFT+H for Mac), in the "Find:" field type what you want to mass replace, leave the "Replace with" field empty and click "Replace All".

#### Excel Tip #3
Save your CSV file in Unicode UTF-8 format, as this is the default for most online databases.

## Important Notes
- **Anti-spam compliance**: You must have explicit consent from all contacts before adding them to your list
- **Data quality**: Make sure your CSV file is properly formatted with correct email addresses
- **Field mapping**: Make sure to properly map your CSV columns to the appropriate contact fields during import

## Troubleshooting

**CSV import fails or shows errors**

- Make sure the file is saved as CSV, not Excel format
- Check for special characters or line breaks in the data
- Verify email addresses are properly formatted
- Remove any blank rows or columns from the file

**Import stuck on processing**

- Large files can take 30+ minutes to process
- Check if file size exceeds the 10 MB limit
- Try splitting large imports into smaller batches
- Ensure stable internet connection during upload

**Contacts don't appear after import**

- Check if emails already exist as unsubscribed
- Verify the import completed successfully
- Look for contacts in the suppression list
- Review the import report for skipped contacts

**Field mapping issues**

- Make sure CSV headers match attribute names
- Check for extra spaces in column headers
- Create missing attributes before import
- Use simple headers without special characters

**Duplicate contacts are created**

- Email addresses are case-sensitive
- Check for trailing spaces in the email column
- Ensure consistent formatting between imports
- Review existing contacts before importing

**Date fields not importing correctly**

- Use YYYY-MM-DD format for dates
- Check that locale settings aren't conflicting
- Make sure date columns are properly mapped
- Verify dates are valid (no future birth dates)

## Related Articles

- [Create and manage a contact list](/en/docs/audience/managing-contact-lists) - Create lists for imports
- [Add attributes to your list](/en/docs/audience/adding-attributes-to-your-list) - Import custom fields
- [Create and use tags](/en/docs/audience/using-tags-to-track-engagement) - Tag imported contacts
- [Set up a subscription confirmation email](/en/docs/audience-building/subscription-confirmation-email) - Confirm imported contacts  
- [Getting started](/en/docs/first-steps) - Getting started guide