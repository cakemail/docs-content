---
source: >-
  https://support.cakemail.com/hc/fr/articles/1260807408129-Comprendre-l-automation-de-email
---

# Comprendre l'automation de courriel

## Description

L'automation vous permet de lier une action effectuée par vos contacts à une séquence de tâches prédéfinies. Les tâches manuelles peuvent être exécutées automatiquement par cet outil, avec une plateforme de travail unique qui se synchronise avec les conditions et activités existantes. Avec l'automation, par exemple, vous pourriez configurer un courriel de bienvenue à envoyer quelques secondes après qu'un contact s'inscrive à un formulaire d'abonnement lié à une liste.

Ce qui suit est présenté dans ce guide :
- La capacité d'accéder et de gérer les automations
- Une description des fonctions de cet outil

## Pourquoi c'est important

L'automation est parfaite pour les tâches répétitives asynchrones. Elle peut augmenter l'efficacité, la productivité, la précision et réduire les erreurs lorsqu'elle est bien faite. Vous serez capable de mieux gérer votre système de travail avec elle parce que vous en aurez un aperçu plus clair.

## Instructions étape par étape

### Créer une automation :

<Stepper>

1. Cliquez sur Automations.

1. Cliquez sur le signe + en haut à droite de la page.
Vous pouvez également le créer à partir du bouton Créer
Si vous avez déjà créé une automation, elle se trouvera également ici. 
Vous pouvez l'ouvrir, la renommer ou la supprimer.
![Liste d'automations montrant les automations existantes](/images/automations/1B49B1AC-5024-450E-A740-F6853A6B88D9.png)
</Stepper>

### Page de modification d'automation

Sur cette page, vous verrez comment votre automation s'écoule de haut en bas de manière structurée avec chaque étape représentée par des blocs interconnectés.

![Éditeur de flux de travail d'automation montrant des blocs interconnectés](/images/automations/33FA06AA-A3C9-404D-9B68-19BD7AF5B3B8.png)

Ici vous pouvez :
- Ajouter manuellement des contacts à l'automation
- Afficher les statistiques de campagne automatisée pendant une période spécifique
- Modifier le flux de travail

![Menu déroulant des statistiques d'automation](/images/automations/mceclip0.png)

### Modifier une automation

Il y a deux types d'étapes lors de la modification/création d'un flux :
- Conditions
- Actions.

#### Sélectionner une condition

Une condition peut être soit :

**Délai :** Ceci vous permet de définir un délai en secondes, minutes, heures, jours et même en semaines.

**Si / Sinon :** Selon que les contacts correspondent aux conditions, ils rejoindront le chemin Oui, sinon ils iront vers le chemin Non.

**Division de chemin :** Vos abonnés peuvent être divisés en utilisant cette condition.

#### Sélectionner une action

L'action par défaut sur une automation sera d'envoyer un email automatisé. Vous pouvez modifier le email avec le concepteur de email et déterminer la ligne d'objet du email dans le menu des paramètres de déploiement.

![Panneau de configuration d'action de email](/images/automations/E97A2994-721A-4A9A-9B0A-4E8F0D52D6D0_4_5005_c.jpeg)

## Activer une automation

Une fois que vous êtes prêt à lancer cette automation, vous pouvez la réviser et l'activer.

![Bouton bascule d'activation d'automation](/images/automations/mceclip3.png)

Vous serez notifié si quelque chose doit être corrigé avant que l'automation puisse être activée.

## Statistiques d'automation

Cliquez sur le bouton déroulant pour choisir la période et afficher les statistiques de votre automation.

![Sélecteur de période et aperçu des statistiques](/images/automations/50891B80-F44A-462E-A398-3DA7E6240367.png)
![Flux d'automation avec métriques de performance](/images/automations/4AD7C319-83F1-4E11-8231-FBE41C5FFE9F.png)

Cliquez sur le email pour voir un panneau latéral plus détaillé. Vous pouvez voir les taux d'ouverture, de clic, de désabonnement, de livraison et de rebond pour votre email.

![Panneau détaillé des métriques de performance de email](/images/automations/Capture_d_e_cran__le_2022-04-25_a__14.58.34.png)

Les rouages sont maintenant en mouvement et l'automation est active ! Vous pouvez l'ajuster selon vos besoins.

## Dupliquer et modifier un flux d'automation

Les automations existantes doivent être dupliquées pour être modifiées.

Voici comment procéder :

1. Cliquez sur la flèche vers le bas en haut à droite

![Menu d'automation montrant les options renommer, supprimer et dupliquer](/images/automations/mceclip2.png)

2. Utilisez ce menu pour Renommer, Supprimer ou Dupliquer l'automation

Si vous choisissez de la dupliquer, votre automation sera recréée comme une copie que vous pouvez modifier.

## Dépannage

**L'automation ne démarre pas**

- Vérifiez que le bouton bascule d'automation est défini sur ON
- Vérifiez que les conditions de déclenchement sont correctement configurées
- Assurez-vous que la liste connectée a des abonnés actifs

**Impossible de modifier l'automation active**

- Dupliquez l'automation pour créer une copie modifiable
- Désactivez l'automation originale avant d'activer la nouvelle version
- Testez les changements avec un petit segment avant le déploiement complet

**Les statistiques ne s'affichent pas**

- Accordez 24 à 48 heures pour que les statistiques initiales se remplissent
- Vérifiez que la période sélectionnée correspond au moment où les emails ont été envoyés
- Vérifiez que les pixels de suivi ne sont pas bloqués par les clients de email

**Problèmes avec le concepteur de email**

- Videz le cache du navigateur si le concepteur ne se charge pas correctement
- Utilisez Chrome ou Firefox pour une meilleure compatibilité
- Enregistrez votre travail fréquemment pour éviter la perte de changements

**Erreurs de validation du flux de travail**

- Assurez-vous que tous les blocs de contenu de email sont complétés
- Vérifiez que toutes les branches ont des points de terminaison définis
- Vérifiez que les champs requis dans les conditions sont remplis

## Articles connexes

- [Créer un email de bienvenue automatisé](/fr/docs/automations/creating-an-automated-welcome-email) - Votre première automation
- [Créer une automation avec des conditions de branchement](/fr/docs/automations/creating-an-automation-with-branching-conditions) - Flux de travail avancés
- [Créer une automation en boucle](/fr/docs/automations/creating-a-looping-automation) - Campagnes récurrentes
- [Premiers pas](/fr/docs/first-steps) - Guide de démarrage
- [Créer et gérer une liste de contacts](/fr/docs/audience/managing-contact-lists) - Destinataires d'automation