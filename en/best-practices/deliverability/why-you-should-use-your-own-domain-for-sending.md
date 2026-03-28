---
source: "https://support.cakemail.com/hc/en-us/articles/360056294614-Use-my-own-domain-in-the-sender-email-address-why"
---

# Why You Should Use Your Own Domain for Email Sending

When sending a newsletter using an email address ending in @yahoo.com or @google.com via any email marketing service, it's seen as impersonating Yahoo! or Google, even if you own that email address legitimately.

It's important to understand that sending from a non-authenticated domain can lead to serious delivery problems with all email providers, potentially preventing recipients from getting your emails in their Inbox.

## The Authentication Challenge

Failing to authenticate your domain opens the door to deliverability challenges for your emails. Without authentication protocols like SPF, DKIM, and DMARC in place, spammers can exploit your domain, tarnishing the legitimacy of your emails. Email providers, in turn, may view such messages with skepticism, increasing the likelihood of them being marked as SPAM or not reaching recipients' inboxes at all.

Authentication acts as a crucial verification layer, ensuring your emails are recognized as legitimate, trustworthy communications, and significantly enhancing their chances of successful delivery.

## Use your domain to enhance your email deliverability

When employing an email address associated with a domain you own, it's crucial to authenticate it. This authentication process serves as proof that you are a legitimate sender, reinforcing your email's credibility and increasing the likelihood of successful delivery. By taking this step, you not only establish trust with email providers but also ensure that your messages reach the intended recipients' inboxes reliably.

## Use my own domain in the sender email address – recommendations

When sending newsletters using our application, you should be using an email address with a domain you own, that you've authenticated. Here are a few additional recommendations for the domain itself:

- The domain itself should match the website where people signed up
- DNS should be setup to authenticate using SPF/DKIM
- Have working postmaster@ abuse@ addresses
- Public (non-private) WHOIS information
- Should not be more than 30 characters in length
- Be registered for a minimum of 30 days (new domains look suspicious and could get blacklisted on Spamhaus or Spam Eating Monkey)
- Should not contain unnecessary "-" dashes or dots "." (ie: info@this-email-is-from-our.marketing.department.abc.com)

## Resources

We have gathered up some resources to guide you through it:

- Authenticating my domain with SPF, DKIM and DMARC protocols
- Choosing the right sender email address
- You'll need DMARC authentication to send email to Gmail and Yahoo
- New Gmail protections for a safer, less spammy inbox

## Related Articles

- [Choosing the Right Sender Email Address](./choosing-the-right-sender-email-address)
- [Email Sender Reputation: How to Build and Maintain It](../advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Dedicated IP Addresses: When and Why You Need One](./dedicated-ip-addresses-when-and-why-you-need-one)