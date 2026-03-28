---
source: "https://support.cakemail.com/hc/en-us/articles/1260804535049-Adding-a-DATE-merge-tag"
---

# Ajouter une balise de fusion de date

## Description

Les champs de fusion de email insèrent des données utilisateur uniques, liées à une valeur unique, dans les emails ; ils sont discutés en plus grand détail ici. Une date peut être insérée dans une ligne d'objet ou campagne en utilisant le champ de fusion [DATE]. Il faut noter que vous ne pouvez pas utiliser le champ de fusion [DATE] comme partie d'un lien.

## Pourquoi c'est important

Cet élément dynamique aide à maintenir l'engagement en rendant les emails personnalisés et opportuns, tout en réduisant l'effort manuel requis pour mettre à jour le contenu lié aux dates dans les campagnes récurrentes. C'est particulièrement précieux pour les annonces d'événements, les offres à durée limitée et les communications régulièrement programmées.

## Syntaxe de base :
```
[DATE|0|format]
```

Il y a deux paramètres : **Un chiffre** et **un format**.

### Le paramètre chiffre :
- **'0'** représente la date actuelle
- La date peut être ajustée en ajoutant ou soustrayant des secondes
- Nombres positifs = dates futures
- Nombres négatifs = dates passées

### Le paramètre format :
Ceci détermine comment la date est affichée. La date est formatée selon la **convention PHP**. PHP fournit une liste de tous les formats en ligne.

**Note :** Les dates utilisant la forme longue (Lundi, 10 juin) ne sont disponibles qu'en anglais.

## Exemples

Si la date actuelle est le 10 juin 2013 :

### Exemples de dates futures :
- `[DATE|86400|m.d.y]` affichera **06.11.13** (car 86 400 secondes équivaut à 24 heures)

### Exemples de dates passées :
- `[DATE|-259200|F j,Y]` affichera **June 07, 2013** (car 259 200 secondes équivaut à 3 jours)

![Interface de champ](/images/campaign-creation/campaigns-adding-a-date-merge-tag-333.png)

## Options de format communes

| Format | Exemple de sortie | Description |
|--------|-------------------|-------------|
| `Y-m-d` | 2013-06-10 | Année-Mois-Jour (numérique) |
| `F j, Y` | June 10, 2013 | Nom complet du mois, jour, année |
| `M d, Y` | Jun 10, 2013 | Nom court du mois, jour, année |
| `m/d/Y` | 06/10/2013 | Mois/Jour/Année |
| `l, F j` | Monday, June 10 | Jour de la semaine, mois, jour |

## Calculs de temps

- **1 jour** = 86 400 secondes
- **1 semaine** = 604 800 secondes
- **1 mois (30 jours)** = 2 592 000 secondes

## Cas d'usage

- **Dates d'infolettre** : Afficher la date actuelle dans les en-têtes de email
- **Rappels d'événements** : Référencer les dates d'événements à venir
- **Avis d'échéance** : Afficher le compte à rebours vers des dates importantes
- **Contenu saisonnier** : Mettre à jour automatiquement les références saisonnières
- **Contenu dynamique** : Créer des messages sensibles au temps

## Notes importantes

- Ne peut pas être utilisé comme partie d'un hyperlien
- Les dates de forme longue sont en anglais seulement
- Utilise les conventions de formatage de date PHP
- Calcule depuis le moment où le email est envoyé

## Dépannage

**La date s'affiche incorrectement ou pas du tout**

- Vérifiez que la syntaxe suit [DATE|secondes|format] exactement
- Vérifiez que les barres verticales (|) séparent les paramètres
- Assurez-vous que la chaîne de format utilise des codes de format de date PHP valides
- Testez avec des formats simples d'abord (Y-m-d) avant les complexes

**Mauvais fuseau horaire qui s'affiche**

- Notez que les dates utilisent le fuseau horaire du serveur, pas celui du destinataire
- Considérez ajouter l'information de fuseau horaire dans votre contenu
- Tenez compte des changements d'heure d'été
- Testez les campagnes à différents moments pour vérifier la cohérence

**Les calculs de date ne fonctionnent pas**

- Vérifiez à nouveau vos calculs de secondes (86400 = 1 jour)
- Utilisez des nombres négatifs pour les dates passées, positifs pour le futur
- Vérifiez que vous ne dépassez pas des plages de dates raisonnables
- Testez les calculs avec des convertisseurs d'époque en ligne

**Le format de date s'affiche comme code**

- Assurez-vous que le paramètre de format utilise des caractères de date PHP valides
- Vérifiez les fautes de frappe dans la chaîne de format (sensible à la casse)
- Évitez les espaces dans les crochets de balise de fusion
- Rappelez-vous que les dates de forme longue ne fonctionnent qu'en anglais

## Articles connexes

- [Ajouter des balises de fusion à une campagne](/fr/docs/personalization/adding-merge-tags-to-a-campaign) - Autres balises de fusion
- [Utiliser les balises de fusion et solutions de repli](/fr/docs/personalization/using-merge-tags-and-fallbacks) - Bases des balises de fusion
- [Ajouter des attributs à votre liste](/fr/docs/audience/adding-attributes-to-your-list) - Attributs de date
- [Utiliser le contenu dynamique](/fr/docs/personalization/using-dynamic-content) - Dates dynamiques
- [Créer des campagnes](/fr/docs/campaign-creation/creating-campaigns) - Utiliser dans les campagnes