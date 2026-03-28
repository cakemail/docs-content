# Creating a Looping Automation

<Callout type="info" title="Premium Feature">
  Looping automations are available exclusively with Premium plans. Unlock this feature to create powerful, repeating email sequences that maximize engagement.
</Callout>

## Description

A loop allows you to repeat an action multiple times. You can use this for various purposes, such as sending an unopened email three times to the same customer or sending it until it's opened. Additionally, you could send reminders about upcoming events or any other communication that requires repeated delivery. Finally, loops can also be combined with different conditions and actions to iterate them. We'll show you how to automate this with our application, which can be used according to your needs.

## Why this is important

Looping automations are essential for maximizing engagement and conversion rates by persistently reaching subscribers at optimal intervals. This feature allows you to create sophisticated follow-up sequences that adapt to subscriber behavior, ensuring important messages aren't missed while respecting engagement preferences. This strategic persistence often leads to higher conversion rates and better customer retention.

## Step-by-step instructions

<Stepper>

1. Click on Automations.

1. Click on the + sign at the top right of the page.
   - You can also create it from the Create button
   ![886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg](/images/automations/886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg)

1. In the **Select a starting point** menu, you can use the predefined automation, create a new template from scratch, or use one you've already saved
![D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choose the list this automation should be linked to
![Screen_Shot_2021-05-31_at_2.30.21_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choose a name for your automation (this name will only appear in the platform)
![0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. You can select a marketing goal from the list below (so we can make better recommendations for you)
![Screen_Shot_2021-05-31_at_2.31.10_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. You'll then be on the **Flow Creation** page. Click on the **+** sign to create a new step and select the condition or action in the automation flow
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. For this example, we'll create a looping email action. Choose the **Send an email** option in the Select an action tab
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/017E6AE4-F6F3-4E94-B79D-822E7C609FAE.png)

1. Customize the email to your liking.

1. Click on the **+** sign to create a new step after the Send an email action in the automation flow
![Loop action screenshot](/images/automations/D207D69D-7797-47A9-BD51-F1B2C41ACA50.png)

1. In the select an action tab, choose the **Loop** action
![Loop action screenshot](/images/automations/83E82569-10A5-4BC8-9E94-085324249D9B.png)

1. Click **Select an event type** and choose **Send an email**
![Loop action screenshot](/images/automations/B2C3AF36-2847-46ED-AB7F-2A8B92077D22.png)

1. Select the **Loop repetition** setting
You can loop the email continuously or a specific number of times
![Loop action screenshot](/images/automations/6E946072-2C90-42AB-B941-83B482059E10.png)

1. In the last loop setting, define the **delay between each repetition**
![Loop action screenshot](/images/automations/6B111329-2BE5-4BAB-AF63-EC873AE42031.png)

1. Click **Review and activate** to activate your automation
![Loop action screenshot](/images/automations/5ABCC781-FD80-4E3A-96BC-94AEBB839303.png)
Your looping automation is now activated! You should test it by subscribing to your contact list or manually adding a contact to the automation.
</Stepper>

## Troubleshooting

**Automation doesn't trigger**

- Check that the automation is activated (check the status toggle button)
- Ensure contacts meet the trigger conditions for the automation
- Verify that the selected list has active subscribers

**Emails send too frequently**

- Check the delay between repetitions in the loop settings
- Consider adding conditions to check engagement before sending
- Use "opened" or "clicked" conditions to avoid overwhelming subscribers

**Loop doesn't stop**

- Verify that the loop repetition count is set correctly (not "continuous")
- Add exit conditions based on subscriber actions (opens, clicks, conversions)
- Check if conflicting conditions are preventing the loop from ending

**Performance issues with large lists**

- Consider segmenting your list into smaller groups
- Stagger automation start times to distribute server load
- Monitor your sending limits and adjust loop frequency accordingly

## Related articles

- [Understanding email automation](/en/docs/automations/understanding-email-automation) - Automation basics
- [Creating an automation with branching conditions](/en/docs/automations/creating-an-automation-with-branching-conditions) - Advanced automation logic
- [Creating an automated welcome email](/en/docs/automations/creating-an-automated-welcome-email) - Simple automation example
- [Tracking customer journeys with custom attributes](/en/docs/automations/tracking-customer-journeys-with-custom-attributes) - Track automation progress
- [Creating a segment](/en/docs/audience/creating-dynamic-segments) - Target automation recipients