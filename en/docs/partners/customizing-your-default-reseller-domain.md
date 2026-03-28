# Customizing Your Default Reseller Domain

## Description

Following new requirements announced by Gmail and Yahoo, which will take effect in February, Cakemail has had to integrate new features to ensure email delivery for clients who have not yet completed DMARC authentication, including those sent with a sender address provided by a free service (e.g., gmail.com).

## Why This Matters

Cakemail provides your clients with a generic authenticated domain: cmtd1.com.
But if your reseller domain is already authenticated, emails will be sent with that domain. We strongly encourage you to authenticate your domain. This will allow you to offer a more personalized sending domain to your clients who have not yet authenticated.

## Step-by-Step Instructions

<Stepper>

1. Go to the reseller portal and click on the Next-gen App Toolset tab.
You can also connect directly to https://app.wbsrvcx.com (use your partner account credentials).

1. Click on the Senders and Domains tab in your menu.

1. You'll have a report on the validation status of your return and bounce links that must now be configured.
Note: due to new requirements, a domain that was indicated as verified may no longer be verified because the new verification process is more elaborate.
![](/images/partners/78e7d017-3ec6-40c9-85ae-e2056394b2b0.png)

1. If your link is yellow, your domain is not completely or partially authenticated.
Click on Authenticate Domain on the right to display the codes to copy and paste on your server. You can also click to download the instructions and email them to your administrator.

1. Once you have entered all the information on your server, your domain should be identified as authenticated.
This can take from a few minutes to 24 hours. NOTE: most errors occur during the copy-paste step. Avoid adding spaces and enter exactly what is required.
The instructions for validating domains for all your clients' end users are available in their accounts under Senders.
</Stepper>

## Troubleshooting

**Domain authentication continues to fail**

- Double-check DNS records for any typos or extra spaces
- Ensure you're adding records to the correct DNS zone
- Wait 24-48 hours for DNS propagation before re-checking
- Use DNS lookup tools to confirm records are properly published

**Return domain not working for clients**

- Check that your reseller domain is fully authenticated
- Verify if client accounts are properly linked to your reseller account
- Ensure return domain settings are enabled in the reseller portal
- Contact support if the generic cmtd1.com domain is still being used

**DNS records copied but showing as invalid**

- Remove any trailing spaces or line breaks when copying
- Check that TXT records don't exceed character limits
- Verify if quotes are needed around TXT record values
- Ensure CNAME records don't have trailing dots unless required

**Clients still experiencing delivery issues**

- Confirm SPF and DKIM records are properly configured
- Check if DMARC policy is set up correctly
- Review if client sender addresses match authenticated domains
- Monitor authentication reports for specific error messages

## Related Articles

- [System Email Customization](/en/docs/partners/system-email-customization) - Branded system emails
- [Configuring Your Brand](/en/docs/account-settings/configuring-your-brand) - Complete branding
- [Client Template Sharing](/en/docs/partners/client-template-sharing) - Branded templates
- [Authenticating Domains](/en/docs/senders/authenticating-domains) - Domain setup
- [Updating My Company Profile](/en/docs/account-settings/updating-my-company-profile) - Partner profile