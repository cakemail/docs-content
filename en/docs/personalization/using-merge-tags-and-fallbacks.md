# Using Merge Tags and Fallbacks

## Description

In addition to merge tags, you can add any custom tags you might have configured for a subscriber list. Companies use these custom tags in emails to be more relevant to customers and give them a better experience. You can specify a personalization tag when adding a custom tag. Once you add the tags to a campaign and send it to that list, those tags will be automatically populated with subscriber information.

## Why it's important

It's crucial to personalize email marketing to ensure your recipients feel like you're speaking to them authentically. As a result, you can include relevant content that speaks directly to each customer by using personalization fields in your email messages.

## Step-by-step instructions

### Basic syntax
```
[field name,fallback]
```

- **"field name"** can be substituted with "firstname" for this example
- **"fallback"** can be substituted with any word you choose, in this case let's enter the word "friend"

### Examples

**Example 1:**
```
Hello [firstname,friend]
```
- Would select the [firstname] field and populate it with the available information from your list
- If empty, would use "friend" instead
- So `Hello [firstname,friend]` would read either: **'Hello Julia,'** or **'Hello friend'**

**Example 2:**
```
Hello [firstname,dear customer]
```
- Would select the [firstname] tag and populate it with the available information from your list
- If empty, would use "dear customer" instead
- So `Hello [firstname,dear customer]` would read either: **'Hello Alex,'** or **'Hello dear customer,'**

## Benefits

If you don't have relevant data, a fallback word will be substituted. The more you use them, the more dynamic your campaigns will be and the more you'll enrich your performance in terms of engagement.

## Troubleshooting

**Fallback values don't display when field is empty**

- Check syntax: ensure comma separates field name and fallback
- Verify there are no spaces before or after the comma
- Confirm brackets are properly closed [field,fallback]
- Test with known empty fields to verify functionality

**Wrong fallback text appearing**

- Examine if field name is spelled correctly (case sensitive)
- Check if field actually contains data (might appear empty but have spaces)
- Ensure you're using the correct field name from your contact list
- Verify there are no hidden characters in your merge tag syntax

**Commas in fallback text cause issues**

- Avoid using commas in fallback text as they are syntax separators
- Use alternative punctuation if necessary
- Consider using merge tags without fallbacks for complex text
- Test thoroughly when fallback contains special characters

**Fallbacks work in preview but not in sent emails**

- Check that contact data hasn't changed between preview and send
- Verify if import process is complete for all contacts
- Ensure no last-minute list updates have affected data
- Test with a small segment before full send

## Related articles

- [Adding merge tags to a campaign](/en/docs/personalization/adding-merge-tags-to-a-campaign) - Implementation guide
- [Adding attributes to your list](/en/docs/audience/adding-attributes-to-your-list) - Create merge fields
- [Adding your physical address](/en/docs/campaign-creation/adding-your-physical-address) - Address merge tag
- [Importing contacts](/en/docs/audience/importing-contacts-into-your-lists) - Import merge data
- [Using the email designer](/en/docs/campaign-creation/using-the-email-designer) - Insert merge tags