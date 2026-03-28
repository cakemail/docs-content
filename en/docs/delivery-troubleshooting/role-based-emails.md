# Role-based Emails

## Description

Role-based email addresses (like admin@, help@, sales@) are addresses that are not associated with a particular person, but rather with a company, department, or group. These addresses are not intended for personal use as they typically include a distribution list of multiple recipients.

## Why it's important

It's not surprising that these are choice targets for spammers: easily obtained from the internet. Senders with a high percentage of role-based accounts on their list(s) are at higher risk of being blocked for using a harvested or purchased list.

### Key issues:

- **Distribution lists**: Since role-based accounts are typically sent to more than one person, it's difficult to prove consent for each recipient
- **Spam traps**: Honeypot spam traps use role-based accounts to blacklist senders who email them
- **Automatic blocking**: By default, blacklist providers like Spamhaus will treat any email sent to these addresses as spam since they report it was obtained and used without permission
- **Reputation impact**: Using role-based accounts increases the risk of spam complaints and reduces sender reputation

## Your email provider's protection

We maintain a master suppression list of over 400 common role-based addresses. While the complete list is not made public, we can tell you that it's updated frequently to ensure our clients maintain a high level of email delivery.

## Related articles

- [Mastering deliverability basics](/fr/docs/delivery-troubleshooting/email-deliverability) - Best practices
- [Managing account suspensions](/fr/docs/delivery-troubleshooting/account-suspensions) - Role-based risks
- [Creating and managing a contact list](/fr/docs/audience/managing-contact-lists) - Avoid role-based addresses
- [Importing contacts](/fr/docs/audience/importing-contacts-into-your-lists) - Filter role-based emails
- [Understanding complaints, bounces and unsubscribes](/fr/docs/analytics/email-bounces) - Role-based email complaints