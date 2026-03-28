# Integrating Survey Forms

## Description
Surveys embedded in emails, also called inline email surveys, are integrated into emails, and respondents can answer questions directly in the email body. Surveys of this nature tend to be short and non-exhaustive.

## Why It's Important

This immediate feedback mechanism is invaluable for gathering customer insights, measuring satisfaction, and making data-driven decisions about your products or services. The convenience factor also shows respect for your subscribers' time, strengthening their relationship with your brand.

## Step-by-Step Instructions

#### Creating a form on Typeform
Use the free online tool https://www.typeform.com/ to create a survey. Then, you can copy and paste the survey email code (HTML code).
**Only the Opinion Scale form type can currently be used with this process.**


### Procedure on Typeform
1. Create a form from scratch
2. In the menu to choose the form type, choose **Opinion Scale** in the upper right corner. 
3. Edit your form according to your tastes. 
4. Publish your form. 
5. Click on Share
6. Click on Embed in an email
7. Select Get the code.

<Stepper>

1. Drag and drop the HTML content block into your email.
![Screenshot of HTML content block](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-308.png)

1. Drag it into the email content.
![Screenshot of dragging into email content](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-309.png)

1. Paste the code in the Content Properties menu that will appear on the right side of the editor.
![Screenshot of the interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-310.png) 
You can use this to collect data from your recipients since this will directly link to your created survey.
![Screenshot of the interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-311.png)
</Stepper>

## Troubleshooting

**Survey doesn't display correctly**

- Make sure to use Typeform's Opinion Scale form type
- Copy the complete HTML code including all tags
- Test in multiple email clients for compatibility

**HTML code doesn't work**

- Use the HTML content block, not a regular text block
- Paste the code in the Content Properties panel, not directly in the editor
- Check that JavaScript isn't included (email clients block it)

**Low response rates**

- Keep surveys short (1-3 questions maximum)
- Place the survey prominently in the email
- Use clear and compelling text to encourage participation

**Data isn't collecting**

- Check that your Typeform account is active
- Verify that the form is published and not in draft mode
- Test the survey link independently to ensure it works

**Email client compatibility issues**

- Some email clients may not support embedded forms
- Provide a fallback link to the web version
- Test across major email clients before sending

## Related Articles

- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Basic campaign setup
- [Adding Anchor Links](/en/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Link to surveys
- [Tracking Click Rate Activity](/en/docs/analytics/tracking-click-rate-activity) - Track survey clicks
- [Using the Email Designer](/en/docs/campaign-creation/using-the-email-designer) - Add survey buttons
- [Creating UTM Tracking Links](/en/docs/campaign-creation/create-utm-tracking-links) - Track survey responses