# Contact Status

## Description

Contacts can have different statuses. Here's how to understand them.

## Why It's Important
A pending contact is not YET on your list, since they haven't confirmed your invitation to join. Therefore, they cannot be contacted.

Pay attention to delete vs unsubscribe before proceeding, as they can affect your list. When customers no longer want to receive your emails, you can add them to the unsubscribe list, and in the future, if they reconsider and want to re-subscribe, you can reactivate them. However, if you delete them, it's a permanent action and all data will be lost.

## What Each Status Means

### Active
✅ Contacts can receive your emails and interact with your content

✅ The email is valid, and you have permission to use it.

### Pending
❌ Contacts cannot receive your emails and interact with your content

❌ The email is not validated by the recipient, and therefore you do not have permission to use it.

### Hard Bounce
❌ The email address is invalid according to the recipient, and therefore you cannot send emails to it.

### Soft Bounce
✅ Your last email campaign was not received by the recipient due to a temporary issue, and therefore you can continue trying to send emails to it.

### Unsubscribed
Typically done by the contact using an unsubscribe link

❌ The contact is removed from the sending list

✅ All data and list activity will remain stored

✅ The contact will not be added if imported using a list

✅ If the contact subscribes again, all their contact history will be available

### Deleted
❌ Contacts are removed from the list

❌ All data and list activity are deleted

❌ If the contact subscribes again, previous history will not be available

**Note:** This will not affect past campaign reports.

## Best Practices

- **Use Unsubscribe** when contacts disengage or request removal
- **Use Delete** only when you need to permanently remove invalid or problematic contacts
- **Consider compliance** - unsubscribing maintains audit trails
- **Preserve data** as much as possible for future reactivation campaigns

## Compliance Considerations

- Unsubscribing maintains records for compliance with anti-spam laws
- Deleting removes audit trails that may be required for legal compliance
- Always honor unsubscribe requests quickly to maintain good sender reputation

## Troubleshooting

**Contact stuck in Pending status**

- Confirm the contact received and clicked on the confirmation email
- Check that the email address is valid and correctly entered
- Make sure double opt-in is required and properly configured

**Hard bounce issues**

- Check if the email address is misspelled or no longer valid
- Remove or correct invalid emails to protect deliverability
- Check if the bounce is permanent (hard) vs temporary (soft)
- Consider contacting the user via another channel for an updated email

**Unsubscribed contacts accidentally added**

- Remember that unsubscribed contacts **cannot** be re-added via import
- Ask the contact to re-subscribe via your signup form if they want to receive emails again
- Confirm you're not overriding the unsubscribe status in your import file
- Keep unsubscribe history for compliance purposes

**Lost data after deleting a contact**

- Note that deleted contacts cannot be recovered (all history is lost)
- Use "Unsubscribe" instead of "Delete" if you might need to reactivate them later
- Check that you have backups or exports before permanent deletion
- Be mindful of legal or compliance records before deleting

## Related Articles

- [Manage contacts](/en/docs/audience/updating-contact-information) - Contact management overview
- [Use suppression lists](/en/docs/account-settings/suppression-lists) - Unsubscribed status
- [Understand complaints, bounces and unsubscribes](/en/docs/analytics/email-bounces) - Status change triggers
- [Create a segment](/en/docs/audience/creating-dynamic-segments) - Segment by status
- [Import contacts](/en/docs/audience/importing-contacts-into-your-lists) - Import status management