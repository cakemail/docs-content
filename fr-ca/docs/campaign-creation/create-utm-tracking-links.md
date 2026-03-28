---
source: >
  https://support.cakemail.com/hc/en-us/articles/12207655073179-Using-UTM-parameters-to-track-click-conversions
---

# Créer des liens de suivi UTM

## Description

Les paramètres UTM (Urchin Tracking Module) vous permettent de suivre l'efficacité de vos campagnes de courriel en ajoutant des codes spéciaux à vos liens. Ces paramètres vous aident à identifier quelle campagne, quel courriel, ou quel lien spécifique a généré du trafic vers votre site web, vous donnant des insights précieux sur le comportement de vos destinataires.

## Pourquoi c'est important

Le suivi UTM vous permet de :
- **Mesurer le ROI des campagnes** : Voir quelles campagnes génèrent le plus de conversions
- **Optimiser le contenu** : Identifier quels liens et messages résonnent avec votre audience
- **Attribuer correctement les conversions** : Distinguer le trafic de courriel des autres sources
- **Améliorer la stratégie** : Prendre des décisions basées sur des données pour les futures campagnes

## Paramètres UTM principaux

### Paramètres requis :
- **utm_source** : Identifie la source (ex: cakemail, newsletter)
- **utm_medium** : Identifie le medium (ex: courriel, courriel_marketing)
- **utm_campaign** : Identifie la campagne spécifique (ex: promotion_printemps)

### Paramètres optionnels :
- **utm_term** : Identifie les mots-clés payants (principalement pour les annonces)
- **utm_content** : Différencie les liens similaires dans le même courriel

## Instructions étape par étape

<Stepper>

1. Planifiez votre stratégie UTM
Avant de créer des liens, établissez une convention de nommage cohérente :
- Source : "cakemail" ou "newsletter"
- Medium : "courriel" ou "courriel_marketing"
- Campagne : utilisez des noms descriptifs comme "soldes_ete_2024"

1. Construisez votre URL de base
Commencez avec l'URL de destination :
```
https://monsite.com/produits
```

1. Ajoutez les paramètres UTM
Ajoutez les paramètres avec des signes ? et & :
```
https://monsite.com/produits?utm_source=cakemail&utm_medium=courriel&utm_campaign=soldes_ete_2024
```

1. Utilisez un générateur UTM (recommandé)
Utilisez l'outil Google Campaign URL Builder ou un autre générateur :
1. Entrez l'URL de destination
2. Remplissez les champs UTM
3. Copiez l'URL générée

1. Intégrez dans votre campagne Cakemail

1. Dans le concepteur de courriel, sélectionnez le texte ou image à lier
2. Cliquez sur l'icône de lien
3. Collez votre URL avec paramètres UTM
4. Sauvegardez et testez
</Stepper>

## Exemples pratiques

### Campagne promotionnelle :
```
https://boutique.com/soldes?utm_source=cakemail&utm_medium=courriel&utm_campaign=soldes_printemps_2024&utm_content=banniere_principale
```

### Newsletter mensuelle :
```
https://blog.com/article?utm_source=newsletter&utm_medium=courriel&utm_campaign=newsletter_mars_2024&utm_content=article_vedette
```

### Invitation à un événement :
```
https://events.com/inscription?utm_source=cakemail&utm_medium=courriel&utm_campaign=webinaire_marketing&utm_content=bouton_inscription
```

## Bonnes pratiques

### Convention de nommage :
- **Utilisez des minuscules** : Évitez les majuscules pour la cohérence
- **Remplacez les espaces** : Utilisez des underscores ou tirets
- **Soyez descriptif** : Les noms doivent être clairs et informatifs
- **Restez cohérent** : Utilisez toujours la même convention

### Organisation :
- **Documentez vos conventions** : Gardez un guide de référence
- **Utilisez des feuilles de calcul** : Suivez vos paramètres UTM
- **Testez toujours** : Vérifiez que les liens fonctionnent correctement
- **Révisez régulièrement** : Nettoyez les anciens paramètres

## Suivi et analyse

### Dans Google Analytics :
1. Allez dans **Acquisition > Campagnes > Toutes les campagnes**
2. Voyez les données segmentées par vos paramètres UTM
3. Analysez les conversions et le comportement

### Métriques importantes :
- **Sessions** : Nombre de visites générées
- **Taux de conversion** : Pourcentage de visiteurs qui convertissent
- **Valeur des conversions** : Revenus générés
- **Temps sur le site** : Engagement des visiteurs

## Dépannage

**Les liens UTM ne fonctionnent pas**

- Vérifiez que Google Analytics est correctement installé
- Assurez-vous que les paramètres sont correctement formatés
- Testez les liens dans un navigateur privé

**Les données UTM n'apparaissent pas dans Analytics**

- Attendez 24-48 heures pour voir les données
- Vérifiez la configuration de vos vues Analytics
- Assurez-vous que le suivi n'est pas bloqué par des extensions

**Liens UTM trop longs**

- Utilisez un raccourcisseur d'URL comme bit.ly
- Simplifiez les noms de paramètres
- Concentrez-vous sur les paramètres essentiels

**Données incohérentes**

- Vérifiez votre convention de nommage
- Assurez-vous que tous les liens utilisent la même structure
- Nettoyez les anciennes campagnes avec des noms différents

## Articles connexes

- [Suivre l'activité des taux de clics](/fr-ca/docs/analytics/tracking-click-rate-activity) - Analyser les performances
- [Taux de clics des courriels](/fr-ca/docs/analytics/email-click-rates) - Comprendre les métriques
- [Suivre les performances des campagnes](/fr-ca/docs/analytics/tracking-campaign-performance) - Comparer les résultats
- [Créer des campagnes](/fr-ca/docs/campaign-creation/creating-campaigns) - Intégrer le suivi UTM
- [Utiliser le concepteur de courriel](/fr-ca/docs/campaign-creation/using-the-email-designer) - Ajouter des liens trackés