---
source: "https://support.cakemail.com/hc/en-us/articles/best-practices-list-hygiene"
---

# Hygiène des liste : maintenir une base de données de courriels saine

## Le Défi

Votre liste de courriels se dégrade naturellement d'environ 22,5 % chaque année. Les gens changent d'emploi, abandonnent leurs adresses courriel ou perdent leur intérêt pour votre contenu. Sans maintenance régulière, vous ne gaspillez pas seulement de l'argent en envoyant à des adresses invalides, mais vous endommagez également votre réputation d'expéditeur et réduisez l'efficacité globale de vos campagnes.

## L'Impact

Une mauvaise gestion des liste entraîne :
- **Coûts plus élevés** : Vous payez pour des contacts qui ne s'engagent jamais
- **Délivrabilité réduite** : les FAI signalent les expéditeurs ayant des taux de rebond élevés
- **Métriques faussées** : Les contacts inactifs faussent vos véritables taux d'engagement
- **Atteinte à la réputation** : Des taux de rebond élevés peuvent entraîner le blacklistage

Les études montrent que réduire votre liste de 20 % des contacts inactifs peut améliorer les taux d'ouverture jusqu'à 45 % et les taux de clics de 50 %.

## La Solution

### 1. Programme régulier de nettoyage des liste

**Tâches mensuelles :**
- Examiner les rapports de rebonds et supprimer immédiatement les rebonds définitifs
- Vérifier les adresses courriel basées sur des rôles (info@, admin@, sales@) et envisager de les supprimer
- Identifier et fusionner les entrées en double

**Tâches trimestrielles :**
- Effectuer une segmentation d'engagement pour identifier les abonnés inactifs
- Supprimer les contacts qui n'ont pas interagi depuis plus de 6 mois
- Valider les adresses courriel à l'aide d'outils de vérification
- Vérifier les pièges à pollupostage et les honeypots

**Tâches annuelles :**
- Effectuer un audit complet de la liste
- Campagne de renouvellement d'autorisation pour les inactifs de longue durée
- Mettre à jour les préférences d'abonnement

### 2. Identifier les contacts problématiques

**Types à supprimer :**
- **Hard bounces** : Adresses courriel invalides ou inexistantes
- **Rebonds temporaires répétés** : Après 3-5 rebonds temporaires consécutifs
- **Comptes de rôles** : Sauf demande spécifique
- **Abonnés inactifs** : Aucune ouverture/clic depuis plus de 6 mois
- **Signaleurs de pollupostage**: Toute personne vous ayant signalé comme pollupostage

**Signaux d'alerte à surveiller :**
- Modèles de courriel génériques (test@, asdf@, 123@)
- Modèles de domaines suspects
- Adresses extrêmement anciennes (@aol.com sans engagement)
- Adresses universelles qui acceptent tout

### 3. Ré-engagement avant suppression

Avant de supprimer les abonnés inactifs, tentez une campagne de réactivation :

**Étape 1** : Segmenter les abonnés sans engagement depuis 3-6 mois
**Étape 2** : Créer un courriel de réengagement convaincant
- Objet : "Vous nous manquez ! Voici 20 % de réduction pour votre retour"
- Proposition de valeur claire
- Option de désabonnement facile

**Étape 3** : Envoyez 2-3 courriels sur 2 semaines
**Étape 4** : Retirer les non-répondants après la dernière tentative

### 4. Mettre en œuvre des mesures préventives

**À l'inscription :**
- Utiliser la double authentification pour vérifier les adresses courriel
- Mettre en place un CAPTCHA pour empêcher les soumissions automatisées
- Ajouter la validation des courriels aux formulaires (vérification de la syntaxe)
- Définir les attentes concernant la fréquence des courriels

**Gestion continue :**
- Suivre les tendances d'engagement
- Étiqueter les contacts par niveau d'engagement
- Utilisez des centres de préférences pour permettre aux abonnés de contrôler la fréquence
- Faciliter le désabonnement pour éviter les plaintes de pollupostage

### 5. Utiliser les liste de suppression

Maintenir une liste de suppression principale contenant :
- Tous les désabonnements sur toutes les liste
- Bounces définitifs
- Plaignants pollupostage
- Suppressions manuelles (concurrents, contacts problématiques)

### 6. Calculer les indicateurs de santé de la liste

Suivez ces indicateurs clés chaque mois :
- **Taux de rebond** : Doit être inférieur à 2%
- **Taux d'inactivité** : Pourcentage sans engagement depuis 90 jours
- **Taux de croissance de la liste** : Nouveaux abonnés moins les désabonnements/suppressions
- **Taux d'engagement** : Ouvertures + clics divisés par distribués

**Formule du Score de Santé de la Liste :**
```
(Contacts engagés ÷ Total des contacts) × 100 = % de santé de la liste
```

Visez un score de santé de liste de 70 % ou plus.

## Les résultats

Après avoir mis en place une bonne hygiène de liste :
- **Amélioration de la délivrabilité** : Placement en boîte de réception à 95 %+
- **Réduction des coûts** : Coûts de service courriel réduits de 20-30 %
- **Engagement plus élevé** : Augmentation de 40-50 % des taux d'ouverture
- **Meilleur retour sur investissement** : Augmentation de 25 % des revenus par courriel

## Erreurs courantes à éviter

1. **Garder tout le monde pour toujours** : La qualité prime sur la quantité
2. **Supprimer sans tenter de réengager** : Vous pourriez récupérer 5-10 %
3. **Ignorer les rebonds temporaires** : Plusieurs rebonds temporaires indiquent des problèmes
4. **Ne pas suivre les suppressions** : Gardez des traces des raisons de suppression
5. **Acheter ou louer des liste** : N'ajoutez jamais de contacts achetés
6. **Supprimer sur la base d'un seul indicateur** : Considérez les modèles d'engagement globaux

## Liste de contrôle rapide

**Hebdomadaire :**
- [ ] Supprimer les rebonds définitifs
- [ ] Vérifier les plaintes de pollupostage
- [ ] Examiner la qualité des nouvelles inscriptions

**Mensuel :**
- [ ] Exécuter des rapports d'engagement
- [ ] Nettoyer les courriels basés sur des rôles
- [ ] Fusionner les doublons
- [ ] Mettre à jour la liste de suppression

**Trimestriel :**
- [ ] Segmenter par niveau d'engagement
- [ ] Lancer une campagne de réengagement
- [ ] Supprimer les inactifs à long terme
- [ ] Valider les adresses douteuses

**Annuel :**
- [ ] Audit complet de la liste
- [ ] Mettre à jour les préférences d'abonnement
- [ ] Examiner les tendances de croissance de la liste
- [ ] Planifier une campagne de renouvellement d'autorisation

## Articles connexes

- [Construire une liste de courriels de qualité : meilleures pratiques](/fr-ca/best-practices/list-building/building-a-quality-email-list-best-practices)
- [Campagnes de réengagement : reconquérir les abonnés inactifs](/fr-ca/best-practices/engagement-optimization/re-engagement-campaigns-win-back-inactive-subscribers)
- [Pourquoi les liste de courriels achetées nuisent à votre entreprise](/fr-ca/best-practices/list-building/why-purchased-email-lists-hurt-your-business)