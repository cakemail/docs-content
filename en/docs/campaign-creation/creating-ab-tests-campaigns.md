# Creating A/B Test Campaigns

<Callout type="info" title="Premium Feature">
 A/B split testing is available exclusively with Premium plans. Unlock this feature to create powerful, repeating email sequences that maximize engagement.
</Callout>

## Description

An A/B test (split test or bucket test) compares two campaign versions to determine which performs better. The statistics of each email version are compared, and our application makes a decision based on click rates. In other words, we handle this process to determine the best email variation for you.

## Why this is important

Ultimately, a well-planned A/B test can have a significant impact on your marketing results. It's possible to create a more robust marketing plan by refining and combining the most effective elements of a promotion. This will result in higher return on investment, lower failure risk, and, most importantly, a more robust marketing campaign.

## How to Create an A/B Test

To create an A/B test, follow these simple steps:

<Stepper>

1. In your dashboard, hover over the Campaign tab and select A/B Tests.
![Navigate to A/B tests from Campaign dropdown menu](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-363.png)

1. Click Create A/B Test
![Create A/B Test button](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-364.png)

1. On this new page, you can name your A/B test and select a list and segment. When you're done, click Continue to proceed to the next step.
![A/B test configuration form with name, list, and segment fields](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-365.png)

1. In the Edit A/B Test page, select the second block to open its settings.
![A/B test workflow showing test block configuration](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-366.png)

1. You can now set the A/B test distribution settings on the left side of the screen.

   - By default, emails A and B are split 50/50.

   - The test distribution size and winner email can be set.

   - With a distribution size of 40% and winner email size of 60%, 60 percent of all contacts will receive the email that performed better in the 40% sample.
![Distribution settings showing test size and winner email percentage](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-367.png)

1. You can also adjust the settings to select winners.

   - Decide when you want this test to end, and set an email to send if no winner is found. If no clear winner can be determined due to lack of statistical significance, an email will be sent to this email.

   - a. ![Winner selection criteria and test duration settings](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-368.png)

   - b. ![Fallback email selection if no winner is found](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-369.png)

1. Back in the A/B test creation flow, select the Email A block to open its settings.
![Email A block selected in workflow](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-370.png)

1. On the left side of the screen, click Edit to modify the email.
![Edit button to modify Email A content](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-371.png)

1. If you want to reuse this content in the second email and add variations, edit the email and click Copy Email A Content to B.
![Copy Email A Content to Email B button](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-372.png)

1. Click Save and Exit when you're done.

1. Follow the same procedure to edit Email B.
![Email B editing interface](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-373.png)

1. When you're satisfied with the email variations and ready to start the test and launch the campaign, click Start Test in the top right corner of the screen.
![Start Test button in top right corner](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-374.png)

   You can also rename, delete, or duplicate the test by clicking the downward arrow.
![Dropdown menu with additional options including rename, delete, and duplicate](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-375.png)

   Your test creation is now complete! You can find it in the A/B test drafts and analyze its results.
![A/B test listed in drafts with status and analytics](/images/campaign-creation/campaigns-creating-and-sending-a-b-tests-376.png)

</Stepper>

## Troubleshooting

**A/B testing not available**

- Check that you have a Premium account with A/B testing enabled
- Contact support to upgrade your plan if necessary
- Verify your list has enough contacts for meaningful testing

**Inconclusive test results**

- Increase the test sample size (minimum 1000 contacts recommended)
- Extend the test duration to allow more engagement time
- Ensure variations are different enough to produce measurable results

**Winner selection issues**

- Review winner selection criteria (open rate vs click rate)
- Set a fallback email in case no statistical winner emerges
- Allow at least 4-6 hours for meaningful engagement data

**Distribution problems**

- Check that test/winner split totals 100%
- Verify segments don't overlap between test groups
- Ensure all contacts in the list are active and deliverable

**Content copying doesn't work**

- Save Email A before attempting to copy to Email B
- Clear browser cache if copy function fails
- Manually recreate content if technical issues persist

## Related Articles

- [Testing Your Campaign](/en/docs/campaign-creation/testing-your-campaign) - Pre-send testing
- [Understanding Campaign Reports](/en/docs/analytics/understanding-campaign-reports) - Analyzing test results
- [Creating Subject Lines with AI](/en/docs/ai/creating-subject-lines-with-ai) - Testing subject lines
- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Campaign basics
- [Understanding Open Rates](/en/docs/analytics/open-rates) - Measuring test success