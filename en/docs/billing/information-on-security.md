# Information on security

## Description

What provider do we use to store and manage your credit card information safely.

## Why this is important

We take security very seriously. In fact, it's the most important consideration in everything we do. We've decided to use Stripe as our payment processing provider. We don't store any credit card information - Stripe handles this. Stripe has been audited by a certified PCI auditor and is certified PCI Service Provider Level 1. This is the strictest level of certification available.

## How does Stripe store card numbers?

All card numbers are encrypted on disk with AES-256. Decryption keys are stored on separate machines. None of Stripe's internal servers and daemons can obtain card numbers in plain text; they can only request that cards be sent to a service provider on a static whitelist. Stripe's infrastructure for storing, decrypting, and transmitting card numbers runs in a separate data center and shares no credentials with Stripe's primary services (API, website, etc.).

## Do you have a concern? Need to report an incident?

Contact the support team if you've noticed abuse, misuse, or have experienced an incident with your account.

## Related articles

- Managing your billing
- Welcome to the new status page
- CAN-SPAM compliance
- Understanding and configuring private sender email addresses
- Setting up your timezone

---

