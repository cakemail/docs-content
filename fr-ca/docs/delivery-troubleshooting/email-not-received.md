---
title: "Mon courriel n'a pas été reçu"
lang: fr-ca
content_type: docs
source: en/docs/delivery-troubleshooting/email-not-received.md
source_version: bc98ea8
---

# Mon courriel n'a pas été reçu

## Description

Il arrive parfois qu'un contact te signale qu'il n'a pas reçu ton courriel. Avant d'escalader le problème à notre équipe de soutien, suis les étapes ci-dessous pour identifier rapidement et résoudre les problèmes de livraison les plus courants.

## Pourquoi c'est important

La livraison des courriels peut échouer pour de nombreuses raisons — d'un statut de contact incorrect au filtrage par les fournisseurs de messagerie. En effectuant ces vérifications clés en premier, tu peux souvent régler le problème immédiatement et t'assurer que tes messages atteignent la boîte de réception de façon constante.

## Étapes de dépannage

<Stepper>

1. Vérifie si le contact est **actif** dans la liste
2. Confirme si le courriel a bien été envoyé :
   Campagne > Activité du contact > Envoyé à > Vérifie si le contact figure dans la liste

3. Demande au destinataire de vérifier son dossier Pourriel, les onglets Promotions ou Mises à jour de Gmail, ainsi que sa corbeille

4. Vérifie dans ta liste de suppression

   Compte > Liste de suppression

**Ajouté manuellement :** Si tu as la preuve que la personne souhaite s'abonner et qu'elle a été ajoutée manuellement à la liste de suppression, supprime-la simplement de cette liste.

**FBL** Cela signifie que l'abonné a soumis une plainte de pourriel lorsqu'il a reçu ton courriel. S'il souhaite se réabonner, tu dois obtenir une preuve écrite de sa part indiquant qu'il veut se réabonner, puis escalader la demande à ton fournisseur de services avec cette preuve.

5. A-t-il déjà reçu des courriels de ta part, ou est-ce la première fois qu'il n'en reçoit pas ?

6. A-t-il déjà fait une plainte, s'est-il désabonné ou a-t-il transféré un courriel reçu de ta part ?

​	Si non : vérifie le statut du contact dans ta liste — s'il est désabonné ou en rebond définitif

​		**S'il est désabonné** : obtiens une preuve écrite que le contact souhaite se réabonner et escalade la demande à ton fournisseur de services

​		**S'il est en rebond définitif** : cela signifie que l'adresse est invalide et n'existe plus

7. S'agit-il d'un compte de rôle ? (Les comptes de rôle sont des adresses courriel qui n'appartiennent pas à une personne, mais généralement à un groupe ou un département, comme ventes@, soutien@, marketing@, etc. Ces courriels sont supprimés par défaut, car ils ont plus de risques de déclencher une mise sur liste noire étant donné qu'ils sont très accessibles publiquement. Si tu peux prouver le consentement pour ces courriels, tu devras faire une demande pour les mettre sur liste blanche.)
8. Si tu utilises ton propre domaine : assure-toi d'avoir **authentifié ton domaine**, car cela peut entraîner le blocage de tes courriels par des fournisseurs comme Gmail, Yahoo, Hotmail, etc.

​	Si non authentifié : commence par effectuer ton authentification, ça fera une grande différence

9. Est-ce que tous les courriels non reçus sont envoyés à la même entreprise ou au même domaine ? Cela peut signifier qu'ils sont bloqués par un outil de surveillance interne ou un antivirus. Tu dois leur demander de contacter leur département TI ou leur fournisseur de messagerie pour mettre ton domaine d'expéditeur sur liste blanche.

## Dépannage

-

## Articles connexes

- [Authentifier mon domaine avec SPF, DKIM et DMARC](/fr-ca/docs/senders/authenticating-domains) - Améliorer la réputation
- [Maîtriser les bases de la délivrabilité](/fr-ca/docs/delivery-troubleshooting/email-deliverability) - Placement en boîte de réception
- [Mise sur liste noire de domaine](/fr-ca/docs/delivery-troubleshooting/domain-blacklisting) - Vérifier les listes noires
- [Comprendre les plaintes, les rebonds et les désabonnements](/fr-ca/docs/analytics/email-bounces) - Plaintes de pourriel
- [Tester ta campagne](/fr-ca/docs/campaign-creation/testing-your-campaign) - Tester les scores de pourriel
