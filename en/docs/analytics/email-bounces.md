# Email Bounces

## Description
Complaints, bounces, and unsubscribes all indicate the overall health and quality of your list.
## Why This Matters
They are a direct representation of your recipients' satisfaction with receiving your emails and affect your sender reputation.

If you regularly send engaging content to a list of people who expect to open your email, these numbers should be 0 (or very close). Every complaint or hard bounce you generate is a mark against you.

## Where to find this information
You will find this information represented as totals or percentages in your campaign report, but also next to each of your contacts.

## Bounces

**A "hard" bounce:** the address no longer exists (worse, maybe it never existed... Did you send a confirmation email?). If not addressed, these can have dramatic consequences for your account, sometimes even getting it suspended. As a result, all hard bounces will be removed from the list.

**A "soft" bounce:** the email is currently not available for a "temporary" reason. **If there are 4 soft bounces on a single email address, the email address will be automatically removed from the list.**

Your reports will provide you with very detailed information about your email bounces, including several different types of bounces such as: Full inbox, blocked email, or DNS failure.

### Bounce rate formula:
```
Total bounces / Total number of people you sent your email to
```

**Expected results:** 0% – 1%

**Hard bounce rate should always be below 1%**

### Variables:
- Industry type
- How current is your list?
- How frequently do you send to your list? The more often you send, the lower the rate for each campaign

## Unsubscribes

```
Total number of unsubscribes / Total number of people the email was sent to
```

You can expect a certain number of unsubscribes every time you send a campaign. The problem is a sudden spike. Understand that it's much better for someone to unsubscribe than to report you as spam. This has fewer consequences for your reputation.

**You should expect an unsubscribe rate below 1%.**

## Spam complaints

```
Total number of complaints / Total number of emails sent to specific Internet Service Providers
```

As soon as someone marks you as spam, they are permanently removed from the list.

**Expected results:** 0% – 0.1%

Use best practices to avoid complaints and send a test to yourself (see where it lands) before sending your campaign. Should never exceed 0.25% (1 out of 400 emails sent).

Keep in mind that ISPs look at these numbers too. If you consistently have average to critical bounce/spam levels, it's only a matter of time before your emails are sent to a recipient's junk folder and/or are permanently blocked.

## Troubleshooting

**High hard bounce rate (above 1%)**

- Immediately review your list source - purchased lists often have high bounce rates
- Implement double opt-in to verify email addresses upon signup
- Use an email validation service to clean your list before sending
- Remove inactive subscribers who haven't engaged in 6-12 months

**Sudden spike in spam complaints**

- Review recent changes to your email content or frequency
- Ensure your unsubscribe link is clearly visible and working
- Check if you're following proper permission-based marketing practices
- Consider re-engagement campaigns before increasing send frequency

**Soft bounces converting to hard bounces**

- Monitor reasons for soft bounces (full inbox, server issues, etc.)
- Try resending to soft bounces at different times of day
- Check if certain domains are consistently soft bouncing
- Review your sending reputation with major ISPs

**Unsubscribe link not working**

- Test the [UNSUBSCRIBE] merge tag in preview mode
- Check that the unsubscribe page is accessible and working
- Verify if custom unsubscribe URLs are properly configured
- Ensure one-click unsubscribe is enabled for better user experience

## Related Articles

- [Using the suppression list](/en/docs/account-settings/suppression-lists) - Manage unsubscribed contacts
- [Understanding role-based emails](/en/docs/delivery-troubleshooting/role-based-emails) - Avoid complaint triggers
- [Mastering deliverability basics](/en/docs/delivery-troubleshooting/email-deliverability) - Improve email delivery
- [Managing email bounces](/en/docs/delivery-troubleshooting/email-bounces) - Handle bounce issues
- [Including an unsubscribe link](/en/docs/campaign-creation/adding-unsubscribe-links) - Compliance requirements