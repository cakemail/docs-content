# Utiliser mon propre domaine dans l'adresse de courriel de l'expéditeur - pourquoi ?

**Source:** [Support Cakemail](https://support.cakemail.com/hc/en-us/articles/360056294614-Use-my-own-domain-in-the-sender-courriel-address-why)  
**Auteur :** Selma Aboudou
**Dernière mise à jour :** il y a 1 an

Lorsque vous envoyez une newsletter en utilisant une adresse de courriel se terminant par @yahoo.com ou @google.com via un service de marketing par courriel, cela est considéré comme une usurpation d'identité de Yahoo! ou Google, même si vous possédez légitimement cette adresse de courriel.

Il est important de comprendre que l'envoi depuis un domaine non authentifié peut entraîner de sérieux problèmes de livraison avec tous les fournisseurs de messagerie, empêchant potentiellement les destinataires de recevoir vos courriels dans leur boîte de réception.

## Le Défi de l'Authentification

Ne pas authentifier votre domaine ouvre la porte à des défis de délivrabilité pour vos courriels. Sans protocoles d'authentification comme SPF, DKIM et DMARC en place, les spammeurs peuvent exploiter votre domaine, ternissant la légitimité de vos courriels. Les fournisseurs de messagerie peuvent alors considérer ces messages avec scepticisme, augmentant la probabilité qu'ils soient marqués comme POLLUPOSTAGE ou qu'ils n'atteignent pas du tout la boîte de réception des destinataires.

L'authentification agit comme une couche de vérification cruciale, garantissant que vos courriels sont reconnus comme des communications légitimes et dignes de confiance, et améliorant considérablement leurs chances de livraison réussie.

## Utilisez votre domaine pour améliorer la délivrabilité de vos courriels

Lorsque vous utilisez une adresse de courriel associée à un domaine que vous possédez, il est crucial de l'authentifier. Ce processus d'authentification sert de preuve que vous êtes un expéditeur légitime, renforçant la crédibilité de votre courriel et augmentant les chances de livraison réussie. En prenant cette mesure, vous établissez non seulement la confiance avec les fournisseurs de messagerie, mais vous vous assurez également que vos messages atteignent de manière fiable les boîtes de réception des destinataires prévus.

## Utiliser mon propre domaine dans l'adresse de courriel de l'expéditeur – recommandations

Lors de l'envoi de newsletters via notre application, vous devez utiliser une adresse de courriel avec un domaine qui vous appartient et que vous avez authentifié. Voici quelques recommandations supplémentaires concernant le domaine lui-même :

- Le domaine lui-même doit correspondre au site web où les gens se sont inscrits
- Le DNS doit être configuré pour s'authentifier via SPF/DKIM
- Disposer d'adresses postmaster@ et abuse@ fonctionnelles
- Informations WHOIS publiques (non-privées)
- Ne doit pas dépasser 30 caractères
- Être enregistré depuis au moins 30 jours (les nouveaux domaines semblent suspects et pourraient être mis sur liste noire par Spamhaus ou Pollupostage Eating Monkey)
- Ne doit pas contenir de tirets "-" ou de points "." inutiles (ie : info@this-courriel-is-from-our.marketing.department.abc.com)

## Ressources

Nous avons rassemblé quelques ressources pour vous guider :

- Authentification de mon domaine avec les protocoles SPF, DKIM et DMARC
- Choisir la bonne adresse de courriel d'expéditeur
- Vous aurez besoin de l'authentification DMARC pour envoyer des courriels à Gmail et Yahoo
- Nouvelles protections Gmail pour une boîte de réception plus sûre et moins polluée

## Articles connexes

- Authentification de mon domaine avec les protocoles SPF, DKIM et DMARC
- Choisir la bonne adresse de courriel d'expéditeur
- Configuration et gestion des courriels d'expéditeur
- Créer une automatisation en boucle
- Optimisation de votre délivrabilité

---

*Ce contenu a été extrait de la documentation d'aide de Cakemail et formaté à des fins de référence.*