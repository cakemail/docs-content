# Protecting Your Information

## Description

Our platform partners with Stripe, a PCI Service Provider Level 1 certified payment processor, to handle all credit card transactions securely. This article explains our comprehensive security infrastructure, including encryption protocols, data separation practices, and the measures we take to ensure your financial information remains protected at all times.

## Why this is important

We take security very seriously. In fact, it's the biggest consideration in everything we do. We use Stripe as our payment processing provider. We don't store any credit card information – Stripe does. Stripe has been audited by a certified PCI auditor and is certified PCI Service Provider Level 1. This is the strictest level of certification available.

## How does Stripe store credit card numbers?

All card numbers are encrypted on disk with AES-256. Decryption keys are stored on separate machines. None of Stripe's internal servers and daemons can obtain card numbers in plain text; instead, they can only request that cards be sent to a service provider on a static whitelist. Stripe's infrastructure for storing, decrypting, and transmitting card numbers operates in a separate data center and shares no credentials with Stripe's primary services (API, website, etc.).

## Do you have a concern? Need to report an incident?

Contact the support team if you've noticed abuse, misuse, or have experienced an incident with your account.

## Troubleshooting

**Security alert notifications**

- Immediately review the alert details
- Change your password if unauthorized access is suspected
- Enable two-factor authentication for additional security

**Unable to update payment information**

- Clear browser cookies and cache
- Try using a different browser or device
- Ensure JavaScript is enabled for Stripe integration

**Suspicious account activity**

- Contact support immediately to report the incident
- Document any unauthorized changes or transactions
- Review recent login history and active sessions

**Payment security concerns**

- Verify the URL shows HTTPS and lock icon
- Check that you're on the official Cakemail domain
- Never share payment details via email or unsecured channels

**Data breach response**

- Change your password immediately
- Review all account settings and recent activity
- Contact support to report the incident and get assistance

## Related articles

- [Managing your billing](/en/docs/billing/update-your-billing-information) - Secure billing management
- [Setting up multi-factor authentication (MFA)](/en/docs/account-settings/multi-factor-authentication-mfa) - Account security
- [Account deletion request](/en/docs/account-settings/canceling-your-account) - Data removal
- [Adding and editing users](/en/docs/account-settings/adding-and-editing-users) - Access control
- [First steps](/en/docs/first-steps) - Security basics