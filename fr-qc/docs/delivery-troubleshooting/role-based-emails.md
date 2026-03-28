---
source: "https://support.cakemail.com/hc/en-us/articles/360056244474-Understanding-role-based-emails"
---

# Courriels basés sur les rôles

## Description

Les adresses courriel basées sur les rôles (comme admin@, help@, sales@) sont des adresses qui ne sont pas associées à une personne particulière, mais plutôt à une compagnie, département ou groupe. Ces adresses ne sont pas destinées à un usage personnel car elles incluent typiquement une liste de distribution de plusieurs destinataires.

## Pourquoi c'est important

C'est pas surprenant que ces adresses soient des cibles de choix pour les spammeurs : facilement obtenues d'internet. Les expéditeurs avec un haut pourcentage de comptes de rôle sur leur(s) liste(s) sont à plus haut risque d'être bloqués pour utiliser une liste récoltée ou achetée.

### Problèmes clés :

- **Listes de distribution** : Puisque les comptes de rôle sont typiquement envoyés à plus d'une personne, c'est difficile de prouver le consentement pour chaque destinataire
- **Pièges à pourriels** : Les pièges à pourriels honeypot utilisent des comptes de rôle pour mettre sur liste noire les expéditeurs qui leur envoient
- **Blocage automatique** : Par défaut, les fournisseurs de liste noire comme Spamhaus traiteront tout courriel envoyé à ces adresses comme pourriel puisqu'ils rapportent que ça a été obtenu et utilisé sans permission
- **Impact sur la réputation** : Utiliser des comptes de rôle augmente le risque de plaintes de pourriel et réduit la réputation de l'expéditeur

## La protection de ton fournisseur courriel

On maintient une liste de suppression maître de plus de 400 adresses communes basées sur les rôles. Bien que la liste complète ne soit pas rendue publique, on peut te dire qu'elle est mise à jour fréquemment pour assurer que nos clients maintiennent un haut niveau de livraison courriel.

## Articles connexes

- [Maîtriser les bases de livrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Meilleures pratiques
- [Gérer la suspension de compte](/fr-qc/docs/delivery-troubleshooting/account-suspensions) - Risques basés sur les rôles
- [Créer et gérer une liste de contacts](/fr-qc/docs/audience/managing-contact-lists) - Éviter les adresses de rôle
- [Importer des contacts](/fr-qc/docs/audience/importing-contacts-into-your-lists) - Filtrer les courriels de rôle
- [Comprendre les plaintes rebonds et désabonnements](/fr-qc/docs/analytics/email-bounces) - Plaintes de courriels de rôle