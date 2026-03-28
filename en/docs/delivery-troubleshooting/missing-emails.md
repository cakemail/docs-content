# Missing Emails

## Description

Emails that don't arrive in the inbox can be frustrating, whether you're the sender or the recipient. There are several factors that could prevent an email from being delivered or seen. This guide will walk you through the steps to troubleshoot and resolve the issue.

## Why it's important

Emails need to be delivered efficiently, so you need to know what can prevent them from reaching their intended recipients. Essentially, email marketing involves more than simply writing an email and clicking send. For it to work, it relies heavily on reputation, valuable content, an engaged subscriber list, and an interactive marketing platform that can facilitate delivery, all of which are elements that influence delivery effectiveness.

**Additional note:** A common factor affecting deliverability is domain authentication. Make sure your domain is authenticated to avoid potential delivery issues. Learn more here.

## Step-by-step troubleshooting process.

<Stepper>

1. Confirm the email was sent
First, verify that the email was actually sent by checking if the contact is actually part of your list and what their status is. If they're not marked as Active, this means they cannot be sent to.
**How to check:**
- Navigate to your **Campaign > Contact Activity > Sent to** 
- Check if the contact is present in your list
- If the email wasn't sent, it's likely due to a contact status issue
![Missing emails troubleshooting interface screenshot](/images/delivery-troubleshooting/contact-activity-status.png)

1. Review contact status
If the contact didn't receive your emails, check their status in your list. If the status is other than active, then they're probably not receiving your emails:
**Common status issues:**
- **Unsubscribed**: If the contact is unsubscribed, get written proof that they want to resubscribe, then escalate it to your service provider
- **Hard bounce**: A hard bounce indicates the address is invalid and no longer exists
- **Spam complaint**: If the status shows "FBL", then it's a SPAM complaint. Get written proof that the contact wants to resubscribe, and escalate it to our support team
![screenshot](/images/delivery-troubleshooting/contact-status-issues.png)
</Stepper>

### 3. Check your suppression list

It's possible that the contact is on your suppression list. **How to check:**
- Go to **Account > Suppression List** 
- See if the address is listed
- If you have proof that the person wants to receive emails but was suppressed by mistake, simply remove them from the suppression list

![screenshot](/images/delivery-troubleshooting/remove-from-suppression.png)

### 4. Determine if the contact has received emails before

If the recipient has received emails from you in the past, but not this time, this can help narrow down the problem:
- **Previous success**: Indicates the email address is valid
- **Recent issues**: May point to delivery or spam filtering problems
- **Pattern analysis**: Check if multiple contacts are affected

## Common causes of missing emails

- **Invalid email addresses**: Hard bounces indicate non-existent addresses
- **Spam filtering**: Emails caught by spam filters
- **Domain authentication issues**: Unauthenticated domains may be blocked
- **Suppression list**: Contacts erroneously added to suppression
- **Contact status**: Unsubscribed or complained contacts won't receive emails

## Next steps

If emails are still missing after following these steps:
1. **Contact support**: Provide specific details about the missing emails
2. **Domain authentication**: Ensure your sending domain is properly authenticated
3. **List hygiene**: Regular list maintenance prevents delivery issues
4. **Delivery testing**: Send test emails to identify patterns

## Related content

## Troubleshooting

**Contact shows as "sent to" but claims they didn't receive it**

- Ask them to check spam/junk folders and other email tabs (Promotions, Updates)
- Verify the email address is typed correctly with no spaces or extra characters
- Check if their email provider has aggressive filtering (corporate emails especially)
- Send a test email from a personal email to confirm their address works

**Multiple contacts from the same domain aren't receiving emails**

- The domain might be blocking or filtering your emails at the server level
- Contact their IT department to whitelist your sending domain
- Check if you're on domain-specific blacklists
- Consider using a different FROM address or subdomain for this client

**Emails were delivered before but suddenly stopped**

- Review if your sending patterns have changed (volume, frequency, content)
- Check if your domain authentication has expired or changed
- Look for recent high bounce or complaint rates that damaged reputation
- Verify your account isn't under review or suspended

**Contact is active but still not receiving emails**

- Double-check they're not on your suppression list
- Verify they haven't created email rules that automatically delete or move your emails
- Check if they have your domain blocked at the email client level
- Consider that their inbox might be full or over quota

## Related articles

- [Experiencing email delivery delays](/fr/docs/delivery-troubleshooting/delivery-delays) - Delayed vs. missing
- [Fixing emails going to spam](/fr/docs/delivery-troubleshooting/spam-and-promotions-tab) - Check spam folder
- [Testing your campaign](/fr/docs/campaign-creation/testing-your-campaign) - Test delivery
- [Understanding campaign reports](/fr/docs/analytics/understanding-campaign-reports) - Check delivery stats
- [Managing email bounces](/fr/docs/delivery-troubleshooting/email-bounces) - Bounce issues
