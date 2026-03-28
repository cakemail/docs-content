# Under Review Warnings

## Description

If you're reading this, it's very likely that one of your sends has been flagged for review by our compliance team. While this experience typically only lasts a few minutes (for most), it can be concerning when you see your send is not in progress. Be assured there's a very good reason for this.

If our security system finds something in your send that it's unsure about, it automatically escalates it for additional review with our compliance team.

Depending on which version of our application you're using when this happens, you might see one of the following:

## How Does It Work?

You're seeing this because your send required additional examination before it could be sent.

Our system is built to protect the reputation of our network and enable our users to reach the inbox. If your account doesn't regularly meet the baseline statistics below, your account will have a higher probability of sends being held "Under Review":

- **Open rate of 15% or higher**
- **Hard bounce rate that never exceeds 5%**
- **Spam rate of no more than 0.1%**
- **Unsubscribe rate of no more than 1%**

**Tip:** Avoid sending campaigns that are image-only. Make sure your content is a balanced mix of image and text. Ensure your sender domain is authenticated and you meet the baseline-level statistics shown above. If you'd like help achieving these rates, please visit our Knowledge Base or contact the Cakemail Support team.

## Troubleshooting

**My campaign is stuck "Under Review" for hours**

- Contact support if the review exceeds 30 minutes
- Check if it's outside business hours - reviews may take longer during non-business hours
- Verify your account is in good standing and not flagged for previous violations
- Consider scheduling campaigns during business hours for faster review times

**I keep getting flagged for review on every campaign**

- Review your sending statistics to ensure they meet minimum requirements (15% open rate, less than 5% bounce rate, etc.)
- Authenticate your sending domain with SPF, DKIM, and DMARC
- Ensure your content has a good text-to-image ratio (avoid image-only emails)
- Clean your sending list to remove inactive or invalid addresses

**My legitimate campaign was rejected after review**

- Review the rejection reason provided by the compliance team
- Ensure your content doesn't contain spam trigger words or misleading subject lines
- Verify all links in your email are legitimate and not flagged as malicious
- Submit an appeal with clarification on your campaign's legitimate purpose

**How to avoid future "Under Review" flags**

- Maintain consistent sending patterns without sudden volume spikes
- Use double opt-in for all new subscribers
- Include a clear unsubscribe link in every email
- Regularly clean your list of inactive subscribers (no opens in 6+ months)

## Related Articles

- [Managing account suspensions](/en/docs/delivery-troubleshooting/account-suspensions) - Next escalation level
- [Master the basics of deliverability](/en/docs/delivery-troubleshooting/email-deliverability) - Avoid warnings
- [Understanding role-based emails](/en/docs/delivery-troubleshooting/role-based-emails) - Common warning trigger
- [First steps](/en/docs/first-steps) - Best practices
- [Creating campaigns](/en/docs/campaign-creation/creating-campaigns) - Compliant campaigns