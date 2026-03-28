---
source: "https://support.cakemail.com/hc/fr/articles/360056359394-Information-on-security"
---

# Protection de vos informations

## Description

Notre plateforme s'associe avec Stripe, un processeur de paiement certifié PCI Service Provider Level 1, pour gérer toutes les transactions de cartes de crédit de manière sécurisée. Cet article explique notre infrastructure de sécurité complète, incluant les protocoles de chiffrement, les pratiques de séparation des données et les mesures que nous prenons pour nous assurer que vos informations financières restent protégées en tout temps.

## Pourquoi c'est important

Nous prenons la sécurité très au sérieux. En fait, c'est la plus grande considération dans tout ce que nous faisons. Nous utilisons Stripe comme fournisseur de traitement des paiements. Nous ne stockons aucune information de carte de crédit – Stripe le fait. Stripe a été audité par un auditeur certifié PCI et est certifié PCI Service Provider Level 1. C'est le niveau de certification le plus strict disponible.

## Comment Stripe stocke-t-il les numéros de cartes de crédit ?

Tous les numéros de cartes sont chiffrés sur disque avec AES-256. Les clés de déchiffrement sont stockées sur des machines séparées. Aucun des serveurs internes et démons de Stripe n'est capable d'obtenir les numéros de cartes en texte clair ; à la place, il peut seulement demander que les cartes soient envoyées à un fournisseur de services sur une liste blanche statique. L'infrastructure de Stripe pour stocker, déchiffrer et transmettre les numéros de cartes fonctionne dans un centre de données séparé et ne partage aucune identification avec les services principaux de Stripe (API, site web, etc.).

## Vous avez une préoccupation ? Besoin de signaler un incident ?

Contactez l'équipe de support si vous avez remarqué des abus, une mauvaise utilisation ou avez vécu un incident avec votre compte.

## Dépannage

**Notifications d'alerte de sécurité**

- Examinez immédiatement les détails de l'alerte
- Changez votre mot de passe si un accès non autorisé est suspecté
- Activez l'authentification à deux facteurs pour une sécurité supplémentaire

**Impossible de mettre à jour les informations de paiement**

- Effacez les cookies et le cache du navigateur
- Essayez d'utiliser un navigateur ou un appareil différent
- Assurez-vous que JavaScript est activé pour l'intégration Stripe

**Activité suspecte du compte**

- Contactez immédiatement le support pour signaler l'incident
- Documentez tout changement ou transaction non autorisé
- Révisez l'historique de connexion récent et les sessions actives

**Préoccupations de sécurité des paiements**

- Vérifiez que l'URL affiche HTTPS et l'icône de cadenas
- Vérifiez que vous êtes sur le domaine officiel de Cakemail
- Ne partagez jamais les détails de paiement par email ou canaux non sécurisés

**Réponse à une violation de données**

- Changez votre mot de passe immédiatement
- Révisez tous les paramètres du compte et l'activité récente
- Contactez le support pour signaler l'incident et obtenir de l'assistance

## Articles connexes

- [Gestion de votre facturation](/fr/docs/billing/update-your-billing-information) - Gestion sécurisée de la facturation
- [Configuration de l'authentification multifacteurs (AMF)](/fr/docs/account-settings/multi-factor-authentication-mfa) - Sécurité du compte
- [Demande de suppression de compte](/fr/docs/account-settings/canceling-your-account) - Suppression des données
- [Ajouter et modifier des utilisateurs](/fr/docs/account-settings/adding-and-editing-users) - Contrôle d'accès
- [Premiers pas](/fr/docs/first-steps) - Bases de la sécurité