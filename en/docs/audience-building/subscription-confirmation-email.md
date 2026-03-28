# Subscription Confirmation Email

## Description

Using subscription confirmation for your list will ensure that your list is clean and that all recipients have given their consent to receive your campaigns.

## Why This Matters

This approach is a best practice for deliverability when using a contact list you haven't sent to in a long time. This process will improve delivery by reducing complaints, removing invalid addresses, and increasing overall engagement for your list.

## Step-by-Step Instructions

If you create a double opt-in list and upload the contact list yourself, there are two options to reconfirm their subscription:

### Option 1: Create a New Confirmation List

<Stepper>

1. **Create a new double opt-in list**, you can name it "Confirmed Emails"
![Create a new double opt-in list](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-113.png)

1. **Create a subscription form** for this list
![Create a subscription form](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-114.png)

1. **Copy the URL link of the new form**
![Copy the form URL](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-115.png)
</Stepper>

### Option 2: Campaign with Confirmation Link

**Create a campaign** with a link to the form asking people to click if they want to subscribe.

#### Campaign Requirements

Your campaign should include the following essential elements:

- **Your logo** (ideally, in the top left corner)
- **Your physical address**
- **An unsubscribe link**

### Important Note About Preview Text:

If you have your logo in the top left corner of your email, the alt text on your logo will be the preview text, which displays in the email preview for many email clients. Otherwise, the preview text will be the first sentence of your email content.

## Benefits of Subscription Confirmation

- **Improved deliverability** through reduced complaints
- **Clean list maintenance** by removing invalid addresses
- **Higher engagement** from confirmed interested subscribers
- **Compliance assurance** with consent-based marketing
- **Better sender reputation** with email service providers

## Best Practices

- Use clear and compelling subject lines for confirmation emails
- Make the confirmation process simple and quick
- Explain the benefits of staying subscribed
- Set expectations for email frequency and content type

## Troubleshooting

**Confirmation emails are not being sent**

- Check that double opt-in is enabled for your list
- Check if confirmation emails are going to spam folders
- Ensure the sender email address is verified and authenticated
- Review if your account has sending restrictions

**Low confirmation rates**

- Make your confirmation email subject line clear and urgent
- Send confirmation emails immediately after signup
- Include clear instructions to check spam folder on signup page
- Consider shortening the confirmation link expiration time

**Subscribers say they never received confirmation**

- Check if their email provider is blocking automated emails
- Verify that the email address was entered correctly
- Look for bounced confirmation emails in your reports
- Test with different email providers to identify patterns

**Confirmation links don't work**

- Ensure links haven't expired (check your settings)
- Check if the link was modified by email security filters
- Check if the link is clicked multiple times
- Test links before sending to your entire list

## Related Articles

- [Creating an Automated Welcome Email](/en/docs/automations/creating-an-automated-welcome-email) - Post-confirmation
- [Default Sender Address and Language](/en/docs/audience-building/default-sender-address-and-language) - Sender settings
- [First Steps](/en/docs/first-steps) - Initial setup