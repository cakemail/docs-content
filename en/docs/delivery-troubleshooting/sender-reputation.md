# Sender Reputation

## Description

The part of an email address that follows the @ symbol is known as the domain. The most popular email providers for personal emails are Gmail, Outlook, and Yahoo. Organizations and brands, however, generally have their own email domains in a business or institutional context.

## Why it's important

From your recipient's perspective, the first impression you give with an email address like "@gmail.com" is not valuable for your organization or brand. Similarly, it's difficult to recognize the sender of the message at a glance with an email like this. Additionally, you cannot prove your identity, making it difficult for you to build trust with your audience.

A Gmail or Outlook address can be created by anyone at any time. So, in essence, it's clearly impractical for a potential client to verify that you are who you claim to be without seeing an email address that proves your identity. For example, if you use a sender address that ends with @yahoo.com to send a newsletter via an email marketing service, Yahoo! considers that you are impersonating the company, even if you are the legitimate owner.

## Deliverability issues caused when using free email addresses

Yahoo! and AOL have asked recipients to reject any email that is not sent via their own email client or by their employees, causing the emails you send to bounce. Similarly, other free webmail addresses might redirect emails that are not sent by their employees to SPAM and Junk folders.

## Using your own private email address domain

1. **Decide on a domain and register it**

Keep a consistent identity with your recipients by ensuring it relates to your brand and website. You'll improve your email deliverability by using an email address with a domain you own.

2. **Choose the right domain provider when purchasing a domain email address**

Find one that suits you. Here are some tips that might prove useful when choosing where to register it:

- You should look for a domain with helpful customer support to help you set up your domain and email address
- Make sure it includes WHOIS Privacy so your contact information is secure
- Make sure you have full control over your domain name, in case you want to change services

3. **Authenticate your domain**

To prove who you are, make sure to authenticate your email address.

4. **Change your sender domain**

With a recognizable and authenticated domain that belongs to you, you can now safely change the sender email address for campaigns.

## Troubleshooting

**I can't verify domain ownership**

- Double-check that you've added the DNS records exactly as provided (no spaces or extra characters)
- Allow 24-48 hours for DNS propagation before retrying verification
- Use DNS lookup tools to confirm your records are visible
- Contact your domain registrar's support if records aren't saving correctly

**My emails are bouncing after switching from Gmail to my domain**

- Ensure SPF, DKIM, and DMARC records are properly configured
- Gradually warm up your new sending domain with small volumes
- Verify that your "from" address actually exists and can receive replies
- Check that your domain isn't brand new (less than 30 days old)

**Domain authentication keeps failing**

- Confirm you're adding records to the correct DNS zone
- Check for typos in the authentication records
- Make sure you don't have conflicting SPF records
- Remove any old or duplicate authentication records

**My domain provider doesn't support email hosting**

- Use a separate email hosting service (Google Workspace, Microsoft 365, etc.)
- Set up email forwarding to another address you control
- Consider using a subdomain specifically for email marketing
- Ensure MX records are properly configured for your email host

## Related articles

- [Authenticating my domain with SPF DKIM and DMARC](/fr/docs/senders/authenticating-domains) - Complete setup
- [Setting up and managing sender emails](/fr/docs/senders/managing-senders) - Configure senders
- [Mastering deliverability basics](/fr/docs/delivery-troubleshooting/email-deliverability) - Deliverability overview
- [Fixing emails going to spam](/fr/docs/delivery-troubleshooting/spam-and-promotions-tab) - Improve reputation
- [Getting started](/fr/docs/first-steps) - Initial setup