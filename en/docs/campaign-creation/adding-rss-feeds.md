# Adding RSS Feeds

## Description
Automatically keep your audience up to date with fresh content by integrating an RSS feed into your newsletter. If you already have an RSS feed, adding it to your email campaign is simple and effective.

## Why It's Important

RSS feed integration is a game-changer for content-driven email marketing, allowing you to automatically populate your newsletters with fresh, dynamic content without manual updates. This feature saves considerable time for publishers, bloggers, and content creators who regularly share updates with their audience. By automating content distribution, you ensure subscribers always receive your latest articles, blog posts, or news items, maintaining engagement and driving consistent traffic to your website while reducing the risk of sending outdated information.

## Step-by-Step Instructions
Follow these steps to insert RSS updates into your email content:

#### Add a Content Block
In the email editor, insert a Paragraph content block where you'd like the RSS content to appear.

#### Insert RSS Code
Copy and paste the RSS code template into your content block.

#### Replace Placeholder URL
Replace yourWebsiteRSSURL in the code with your actual RSS feed URL.

#### Preview and Test
After inserting your RSS feed, preview the email before sending. You can also send yourself a test email to confirm the content appears as expected.

💡 **Note:** RSS content will display when exiting the email designer or in the test email preview.

## RSS Code Syntax and Explanation

RSS content starts with:
```
[RSS=yourWebsiteRSSURL]
```

RSS content ends with:
```
[ENDRSS]
```

Inside the RSS section, each feed item is referenced using an index:

- `[RSS-0-*]` refers to the most recent item
- `[RSS-1-*]` refers to the second most recent item, and so on

You can include the following elements from your feed:

| Tag | Description |
|-----|-------------|
| `[RSS-0-title]` | Article title |
| `[RSS-0-description]` | Summary or preview text |
| `[RSS-0-link]` | Direct link to article |
| `[RSS-0-dc:creator]` | Article author |
| `[RSS-0-pubDate]` | Publication date |
| `[RSS-0-media:content]` or `[RSS-0-media:content-attributes:url]` | Article image |
| `[RSS-0-media:credit]` | Image credit |
| `[RSS-0-media:description]` | Image description |

We use the most common tags, but you should check your own RSS feed code to ensure the tags have the correct names.

For example:
- `<title>` becomes `[RSS-#-title]`
- `<link>` becomes `[RSS-#-link]`

## Styling Your RSS Feed Content

You can customize how RSS content appears in your email:

- Bold or italicize text using formatting options in the editor
- Match brand colors by adjusting text and link colors
- To highlight titles, use a Title content block to increase font size and weight
- To add an image, use an Image content block, select Dynamic Image, and insert this code in the field: `[RSS-0-media:content-attributes:url]`

![Screenshot of the add interface](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-246.png)
## Example: Integrating the 3 Most Recent Articles

You can copy and paste the following code to use as a simple template for displaying your RSS:

```
Discover the 3 latest news from our website:

[RSS=yourWebsiteRSSURL]
 
[RSS-0-title]
[RSS-0-description]
[RSS-0-link]
[RSS-0-media:content:url]
 
[RSS-1-title]
[RSS-1-description]
[RSS-1-link]
 
[RSS-2-title]
[RSS-2-description]
[RSS-2-link]
 
[ENDRSS]
```

Replace yourWebsiteRSSURL with your actual feed URL (e.g., https://rss.nytimes.com/services/xml/rss/nyt/World.xml).

## Understanding RSS Tags (with Example)

Here's an RSS example from the New York Times RSS feed:

```xml
<item>
<title>Europe Seeks a Direct Line to Trump</title>
<link>https://www.nytimes.com/.../europe-trump-trade-defense.html</link>
<description>Despite Europe's size...</description>
<dc:creator>Steven Erlanger</dc:creator>
<pubDate>Thu, 17 Apr 2025 10:19:39 +0000</pubDate>
<media:content url="https://static01.nyt.com/..." />
<media:credit>Eric Lee/The New York Times</media:credit>
<media:description>In President Trump's White House...</media:description>
</item>
```

You would use the following code:

```
[RSS=yourWebsiteRSSURL]
[RSS-0-title]
[RSS-0-link]
[RSS-0-description]
[RSS-0-dc:creator]
[RSS-0-pubDate]
[RSS-0-media:content-attributes:url]
[RSS-0-media:credit]
[RSS-0-media:description]
[ENDRSS]
```

![Screenshot of the add interface](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-247.png)

![An Rss Feed To Your Email Campaign 248](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-248.png)
## Troubleshooting

**RSS feed not displaying**

- Check that the RSS URL is correct and publicly accessible
- Verify the feed is in valid XML format using an RSS validator
- Ensure RSS tags match your actual feed structure

**Content displays as code**

- Exit the email designer to see rendered content
- Send a test email to preview actual RSS content
- Check for missing closing tags like [ENDRSS]

**Images not loading**

- Verify your RSS feed includes media content tags
- Check the image URL format in your feed
- Use correct tag syntax: [RSS-0-media:content-attributes:url]

**Outdated content appears**

- Clear your browser cache and refresh
- Check if the RSS feed itself is updating correctly
- Allow time for feed updates to propagate (usually 15-30 minutes)

**Formatting issues**

- Use separate content blocks for headings and body text
- Apply formatting after inserting RSS tags
- Test different RSS tag combinations for optimal display

## Related Articles

- [Using Dynamic Content](/en/docs/personalization/using-dynamic-content) - Dynamic RSS content
- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Campaign creation basics
- [Creating a Looping Automation](/en/docs/automations/creating-a-looping-automation) - Automating RSS campaigns
- [Using the Email Designer](/en/docs/campaign-creation/using-the-email-designer) - Designing RSS layouts
- [Testing Your Campaign](/en/docs/campaign-creation/testing-your-campaign) - Testing RSS feeds