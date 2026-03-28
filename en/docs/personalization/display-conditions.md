# Display Conditions

## Description

Any personalized content in a campaign that changes based on the data you have on your subscribers is called dynamic email content. This can be accomplished by adding attributes to the mailing list and grouping people by shared characteristics like location, gender, and age, for example, which can affect the display of email content for each recipient. In this article, we'll focus specifically on how to set up display conditions for your blocks based on recipient attributes.

## Why This Matters

Dynamic email content provides subscribers with a more personalized experience. The trend today is that users willingly share personal data with brands in exchange for a highly personalized user experience. By adopting this approach, you can improve your users' engagement, build lasting relationships with your audience, save time, and therefore increase revenue.

## Step-by-Step Instructions

Adding display conditions to your list is as easy as following these steps:

<Stepper>

1. **Add an attribute to your contact list**
For more information on adding attributes to your list, see our article.
![Add attribute to contact list](/images/campaign-creation/6179a7af34501.jpeg)

1. **Select the Campaigns tab**
![Select Campaigns tab](/images/campaign-creation/6179a7b011439.jpeg)

1. **Click Edit Email** in your campaign menu (Alternatively, you can start by creating a new campaign)
![Click Edit Email in campaign menu](/images/campaign-creation/6179a7b073ff5.jpeg)

1. **Click Edit Email** in the email preview tab to access the email designer
![Click Edit Email in preview tab](/images/campaign-creation/6179a7b0d8aee.jpeg)

1. **Select the Rows menu section** in the email designer
![Select Rows menu section](/images/campaign-creation/6179a7b14efde.jpeg)

1. **Drag a row** into the email content and select it
![Drag and select a row](/images/campaign-creation/6179a7b19fc8a.jpeg)

1. **Select Add Condition** in the row properties menu
![Select Add Condition](/images/campaign-creation/6179a7b25ca49.jpeg)

1. Configure your display condition in the menu that appears.
![Configure display condition](/images/campaign-creation/6179a7b2c01ca.png)

1. Click Confirm when you have finished the configuration.

1. Preview the display condition by selecting the eye icon.
![Preview display condition with eye icon](/images/campaign-creation/6179a7b33d9e2.jpeg)

1. Select your row display conditions from the dropdown menu in Preview mode.
![Select row display conditions in preview](/images/campaign-creation/6179a7b39e724.jpeg)
</Stepper>

## The display condition has been set!

It will be displayed in the row properties menu.

![Display condition in row properties](/images/campaign-creation/6179a7b407d23.jpeg)

## Benefits of Display Conditions

- **Improved user engagement**: Content tailored to individual preferences increases interaction
- **Better relationships**: Personalized experiences build stronger connections with subscribers
- **Time savings**: Automated personalization reduces manual campaign creation
- **Increased revenue**: More relevant content leads to higher conversion rates
- **Enhanced experience**: Subscribers receive content that matters to them

## Common Use Cases

### Geographic Personalization
- Display location-specific offers
- Show regional event information
- Customize content by time zone

### Demographic Targeting
- Age-appropriate product recommendations
- Gender-specific messaging
- Interest-based content blocks

### Behavioral Segmentation
- Purchase history-based recommendations
- Engagement level-appropriate messaging
- Customer lifecycle stage content

## Best Practices

- **Start simple**: Begin with basic attributes like location or interests
- **Test thoroughly**: Preview campaigns for different attribute values
- **Provide fallbacks**: Include default content for subscribers without specific attributes
- **Monitor performance**: Track engagement across different personalized segments
- **Keep it relevant**: Only show conditions that add value for the recipient

## Technical Requirements

- **Attributes must be set up** in your contact list first
- **Subscribers need data** in relevant attribute fields
- **Default content** should be provided for empty attribute values
- **Testing is essential** to ensure proper display across segments

## Troubleshooting

**Display conditions not working as expected**

- Check that subscriber data exists for the attributes you're using
- Verify if attribute values match your condition criteria exactly
- Test with multiple subscriber profiles to identify patterns
- Ensure conditions are applied to the correct content blocks

**Content displays for wrong segments**

- Review your condition logic (AND vs OR operators)
- Check for conflicting conditions on nested elements
- Verify that attribute data types match condition requirements
- Test edge cases like empty or null attribute values

**Performance issues with complex conditions**

- Limit the number of conditions per campaign
- Avoid deeply nested conditional content
- Consider creating separate campaigns for vastly different segments
- Monitor campaign send speed for delays

**Subscribers see blank sections**

- Always include fallback content for each condition
- Check if required attributes are missing for some subscribers
- Verify that all condition branches have content defined
- Test preview with subscribers who have no attribute data

## Related Articles

- [Using Dynamic Content](/en/docs/personalization/using-dynamic-content) - Conditional content
- [Creating Dynamic Segments](/en/docs/audience/creating-dynamic-segments) - Target conditions
- [Adding Merge Tags to a Campaign](/en/docs/personalization/adding-merge-tags-to-a-campaign) - Conditional tags
- [Adding Attributes to Your List](/en/docs/audience/adding-attributes-to-your-list) - Condition fields
- [Creating an Automation with Branching Conditions](/en/docs/automations/creating-an-automation-with-branching-conditions) - Conditional flows