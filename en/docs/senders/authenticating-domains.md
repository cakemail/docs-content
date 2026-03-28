# Authenticating Domains (DKIM, DMARC, SPF

## Description

Gone are the days of sending emails without worrying whether they'll be delivered. SPAM has existed for as long as email itself, making it difficult for recipients to tell what's real. What if legitimate senders could stand out and ensure their emails reach the inbox? That's where email authentication comes in.

It's important to note that some providers like Gmail and Yahoo now require users from a domain to be authenticated to be allowed to send to their domains. In this article, we'll guide you on how to ensure your emails land safely where they belong.

## Why it's important

Authentication prevents spammers from using your domain to send emails without your permission by employing protocols like SPF, DKIM, and DMARC to validate the legitimacy of your emails and improve delivery reliability. It's crucial to note that sending from an unauthenticated domain is known to cause significant delivery issues with all email providers, preventing many recipients from receiving your emails in their inbox.

If you don't authenticate your domain, the following message will appear for Gmail recipients:

![Gmail unauthenticated sender warning](/images/delivery-troubleshooting/delivery-troubleshooting-authenticating-my-domain-with-spf-dkim-and-dmarc-protocols-124.png)

## Step-by-step instructions

To do this, you'll need to access the DNS records for your domain with its hosting provider and add the correct DNS settings. You can follow this guide to set up authentication.

To discover where your domain is managed, contact the person or team that manages your website or email address.

<Stepper>

1. Click on your company name/email address in the top-right corner (this opens a dropdown menu), then click on Senders

1. Make sure you've entered your sender domain.
    It should appear in a yellow bar, meaning it is NOT authenticated. If you haven't entered your sender yet, it's time to choose and enter it.

1. Click Authenticate domain in the menu.

1. Instructions will appear on the page.
    You can also copy/paste the instructions to share with your IT manager.

1. You or your IT manager must enter the code in the appropriate fields *on the server where your domain is hosted*.

  Please note that this configuration must be completed **on your web hosting server** — not in the app.

1. This is a delicate operation. Make sure the code is **EXACTLY** what is required. Any space or "." or irrelevant change will make it not work.

1. Wait a few hours to let it propagate.
    Sometimes it takes up to 24 hours.

1. Come back and verify your code.
    The bar should be blue. If it's still yellow, please contact the support team with a screenshot of the server where you entered the entries.
    </Stepper>

## More information about SPF, DKIM, and DMARC

### SPF (Sender Policy Framework)

Sender Policy Framework (SPF) is an authentication standard that has existed since 2003 and works by publishing a list of IP addresses that are authorized to send on behalf of your domain. Receiving mail servers will use SPF to verify that messages sent from your domain were sent by one of these IP addresses.

### DKIM (Domain Keys Identified Mail)

DKIM provides a way to validate that the message content has not been altered and that it was actually sent by the domain it claims to be from.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)

The main advantage of DMARC is that it's the sender who controls what happens to spam sent using their domain, not the receiver. So you can tell the receiver to block mail you didn't send, and better yet, you get a report of mail that uses your domain without your permission - so DMARC is very powerful and is the gold standard in use today.

## Quick overviews

- [Click here for a quick overview of how SPF works by DMARCIAN](https://dmarcian.com/spf-explained/)
- [Click here for a quick overview of how DKIM works by DMARCIAN](https://dmarcian.com/dkim-explained/)
- [Click here for a quick overview of how DMARC works by DMARCIAN](https://dmarcian.com/dmarc-explained/)

## Troubleshooting

**SPF record validation fails**

- Check for duplicate SPF records (only one SPF record per domain allowed)
- Ensure SPF record starts with "v=spf1" and ends with "-all" or "~all"
- Verify there are no syntax errors or extra spaces in the SPF record
- Confirm you're not exceeding the 10 DNS lookup limit
- Use SPF validation tools to test your configuration

**DKIM signature doesn't verify**

- Ensure DKIM record is published on the correct subdomain
- Check for line breaks or spaces when copying the DKIM key
- Verify the selector name matches what's configured in Cakemail
- Wait 24-48 hours for DNS propagation after adding records
- Test with DKIM validators to identify specific issues

**DMARC policy not recognized**

- Confirm DMARC record is added to "_dmarc.yourdomain.com"
- Start with policy p=none before moving to quarantine or reject
- Ensure proper syntax: "v=DMARC1; p=none; rua=mailto:..."
- Verify email addresses in DMARC record are valid
- Use DMARC analyzers to validate your policy

**Authentication passes but emails still go to spam**

- Authentication is one factor; content and reputation matter too
- Review your sending practices and list hygiene
- Check if your IP or domain is on blocklists
- Ensure you're following email best practices
- Monitor DMARC reports for unauthorized use of your domain

**DNS changes don't take effect**

- Allow up to 48 hours for full DNS propagation
- Clear your DNS cache or use different DNS servers to test
- Verify changes with multiple DNS lookup tools
- Check if your DNS provider has additional caching layers
- Ensure you've saved changes correctly in your DNS management panel

**Multiple domains need authentication**

- Each sending domain requires its own authentication setup
- Subdomains may need separate configuration depending on setup
- Consider using include statements in SPF for multiple domains
- Plan DKIM selectors carefully for multi-domain configurations
- Implement DMARC gradually across all domains

## Related articles

- [Setting up and managing sender emails](/en/docs/senders/managing-senders) - Configure senders
- [Building sender reputation](/en/docs/delivery-troubleshooting/sender-reputation) - Why authenticate
- [Mastering deliverability basics](/en/docs/delivery-troubleshooting/email-deliverability) - Deliverability guide
- [Fixing emails going to spam](/en/docs/delivery-troubleshooting/spam-and-promotions-tab) - Authentication helps
- [First steps](/en/docs/first-steps) - Initial setup