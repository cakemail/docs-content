# Creating an Automation with Branching Conditions

<Callout type="info" title="Premium Feature">
  Branching conditions in automations are available exclusively with Premium plans. Upgrade your plan to create sophisticated, behavior-based email journeys.
</Callout>

## Description

By using branching conditions in automation, you can select the content to send to contacts who clicked on a link in an email versus contacts who didn't click on that link or clicked on another one. This article will show you how to set up this conditional automation.

## Why this is important
You can make your communications more relevant to your users by sending them different content based on their actions. In return, this will result in a better experience for them that is more tailored to their needs, and you can use this to improve your automation flow.

## Step-by-step instructions

Here are the steps you'll need to follow to complete this automation:

<Stepper>

1. Click on Automations.

1. Click on the + sign at the top right of the page.

1. In the **Select a starting point** menu, you can use the predefined automation, create a new template from scratch, or use one you've already saved
![Starting point options](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choose the list this automation should be linked to
![Select list for automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choose a name for your automation (this name will only appear in the platform)
![Name your automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. You can select a marketing goal from the list below (so we can make better recommendations for you)
![Select marketing goal](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. You'll then be on the **Flow Creation** page
There are two subdivisions found here:
   - Select a condition
   - Select an action
</Stepper>

### Select a condition.

<Stepper>

1. Click on the **+** sign to select the condition in the automation flow
![Add condition to automation flow](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Select the **If / Else** option to configure the automation with branching conditions
![Select If/Else branching condition](/images/automations/C90C90CA-E6E4-43EF-BE6A-8185894D0ACD_4_5005_c.jpeg)
Based on the conditions, contacts can follow a different path in the automation flow.
![Example automation flow with branching](/images/automations/C0B004B3-584F-4282-8609-FB951B82493B.png)
Click the toggle button at the top if you're in a flow, or go to the Automations page to activate this automation.
![Complete automation with branching paths](/images/automations/8BE1A670-0AE2-4891-B40E-1E7C23963F2F_4_5005_c.jpeg)
You have now completed your automation! Statistics will be collected for each email in your flow, which you can use to optimize it. Visit our automation article for a complete overview of the tool.
</Stepper>

## Troubleshooting

**Contacts don't follow expected branch**

- Check that condition logic is configured correctly (AND vs OR operators)
- Ensure tracking is enabled for links and opens
- Allow sufficient time for email engagement before branching

**Both branches execute**

- Ensure branches are mutually exclusive
- Check If/Else logic for overlapping conditions
- Test with a single contact to trace the flow path

**Conditions don't evaluate correctly**

- Confirm that data fields exist and are populated for contacts
- Check date/time conditions against contact timezone settings
- Verify custom attribute values match expected format

**Performance issues with complex branching**

- Limit nested branches to 3-4 levels deep
- Use clear naming conventions for each branch
- Consider splitting complex automations into multiple simpler flows

## Related articles

- [Understanding email automation](/en/docs/automations/understanding-email-automation) - Automation fundamentals
- [Creating a looping automation](/en/docs/automations/creating-a-looping-automation) - Repetitive workflows
- [Creating a segment](/en/docs/audience/creating-dynamic-segments) - Branch by segments
- [Adding attributes to your list](/en/docs/audience/adding-attributes-to-your-list) - Branch by attributes
- [Tracking customer journeys with custom attributes](/en/docs/automations/tracking-customer-journeys-with-custom-attributes) - Track branching paths
