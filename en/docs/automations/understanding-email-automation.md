# Understanding Email Automation

## Description

Automation allows you to link an action performed by your contacts to a sequence of predefined tasks. Manual tasks can be executed automatically by this tool, with a single work platform that synchronizes with existing conditions and activities. With automation, for example, you could configure a welcome email to be sent a few seconds after a contact signs up for a subscription form linked to a list.

What follows is presented in this guide:
- The ability to access and manage automations
- A description of this tool's functions

## Why this is important

Automation is perfect for repetitive asynchronous tasks. It can increase efficiency, productivity, accuracy and reduce errors when done well. You'll be able to better manage your work system with it because you'll have a clearer overview of it.

## Step-by-step instructions

### Creating an automation:

<Stepper>

1. Click on Automations.

1. Click on the + sign at the top right of the page.
You can also create it from the Create button
If you've already created an automation, it will also be found here. 
You can open it, rename it, or delete it.
![Automation list showing existing automations](/images/automations/1B49B1AC-5024-450E-A740-F6853A6B88D9.png)
</Stepper>

### Automation editing page

On this page, you'll see how your automation flows from top to bottom in a structured way with each step represented by interconnected blocks.

![Automation workflow editor showing interconnected blocks](/images/automations/33FA06AA-A3C9-404D-9B68-19BD7AF5B3B8.png)

Here you can:
- Manually add contacts to the automation
- View automated campaign statistics during a specific period
- Edit the workflow

![Automation statistics dropdown menu](/images/automations/mceclip0.png)

### Editing an automation

There are two types of steps when editing/creating a flow:
- Conditions
- Actions.

#### Select a condition

A condition can be either:

**Delay:** This allows you to set a delay in seconds, minutes, hours, days and even weeks.

**If / Else:** Depending on whether contacts match the conditions, they will join the Yes path, otherwise they will go to the No path.

**Path split:** Your subscribers can be divided using this condition.

#### Select an action

The default action on an automation will be to send an automated email. You can edit the email with the email designer and determine the email subject line in the deployment settings menu.

![Email action configuration panel](/images/automations/E97A2994-721A-4A9A-9B0A-4E8F0D52D6D0_4_5005_c.jpeg)

## Activating an automation

Once you're ready to launch this automation, you can review and activate it.

![Automation activation toggle button](/images/automations/mceclip3.png)

You'll be notified if something needs to be fixed before the automation can be activated.

## Automation statistics

Click the dropdown button to choose the period and view your automation statistics.

![Period selector and statistics overview](/images/automations/50891B80-F44A-462E-A398-3DA7E6240367.png)
![Automation flow with performance metrics](/images/automations/4AD7C319-83F1-4E11-8231-FBE41C5FFE9F.png)

Click on the email to see a more detailed side panel. You can see open, click, unsubscribe, delivery and bounce rates for your email.

![Detailed email performance metrics panel](/images/automations/Capture_d_e_cran__le_2022-04-25_a__14.58.34.png)

The gears are now in motion and the automation is active! You can adjust it according to your needs.

## Duplicating and editing an automation flow

Existing automations must be duplicated to be edited.

Here's how to proceed:

1. Click on the down arrow at the top right

![Automation menu showing rename, delete and duplicate options](/images/automations/mceclip2.png)

2. Use this menu to Rename, Delete or Duplicate the automation

If you choose to duplicate it, your automation will be recreated as a copy that you can edit.

## Troubleshooting

**Automation doesn't start**

- Check that the automation toggle button is set to ON
- Verify that trigger conditions are properly configured
- Ensure the connected list has active subscribers

**Unable to edit active automation**

- Duplicate the automation to create an editable copy
- Deactivate the original automation before activating the new version
- Test changes with a small segment before full deployment

**Statistics don't display**

- Allow 24-48 hours for initial statistics to populate
- Check that the selected period matches when emails were sent
- Verify that tracking pixels aren't blocked by email clients

**Issues with email designer**

- Clear browser cache if designer doesn't load properly
- Use Chrome or Firefox for better compatibility
- Save your work frequently to avoid losing changes

**Workflow validation errors**

- Ensure all email content blocks are completed
- Check that all branches have defined endpoints
- Verify that required fields in conditions are filled

## Related articles

- [Creating an automated welcome email](/en/docs/automations/creating-an-automated-welcome-email) - Your first automation
- [Creating an automation with branching conditions](/en/docs/automations/creating-an-automation-with-branching-conditions) - Advanced workflows
- [Creating a looping automation](/en/docs/automations/creating-a-looping-automation) - Recurring campaigns
- [First steps](/en/docs/first-steps) - Getting started guide
- [Creating and managing a contact list](/en/docs/audience/managing-contact-lists) - Automation recipients