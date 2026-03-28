---
source: "https://support.cakemail.com/hc/en-us/articles/4473616161307-Using-a-private-email-address-domain"
---

# Réputation de l'expéditeur

## Description

La partie d'une adresse email qui suit le symbole @ est connue comme le domaine. Les fournisseurs de email les plus populaires pour les emails personnels sont Gmail, Outlook, et Yahoo. Les organisations et marques, cependant, ont généralement leurs propres domaines de email dans un contexte commercial ou institutionnel.

## Pourquoi c'est important

Du point de vue de votre destinataire, la première impression que vous donnez avec une adresse email comme « @gmail.com » n'est pas précieuse pour votre organisation ou marque. De même, il est difficile de reconnaître l'expéditeur du message d'un coup d'œil avec un email comme celui-ci. De plus, vous ne pouvez pas prouver votre identité, ce qui rend difficile pour vous de bâtir la confiance avec votre audience.

Une adresse Gmail ou Outlook peut être créée par n'importe qui à tout moment. Donc, en essence, il est clairement impraticable pour un client potentiel de vérifier que vous êtes qui vous prétendez être sans voir une adresse email qui prouve votre identité. Par exemple, si vous utilisez une adresse d'expéditeur qui finit par @yahoo.com pour envoyer une infolettre via un service de marketing par email, Yahoo! considère que vous usurpez l'identité de l'entreprise, même si vous êtes le propriétaire légitime.

## Problèmes de délivrabilité causés lors de l'utilisation d'adresses email gratuites

Yahoo! et AOL ont demandé aux récepteurs de rejeter tout email qui n'est pas envoyé via leur propre client de email ou par leurs employés, causant le rebond des emails que vous envoyez. De même, d'autres adresses de webmail gratuites pourraient rediriger les emails qui ne sont pas envoyés par leurs employés vers les dossiers SPAM et Indésirables.

## Utiliser votre propre domaine d'adresse email privé

1. **Décidez d'un domaine et enregistrez-le**

Gardez une identité cohérente avec vos destinataires en vous assurant qu'il se rapporte à votre marque et votre site web. Vous améliorerez votre délivrabilité de email en utilisant une adresse email avec un domaine que vous possédez.

2. **Choisissez le bon fournisseur de domaine lors de l'achat d'une adresse email de domaine**

Trouvez celui qui vous convient. Voici quelques conseils qui pourraient s'avérer utiles lors du choix d'où l'enregistrer :

- Vous devriez chercher un domaine avec un support client utile pour vous aider à configurer votre domaine et adresse email
- Assurez-vous qu'il inclut la Confidentialité WHOIS pour que vos informations de contact soient sécurisées
- Assurez-vous d'avoir le contrôle complet sur votre nom de domaine, au cas où vous souhaiteriez changer de services

3. **Authentifiez votre domaine**

Pour prouver qui vous êtes, assurez-vous d'authentifier votre adresse email.

4. **Changez votre domaine d'expéditeur**

Avec un domaine reconnaissable et authentifié qui vous appartient, vous pouvez maintenant changer en toute sécurité l'adresse email d'expéditeur pour les campagnes.

## Dépannage

**Je ne peux pas vérifier la propriété de mon domaine**

- Vérifiez doublement que vous avez ajouté les enregistrements DNS exactement tels que fournis (pas d'espaces ou caractères supplémentaires)
- Accordez 24-48 heures pour la propagation DNS avant de réessayer la vérification
- Utilisez des outils de recherche DNS pour confirmer que vos enregistrements sont visibles
- Contactez le support de votre registraire de domaine si les enregistrements ne se sauvegardent pas correctement

**Mes emails rebondissent après avoir changé de Gmail à mon domaine**

- Assurez-vous que les enregistrements SPF, DKIM, et DMARC sont correctement configurés
- Réchauffez graduellement votre nouveau domaine d'envoi avec de petits volumes
- Vérifiez que votre adresse « de » existe réellement et peut recevoir des réponses
- Vérifiez que votre domaine n'est pas tout nouveau (moins de 30 jours)

**L'authentification de domaine continue d'échouer**

- Confirmez que vous ajoutez les enregistrements à la bonne zone DNS
- Vérifiez les fautes de frappe dans les enregistrements d'authentification
- Assurez-vous de ne pas avoir d'enregistrements SPF en conflit
- Retirez tous les anciens enregistrements d'authentification ou doublons

**Mon fournisseur de domaine ne supporte pas l'hébergement de email**

- Utilisez un service d'hébergement de email séparé (Google Workspace, Microsoft 365, etc.)
- Configurez le transfert de email vers une autre adresse que vous contrôlez
- Considérez utiliser un sous-domaine spécifiquement pour le marketing par email
- Assurez-vous que les enregistrements MX sont correctement configurés pour votre hôte de email

## Articles connexes

- [Authentifier mon domaine avec SPF DKIM et DMARC](/fr/docs/senders/authenticating-domains) - Configuration complète
- [Configurer et gérer les emails d'expéditeur](/fr/docs/senders/managing-senders) - Configurer les expéditeurs
- [Maîtriser les bases de la délivrabilité](/fr/docs/delivery-troubleshooting/email-deliverability) - Aperçu de la délivrabilité
- [Corriger les emails qui vont dans les indésirables](/fr/docs/delivery-troubleshooting/spam-and-promotions-tab) - Améliorer la réputation
- [Premiers pas](/fr/docs/first-steps) - Configuration initiale