# Spam and Promotions Tab

## Description

There are several factors that can direct your email to your junk folder instead of directly to your inbox. Check the following to improve deliverability.

## Why It's Important

Avoiding certain practices that could be considered spam, such as using misleading subject lines, sending unsolicited emails, or ignoring unsubscribe requests, helps protect your sender reputation and ensures your messages reach the inbox.

## Content Guidelines

### Avoid Spam Words
Avoid overusing "SPAM" words (Free!, gambling-related terms, too many exclamation points, ALL CAPS), specially in the object and the preheader.

### Image Coverage Guidelines
- Maximum 40% image coverage. We recommend having multiple smaller images with clear and descriptive alt text
- Minimum 60% text coverage
- Not all images touching each other
- At least 400 characters of text

According to anti-spam law, all emails must contain some form of text (even if it's a simple "hello"). But sending a MOSTLY text email, such as a large image without any text or links will certainly make your emails identified as spam by some email providers.

## Benefits of Proper Image/Text Balance

This will help by:
- Preventing the email from being flagged as spam
- Encouraging people to display images
- Helping email loading times

## Best Practices

1. Follow best practices and use a double opt-in process
2. Test your form signup process by signing up yourself to the newsletter and see where it lands
3. Make sure your recipients add you to their whitelist or address book

4. Ensure your recipients click "always display images from this sender" – this will let the email service know you are a trusted sender

## Troubleshooting

**My emails still go to spam after following all guidelines**

- Check your sender reputation using tools like Google Postmaster or Microsoft SNDS
- Verify that your domain authentication (SPF, DKIM, DMARC) is properly configured
- Review recent campaign metrics for high complaint or bounce rates
- Consider warming up your sending reputation with smaller, engaged segments first

**Images don't display even with proper text ratio**

- Ensure image file sizes are optimized (under 100KB per image recommended)
- Use standard image formats (JPG, PNG, GIF)
- Host images on a reliable and fast server
- Add descriptive alt text for all images

**Recipients report emails as spam despite subscribing**

- Review your signup process to ensure clear expectations were set
- Check if your email frequency matches what was promised during signup
- Send a re-engagement campaign to confirm subscriber interest
- Consider implementing preference centers for frequency and content choices

**Different email providers treat my emails differently**

- Test your emails across multiple providers before sending
- Monitor delivery rates by domain (Gmail, Yahoo, Outlook, etc.)
- Adjust content or sending patterns based on provider-specific issues
- Gradually build sender reputation with each provider

## Related Articles

- [Authenticate my domain with SPF DKIM and DMARC](/en/docs/senders/authenticating-domains) - Improve reputation
- [Master the basics of deliverability](/en/docs/delivery-troubleshooting/email-deliverability) - Inbox placement
- [Domain blacklisting](/en/docs/delivery-troubleshooting/domain-blacklisting) - Check blacklists
- [Understanding complaints, bounces and unsubscribes](/en/docs/analytics/email-bounces) - Spam complaints
- [Test your campaign](/en/docs/campaign-creation/testing-your-campaign) - Test spam scores