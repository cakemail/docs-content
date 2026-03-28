# Tracking Customer Journeys with Custom Attributes

<Callout type="info" title="Premium Feature">
  Custom attributes in automations are available exclusively with Premium plans. To unlock this powerful feature, click **Upgrade Plan** in your account menu.
</Callout>

## Description

Using the automation tool, you can configure actions that automatically update a recipient's custom attribute when another step is taken, such as clicking a link or opening an email. We'll show you how to do this in this article.

## Why this is important
You can use this action to determine which path to have your subscribers take during your onboarding process and create segments in your list. You can also add this to an existing automation to change a customer's attribute based on a specific action in the flow.

*Related guides:*
- [Creating an automation with branching conditions](/en/docs/automations/creating-an-automation-with-branching-conditions)
- [Creating a contact list segment](/en/docs/audience/creating-dynamic-segments)

## Step-by-step instructions

<Stepper>

1. Click on Automations.

1. Click on the + sign at the top right of the page.
You can also create it from the Create button

1. In the **Select a starting point** menu, you can use the predefined automation, create a new template from scratch, or use one you've already saved
![Select automation starting point](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choose the list this automation should be linked to
![Choose list for automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choose a name for your automation (this name will only appear in the platform)
![Name your automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. You can select a marketing goal from the list below (so we can make better recommendations for you)
![Select marketing goal](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. You'll then be on the **Flow Creation** page. Click on the **+** sign to select the condition in the automation flow
![Click plus sign in automation flow](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Add branching conditions
![Add branching condition to flow](/images/automations/A1E2044B-629A-4B0B-A1DC-C691A43D1560.png)
*Reference: Creating an automation with branching conditions*

1. Add the **Update custom attribute** action
![Select Update custom attribute action](/images/automations/934BB99B-18DC-4E82-BFA8-3ACA98EE38EE.png)

1. Select the custom attribute and specify its new value
![Configure custom attribute update settings](/images/automations/917CF07D-5A47-49E9-A144-44EC5D180009.png)

1. The determined attribute will be updated if the contact matches the branching condition
![Complete automation flow with attribute updates](/images/automations/DAA530AE-A20D-4625-92EF-A0F9FD584CD9.png)

1. Review your campaign and activate it
![Activate automation toggle button](/images/automations/EE3B04B5-9975-4D99-A90B-ECD93F39152D_4_5005_c.jpeg)
The custom attribute automation is now properly configured; you can now exit the editor!
![Exit editor view](/images/automations/E01EE1C0-31F2-4597-BA57-911EBFC77E8E_4_5005_c.jpeg)
Use this feature to create and track customer journeys and use this information to create segments that will allow you to better target and personalize your campaigns.
</Stepper>

## Troubleshooting

**Custom attributes don't update**

- Check that the custom attribute exists in your contact list settings
- Verify that the attribute data type matches the value being set
- Ensure the automation is activated and trigger conditions are met

**Incorrect values are set**

- Check the branching logic leading to the update action
- Test with sample contacts to verify the correct path is followed
- Check for conflicting automations updating the same attribute

**Segmentation doesn't work after updates**

- Allow time for attribute updates to propagate (usually instant)
- Refresh your segment criteria after making changes
- Verify segment conditions match exact attribute values

**Performance issues with large lists**

- Batch process attribute updates during off-peak hours
- Limit the number of simultaneous attribute updates per contact
- Consider using API for bulk attribute updates instead of automation

## Related articles

- [Creating an automation with branching conditions](/en/docs/automations/creating-an-automation-with-branching-conditions) - Build journey paths
- [Adding attributes to your list](/en/docs/audience/adding-attributes-to-your-list) - Create journey markers
- [Understanding email automation](/en/docs/automations/understanding-email-automation) - Automation overview
- [Creating a segment](/en/docs/audience/creating-dynamic-segments) - Segment by journey stage
- [Tracking campaign performance](/en/docs/analytics/tracking-campaign-performance) - Measure journey success