# Suppression Lists

## Description

A suppression list consists of email addresses that are automatically or manually added to prevent them from receiving emails from you in the future. For security reasons, certain email addresses are automatically added. It is not possible to remove these addresses from the suppression list.

- **Spam complaint:** subscribers who report an email as spam are immediately added to the "Do not send email" list
- **Unsubscribe request:** subscribers who have clicked on the [GLOBAL_UNSUBSCRIBE] link and do not want to receive future emails
- **Complaint:** subscribers who have complained about one or more emails they have received

## Why This Matters

The suppression list is a critical compliance and reputation management tool that protects both your sender reputation and your subscribers' preferences. By automatically preventing emails from being sent to addresses that have complained, globally unsubscribed, or marked your emails as spam, you maintain compliance with anti-spam regulations like CAN-SPAM and GDPR. This feature helps preserve your deliverability rates by ensuring you don't repeatedly send to recipients who don't want your emails, which would damage your sender reputation and could lead to being blacklisted by email providers.

## Step-by-Step Instructions

### Add an email address directly to the suppression list.

<Stepper>

1. Click on **Account** at the top right of the page to access account settings
![Click on Account menu](/images/audience/B923FA45-0313-405D-8508-D271D1FF75B1.png)

1. Select the **Suppression List** option from the menu
![Select suppression list](/images/audience/9FD70838-08D3-4A6D-B883-50E5F856B6CB_4_5005_c.jpeg)

1. To add an email or domain, click on **"Add email/domain"**. Note that you can only add one email or domain at a time
![Add email/domain button](/images/audience/mceclip0%20(1).png)
</Stepper>


### Add an email to the suppression list directly from the contact list:

<Stepper>

1. Select your contact list.

1. Check to mark your specific contact
![Select contact checkbox](/images/audience/C3735DFB-5FAA-4A80-88FE-32561E541047.png)

1. Click on **Actions**
![Click on Actions menu](/images/audience/94F72628-824A-4FE6-84D0-78B0227B9C39_4_5005_c.jpeg)

1. Select **Add to suppression list**
![](/images/audience/153270F1-661D-4A6E-8363-93B24545F921_4_5005_c.jpeg)
</Stepper>

## Removing email from the suppression list
Any email that has been put in the suppression list automatically by a complaint cannot be removed from it. If you need to have a contact removed from this list, you will need to contact the support team with the following information:

- Email you want to remove from the suppression list
- Proof that the customer wants to be active in your list (email with the contact's address and request to receive communications)

## Troubleshooting

**Unable to add an email to the suppression list**

- Enter one email or domain at a time
- Check proper email format
- Remove any extra spaces or characters
- Ensure you have administrator permissions

**Email still receives campaigns despite suppression**

- Check exact email address match
- Check if you're using email variants
- Allow 24-48 hours for full propagation
- Ensure suppression is account-wide

**Cannot remove an email from the suppression list**

- System-added emails cannot be removed
- Gather proof of contact consent
- Contact support with documentation
- Check the reason for automatic suppression

**Suppression list search not working**

- Try searching with partial email
- Check for typos in search query
- Use domain search for multiple emails
- Clear filters and search again

**Domain suppression not blocking all emails**

- Check correct domain format (example.com)
- Don't include @ symbol for domains
- Check subdomains requiring separate entries
- Ensure no spaces before/after domain

**High number of automatic suppressions**

- Review email content for spam triggers
- Check authentication (SPF/DKIM/DMARC)
- Monitor complaint rates
- Consider list hygiene practices

## Related Articles

- [Understanding contact status](/en/docs/audience/contact-status) - Suppression status explained
- [Removing a contact](/en/docs/audience/removing-a-contact) - Alternative removal method
- [Understanding complaints, bounces, and unsubscribes](/en/docs/analytics/email-bounces) - Automatic suppression
- [Including an unsubscribe link](/en/docs/campaign-creation/adding-unsubscribe-links) - Enable auto-suppression
- [Managing contacts](/en/docs/audience/updating-contact-information) - Contact management overview