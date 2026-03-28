# Using Dynamic Content

## Description

First: To properly use the dynamic content feature, you'll need to be comfortable with HTML, work in 'source code' mode in the HTML editor, and write some code along the way.

## Why This Matters

Dynamic content is a powerful personalization tool that allows you to deliver highly targeted messages in a single email campaign. By creating conditional content blocks that change based on subscriber data, behavior, or preferences, you can significantly increase engagement rates and conversions. This advanced feature enables sophisticated segmentation without creating multiple separate campaigns, saving time while delivering more relevant content. It's particularly valuable for product recommendations, location-based offers, and behavioral triggers that require different messages for different audience segments.

## Step-by-Step Instructions

All dynamic content is inserted into emails by adding code between [brackets]. Your dynamic content can be formatted with HTML, but all instructions for dynamic content must be contained in brackets like these to work properly: [ ]

This quick sample will give you an idea:
```html
This will stay here exactly as it's written.
[Dynamic content goes here]

This will stay here exactly as it's written, too.
```

A basic dynamic content expression is typically set up as follows:

```
[IF variable operator constant]
<HTML code to display the result>
[ELSEIF variable operator constant]
<HTML code to display the alternative result>
[ELSE]
<HTML code to display when no result matches>
[ENDIF]
```

This quick documentation will describe the rules for variables, operators, constants, and expressions, which will help you start writing your own. Dynamic content supports a number of different data types, meaning there are several ways you can create expressions for variables that decide what content will be displayed.

### Supported Data Types

Dynamic content supports a number of different data types, meaning there are several ways you can create expressions for variables that decide what content will be displayed.

#### The supported data types are:

- boolean – TRUE or FALSE
- integer – Any whole number ranging from -8388608 to 8388608
- string – An alphanumeric string up to a maximum of 255 characters
- date – Date with the format "YYYY-MM-DD HH-MM-SS"
Times must be written in 24-hour clock (so 18:30 instead of 6:30 PM)

#### Variables

Variables are the criteria on which you base your content. This can include list fields like firstname, lastname, or any other data field your subscribers have submitted content for. This can also include campaign activity, allowing you to send specific content only to those who clicked a link or opened a previous email campaign.

#### List Fields

List fields can be used as criteria. The value of these fields typically changes with each list subscriber. Variables are surrounded by the backtick character ( ` )

List fields can be of any integer, string, or date/time data type.

#### Previous Campaign Activity

We can also refer to the action a subscriber took for a previous email campaign including opening the message, or clicking any link in the email itself. To refer to a specific campaign, you'll need to find the mailing ID and refer to it using MAILING(id), where id is a reference to the campaign number. To refer to a specific link, you'll need to find the link ID and refer to it using LINK(id), where id is a reference to the link number.

Example: MAILING(43243) LINK(3245364)

An email campaign has two different statuses: CLICKED and OPENED A link can be: CLICKED

### How to find an email campaign id in your branded site.

#### Select the Campaigns tab.
#### Find the specific campaign you want to refer to.
#### View the statistics for that campaign.
The mailing ID will be included in the URL that displays in your browser's address bar. Use only the 6 or 7-digit number that appears at the end of the URL: http://mail.youraccountname.com/ui/mailings/stats/560416

### How to find a link id in your branded site.

#### Select the Campaigns tab.
#### Find the specific campaign you want to refer to.
#### View the statistics for that campaign.
#### Access the click report for the campaign.
#### View the detailed statistics for the link you want to use as a variable.
The link ID will be included in the URL that displays in your browser's address bar. Use only the 7 or 8-digit number that appears after the text "link=": http://mail.youraccount.com/ui/mailings/stats/560416?page=logs&link=7224929

### Operators

The following operators are supported: For list fields that are text strings

- LIKE – Matches
- NOT LIKE – Does not match

For list fields that are integers or datetime
- = – Equal to
- != – Not equal to
- &lt; – Less than
- &lt;= – Less than or equal to
- &gt; – Greater than
- &gt;= – Greater than or equal to

For campaign activity (links or mailings)
- IS
- IS NOT

For expressions
- AND
- OR

#### Constants

Constants must be surrounded by double quotes ' " ' if they are text string, datetime, or integer data types.

Examples:

"NY"
"2010-08-02 10:00:00"
"5"

#### Expressions

Dynamic content supports boolean expressions (TRUE / FALSE). Expressions can be created by combining a variable, an operator, and a constant.

Example:

`email` LIKE "%hotmail%"
(their email address contains the text "hotmail")

Example:

`id` > "1000"
(the list ID is greater than 1000)

Example:

MAILING(34342) IS OPENED
(the subscriber opened campaign #34342)

The variable and constant must be of the same data type.

Expressions can be combined together to become larger and more complex expressions using parentheses.

Example:

(`email` LIKE "%hotmail%") AND (MAILING(34342) IS OPENED)
(their email address contains the text "hotmail" AND they opened campaign #34342)

### Control Structures

A control structure gives the starting statement for the expression, and can be nested for more complex expressions.

#### IF

[IF expression]
HTML code to display
Displays the HTML code if the expression is TRUE

#### ELSEIF

[ELSEIF expression]
HTML code to display
Follows an [IF] statement. Displays the specified HTML code if the previous [IF] expression is FALSE but the [ELSEIF] expression is TRUE. There can be multiple [ELSEIF] statements.

#### ELSE

[ELSE]
HTML code to display
Displays the HTML code if the previous [IF] and [ELSEIF] expressions (if any) are FALSE.

#### ENDIF

[ENDIF]
Closes an [IF] statement.

### Functions

The following functions are supported: MOD

#### MOD(N,M)

This is a Modulo operation. Returns the remainder of N divided by M.

Example:
```
[IF MOD(`id`,10) = 5]
<p>You are a winner!</p>
[ELSE]
<p>Sorry! Try again!</p>
[ENDIF]
```

## Troubleshooting

**Dynamic content displays as plain text/code**

- Ensure all dynamic content is within brackets []
- Check that you're editing in HTML/source code mode
- Verify that all IF statements have a corresponding ENDIF
- Look for missing or mismatched brackets

**Conditions don't evaluate correctly**

- Confirm variable names match field names exactly (case sensitive)
- Use backticks (`) around variable names
- Check that data types match (don't compare text to numbers)
- Test with known subscriber data to debug logic

**ELSEIF and ELSE blocks don't work**

- Ensure proper nesting and order: IF, ELSEIF, ELSE, ENDIF
- Check that each block contains valid HTML
- Verify there are no syntax errors in previous conditions
- Test each condition branch separately

**Complex expressions fail**

- Start with simple conditions and build complexity gradually
- Use parentheses to group complex boolean expressions
- Check that all operators are valid for the data types used
- Verify proper spacing around operators

## Related Articles

- [Display Conditions](/en/docs/personalization/display-conditions) - Conditional display
- [Adding Merge Tags to a Campaign](/en/docs/personalization/adding-merge-tags-to-a-campaign) - Dynamic fields
- [Adding RSS Feeds](/en/docs/campaign-creation/adding-rss-feeds) - Dynamic RSS
- [Creating Dynamic Segments](/en/docs/audience/creating-dynamic-segments) - Dynamic segments
- [Creating Content with AI](/en/docs/ai/creating-content-with-ai) - Dynamic AI content