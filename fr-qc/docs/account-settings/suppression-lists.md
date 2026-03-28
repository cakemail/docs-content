---
source: >-
  https://support.cakemail.com/hc/en-us/articles/1260806670389-Using-the-suppression-list
---

# Listes de suppression

## Description

Une liste de suppression consiste en des adresses courriel qui sont automatiquement ou manuellement ajoutées pour les empêcher de recevoir des courriels de ta part à l'avenir. Pour des raisons de sécurité, certaines adresses courriel sont automatiquement ajoutées. Il n'est pas possible de supprimer ces adresses de la liste de suppression.

- **Plainte de pourriels :** les abonnés qui signalent un courriel comme pourriels sont immédiatement ajoutés à la liste « Ne pas envoyer de courriel »
- **Demande de désabonnement :** les abonnés qui ont cliqué sur le lien [GLOBAL_UNSUBSCRIBE] et ne veulent pas recevoir de futurs courriels
- **Plainte :** les abonnés qui se sont plaints d'un ou plusieurs courriels qu'ils ont reçus

## Pourquoi c'est important

La liste de suppression, c'est un outil critique de conformité et de gestion de réputation qui protège à la fois ta réputation d'expéditeur et les préférences de tes abonnés. En empêchant automatiquement l'envoi de courriels aux adresses qui se sont plaintes, ont désabonné globalement, ou ont marqué tes courriels comme pourriels, tu maintiens la conformité avec les réglementations anti-pourriels comme CAN-SPAM et RGPD. Cette fonctionnalité aide à préserver tes taux de délivrabilité en t'assurant de ne pas envoyer répétitivement aux destinataires qui ne veulent pas tes courriels, ce qui endommagerait ta réputation d'expéditeur et pourrait mener à être mis sur liste noire par les fournisseurs de courriel.

## Instructions étape par étape

### Ajouter une adresse courriel directement dans la liste de suppression.

<Stepper>

1. Clique sur **Compte** en haut à droite de la page pour accéder aux paramètres du compte
![Cliquer sur le menu Compte](/images/audience/B923FA45-0313-405D-8508-D271D1FF75B1.png)

1. Sélectionne l'option **Liste de suppression** du menu
![Sélectionner la liste de suppression](/images/audience/9FD70838-08D3-4A6D-B883-50E5F856B6CB_4_5005_c.jpeg)

1. Pour ajouter un courriel ou domaine, clique sur **« Ajouter courriel/domaine »**. Note que tu ne peux ajouter qu'un courriel ou domaine à la fois
![Bouton Ajouter courriel/domaine](/images/audience/mceclip0%20(1).png)
</Stepper>


### Ajouter un courriel à la liste de suppression directement depuis la liste de contacts :

<Stepper>

1. Sélectionne ta liste de contacts.

1. Coche pour marquer ton contact spécifique
![Sélectionner la case à cocher du contact](/images/audience/C3735DFB-5FAA-4A80-88FE-32561E541047.png)

1. Clique sur **Actions**
![Cliquer sur le menu Actions](/images/audience/94F72628-824A-4FE6-84D0-78B0227B9C39_4_5005_c.jpeg)

1. Sélectionne **Ajouter à la liste de suppression**
![](/images/audience/153270F1-661D-4A6E-8363-93B24545F921_4_5005_c.jpeg)
</Stepper>

## Suppression de courriel de la liste de suppression
Tout courriel qui a été mis dans la liste de suppression automatiquement par une plainte ne peut pas en être supprimé. Si tu dois faire retirer un contact de cette liste, tu devras contacter l'équipe de support avec les informations suivantes :

- Courriel que tu veux retirer de la liste de suppression
- Preuve que le client veut être actif dans ta liste (courriel avec l'adresse du contact et demande pour recevoir des communications)

## Dépannage

**Impossible d'ajouter un courriel à la liste de suppression**

- Entre un courriel ou domaine à la fois
- Vérifie le format approprié du courriel
- Supprime tous espaces ou caractères supplémentaires
- Assure-toi d'avoir les permissions d'administrateur

**Le courriel reçoit encore des campagnes malgré la suppression**

- Vérifie la correspondance exacte de l'adresse courriel
- Vérifie si tu utilises des variantes de courriel
- Accorde 24-48 heures pour la propagation complète
- Assure-toi que la suppression est à l'échelle du compte

**Impossible de supprimer un courriel de la liste de suppression**

- Les courriels ajoutés par le système ne peuvent pas être supprimés
- Rassemble la preuve de consentement du contact
- Contacte le support avec la documentation
- Vérifie la raison de la suppression automatique

**La recherche dans la liste de suppression ne fonctionne pas**

- Essaie de chercher avec un courriel partiel
- Vérifie les fautes de frappe dans la requête de recherche
- Utilise la recherche de domaine pour plusieurs courriels
- Efface les filtres et cherche à nouveau

**La suppression de domaine ne bloque pas tous les courriels**

- Vérifie le format correct du domaine (exemple.com)
- N'inclus pas le symbole @ pour les domaines
- Vérifie les sous-domaines nécessitant des entrées séparées
- Assure-toi qu'il n'y a pas d'espaces avant/après le domaine

**Nombre élevé de suppressions automatiques**

- Révise le contenu du courriel pour les déclencheurs de pourriels
- Vérifie l'authentification (SPF/DKIM/DMARC)
- Surveille les taux de plaintes
- Considère les pratiques d'hygiène de liste

## Articles connexes

- [Comprendre le statut des contacts](/fr-qc/docs/audience/contact-status) - Statut de suppression expliqué
- [Supprimer un contact](/fr-qc/docs/audience/removing-a-contact) - Méthode de suppression alternative
- [Comprendre les plaintes, rebonds et désabonnements](/fr-qc/docs/analytics/email-bounces) - Suppression automatique
- [Inclure un lien de désabonnement](/fr-qc/docs/campaign-creation/adding-unsubscribe-links) - Activer l'auto-suppression
- [Gérer les contacts](/fr-qc/docs/audience/updating-contact-information) - Aperçu de la gestion des contacts