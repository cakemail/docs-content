# My email hasn't been received by...

## Description

Sometimes, a contact may report that they didn’t receive your email. Before escalating the issue to our support team, please follow the steps below to quickly identify and resolve the most common delivery problems.

## Why It’s Important

Email delivery can fail for many different reasons — from incorrect contact status to filtering by mailbox providers. By reviewing these key checks first, you can often fix the issue immediately and help ensure your messages consistently reach the inbox.

## Step-by-Step Instructions

<Stepper>

1. Check if the contact is **active** in the list
2. Confirm if the email has been sent:
   Campaign > Contact activity > Sent to > Check if the contact is in the list

3. Ask recipient to check for the email in Spam folder, Under Gmail Promotion or Updates tabs, in Trash 

4. Check in your suppression list

   Account > Suppression list

**Added manually:** If you have a proof that the person wants to subscribe, and it has manually been put in the suppression list, just delete it from the suppression list

**FBL** That means the subscriber has filled a spam complaint when they received your email. If they want to resubscribe, you need get a written proof the contact saying they want to resubscribe and escalate the request to your service provider with your proof.

5. Have they received emails from you before, or is it the first time it was not received?

6. Have they ever complained, unsubscribed, forwarded an email received from you?

​	If not: check if the status of the contact in your list: if it’s unsubscribe or hard bounce

​		**If it’s unsubscribed**: get a written proof the contact wants to resubscribe and escalate it to your service provider

​		**If it’s hard bounced**: it means the address is invalid and no longer exist

7. Is it a role account? (role accounts are emails that do not belong to a person, but typically to a group or department such as sales@ support@ marketing@ etc. These emails are suppressed by default because they have a higher likelihood of triggering a blacklisting given they are so publicly available. If you can prove opt-in for these emails, you will need to make a request to have it whitelisted)
8. If you are using your own domain: make sure you have **authenticated your domain** since it can cause emails to be blocked by providers like Gmail, Yahoo, Hotmail, etc..

​	If not authenticated: start by doing your authentication, it will make a huge difference

9. Are all the emails not received being sent to the same company or domain? This mean they can be blocked by an internal monitoring/antivirus tool. You need to ask them to ask their IT department or email provider to whitelist your sender domain.

## Troubleshooting

- 

## Related Articles

- [Authenticate my domain with SPF DKIM and DMARC](/en/docs/senders/authenticating-domains) - Improve reputation
- [Master the basics of deliverability](/en/docs/delivery-troubleshooting/email-deliverability) - Inbox placement
- [Domain blacklisting](/en/docs/delivery-troubleshooting/domain-blacklisting) - Check blacklists
- [Understanding complaints, bounces and unsubscribes](/en/docs/analytics/email-bounces) - Spam complaints
- [Test your campaign](/en/docs/campaign-creation/testing-your-campaign) - Test spam scores