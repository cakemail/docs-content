---
source: "https://support.cakemail.com/hc/en-us/articles/28333683831067-Troubleshooting-Missing-Emails-A-Step-by-Step-Guide"
---

# Emails manquants

## Description

Les emails qui n'arrivent pas dans la boîte de réception peuvent être frustrants, que vous soyez l'expéditeur ou le destinataire. Il y a plusieurs facteurs qui pourraient empêcher un email d'être livré ou vu. Ce guide vous accompagnera à travers les étapes pour dépanner et résoudre le problème.

## Pourquoi c'est important

Les emails doivent être livrés efficacement, donc vous devez savoir ce qui peut les empêcher d'atteindre leurs destinataires prévus. Essentiellement, le marketing par email implique plus que simplement écrire un email et cliquer envoyer. Pour que ça fonctionne, il dépend fortement d'une réputation, d'un contenu de valeur, d'une liste d'abonnés engagés et d'une plateforme de marketing interactive qui peut faciliter la livraison, tous étant des éléments qui influencent l'efficacité de la livraison.

**Note complémentaire :** Un facteur commun affectant la délivrabilité est l'authentification de domaine. Assurez-vous que votre domaine est authentifié pour éviter les problèmes potentiels de livraison. En savoir plus ici.

## Processus de dépannage étape par étape.

<Stepper>

1. Confirmer que le email a été envoyé
D'abord, vérifiez que le email a réellement été envoyé en vérifiant si le contact fait réellement partie de votre liste et quel est son statut. S'il n'est pas marqué comme Actif, cela signifie qu'il ne peut pas lui être envoyé.
**Comment vérifier :**
- Naviguez vers votre **Campagne > Activité des contacts > Envoyé à** 
- Vérifiez si le contact est présent dans votre liste
- Si le email n'a pas été envoyé, c'est probablement dû à un problème avec le statut du contact
![Capture d'écran de l'interface de dépannage des emails manquants](/images/delivery-troubleshooting/contact-activity-status.png)

1. Réviser le statut du contact
Si le contact n'a pas reçu vos emails, vérifiez son statut dans votre liste. Si le statut est autre qu'actif, alors il ne reçoit probablement pas vos emails :
**Problèmes de statut courants :**
- **Désabonné** : Si le contact est désabonné, obtenez une preuve écrite qu'il veut se réabonner, puis escaladez-le à votre fournisseur de service
- **Rebond définitif** : Un rebond définitif indique que l'adresse est invalide et n'existe plus
- **Plainte de spam** : Si le statut affiche « FBL », alors c'est une plainte de SPAM. Obtenez une preuve écrite que le contact veut se réabonner, et escaladez-le à notre équipe de support
![capture d'écran](/images/delivery-troubleshooting/contact-status-issues.png)
</Stepper>

### 3. Vérifier votre liste de suppression

Il est possible que le contact soit sur votre liste de suppression. **Comment vérifier :**
- Allez à **Compte > Liste de suppression** 
- Voyez si l'adresse est listée
- Si vous avez la preuve que la personne veut recevoir des emails mais a été supprimée par erreur, retirez-la simplement de la liste de suppression

![capture d'écran](/images/delivery-troubleshooting/suppression-list-view.png)

![capture d'écran](/images/delivery-troubleshooting/remove-from-suppression.png)

### 4. Déterminer si le contact a reçu des emails auparavant

Si le destinataire a reçu des emails de vous dans le passé, mais pas cette fois, cela peut aider à cerner le problème :
- **Succès précédent** : Indique que l'adresse email est valide
- **Problèmes récents** : Peuvent pointer vers des problèmes de livraison ou de filtrage de spam
- **Analyse de modèle** : Vérifiez si plusieurs contacts sont affectés

## Causes communes de emails manquants

- **Adresses email invalides** : Les rebonds définitifs indiquent des adresses inexistantes
- **Filtrage de spam** : Emails attrapés par les filtres de spam
- **Problèmes d'authentification de domaine** : Les domaines non authentifiés peuvent être bloqués
- **Liste de suppression** : Contacts ajoutés par erreur à la suppression
- **Statut des contacts** : Les contacts désabonnés ou ayant porté plainte ne recevront pas de emails

## Prochaines étapes

Si les emails sont toujours manquants après avoir suivi ces étapes :
1. **Contacter le support** : Fournissez des détails spécifiques sur les emails manquants
2. **Authentification de domaine** : Assurez-vous que votre domaine d'envoi est correctement authentifié
3. **Hygiène de liste** : La maintenance régulière de liste prévient les problèmes de livraison
4. **Test de livraison** : Envoyez des emails de test pour identifier les modèles

## Contenu connexe

## Dépannage

**Le contact montre comme « envoyé à » mais prétend ne pas l'avoir reçu**

- Demandez-leur de vérifier les dossiers spam/indésirables et autres onglets de email (Promotions, Mises à jour)
- Vérifiez que l'adresse email est tapée correctement sans espaces ou caractères supplémentaires
- Vérifiez si leur fournisseur de email a un filtrage agressif (emails corporatifs surtout)
- Envoyez un email de test d'un email personnel pour confirmer que leur adresse fonctionne

**Plusieurs contacts du même domaine ne reçoivent pas de emails**

- Le domaine pourrait bloquer ou filtrer vos emails au niveau du serveur
- Contactez leur département IT pour ajouter votre domaine d'envoi aux listes blanches
- Vérifiez si vous êtes sur des listes noires spécifiques au domaine
- Considérez utiliser une adresse FROM différente ou un sous-domaine pour ce client

**Les emails étaient livrés avant mais ont soudainement arrêté**

- Révisez si vos modèles d'envoi ont changé (volume, fréquence, contenu)
- Vérifiez si l'authentification de votre domaine a expiré ou changé
- Recherchez des taux récents élevés de rebond ou de plainte qui ont endommagé la réputation
- Vérifiez que votre compte n'est pas sous révision ou suspendu

**Le contact est actif mais ne reçoit toujours pas de emails**

- Vérifiez doublement qu'il n'est pas sur votre liste de suppression
- Vérifiez qu'il n'a pas créé de règles de email qui suppriment automatiquement ou déplacent vos emails
- Vérifiez s'il a votre domaine bloqué au niveau du client de email
- Considérez que sa boîte de réception pourrait être pleine ou dépassant le quota

## Articles connexes

- [Expérimenter des délais de livraison de email](/fr/docs/delivery-troubleshooting/delivery-delays) - Retardé vs. manquant
- [Corriger les emails qui vont dans les indésirables](/fr/docs/delivery-troubleshooting/spam-and-promotions-tab) - Vérifier le dossier spam
- [Tester votre campagne](/fr/docs/campaign-creation/testing-your-campaign) - Tester la livraison
- [Comprendre les rapports de campagne](/fr/docs/analytics/understanding-campaign-reports) - Vérifier les statistiques de livraison
- [Gérer les rebonds de email](/fr/docs/delivery-troubleshooting/email-bounces) - Problèmes de rebond