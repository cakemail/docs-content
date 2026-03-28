---
source: >-
  https://support.cakemail.com/hc/fr/articles/9064415975707-Déterminer-le-parcours-client-par-les-attributs-personnalisés-d-automation
---

# Suivre les parcours clients avec des attributs personnalisés

<Callout type="info" title="Fonctionnalité Premium">
  Les attributs personnalisés dans les automations sont disponibles exclusivement avec les forfaits Premium. Pour débloquer cette fonctionnalité super utile, clique sur **Mettre à niveau le plan** dans le menu de ton compte.
</Callout>

## Description

En utilisant l'outil d'automation, tu peux configurer des actions qui mettent automatiquement à jour l'attribut personnalisé d'un destinataire quand une autre étape est prise, comme cliquer sur un lien ou ouvrir un courriel. On va te montrer comment procéder dans cet article.

## Pourquoi c'est important
Tu peux utiliser cette action pour déterminer quel chemin faire prendre à tes abonnés pendant ton processus d'intégration et créer des segments dans ta liste. Tu peux également ajouter ça à une automation existante pour changer l'attribut d'un client selon une action spécifique dans le flux.

*Guides connexes :*
- [Créer une automation avec des conditions de branchement](/fr-qc/docs/automations/creating-an-automation-with-branching-conditions)
- [Créer un segment de liste de contacts](/fr-qc/docs/audience/creating-dynamic-segments)

## Instructions étape par étape

<Stepper>

1. Clique sur Automations.

1. Clique sur le signe + en haut à droite de la page.
Tu peux également le créer à partir du bouton Créer

1. Dans le menu **Sélectionner un point de départ**, tu peux utiliser l'automation prédéfinie, créer un nouveau gabarit à partir de zéro, ou utiliser un que tu as déjà enregistré
![Sélectionner le point de départ de l'automation](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choisis la liste à laquelle cette automation devrait être liée
![Choisir la liste pour l'automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choisis un nom pour ton automation (ce nom apparaîtra seulement dans la plateforme)
![Nommez votre automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Tu peux sélectionner un objectif marketing dans la liste ci-dessous (afin qu'on puisse faire de meilleures recommandations pour toi)
![Sélectionner l'objectif marketing](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Tu seras ensuite sur la page **Création de flux**. Clique sur le signe **+** pour sélectionner la condition dans le flux d'automation
![Cliquer sur le signe plus dans le flux d'automation](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Ajoute des conditions de branchement
![Ajouter une condition de branchement au flux](/images/automations/A1E2044B-629A-4B0B-A1DC-C691A43D1560.png)
*Référence : Créer une automation avec des conditions de branchement*

1. Ajoute l'action **Mettre à jour l'attribut personnalisé**
![Sélectionner l'action Mettre à jour l'attribut personnalisé](/images/automations/934BB99B-18DC-4E82-BFA8-3ACA98EE38EE.png)

1. Sélectionne l'attribut personnalisé et spécifie sa nouvelle valeur
![Configurer les paramètres de mise à jour d'attribut personnalisé](/images/automations/917CF07D-5A47-49E9-A144-44EC5D180009.png)

1. L'attribut déterminé sera mis à jour si le contact correspond à la condition de branchement
![Flux d'automation complet avec mises à jour d'attributs](/images/automations/DAA530AE-A20D-4625-92EF-A0F9FD584CD9.png)

1. Révise ta campagne et active-la
![Activer le bouton bascule d'automation](/images/automations/EE3B04B5-9975-4D99-A90B-ECD93F39152D_4_5005_c.jpeg)
L'automation d'attribut personnalisé est maintenant correctement configurée ; tu peux maintenant quitter l'éditeur !
![Quitter la vue de l'éditeur](/images/automations/E01EE1C0-31F2-4597-BA57-911EBFC77E8E_4_5005_c.jpeg)
Utilise cette fonction pour créer et suivre les parcours clients et utilise cette info pour créer des segments qui te permettront de mieux cibler et personnaliser tes campagnes.
</Stepper>

## Dépannage

**Les attributs personnalisés se mettent pas à jour**

- Vérifie que l'attribut personnalisé existe dans les paramètres de ta liste de contacts
- Vérifie que le type de données de l'attribut correspond à la valeur définie
- Assure-toi que l'automation est activée et que les conditions de déclenchement sont remplies

**Des valeurs incorrectes sont définies**

- Vérifie la logique de branchement menant à l'action de mise à jour
- Teste avec des contacts d'exemple pour vérifier que le bon chemin est suivi
- Vérifie les automations conflictuelles mettant à jour le même attribut

**La segmentation marche pas après les mises à jour**

- Accorde du temps pour que les mises à jour d'attributs se propagent (habituellement instantané)
- Actualise tes critères de segment après avoir fait des changements
- Vérifie que les conditions de segment correspondent aux valeurs d'attributs exactes

**Problèmes de performance avec de grosses listes**

- Traite par lots les mises à jour d'attributs pendant les heures creuses
- Limite le nombre de mises à jour d'attributs simultanées par contact
- Pense à utiliser l'API pour les mises à jour d'attributs en vrac au lieu de l'automation

## Articles connexes

- [Créer une automation avec des conditions de branchement](/fr-qc/docs/automations/creating-an-automation-with-branching-conditions) - Construire des chemins de parcours
- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Créer des marqueurs de parcours
- [Comprendre l'automation de courriel](/fr-qc/docs/automations/understanding-email-automation) - Aperçu de l'automation
- [Créer un segment](/fr-qc/docs/audience/creating-dynamic-segments) - Segmenter par étape de parcours
- [Suivre la performance des campagnes](/fr-qc/docs/analytics/tracking-campaign-performance) - Mesurer le succès du parcours