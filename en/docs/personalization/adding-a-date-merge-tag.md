# Adding a Date Merge Tag

## Description

Email merge fields insert unique user data, linked to a unique value, into emails; they are discussed in greater detail here. A date can be inserted into a subject line or campaign using the [DATE] merge field. It should be noted that you cannot use the [DATE] merge field as part of a link.

## Why This Matters

This dynamic element helps maintain engagement by making emails personalized and timely, while reducing the manual effort required to update date-related content in recurring campaigns. It's particularly valuable for event announcements, limited-time offers, and regularly scheduled communications.

## Step-by-Step Instructions

<Stepper>

### Adding Custom Fields

```
[DATE|0|format]
```

There are two parameters: **A number** and **a format**.

### The number parameter:
- **'0'** represents the current date
- The date can be adjusted by adding or subtracting seconds
- Positive numbers = future dates
- Negative numbers = past dates

### The format parameter:
This determines how the date is displayed. The date is formatted according to **PHP convention**. PHP provides a list of all formats online.

**Note:** Dates using the long form (Monday, June 10) are only available in English.

### Examples

If the current date is June 10, 2013:

### Future date examples:
- `[DATE|86400|m.d.y]` will display **06.11.13** (since 86,400 seconds equals 24 hours)

### Past date examples:
- `[DATE|-259200|F j,Y]` will display **June 07, 2013** (since 259,200 seconds equals 3 days)

![Field interface](/images/campaign-creation/campaigns-adding-a-date-merge-tag-333.png)

### Common Format Options

| Format | Sample Output | Description |
|--------|---------------|-------------|
| `Y-m-d` | 2013-06-10 | Year-Month-Day (numeric) |
| `F j, Y` | June 10, 2013 | Full month name, day, year |
| `M d, Y` | Jun 10, 2013 | Short month name, day, year |
| `m/d/Y` | 06/10/2013 | Month/Day/Year |
| `l, F j` | Monday, June 10 | Day of week, month, day |

### Time Calculations

- **1 day** = 86,400 seconds
- **1 week** = 604,800 seconds
- **1 month (30 days)** = 2,592,000 seconds

### Use Cases

- **Newsletter dates**: Display current date in email headers
- **Event reminders**: Reference upcoming event dates
- **Deadline notices**: Display countdown to important dates
- **Seasonal content**: Automatically update seasonal references
- **Dynamic content**: Create time-sensitive messages

### Important Notes

- Cannot be used as part of a hyperlink
- Long form dates are in English only
- Uses PHP date formatting conventions
- Calculates from the time the email is sent

</Stepper>

## Troubleshooting

**Date displays incorrectly or not at all**

- Check that syntax follows [DATE|seconds|format] exactly
- Verify that pipe characters (|) separate parameters
- Ensure format string uses valid PHP date format codes
- Test with simple formats first (Y-m-d) before complex ones

**Wrong timezone displaying**

- Note that dates use server timezone, not recipient's timezone
- Consider adding timezone information in your content
- Account for daylight saving time changes
- Test campaigns at different times to verify consistency

**Date calculations not working**

- Double-check your second calculations (86400 = 1 day)
- Use negative numbers for past dates, positive for future
- Check that you're not exceeding reasonable date ranges
- Test calculations with online epoch converters

**Date format displays as code**

- Ensure format parameter uses valid PHP date characters
- Check for typos in format string (case-sensitive)
- Avoid spaces within merge tag brackets
- Remember that long form dates only work in English

## Related Articles

- [Adding Merge Tags to a Campaign](/en/docs/personalization/adding-merge-tags-to-a-campaign) - Other merge tags
- [Using Merge Tags and Fallbacks](/en/docs/personalization/using-merge-tags-and-fallbacks) - Merge tag basics
- [Adding Attributes to Your List](/en/docs/audience/adding-attributes-to-your-list) - Date attributes
- [Using Dynamic Content](/en/docs/personalization/using-dynamic-content) - Dynamic dates
- [Creating Campaigns](/en/docs/campaign-creation/creating-campaigns) - Using in campaigns