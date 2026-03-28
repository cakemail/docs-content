# Adding Unsubscribe Links

## Description

Campaigns should include an unsubscribe link, which allows your recipients to stop receiving your emails. Obviously, this isn't in your interest, but it might happen, so make sure to follow the appropriate procedure on how to handle these situations and remember: sending emails to someone who has unsubscribed is illegal and constitutes spam.

## Why It's Important

It's possible that recipients decide they no longer want to receive emails from you - that's okay, but you should give them the option to unsubscribe, otherwise they might mark your emails as spam. You can still maintain a good reputation when subscribers remove themselves from your list through a valid unsubscribe link in your message, which is why it's best to include it as an **"Instant Unsubscribe"** link that requires only one click for recipients to unsubscribe.

## Step-by-Step Instructions

You can do this either in the email designer or HTML editor. Two options are available:

### Adding Your Unsubscribe Link with the Email Designer
When the system doesn't recognize the unsubscribe link merge field in the campaign, it will automatically add it to the bottom. It's best to highlight and add `[UNSUBSCRIBE]` as a hyperlink to avoid this.

<Stepper>

1. Select your campaign.
![Highlight unsubscribe text in HTML editor](/images/campaign-creation/DD222A1A-C2FC-4946-97D9-77F6BB8BD302_4_5005_c.jpeg)

1. Go to the editor.
![Select Campaign from Create menu](/images/campaign-creation/9D032549-76D6-42DB-8D33-48BF1A4A9B71_4_5005_c.jpeg)

1. Select your unsubscribe text.
![Add UNSUBSCRIBE URL in link dialog box](/images/campaign-creation/F6C73565-D275-4B35-8A26-D58AF41FA57A_4_5005_c.jpeg)

1. Select the Insert Link option from the editor menu.
![HTML code editor interface](/images/campaign-creation/D9B97767-9A59-40A7-B9E0-5A332A42E0F9_4_5005_c.jpeg)

1. Link your unsubscribe field to the [UNSUBSCRIBE] URL
![Start from scratch tab](/images/campaign-creation/AF9F3BF5-2D0E-4EA0-A4BF-BC26A44EE74D.png)

1. Alternatively, you could add and format it directly from the small toolbar as shown here:
![Start from scratch tab](/images/campaign-creation/GIF%20UNSUBSCRIBE.gif)
On the small text toolbar, select Special Links > Subscription > Unsubscribe
</Stepper>

### Adding Your Unsubscribe Link in the HTML Editor 

By selecting the start from scratch option, you can create your template from your own HTML code. To properly add the unsubscribe field with this option, follow these steps:


<Stepper>

1. Select Create from the top menu.
![Enter UNSUBSCRIBE in URL field](/images/campaign-creation/6208D820-32F4-4547-B8CA-5D9F75C2FE29_4_5005_c.jpeg)

1. Click "Campaign" in the new menu that appears.
![Special links menu showing unsubscribe option](/images/campaign-creation/7D56F11C-29E9-40E3-9D83-03F10FF6AC93_4_5005_c.jpeg)

1. Select the Start from scratch tab.
![Select campaign from list](/images/campaign-creation/2234E183-9EA0-4A50-BC6D-5759A1CB5159_4_5005_c.jpeg)

1. Click Select under the Start with your own code option.
![Highlight unsubscribe text in editor](/images/campaign-creation/37BA470F-8AD5-4FBF-A1A3-DC4257B920E8.png)

1. Paste/write your code on the left side of the page.

1. In the top right, click Upload and Edit.
![Insert Link button in toolbar](/images/campaign-creation/354BF584-D33E-4725-B566-F5CCE03BCEF2.png)

1. Highlight the Unsubscribe field.
![Click Edit Email button](/images/campaign-creation/0982228B-E876-422A-97FE-32ABEB639811_4_5005_c.jpeg)

1. Link your unsubscribe field to the [UNSUBSCRIBE] URL using the link option in the editing menu.
![Select Start with your own code option](/images/campaign-creation/C2D6A986-9FA7-4012-997B-874A70DEE32F_4_5005_c.jpeg)
</Stepper>

## The Option is Now Available

You'll avoid the inconvenience of having your content marked as spam if your recipient decides to stop receiving your content. As always, our support team will be more than happy to suggest ways to improve your practices and content if you need it.

## Troubleshooting

**Unsubscribe link doesn't work**

- Check that the [UNSUBSCRIBE] merge tag is properly formatted
- Test the link before sending the campaign
- Ensure the merge tag is converted to a hyperlink

**Campaign won't send without unsubscribe**

- The system requires an unsubscribe link for compliance
- Check the footer for an automatically added unsubscribe link
- Manually add the [UNSUBSCRIBE] tag if missing

**Link added twice**

- Remove the manual unsubscribe link if the system adds one automatically
- Check both header and footer for duplicate links
- Use preview mode to verify only one instance

**Formatting issues**

- Keep the unsubscribe link visible and easy to find
- Use contrasting colors for link visibility
- Ensure minimum 10px font size for readability

## Related Articles

- [Adding Your Physical Address](/en/docs/campaign-creation/adding-your-physical-address) - Legal requirements
- [Using the Suppression List](/en/docs/account-settings/suppression-lists) - Managing unsubscribes
- [Understanding Complaints, Bounces, and Unsubscribes](/en/docs/analytics/email-bounces) - Unsubscribe metrics
- [Setting Up Your Subscriber Preference Center](/en/docs/audience-building/subscriber-preference-center) - Advanced preferences
- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Campaign compliance