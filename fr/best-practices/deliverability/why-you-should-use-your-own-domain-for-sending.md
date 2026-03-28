---
source: "https://support.cakemail.com/hc/en-us/articles/360056294614-Use-my-own-domain-in-the-sender-email-address-why"
---

# Pourquoi vous devriez utiliser votre propre domaine pour l'envoi d'emails

Lors de l'envoi d'une newsletter en utilisant une adresse email se terminant par @yahoo.com ou @google.com via n'importe quel service de marketing par courriel, cela est perçu comme une usurpation d'identité de Yahoo! ou Google, même si vous possédez légitimement cette adresse email.

Il est important de comprendre que l'envoi à partir d'un domaine non authentifié peut entraîner de sérieux problèmes de livraison avec tous les fournisseurs de messagerie, empêchant potentiellement les destinataires de recevoir vos emails dans leur boîte de réception.

## Le défi de l'authentification

Ne pas authentifier votre domaine ouvre la porte à des défis de délivrabilité pour vos emails. Sans protocoles d'authentification comme SPF, DKIM et DMARC en place, les spammeurs peuvent exploiter votre domaine, ternissant la légitimité de vos emails. Les fournisseurs de messagerie, à leur tour, peuvent voir ces messages avec scepticisme, augmentant la probabilité qu'ils soient marqués comme SPAM ou qu'ils n'atteignent pas du tout les boîtes de réception des destinataires.

L'authentification agit comme une couche de vérification cruciale, garantissant que vos emails sont reconnus comme des communications légitimes et dignes de confiance, et améliorant considérablement leurs chances de livraison réussie.

## Utilisez votre domaine pour améliorer votre délivrabilité email

Lors de l'utilisation d'une adresse email associée à un domaine que vous possédez, il est crucial de l'authentifier. Ce processus d'authentification sert de preuve que vous êtes un expéditeur légitime, renforçant la crédibilité de votre email et augmentant la probabilité d'une livraison réussie. En prenant cette mesure, vous établissez non seulement la confiance avec les fournisseurs de messagerie, mais vous assurez également que vos messages atteignent de manière fiable les boîtes de réception des destinataires prévus.

## Utiliser mon propre domaine dans l'adresse email d'expéditeur – recommandations

Lors de l'envoi de newsletters en utilisant notre application, vous devriez utiliser une adresse email avec un domaine que vous possédez, que vous avez authentifié. Voici quelques recommandations supplémentaires pour le domaine lui-même :

- Le domaine lui-même devrait correspondre au site web où les gens se sont inscrits
- Le DNS devrait être configuré pour s'authentifier en utilisant SPF/DKIM
- Avoir des adresses postmaster@ et abuse@ fonctionnelles
- Information WHOIS publique (non privée)
- Ne devrait pas dépasser 30 caractères de longueur
- Être enregistré depuis au moins 30 jours (les nouveaux domaines semblent suspects et pourraient être mis sur liste noire sur Spamhaus ou Spam Eating Monkey)
- Ne devrait pas contenir de tirets "-" ou de points "." inutiles (ex : info@cet-email-est-de-notre.departement.marketing.abc.com)

## Ressources

Nous avons rassemblé quelques ressources pour vous guider :

- Authentifier mon domaine avec les protocoles SPF, DKIM et DMARC
- Choisir la bonne adresse email d'expéditeur
- Vous aurez besoin de l'authentification DMARC pour envoyer des emails à Gmail et Yahoo
- Nouvelles protections Gmail pour une boîte de réception plus sûre et moins spammy

## Articles connexes

- [Choisir la bonne adresse email d'expéditeur](./choosing-the-right-sender-email-address)
- [Réputation de l'expéditeur email : comment la construire et la maintenir](../advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Adresses IP dédiées : quand et pourquoi vous en avez besoin](./dedicated-ip-addresses-when-and-why-you-need-one)