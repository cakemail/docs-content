---
source: "https://support.cakemail.com/hc/en-us/articles/15369754577691-Personalizing-your-campaign-with-display-conditions"
---

# Conditions d'affichage

## Description

Les conditions d'affichage vous permettent de créer des courriels personnalisés et dynamiques en affichant du contenu spécifique basé sur les attributs ou le comportement des abonnés. Cette fonctionnalité avancée vous permet d'envoyer une seule campagne qui peut afficher différents contenus à différents segments de votre audience.

## Pourquoi c'est important

Les conditions d'affichage augmentent significativement la pertinence et l'efficacité de vos campagnes de courriel en permettant la personnalisation au niveau granulaire. Au lieu de créer des campagnes séparées pour différents segments, vous pouvez créer une campagne qui s'adapte intelligemment au profil de chaque destinataire. Cela améliore les taux d'engagement, réduit la complexité de gestion des campagnes, et assure que chaque abonné reçoit le contenu le plus pertinent possible basé sur ses attributs ou actions précédentes.

## Comment utiliser les conditions d'affichage

### 1. Conditions basées sur les attributs
Vous pouvez afficher du contenu basé sur les champs d'attributs de vos contacts :
- Localisation géographique
- Préférences de produits
- Statut d'abonnement
- Données démographiques
- Informations de compte client

### 2. Conditions comportementales
Affichez du contenu basé sur les actions précédentes :
- Emails ouverts
- Liens cliqués
- Achats effectués
- Pages web visitées
- Formulaires soumis

## Syntaxe de base

Les conditions d'affichage utilisent une syntaxe similaire au contenu dynamique :

```
[IF condition]
  Contenu à afficher si la condition est vraie
[ELSE]
  Contenu par défaut
[ENDIF]
```

## Exemples pratiques

### Personnalisation par localisation
```
[IF `ville` = "Montréal"]
  Visitez notre nouvelle boutique au centre-ville de Montréal !
[ELSEIF `ville` = "Toronto"]
  Découvrez nos offres spéciales pour Toronto.
[ELSE]
  Trouvez le magasin le plus près de chez vous.
[ENDIF]
```

### Contenu basé sur l'historique d'achat
```
[IF `derniere_commande` > "2024-01-01"]
  Merci pour votre récent achat ! Voici des produits complémentaires.
[ELSE]
  Nous vous avons manqué ! Voici une offre spéciale pour vous.
[ENDIF]
```

## Avantages

- **Efficacité** : Une seule campagne au lieu de multiples
- **Personnalisation avancée** : Contenu hautement ciblé
- **Meilleur engagement** : Messages plus pertinents
- **Gestion simplifiée** : Moins de campagnes à gérer
- **ROI amélioré** : Taux de conversion plus élevés

## Meilleures pratiques

- **Testez vos conditions** : Vérifiez avec des contacts de test
- **Prévoyez un contenu par défaut** : Utilisez toujours ELSE comme filet de sécurité
- **Gardez la simplicité** : Évitez des conditions trop complexes
- **Documentez vos règles** : Notez vos logiques de condition
- **Surveillez les performances** : Analysez l'efficacité de chaque condition

## Dépannage

**Les conditions ne s'appliquent pas correctement**

- Vérifiez la syntaxe des conditions
- Assurez-vous que les noms d'attributs correspondent exactement
- Testez avec des contacts dont vous connaissez les attributs
- Vérifiez les types de données (texte vs nombre vs date)

**Le contenu par défaut ne s'affiche pas**

- Assurez-vous d'inclure un bloc [ELSE]
- Vérifiez que la structure IF/ELSE/ENDIF est complète
- Testez avec des contacts qui ne correspondent à aucune condition

**Performance lente de la campagne**

- Simplifiez les conditions complexes
- Évitez trop de conditions imbriquées
- Considérez utiliser la segmentation de liste à la place
- Optimisez les requêtes d'attributs

## Articles connexes

- [Utiliser le contenu dynamique](/fr-ca/docs/personalization/using-dynamic-content) - Contenu avancé
- [Ajouter des balises de fusion](/fr-ca/docs/personalization/adding-merge-tags-to-a-campaign) - Personnalisation de base
- [Créer des segments dynamiques](/fr-ca/docs/audience/creating-dynamic-segments) - Segmentation
- [Ajouter des attributs à votre liste](/fr-ca/docs/audience/adding-attributes-to-your-list) - Données d'attributs
- [Utiliser les balises de fusion et solutions de repli](/fr-ca/docs/personalization/using-merge-tags-and-fallbacks) - Personnalisation