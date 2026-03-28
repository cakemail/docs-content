---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4406840228763-Personalizing-your-campaign-with-display-conditions
---

# Conditions d'affichage

## Description

Tout contenu personnalisé dans une campagne qui change basé sur les données que vous avez sur vos abonnés est appelé contenu de email dynamique. Ceci peut être accompli en ajoutant des attributs à la liste de diffusion et en regroupant les gens par caractéristiques partagées comme la localisation, le genre et l'âge, par exemple, qui peuvent affecter l'affichage du contenu du email pour chaque destinataire. Dans cet article, nous nous concentrerons spécifiquement sur comment configurer les conditions d'affichage de vos blocs basées sur les attributs du destinataire.

## Pourquoi c'est important

Le contenu de email dynamique fournit aux abonnés une expérience plus personnalisée. La tendance aujourd'hui est que les utilisateurs partagent volontairement des données personnelles avec les marques en échange d'une expérience utilisateur hautement personnalisée. En adoptant cette approche, vous pouvez améliorer l'engagement de vos utilisateurs, construire des relations durables avec votre audience, économiser du temps, et donc augmenter les revenus.

## Instructions étape par étape

Ajouter des conditions d'affichage à votre liste est aussi facile que de suivre ces étapes :

<Stepper>

1. **Ajoutez un attribut à votre liste de contacts**
Pour plus d'informations sur l'ajout d'attributs à votre liste, consultez notre article.
![Ajouter un attribut à la liste de contacts](/images/campaign-creation/6179a7af34501.jpeg)

1. **Sélectionnez l'onglet Campagnes**
![Sélectionner l'onglet Campagnes](/images/campaign-creation/6179a7b011439.jpeg)

1. **Cliquez sur Modifier le email** dans le menu de votre campagne (Alternativement, vous pouvez commencer en créant une nouvelle campagne)
![Cliquer sur Modifier le email dans le menu de campagne](/images/campaign-creation/6179a7b073ff5.jpeg)

1. **Cliquez sur Modifier le email** dans l'onglet d'aperçu du email pour accéder au concepteur de email
![Cliquer sur Modifier le email dans l'onglet d'aperçu](/images/campaign-creation/6179a7b0d8aee.jpeg)

1. **Sélectionnez la section menu Rangées** dans le concepteur de email
![Sélectionner la section menu Rangées](/images/campaign-creation/6179a7b14efde.jpeg)

1. **Glissez une rangée** dans le contenu du email et sélectionnez-la
![Glisser et sélectionner une rangée](/images/campaign-creation/6179a7b19fc8a.jpeg)

1. **Sélectionnez Ajouter une condition** dans le menu des propriétés de rangée
![Sélectionner Ajouter une condition](/images/campaign-creation/6179a7b25ca49.jpeg)

1. Configurez votre condition d'affichage dans le menu qui apparaît.
![Configurer la condition d'affichage](/images/campaign-creation/6179a7b2c01ca.png)

1. Cliquez sur Confirmer quand vous avez terminé la configuration.

1. Prévisualisez la condition d'affichage en sélectionnant l'icône d'œil.
![Prévisualiser la condition d'affichage avec l'icône d'œil](/images/campaign-creation/6179a7b33d9e2.jpeg)

1. Sélectionnez vos conditions d'affichage de rangée dans le menu déroulant en mode Aperçu.
![Sélectionner les conditions d'affichage de rangée dans l'aperçu](/images/campaign-creation/6179a7b39e724.jpeg)
</Stepper>

## La condition d'affichage a été définie !

Elle sera affichée dans le menu des propriétés de rangée.

![Condition d'affichage dans les propriétés de rangée](/images/campaign-creation/6179a7b407d23.jpeg)

## Avantages des conditions d'affichage

- **Engagement utilisateur amélioré** : Le contenu adapté aux préférences individuelles augmente l'interaction
- **Meilleures relations** : Les expériences personnalisées construisent des connexions plus fortes avec les abonnés
- **Économies de temps** : La personnalisation automatisée réduit la création manuelle de campagnes
- **Revenus augmentés** : Un contenu plus pertinent mène à des taux de conversion plus élevés
- **Expérience améliorée** : Les abonnés reçoivent du contenu qui leur importe

## Cas d'usage communs

### Personnalisation géographique
- Afficher des offres spécifiques à la localisation
- Afficher des informations d'événements régionaux
- Personnaliser le contenu par fuseau horaire

### Ciblage démographique
- Recommandations de produits appropriées à l'âge
- Messages spécifiques au genre
- Blocs de contenu basés sur les intérêts

### Segmentation comportementale
- Recommandations basées sur l'historique d'achat
- Messages appropriés au niveau d'engagement
- Contenu d'étape du cycle de vie client

## Meilleures pratiques

- **Commencez simple** : Commencez avec des attributs de base comme la localisation ou les intérêts
- **Testez minutieusement** : Prévisualisez les campagnes pour différentes valeurs d'attributs
- **Fournissez des solutions de repli** : Incluez du contenu par défaut pour les abonnés sans attributs spécifiques
- **Surveillez la performance** : Suivez l'engagement par différents segments personnalisés
- **Gardez-le pertinent** : Montrez seulement des conditions qui ajoutent de la valeur pour le destinataire

## Exigences techniques

- **Les attributs doivent être configurés** dans votre liste de contacts d'abord
- **Les abonnés ont besoin de données** dans les champs d'attributs pertinents
- **Le contenu par défaut** devrait être fourni pour les valeurs d'attributs vides
- **Les tests sont essentiels** pour assurer un affichage approprié à travers les segments

## Dépannage

**Les conditions d'affichage ne fonctionnent pas comme attendu**

- Vérifiez que les données d'abonnés existent pour les attributs que vous utilisez
- Vérifiez si les valeurs d'attributs correspondent exactement à vos critères de condition
- Testez avec plusieurs profils d'abonnés pour identifier des patterns
- Assurez-vous que les conditions sont appliquées aux bons blocs de contenu

**Le contenu s'affiche pour les mauvais segments**

- Examinez votre logique de condition (opérateurs AND vs OR)
- Vérifiez les conditions conflictuelles sur les éléments imbriqués
- Vérifiez que les types de données d'attributs correspondent aux exigences de condition
- Testez les cas limites comme les valeurs d'attributs vides ou nulles

**Problèmes de performance avec des conditions complexes**

- Limitez le nombre de conditions par campagne
- Évitez le contenu conditionnel profondément imbriqué
- Considérez créer des campagnes séparées pour des segments très différents
- Surveillez la vitesse d'envoi de campagne pour les délais

**Les abonnés voient des sections vides**

- Incluez toujours du contenu de solution de repli pour chaque condition
- Vérifiez si les attributs requis manquent pour certains abonnés
- Vérifiez que toutes les branches de condition ont du contenu défini
- Testez l'aperçu avec des abonnés qui n'ont pas de données d'attributs

## Articles connexes

- [Utiliser le contenu dynamique](/fr/docs/personalization/using-dynamic-content) - Contenu conditionnel
- [Créer un segment](/fr/docs/audience/creating-dynamic-segments) - Conditions cibles
- [Ajouter des balises de fusion à une campagne](/fr/docs/personalization/adding-merge-tags-to-a-campaign) - Étiquettes conditionnelles
- [Ajouter des attributs à votre liste](/fr/docs/audience/adding-attributes-to-your-list) - Champs de condition
- [Créer une automatisation avec ramification](/fr/docs/automations/creating-an-automation-with-branching-conditions) - Flux conditionnels