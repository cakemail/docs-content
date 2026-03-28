---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4420979608475-Adding-a-survey-to-a-campaign
---

# Ajouter un sondage à une campagne

## Description
Les sondages intégrés dans les courriels, aussi appelés sondages en ligne de courriel, sont intégrés dans les courriels, et les répondants peuvent répondre aux questions directement dans le corps du courriel. Les sondages de cette nature tendent à être courts et pas exhaustifs.

## Pourquoi c'est important

Ce mécanisme de rétroaction immédiate, c'est inestimable pour recueillir des insights de clients, mesurer la satisfaction, et prendre des décisions basées sur les données concernant tes produits ou services. Le facteur de commodité montre aussi le respect pour le temps de tes abonnés, renforçant leur relation avec ta marque.

## Instructions étape par étape.

#### Créer un formulaire sur Typeform
Utilise l'outil en ligne gratuit https://www.typeform.com/ pour créer un sondage. Ensuite, tu peux copier et coller le code courriel du sondage (code HTML).
**Seul le type de formulaire Échelle d'opinion peut être utilisé actuellement avec ce processus.**


### Procédure sur Typeform
1. Crée un formulaire à partir de zéro
2. Dans le menu pour choisir le type de formulaire, choisis **Échelle d'opinion** dans le coin supérieur droit. 
3. Édite ton formulaire selon tes goûts. 
4. Publie ton formulaire. 
5. Clique sur Partager
6. Clique sur Lancer dans un courriel
7. Sélectionne Obtenir le code.

<Stepper>

1. Glisse et dépose le bloc de contenu HTML dans ton courriel.
![Capture d'écran du bloc de contenu HTML](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-308.png)

1. Glisse-le dans le contenu du courriel.
![Capture d'écran de glisser dans le contenu du courriel](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-309.png)

1. Colle le code dans le menu Propriétés du contenu qui va apparaître sur la partie droite de l'éditeur.
![Capture d'écran de l'interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-310.png) 
Tu peux utiliser ça pour collecter des données de tes destinataires puisque ça va être directement lié à ton sondage créé.
![Capture d'écran de l'interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-311.png)
</Stepper>

## Dépannage

**Le sondage s'affiche pas correctement**

- Assure-toi d'utiliser le type de formulaire Échelle d'opinion de Typeform
- Copie le code HTML complet incluant toutes les balises
- Teste dans plusieurs clients de courriel pour la compatibilité

**Le code HTML marche pas**

- Utilise le bloc de contenu HTML, pas un bloc de texte régulier
- Colle le code dans le panneau Propriétés du contenu, pas directement dans l'éditeur
- Vérifie que JavaScript est pas inclus (les clients de courriel le bloquent)

**Faibles taux de réponse**

- Garde les sondages courts (1-3 questions maximum)
- Place le sondage de manière proéminente dans le courriel
- Utilise un texte clair et convaincant pour encourager la participation

**Les données se collectent pas**

- Vérifie que ton compte Typeform est actif
- Vérifie que le formulaire est publié et pas en mode brouillon
- Teste le lien de sondage indépendamment pour t'assurer qu'il fonctionne

**Problèmes de compatibilité des clients de courriel**

- Certains clients de courriel peuvent pas supporter les formulaires intégrés
- Fournis un lien de remplacement vers la version web
- Teste à travers les clients de courriel principaux avant d'envoyer

## Articles connexes

- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Configuration de base de campagne
- [Ajouter des liens d'ancrage](/fr-qc/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Lien vers les sondages
- [Suivre l'activité du taux de clics](/fr-qc/docs/analytics/tracking-click-rate-activity) - Suivre les clics de sondage
- [Utiliser le concepteur de courriel](/fr-qc/docs/campaign-creation/using-the-email-designer) - Ajouter des boutons de sondage
- [Créer des liens de suivi UTM](/fr-qc/docs/campaign-creation/create-utm-tracking-links) - Suivre les réponses de sondage