# Adding Anchor Links to Email Content with HTML

## Description

This article uses HTML code to explain how to add an anchor link to the bottom of email content. This feature can help readers navigate email content and take action, such as signing up for a newsletter or following a link to a website.

For example, adding an anchor link to the bottom of email content can effectively engage readers and direct them to a specific action. By providing a clear call to action and making it easy for readers to follow through, you can increase the likelihood of achieving your marketing or communication goals.

## Why It's Important

Anchor links are essential for improving email navigation, especially in longer newsletters or digest-style emails. They enhance user experience by allowing readers to jump directly to sections of interest, reducing scroll fatigue and increasing engagement with your content. This feature is particularly valuable for emails with multiple topics, product showcases, or event schedules, as it helps readers quickly find relevant information.

## Step-by-Step Instructions

<Stepper>

1. Create an HTML Block
   - Create an HTML block in your email
   - Scroll to the bottom of your email content.

1. Insert the Anchor Tag
   Insert an anchor tag by typing the following HTML code:
   ```html
   <a name="bottom"></a>
   ```
   This code creates a location that the link will navigate to when clicked.

1. Create the Link Text
   - Type the text you want to use as a link, for example, "Click here for more information."
   - Highlight your typed text and click the "Insert Link" button in your HTML editor.

1. Set the Link Destination
   - In the "URL" field of the link dialog box, type "#bottom"
   - This will create a link and navigate to the location you created with the anchor tag
   - Click "OK" to create the link.

1. Save and Send
   - Save your email content and send the email to your recipients.

</Stepper>

### HTML Code Example

Here's an example of what the HTML code might look like for email content with a link to the bottom:

```html
<p>This is your email content.</p>
<p>Click <a href="#bottom">here</a> for more information.</p>
<a name="bottom"></a>
```

In this example, the anchor tag creates the location that the link will navigate to, and the href attribute in the link tag points to that location. When the reader clicks the link, it takes them to the bottom of the email content, where the anchor tag is located.

## Troubleshooting

**Anchor links don't work**

- Ensure anchor names don't contain spaces or special characters
- Use unique anchor names for each link destination
- Test in multiple email clients as some may not support anchors

**Links jump to wrong location**

- Verify that href="#anchorname" exactly matches the anchor name
- Check for duplicate anchor names in your email
- Place anchors before the content you want to link to

**Email client compatibility**

- Some email clients (like Gmail) may strip anchor functionality
- Provide alternative navigation methods for incompatible clients
- Test thoroughly in your target audience's primary email clients

**HTML code not displaying**

- Use the HTML content block, not a text block
- Ensure proper HTML syntax with closing tags
- Preview in email editor before sending

**Mobile navigation issues**

- Test anchor links on mobile devices
- Consider reduced screen size when planning anchor points
- Keep anchor link text large enough for mobile touches

## Related Articles

- [Using the Email Designer](/en/docs/campaign-creation/using-the-email-designer) - HTML editing mode
- [Importing Your HTML Code](/en/docs/email-templates/importing-your-html-code) - Working with HTML
- [Adding a Survey to a Campaign](/en/docs/campaign-creation/integrating-survey-forms) - Linking to sections
- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Campaign basics
- [Testing Your Campaign](/en/docs/campaign-creation/testing-your-campaign) - Testing anchor links