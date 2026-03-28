# Importing Your HTML Code

## Description

If you want to import HTML code written outside of our tool, you can paste it into our editor with this option. The email can be modified using an HTML editor.

## Why It's Important

You can design your own HTML template and import it into the editor to give you more options on how your emails look. Once you've imported a custom template, you can modify it and use it in future campaigns to maintain that familiar look you want for your brand.

## Step-by-Step Process:

<Stepper>

1. **Select the "Start with your own code" option** when creating a new campaign.

1. **Paste your code** into the black section of the page.

1. **Click "Upload and Edit"**
![](/images/email-templates/Paste_your_code.png)
</Stepper>

## Benefits of HTML Import

- **Complete design control**: Use your own custom HTML templates
- **Brand consistency**: Maintain a familiar look across all campaigns
- **Advanced features**: Include custom CSS and advanced HTML elements
- **Professional templates**: Import professionally designed templates
- **Code reusability**: Save and reuse custom templates for future campaigns

## Best Practices

- **Test your HTML** before importing to ensure compatibility
- **Use clean and valid HTML** for best results
- **Include responsive design elements** for mobile compatibility
- **Validate CSS compatibility** with email clients
- **Keep reasonable file sizes** for faster loading

## After Import

Once your HTML is imported:
- You can modify it using the HTML editor
- Make necessary adjustments
- Save as template for future use
- Test across different email clients

## Troubleshooting

**My HTML looks different after import**

- Check if your CSS is inline - many email clients don't support external stylesheets
- Verify you're not using unsupported HTML5 or CSS3 features
- Remove JavaScript as it's not supported in emails
- Test with a CSS inlining tool before import

**The import button is disabled or not working**

- Make sure your HTML code is not empty
- Check for unclosed HTML tags that might break the parser
- Verify the code doesn't exceed size limits (typically 100KB)
- Try removing special characters or non-standard encoding

**Images are broken after import**

- Use absolute URLs for all images (https://... not /images/...)
- Ensure the image hosting server allows hotlinking
- Check that image URLs don't require authentication
- Verify images are in web-compatible formats (JPG, PNG, GIF)

**Responsive design isn't working**

- Confirm media queries are properly formatted
- Check if the email client supports media queries
- Use table-based layouts as a fallback
- Test on real devices, not just browser responsive mode

## Related Articles

- [Using the email designer](/en/docs/campaign-creation/using-the-email-designer) - HTML editing mode
- [Adding anchor links](/en/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - HTML techniques
- [Saving campaigns as templates](/en/docs/email-templates/saving-campaigns-as-templates) - Save HTML templates
- [Working with smart templates](/en/docs/email-templates/working-with-smart-templates) - Alternative to HTML
- [Testing your campaign](/en/docs/campaign-creation/testing-your-campaign) - Test HTML rendering