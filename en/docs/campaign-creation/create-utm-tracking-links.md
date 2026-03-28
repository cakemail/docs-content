# Creating UTM Tracking Links

## Description

UTM parameters are an essential tool for tracking the effectiveness of your email marketing campaigns. By adding unique codes to URLs in your campaigns, you can track clicks and conversions to your website from specific campaigns. In this article, we'll show you how to effectively use UTM parameters in your campaigns, including best practices to keep in mind, how to create UTM links, and how to add them to your campaigns.

A UTM link is a regular link with additional code added to track where clicks come from. This code includes details like source, medium, and campaign name. By using UTM links, you can track the effectiveness of your marketing campaign and where your website traffic is coming from. For example, if you see clicks coming from a UTM link with source "Facebook" and campaign name "sale", you'll know your Facebook sale promotion is working.

## Why It's Important

By using UTM links, you can gain valuable insights into your marketing campaign performance. You can see which sources and channels generate the most traffic and conversions, which ad variants perform best, and which keywords drive the most search engine traffic. This information can help you optimize your campaigns for better results.

## Step-by-Step Process

Here's an example of how you might use UTM links. Let's say you're launching an email campaign to promote a new product. By adding UTM parameters to the links in your emails, you can track how many people clicked on those links and how many of them ultimately converted to customers. Here's how you can do it:

<Stepper>

1. Create Your Campaign
Before you can add UTM links, you'll need to create your email campaign.

1. In the last step of the campaign creation process, select Campaign UTM Parameters to access the parameter fields.
![Screenshot of the add interface](/images/analytics/utm-parameters-1.png)

1. Fill in the UTM Parameter Fields
Once you've accessed the UTM parameter fields, you can start filling them out. The key parameters you'll want to include are:
- **Source:** This refers to the traffic source or platform where your campaign is running. For example, since you're launching an email campaign, your source might be "cakemail".
- **Medium:** This refers to the marketing channel you're using. For an email campaign, your medium would be "email".
- **Campaign Name:** This refers to the name of your campaign. In our example, this might be "product_launch".
- **Content:** This refers to the specific content or ad variant the user clicked on. This can be useful for testing different ad variants to see which performs best.
- **Term:** This refers to the keywords used by the user in a search engine. This can be useful for tracking the effectiveness of paid search campaigns.
![Screenshot of the creation interface](/images/analytics/utm-parameters-2.png)

1. Create Your UTM Link.
</Stepper>

## Following Best Practices

**Consistency is key:** Make sure to be consistent with spelling and capitalization. UTM parameters are case-sensitive, so using different variations of the same word can cause issues with tracking. Also, don't use spaces in your UTM parameters, as this can break the link.

**Use descriptive names:** Be descriptive in your naming conventions so it's easy to understand which campaign or channel a UTM parameter is associated with. For example, use "utm_campaign=spring_sale" instead of "utm_campaign=12345".

**Don't overdo it:** While UTM parameters can be beneficial, don't go overboard. Too many UTM parameters can clutter your URLs and make it difficult to track and analyze data effectively.

**Keep an eye on data quality:** Regularly review your UTM data to ensure it's accurate and relevant. If you notice any discrepancies or inconsistencies, investigate the issue and make necessary adjustments to your campaigns.

**Shorten UTM links:** Consider using a URL shortener to make your UTM links less visible. These links can become very long, especially if you add multiple parameters, so shortening the link can make it easier to use in your email marketing campaigns.

## Troubleshooting

**UTM parameters not tracking in analytics**

- Check that UTM parameters are properly formatted without spaces or special characters
- Verify your analytics platform (Google Analytics, etc.) is properly configured
- Ensure the destination URL is valid and tracking code is installed on the landing page
- Wait 24-48 hours for data to appear in analytics reports

**Links break after adding UTM parameters**

- Use only alphanumeric characters: letters and numbers
- Test all links before sending the campaign to ensure they work properly
- Use a URL validation tool to check for syntax errors
- Avoid using spaces in UTM values - use underscores or dashes instead

**Inconsistent campaign data in reports**

- Maintain a UTM naming convention document for your team
- Use lowercase for all UTM parameters to avoid case sensitivity issues
- Create a spreadsheet to track all UTM combinations used across campaigns
- Regularly audit your UTM usage to ensure consistency across teams

## Related Articles

- [Tracking Click Rate Activity](/en/docs/analytics/tracking-click-rate-activity) - Monitor link engagement
- [Understanding Email Click Rates](/en/docs/analytics/email-click-rates) - Analyze click performance
- [Tracking Campaign Performance](/en/docs/analytics/tracking-campaign-performance) - Comprehensive analytics
- [Using Zapier Integration](/en/docs/integrations/connecting-cakemail-with-zapier) - Connect to analytics tools
- [Understanding Campaign Statistics](/en/docs/analytics/understanding-campaign-reports) - Campaign metrics overview