# Image Display Issues

## Description

In today's email marketing landscape, visual images are fundamental to capturing your recipient's attention. In this article, we'll show you:
- How to choose the right image format for your campaigns
- Why images might not display, and how to detect the source of this problem

## Why it's important

Most recipients only browse emails for a few seconds, so if they only see paragraph after paragraph of content, they might simply ignore it. Because of this, it's important to understand what can cause your images not to display in your email.

On the more technical side of things, specifically for your statistics, opens are calculated when images are displayed, so if images aren't shown, your statistics will be inaccurate.

## Image formats

### JPEG format
The JPEG file format is the most widely used on the Internet. This format can be compressed very easily, allowing you to send photographs with a smaller file size, so your email will load faster. Image compression can also cause a loss of image quality.

### PNG format
The PNG format is not affected by compression and can support images with transparent backgrounds. The file size can be significantly larger than a JPG format image.

## Common problems and solutions

### Images are blocked
It's possible that the email client has blocked image loading; this won't change until the recipient clicks to always display or adds you to their Safe Senders, Contacts list, or Address Book. Make sure to let your subscribers know to click to always allow display of your content or encourage them to add your sender address to avoid this problem in the future.

### Emails composed only of images
Include text (not just images) in your email. Emails composed only of images will not open correctly and will be flagged as spam almost 100% of the time. According to anti-spam law, all emails must contain some form of text (even if it's a simple "hello"), but you should aim to include more text than images.

### URL problems
Make sure to use absolute URLs. Relative URLs are the equivalent of saying "down the street, left side, walk a few more houses, you can't miss it" when someone asks you for an address.

Absolute URLs are the equivalent of saying "31 Emily Street, Chicago, Illinois, United States, North America, Planet Earth" instead. For everyone to see the images in your email, you must use the absolute URL (and the images must be stored somewhere online that is accessible to everyone, too).

**Examples:**
- Relative URL: `/image.jpg`
- Absolute URL: `http://www.mydummyaccount.com/images/image.jpg`

### Background images
Background images don't display on some email clients: Always use a solid background color as a fallback.

## Related content

## Troubleshooting

**Images display as broken links or red X**

- Verify that image URLs are absolute, not relative (must include http:// or https://)
- Check if the image hosting server is accessible and not blocking requests
- Ensure that image files haven't been moved or deleted from the server
- Test image URLs directly in a browser to confirm they work

**Images display in preview but not in sent emails**

- Confirm you're not using local file paths (C:\\ or file://)
- Check if your image hosting requires authentication or has hotlink protection
- Verify that images are hosted on a public server, not localhost or internal network
- Ensure your hosting doesn't have bandwidth limits that block images

**Background images don't display**

- Use a solid color fallback as many email clients don't support background images
- Consider using table cells with background colors instead
- Test in multiple email clients as support varies widely
- Use inline CSS for better client compatibility

**Images are too large and slow to load**

- Compress images before uploading (aim for under 100KB per image)
- Use appropriate dimensions - don't rely on HTML to resize
- Choose the right format: JPEG for photos, PNG for graphics with transparency
- Consider using image optimization tools before uploading

## Related articles

- [Using the email designer](/fr/docs/campaign-creation/using-the-email-designer) - Add images correctly
- [Creating mobile and desktop campaign versions](/fr/docs/campaign-creation/creating-mobile-and-desktop-campaign-versions) - Responsive images
- [Testing your campaign](/fr/docs/campaign-creation/testing-your-campaign) - Test image display
- [Uploading content to your library](/fr/docs/campaign-creation/uploading-to-the-file-manager) - Image hosting
- [Adding a video to a campaign](/fr/docs/campaign-creation/adding-a-video-to-a-campaign) - Video thumbnails