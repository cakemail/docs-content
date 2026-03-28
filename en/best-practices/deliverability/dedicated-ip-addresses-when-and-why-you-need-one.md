---
source: "https://support.cakemail.com/hc/en-us/articles/360058100213-Dedicated-sending-IP-address"
---

# Dedicated IP Addresses: When and Why You Need One

## Description

A dedicated IP address is assigned exclusively to a sender. Therefore, said company would be the only brand that can send from that IP address. As a result, a dedicated IP address won't be affected by other senders and they will have control over their reputation.

## Why this is useful

The major advantage of using your own IP address (or addresses) is that you have control of your reputation and ultimately your delivery. ISPs have a tendency to give "preferential" treatment if the email originating from an IP address is static, that IP has been sending for a long time and that it has a good reputation. If they see multiple senders using the same IP address, they have no choice but to take a closer look at the email being sent as the sender keeps changing.

## How to setup your dedicated sending IP address

### Dedicated IP Requirements

For a client to qualify for a dedicated IP address, certain criteria must be met. Dedicated IPs may not be suitable for everyone. If the sender does not meet the criteria (below), their reputation will be poor, they will not likely be able to deliver emails effectively, and will likely be placed back on the shared pool.

### Sending Requirements

- Open rate of at least 15%
- Hard bounce rate of no more than 5%
- Spam rate of no more than 0.1%
- Unsubscribe rate of no more than 1%

### Volume Requirements

- A minimum monthly volume of 30,000 emails
- A maximum daily volume of 1,000,000 emails (per IP)
- Client must send on a consistent basis (at least once per week)

### Cost

- Setup cost: $0
- $99 USD per IP / per month

### Setup

An A and MX record will need to be created in the DNS of the client's domain that redirects to the IP (provided by us).

We will handle the initial setup, DNS confirmation, testing, FBL setup, whitelisting, IP warm-up and throttling. The setup process takes a minimum of 7 business days and the IP will need to be warmed up for a period of about 2-4 weeks before it can send at full volume. The warm-up phase can be expedited if the client sends every day and maintains a good reputation.

If the client sends on a regular basis, abide by best practices and has a high level of engagement together with a low number of bounces and complaints - their delivery will always be better on their own IP and the warm-up period will be shorter.

## Dedicated IP addresses: best practices

Sending regularly, adhering to best practices, and having a high level of engagement with a low bounce rate and complaint rate will ensure better delivery on your own IP.

## Related Articles

- [Email Sender Reputation: How to Build and Maintain It](../advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Email Deliverability Optimization: Complete Guide](./email-deliverability-optimization-complete-guide)
- [Why You Should Use Your Own Domain for Email Sending](./why-you-should-use-your-own-domain-for-sending)