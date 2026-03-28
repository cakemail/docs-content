# System Email Customization

## Description

System emails are a key part of user account management, ensuring effective communication between your platform and your end users. These emails facilitate confirmation processes, password resets, and other important account-related actions.

## Why This Matters

To give your clients a seamless experience, it's essential to configure these communications with precision and efficiency.

## Step-by-Step Instructions

### Accessing System Emails

<Stepper>

1. Navigate to the Account section in your dashboard.
![Navigate to Account section](/images/partners/partners-setting-up-and-customizing-system-emails-for-your-platform-169.png)

1. Click on System Emails in the menu options.
Here, you'll manage all types of automated emails that your platform sends.
![System Emails menu option](/images/partners/e705db46-0036-4f02-8efd-2b7b64a091f0.png)
</Stepper>

### Creating a New System Email

<Stepper>

1. Initiate creation
Click the "+" button in the top right corner to start configuring a new system email. This will open a pop-up window with various fields to fill out.

1. Configure email details
Carefully fill out each of the following fields:
![Email details configuration form](/images/partners/b36c7eb0-f7a9-4678-81d5-7ebf4a4c8954.png)

1. Review and confirm

   Carefully review all the information you've entered to ensure it's correct. Once satisfied, click the "Confirm" button. This will finalize your settings and activate the system email.
</Stepper>

### How System Emails Work

Once configured, system emails are automatically sent to end users whenever a corresponding action occurs, such as account verification or password reset requests. This automation ensures that users receive important notifications without delay, streamlining your communication processes.

Note: For your system email to work, you must add the appropriate merge tags to trigger the desired action. You can do this by following these steps:
<Stepper>

1. Go to "General Templates"
2. Create your system template then edit it
3. Add a call to action in your email
4. Select the text area in your CTA and click "Merge Tags"

![Select merge tags button in CTA](/images/partners/d09abc41-5553-4f68-8015-d6fb089a4229.png)

5. Finally, select the appropriate merge tag to add

![Select appropriate merge tag from list](/images/partners/d01d153c-cbcd-47c3-8f0b-d34eb8df4233.png)
</Stepper>

### Managing and Updating System Emails

You can always return to the System Emails section to review or modify your configurations. Updating system emails periodically helps keep your content relevant and aligned with any updates or changes to your platform.

## Troubleshooting

**System emails are not being sent**

- Check that the sender email comes from an authenticated domain
- Verify if the correct merge tags are included in the template
- Ensure the system email type is properly configured
- Review if there are account-level sending restrictions

**Merge tags don't work in templates**

- Confirm you're using the exact merge tag syntax
- Check if the merge tag matches the system email type
- Verify that merge tags are placed in clickable elements for actions
- Test the template with preview data before activating

**Users receive emails in the wrong language**

- Review the language setting for each system email configuration
- Check if user language preferences override defaults
- Ensure templates exist for all configured languages
- Verify that browser language doesn't affect selection

**Template changes don't reflect in sent emails**

- Confirm changes were saved in the General Templates section
- Check if you need to update the system email configuration
- Allow a few minutes for template updates to propagate
- Clear cache and verify you're editing the correct template

## Related Articles

- [Customizing Your Default Reseller Domain](/en/docs/partners/customizing-your-default-reseller-domain) - Domain branding
- [Client Template Sharing](/en/docs/partners/client-template-sharing) - Template sharing
- [Configuring Your Brand](/en/docs/account-settings/configuring-your-brand) - Brand consistency
- [Creating an Automated Welcome Email](/en/docs/automations/creating-an-automated-welcome-email) - System welcomes
- [Default Sender Address and Language](/en/docs/audience-building/default-sender-address-and-language) - System senders
