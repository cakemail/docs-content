---
source: "https://support.cakemail.com/hc/fr-ca/articles/360056294614-Use-my-own-domain-in-the-sender-email-address-why"
---

# Pourquoi tu devrais utiliser ton propre domaine pour l'envoi

## Le défi

Quand t'envoies une infolettre avec une adresse qui finit par @yahoo.com ou @google.com via n'importe quel service de marketing par courriel, c'est perçu comme de l'usurpation d'identité de Yahoo! ou Google. Même si tu possèdes légitimement cette adresse.

## L'impact

C'est super important de comprendre qu'envoyer depuis un domaine pas authentifié peut causer de sérieux problèmes de délivrabilité. Tes abonnés risquent de jamais recevoir tes courriels dans leur boîte de réception!

### Pourquoi l'authentification c'est critique

Pas authentifier ton domaine, c'est ouvrir la porte aux problèmes de délivrabilité. Sans les protocoles SPF, DKIM et DMARC:
- Les spammeurs peuvent exploiter ton domaine
- Ta légitimité prend le bord
- Les fournisseurs de messagerie se méfient
- Tes courriels finissent en spam

L'authentification, c'est comme une couche de vérification qui dit aux FAI: "Hey, c'est vraiment moi qui envoie ça!" Ça améliore dramatiquement tes chances de livraison.

## La solution

### Utilise ton domaine pour améliorer ta délivrabilité

Quand t'utilises une adresse courriel avec ton propre domaine, c'est SUPER important de l'authentifier. Ce processus prouve que t'es un expéditeur légitime, renforce ta crédibilité et augmente tes chances de livraison.

En faisant ça, tu:
- Établis la confiance avec les FAI
- T'assures que tes messages se rendent dans les bonnes boîtes
- Protèges ta réputation à long terme

### Recommandations pour ton domaine d'expéditeur

Quand t'envoies des infolettres avec notre app, utilise une adresse avec ton propre domaine authentifié. Voici les specs pour un domaine qui marche:

**Les musts :**
- Correspond au site web où le monde s'est inscrit
- DNS configuré avec SPF/DKIM
- Adresses postmaster@ et abuse@ qui marchent
- Info WHOIS publique (pas privée)

**Les specs techniques :**
- Max 30 caractères
- Enregistré depuis au moins 30 jours (les nouveaux domaines ont l'air louches)
- Pas de tirets "-" ou points "." inutiles

**Exemple à éviter :** info@cet-courriel-est-de-notre.departement.marketing.abc.com
**Exemple qui marche :** info@monentreprise.com

## Les résultats

Avec ton propre domaine authentifié:
- **Délivrabilité maximale** - Tes courriels arrivent
- **Reconnaissance de marque** - Le monde te reconnaît
- **Confiance accrue** - Les FAI te font confiance
- **Protection contre l'usurpation** - Personne peut se faire passer pour toi
- **Analytics précis** - Tu vois vraiment tes performances

## Checklist domaine

**Avant de commencer :**
- [ ] Domaine acheté et configuré
- [ ] SPF/DKIM configurés
- [ ] DMARC en place
- [ ] Adresses postmaster@ et abuse@ créées
- [ ] WHOIS publique
- [ ] Domaine âgé d'au moins 30 jours

## Ressources pour t'aider

- Guide d'authentification SPF, DKIM et DMARC
- Comment choisir la bonne adresse d'expéditeur
- DMARC obligatoire pour Gmail et Yahoo
- Nouvelles protections Gmail contre le spam

## Articles connexes

- [Choisir la bonne adresse d'expéditeur](/fr-qc/best-practices/deliverability/choosing-the-right-sender-email-address)
- [Optimisation de la délivrabilité : guide complet](/fr-qc/best-practices/deliverability/email-deliverability-optimization-complete-guide)
- [Adresses IP dédiées : quand et pourquoi t'en as besoin](/fr-qc/best-practices/deliverability/dedicated-ip-addresses-when-and-why-you-need-one)