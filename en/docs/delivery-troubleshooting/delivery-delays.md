# Delivery Delays

## Description

Several factors influence the time required for a campaign to be delivered, including list size, server speed, and others. Progress indicators are available for all campaigns under the Campaign Outbox, so you can monitor delivery in real time.

## Why it's important

## Factors affecting delivery speed

Several factors can influence email delivery times:

### Technical factors:
- **List size**: Larger lists take more time to process and deliver
- **Server speed**: Server performance affects processing time
- **Network conditions**: Internet connectivity and network traffic
- **Email volume**: High-volume sending periods can cause delays

### External factors:
- **Recipient server load**: Receiving email servers may throttle incoming messages
- **ISP policies**: Different email providers have varying acceptance rates
- **Time of day**: Peak sending hours can result in slower delivery
- **Content analysis**: Anti-spam filtering processes can add processing time

## Monitor your campaign delivery

### Real-time tracking:
- **Campaign Outbox**: Progress indicators show delivery status
- **Real-time updates**: Monitor delivery in real time
- **Delivery statistics**: View completed vs. pending deliveries

### What to expect:
- **Small lists** (under 1,000): Generally delivered within minutes
- **Medium lists** (1,000-10,000): May take 30 minutes to several hours
- **Large lists** (10,000+): May take several hours depending on various factors

## When to contact support

If you believe your campaign should have been delivered already or an error has occurred, let us know.

### Signs of delivery problems:
- Campaign stuck in outbox for an unusually long time
- Error messages in delivery status
- Significant delays beyond expected timeframes
- Incomplete delivery without apparent cause

## Best practices for faster delivery

- **Authenticate your domain**: Properly authenticated domains often get priority
- **Maintain list quality**: Clean lists with low bounce rates process faster
- **Optimize sending times**: Avoid peak hours when possible
- **Monitor performance**: Regular monitoring helps identify issues early

## Troubleshooting

**My campaign has been stuck in the outbox for hours**

- Check if your account is under review or suspended
- Verify that your sending limits have not been exceeded
- Look for error messages in the campaign status
- Contact support if the campaign hasn't moved after 4 hours

**Some recipients received emails while others did not**

- Different ISPs process emails at different speeds
- Check if delayed recipients are from specific domains (Gmail, Yahoo, etc.)
- Verify that these addresses haven't bounced or unsubscribed
- Large providers may throttle delivery during peak hours

**Delivery is much slower than usual**

- Compare current list size to previous campaigns
- Check if you're sending during peak hours (9-11 AM, 2-4 PM local time)
- Verify that your domain authentication is still valid
- Consider if recent poor engagement metrics are affecting delivery speed

**How to speed up future deliveries**

- Send to engaged subscribers first (opened within the last 90 days)
- Split large lists into smaller segments sent at different times
- Avoid sending during typical peak hours when possible
- Maintain good list hygiene to reduce processing of bad addresses

## Related articles

- [Troubleshooting missing emails](/fr/docs/delivery-troubleshooting/missing-emails) - Related issue
- [Mastering deliverability basics](/fr/docs/delivery-troubleshooting/email-deliverability) - Improve delivery speed
- [Understanding campaign reports](/fr/docs/analytics/understanding-campaign-reports) - Track delivery times
- [Managing under review warnings](/fr/docs/delivery-troubleshooting/under-review-warnings) - Cause of delay
- [Testing your campaign](/fr/docs/campaign-creation/testing-your-campaign) - Test delivery