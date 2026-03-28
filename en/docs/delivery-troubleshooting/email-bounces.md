# Email Bounces

## Description
A bounce occurs when an email delivery attempt fails. A "soft" bounce is a temporary error that does not remove the recipient from the mailing list, but delays delivery to that person. When an email address or domain has been determined to be unreachable after a single attempt, the message is considered a "hard bounce."

## Why it's important

There are several different types of bounce notifications such as hard bounces, soft bounces, blocked email, etc. Understanding each of these types will help you identify the best way to handle them and take the best course of action for the health of your lists.

### Types of bounces and consequences.

#### Soft bounce (bounce_sb)
When an email message reaches the recipient's mail server but is returned as undelivered, it is considered a soft bounce. In some cases, the recipient's inbox might be full, so it might be delivered later. Three delivery attempts will result in a hard bounce.

#### Transient bounce (bounce_tr)
Often, the sender's email server generates a transient bounce, informing the sender that the message was not delivered but the server is trying again; this will continue until two days have elapsed since the message was sent. However, there is generally no cause for concern with transient bounces. Also, you might receive the following message: Warning: message still undelivered after 4 hours.

#### Address change (bounce_ac)
An Address Change response indicates that the recipient has changed their address and notifies senders of the change.

#### Auto-reply (bounce_ar)
The recipient's email client generally sends an auto-reply (usually in the form of an out-of-office notice). These responses indicate that an email recipient is temporarily unavailable, unlike bounces. These notifications are useful when sending time-sensitive information, as they alert you that the recipient might not see it until later. Otherwise, they can be safely ignored.

#### Challenge/Response (bounce_cr)
A Challenge/Response is a message sent by special filtering software that only allows messages from known senders to be accepted. This type of filter automatically sends a response with a challenge (a question or required action) to the email sender. The message will not be delivered if the challenge is not completed correctly.

#### DNS failure (bounce_df)
This indicates that a DNS problem has temporarily prevented email delivery to an address.

#### Hard bounce (bounce_hb)
A hard bounce is an email message returned to the sender due to an invalid recipient address. The domain name might not exist or the recipient might not be known, resulting in a hard bounce.

#### Mail blocked (bounce_mb)
This indicates that the recipient's email server is blocking your email. You might see the following messages:

– 550 Message REFUSED by peer

– 552 Blocked by filters.

#### Full mailbox (bounce_fm)
A full recipient email box prevents the email server from delivering the message to the recipient.

#### No bounce (bounce_none)
A legacy bounce type that is no longer in use. It was used when the bounce was unknown.

## Troubleshooting

**My hard bounce rate has suddenly increased**

- Check if you've recently imported a new list that wasn't properly validated
- Look for typos in manually entered email addresses
- Verify that your list hasn't been compromised with fake or old addresses
- Run your list through an email validation service before your next send

**Soft bounces keep happening for the same addresses**

- Monitor if these addresses convert to hard bounces after three attempts
- Check if specific domains are consistently soft bouncing (may indicate blocking)
- Consider removing addresses that soft bounce for more than 3-4 campaigns
- Verify that the recipient's email server isn't treating you as spam

**I'm frequently getting "full mailbox" bounces**

- These recipients may have abandoned their email accounts
- Consider sending a re-engagement campaign to verify interest
- Remove addresses that consistently show "full mailbox" for 30+ days
- Monitor if this happens more with certain email providers (could indicate blocking)

**Challenge/Response bounces are preventing delivery**

- Manually complete challenges only for high-value recipients
- Consider alternative communication methods for these contacts
- Add a note in your CRM about these special requirements
- Evaluate if maintaining these contacts is worth the manual effort

## Related articles

- [Understanding complaints, bounces and unsubscribes](/fr/docs/analytics/email-bounces) - Bounce metrics
- [Using the suppression list](/fr/docs/account-settings/suppression-lists) - Managing bouncing contacts
- [Mastering deliverability basics](/fr/docs/delivery-troubleshooting/email-deliverability) - Reducing bounces
- [Understanding contact status](/fr/docs/audience/contact-status) - Bounce status
- [Importing contacts](/fr/docs/audience/importing-contacts-into-your-lists) - Clean list imports