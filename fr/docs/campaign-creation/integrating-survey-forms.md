---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4420979608475-Adding-a-survey-to-a-campaign
---

# Ajouter un sondage à une campagne

## Description
Les sondages intégrés dans les emails, aussi appelés sondages en ligne de email, sont intégrés dans les emails, et les répondants peuvent répondre aux questions directement dans le corps du email. Les sondages de cette nature tendent à être courts et non exhaustifs.

## Pourquoi c'est important

Ce mécanisme de rétroaction immédiate est inestimable pour recueillir des insights de clients, mesurer la satisfaction, et prendre des décisions basées sur les données concernant vos produits ou services. Le facteur de commodité montre aussi le respect pour le temps de vos abonnés, renforçant leur relation avec votre marque.

## Instructions étape par étape.

#### Créer un formulaire sur Typeform
Utilisez l'outil en ligne gratuit https://www.typeform.com/ pour créer un sondage. Ensuite, vous pouvez copier et coller le code email du sondage (code HTML).
**Seul le type de formulaire Échelle d'opinion peut être utilisé actuellement avec ce processus.**


### Procédure sur Typeform
1. Créez un formulaire à partir de zéro
2. Dans le menu pour choisir le type de formulaire, choisissez **Échelle d'opinion** dans le coin supérieur droit. 
3. Éditez votre formulaire selon vos goûts. 
4. Publiez votre formulaire. 
5. Cliquez sur Partager
6. Cliquez sur Lancer dans un email
7. Sélectionnez Obtenir le code.

<Stepper>

1. Glissez et déposez le bloc de contenu HTML dans votre email.
![Capture d'écran du bloc de contenu HTML](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-308.png)

1. Glissez-le dans le contenu du email.
![Capture d'écran de glisser dans le contenu du email](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-309.png)

1. Collez le code dans le menu Propriétés du contenu qui apparaîtra sur la partie droite de l'éditeur.
![Capture d'écran de l'interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-310.png) 
Vous pouvez utiliser ceci pour collecter des données de vos destinataires puisque ce sera directement lié à votre sondage créé.
![Capture d'écran de l'interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-311.png)
</Stepper>

## Dépannage

**Le sondage ne s'affiche pas correctement**

- Assurez-vous d'utiliser le type de formulaire Échelle d'opinion de Typeform
- Copiez le code HTML complet incluant toutes les balises
- Testez dans plusieurs clients de email pour la compatibilité

**Le code HTML ne fonctionne pas**

- Utilisez le bloc de contenu HTML, pas un bloc de texte régulier
- Collez le code dans le panneau Propriétés du contenu, pas directement dans l'éditeur
- Vérifiez que JavaScript n'est pas inclus (les clients de email le bloquent)

**Faibles taux de réponse**

- Gardez les sondages courts (1-3 questions maximum)
- Placez le sondage de manière proéminente dans le email
- Utilisez un texte clair et convaincant pour encourager la participation

**Les données ne se collectent pas**

- Vérifiez que votre compte Typeform est actif
- Vérifiez que le formulaire est publié et non en mode brouillon
- Testez le lien de sondage indépendamment pour vous assurer qu'il fonctionne

**Problèmes de compatibilité des clients de email**

- Certains clients de email peuvent ne pas supporter les formulaires intégrés
- Fournissez un lien de remplacement vers la version web
- Testez à travers les clients de email principaux avant d'envoyer

## Articles connexes

- [Créer des campagnes](/fr/docs/campaign-creation/creating-campaigns) - Configuration de base de campagne
- [Ajouter des liens d'ancrage](/fr/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Lien vers les sondages
- [Suivre l'activité du taux de clics](/fr/docs/analytics/tracking-click-rate-activity) - Suivre les clics de sondage
- [Utiliser le concepteur de email](/fr/docs/campaign-creation/using-the-email-designer) - Ajouter des boutons de sondage
- [Créer des liens de suivi UTM](/fr/docs/campaign-creation/create-utm-tracking-links) - Suivre les réponses de sondage