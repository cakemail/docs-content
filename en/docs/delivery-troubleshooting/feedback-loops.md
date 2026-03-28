# Feedback Loops

## Description

A feedback loop is a data stream established by Internet Service Providers (ISPs) that transmits complaints from their users to the sender of the original message. This complaint data is then processed by the sender so they can remove and/or permanently unsubscribe the user from the list(s) in question. This helps avoid future complaints, which can seriously affect delivery.

## Why it's important

Feedback loops give ESPs (email service providers) the ability to track how many complaints are received for a given client (or campaign) so they can take appropriate action.

People who generate a lot of complaints can cause many problems with delivery, especially if they are part of a shared IP pool used by multiple clients.

## Complaint rate threshold

On average, a **complaint rate higher than 0.25% (1 in 400)** to any given ISP for any given send, is considered a problem.

## Monitor feedback loops

Under your contact activities in your delivered campaign, you will be able to filter FBLs by providers. These include:

### Major ISPs with feedback loops:
- **Microsoft**
- **Comcast** 
- **Hotmail**
- **Yahoo!**
- **AOL**
- **Gmail**
- **Google Apps**
- **Verizon**
- **Office 365**

### International providers:
- **LaPoste**
- **Yahoo! UK**
- **Mail.ru**
- **Terra Brasil**
- **Seznam.cz**
- **Yahoo! HK**
- **Libero.it**
- **Yandex**
- **Ziggo**
- **Free.fr**
- **Globo**
- **Yahoo! TW**
- **Videotron**

### Other providers:
- **Rackspace**
- **United Online**
- **Rogers**
- **Hover**
- **FastMail**
- **Tucows (OpenSRS)**
- **BOL**
- **Earthlink**
- **Cox**
- **ItaliaOnLine**
- **WindStream**
- **BlueTie**
- **USA.net**
- **BigPond**
- **RCN**
- **WOW!**
- **Cincinnati Bell**
- **Cable ONE**
- **Virgin**
- **Synacor**
- **Spam Experts**
- **EdgeWave**
- **McAfee**
- **GoDaddy**
- **Barracuda**
- **Symantec**
- **ATT**

## Best practices

- **Monitor complaint rates** regularly across all ISPs
- **Keep complaint rates under 0.25%** (1 in 400 emails)
- **Automatically remove complainers** from future sends
- **Analyze complaint patterns** to identify content or timing issues
- **Maintain list hygiene** to prevent high complaint rates
- **Use double opt-in** to ensure subscribers want your emails

## Impact on deliverability

High complaint rates can result in:
- **Blocked emails** at ISP level
- **Reduced inbox placement** 
- **Shared IP reputation damage** affecting other users
- **Account suspension** in severe cases
- **Permanent blacklisting** from major ISPs

## Troubleshooting

**My complaint rate has suddenly increased**

- Review the campaign content that triggered the complaints
- Check if you've changed your subject line style or sender name
- Verify that you haven't accidentally included unengaged or old contacts
- Analyze if the increase is from a specific ISP or all providers

**I can't see FBL data for certain providers**

- Not all ISPs participate in feedback loops (some use other methods)
- Gmail uses its own reporting system via Google Postmaster Tools
- Some providers only report to ESPs, not individual senders
- Check if the provider requires separate FBL registration

**Complaint rate is high but content seems correct**

- Verify that subscribers remember consenting (use double opt-in)
- Check if your sending frequency has increased recently
- Review if expectations set during signup match your content
- Consider sending a re-engagement campaign to confirm interest

**How to reduce future complaint rates**

- Make unsubscribe links prominent and easy to use
- Set clear expectations during the signup process
- Segment your list to send more relevant content
- Monitor engagement and regularly remove inactive subscribers

## Related articles

- [Understanding complaints, bounces and unsubscribes](/fr/docs/analytics/email-bounces) - Complaint management
- [Domain blacklisting](/fr/docs/delivery-troubleshooting/domain-blacklisting) - FBL prevents blacklisting
- [Mastering deliverability basics](/fr/docs/delivery-troubleshooting/email-deliverability) - FBL importance
- [Using the suppression list](/fr/docs/account-settings/suppression-lists) - FBL suppressions
- [Including an unsubscribe link](/fr/docs/campaign-creation/adding-unsubscribe-links) - Reduce complaints