---
source: "https://support.cakemail.com/hc/en-us/articles/15369754577691-Personalizing-your-campaign-with-display-conditions"
---

# Conditions d'affichage

## Description

Les conditions d'affichage, c'est le moyen parfait pour créer des courriels personnalisés et dynamiques qui affichent du contenu spécifique basé sur les attributs ou le comportement de tes abonnés. Cette fonctionnalité vraiment cool te permet d'envoyer une seule campagne qui peut afficher différents contenus à différents segments de ton audience.

## Pourquoi c'est important

Les conditions d'affichage boostent significativement la pertinence et l'efficacité de tes campagnes de courriel en permettant la personnalisation au niveau granulaire. Au lieu de créer des campagnes séparées pour différents segments, tu peux créer une campagne qui s'adapte intelligemment au profil de chaque destinataire. Ça améliore les taux d'engagement, réduit la complexité de gestion des campagnes, et assure que chaque abonné reçoit le contenu le plus pertinent possible basé sur ses attributs ou actions précédentes.

## Comment utiliser les conditions d'affichage

### 1. Conditions basées sur les attributs
Tu peux afficher du contenu basé sur les champs d'attributs de tes contacts :
- Localisation géographique
- Préférences de produits
- Statut d'abonnement
- Données démographiques
- Infos de compte client

### 2. Conditions comportementales
Affiche du contenu basé sur les actions précédentes :
- Courriels ouverts
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
  Viens visiter notre nouvelle boutique au centre-ville de Montréal !
[ELSEIF `ville` = "Québec"]
  Découvre nos aubaines spéciales pour Québec.
[ELSE]
  Trouve le magasin le plus près de chez toi.
[ENDIF]
```

### Contenu basé sur l'historique d'achat
```
[IF `derniere_commande` > "2024-01-01"]
  Merci pour ton récent achat ! Voici des produits complémentaires.
[ELSE]
  Tu nous as manqué ! Voici une aubaine spéciale juste pour toi.
[ENDIF]
```

## Avantages

- **Efficacité** : Une seule campagne au lieu de multiples
- **Personnalisation avancée** : Contenu hautement ciblé
- **Meilleur engagement** : Messages plus pertinents
- **Gestion simplifiée** : Moins de campagnes à gérer
- **ROI amélioré** : Taux de conversion plus élevés

## Meilleures pratiques

- **Teste tes conditions** : Vérifie avec des contacts de test
- **Prévois un contenu par défaut** : Utilise toujours ELSE comme filet de sécurité
- **Garde ça simple** : Évite des conditions trop complexes
- **Documente tes règles** : Note tes logiques de condition
- **Surveille les performances** : Analyse l'efficacité de chaque condition

## Dépannage

**Les conditions marchent pas comme il faut**

- Check la syntaxe de tes conditions
- Assure-toi que les noms d'attributs correspondent exactement
- Teste avec des contacts dont tu connais les attributs
- Vérifie les types de données (texte vs nombre vs date)

**Le contenu par défaut s'affiche pas**

- Assure-toi d'inclure un bloc [ELSE]
- Vérifie que ta structure IF/ELSE/ENDIF est complète
- Teste avec des contacts qui correspondent à aucune condition

**Performance lente de la campagne**

- Simplifie les conditions complexes
- Évite trop de conditions imbriquées
- Pense à utiliser la segmentation de liste à la place
- Optimise les requêtes d'attributs

## Articles connexes

- [Utiliser le contenu dynamique](/fr-qc/docs/personalization/using-dynamic-content) - Contenu avancé
- [Ajouter des balises de fusion](/fr-qc/docs/personalization/adding-merge-tags-to-a-campaign) - Personnalisation de base
- [Créer des segments dynamiques](/fr-qc/docs/audience/creating-dynamic-segments) - Segmentation
- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Données d'attributs
- [Utiliser les balises de fusion et solutions de repli](/fr-qc/docs/personalization/using-merge-tags-and-fallbacks) - Personnalisation