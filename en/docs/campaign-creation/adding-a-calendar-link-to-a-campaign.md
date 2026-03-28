# Adding a Calendar Link to a Campaign

## Description

You might want to invite your recipients to an event and have them add the occasion to their calendar. This is done by including an "Add to Calendar" link in your emails to ensure guests save your event and set up a reminder. This article will explain how to create calendar links and how to integrate them into your event email for the best email subscriber experience.

## Why It's Important
Events, whether in-person or virtual, are an excellent opportunity to network with other people. That's precisely why, as a very personal channel, email is the perfect way to generate interest in events. Your subscribers can add your events to their own calendars, which helps avoid calendar conflicts and helps them set up their own reminders.

### Using ICS Files

ICS files are a format for iCalendar and have a .ics file extension. You can import, export, and share calendar entries with your recipients using this file format.

**ICS is compatible with:** Google Calendar, Outlook.com, AOL, Yahoo, Office 365, Outlook, and Apple Calendar

Follow these steps to create and add the ICS file to your campaign:

<Stepper>

1. Use the iCalendar Event Maker tool to generate the file and download it
   - It allows you to add all the information your subscribers need to know about the event, such as location, description, and URL. You can even be more specific with your event, making it repeatable or adding notifications for your guests.

1. Create or edit your campaign.
![1.gif](/images/campaign-creation/6179a866335fa.jpeg)
![8F54E671-7BCF-42E9-A4B2-608DB413E3A8.png](/images/campaign-creation/6179a866877cc.jpeg)

1. Upload the ICS file to your file manager.
![](/images/campaign-creation/1.gif)
   - In the email designer content menu, select IMAGE and drag the button to the email content.
![D18A765E-5CA0-4C5A-9117-48B46310CB81_4_5005_c.jpeg](/images/campaign-creation/6179a86743515.png)
   - Click Browse.
![2.gif](/images/campaign-creation/6179a867af67c.jpeg)
   - Click Upload then select your file.
![56DA1C06-3DF8-4863-B085-C92D9FCAA8EC.png](/images/campaign-creation/6179a86814e6b.jpeg)
   - The file is now in your file manager and can be selected from there. Currently, you can only upload one file at a time.

1. Add a link to the file in your campaign:
![](/images/campaign-creation/2%20(1).gif)
   - Add a new row to your campaign.
![Add new row to campaign](/images/unused/campaign-creation/campaigns-creating-and-adding-a-calendar-link-to-a-campaign-343.png)
   - Drag and drop a Button content block inside the newly created row.
![8210EDE7-561C-40A3-9D80-A9B68950E257.png](/images/campaign-creation/8210EDE7-561C-40A3-9D80-A9B68950E257.png)
   - In the Content Properties menu on the right, click Link File.
![](/images/campaign-creation/42D60058-1DBD-4320-9666-C15FB54909E0.png)
   - Choose the uploaded ICS file from the file manager.
![42D60058-1DBD-4320-9666-C15FB54909E0.png](/images/campaign-creation/C533C07B-5163-4052-821B-E3D0FAF6D949.png)
</Stepper>



## Using Google Calendar Direct Link

### Create your event in Google Calendar
<Stepper>
1. **Create the public event** on your calendar as usual
1. If desired, **add video conferencing** to the event (Zoom or Google Meet)
1. Alternatively, you can paste a link to a Zoom webinar, YouTube, Facebook Live, or other video conference in the Location field of your event.
1. Make sure the **event visibility is set to Public** and save the event
1. **Publish the event**
1. Open the event from your calendar, click on the three vertical dots in the top right corner, and select **"Publish this event"**
1. Click the second **Copy button** to copy the link
</Stepper>

### Add to your email:
<Stepper>
1. **Add the link** in your email message
1. Type **"Add to Google Calendar"** in your message
1. Select the "Add to Google Calendar" text you just typed
1. Click the **Insert Link button** at the bottom of the message
1. Paste the link you copied above in the field under "What URL should this link go to?"
1. Click **OK**, and you're done!


</Stepper>

Recipients can access it and add it to their calendar by clicking the button.
## Troubleshooting

**ICS file won't download**

- Check that the file was successfully uploaded to the file manager
- Verify that the file link is properly connected to the button
- Ensure the ICS file is not corrupted or empty

**Calendar link doesn't work**

- Confirm that the Google Calendar event is set to "Public"
- Regenerate the link if it was created more than 30 days ago
- Test the link in an incognito browser window

**Event details don't display correctly**

- Double-check all fields in the ICS generator tool
- Use standard date/time formats (avoid special characters)
- Verify that timezone settings match your target audience

**Compatibility issues**

- Test ICS files with multiple calendar applications
- Provide alternative methods (Google Calendar link + ICS file)
- Include event details in the email body as backup

**File upload errors**

- Keep ICS files under 1MB for better compatibility
- Use standard filename without special characters
- Clear browser cache if upload repeatedly fails

## Related Articles

- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Campaign creation basics
- [Using the Email Designer](/en/docs/campaign-creation/using-the-email-designer) - Adding calendar buttons
- [Uploading Content to Your Library](/en/docs/campaign-creation/uploading-to-the-file-manager) - Uploading ICS files
- [Adding a PDF to a Campaign](/en/docs/campaign-creation/adding-pdf-attachments) - Other file types
- [Testing Your Campaign](/en/docs/campaign-creation/testing-your-campaign) - Testing calendar links
