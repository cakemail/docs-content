---
source: "https://support.cakemail.com/hc/en-us/articles/1260804535049-Adding-a-DATE-merge-tag"
---

# Ajouter une balise de fusion de date

## Description

Les balises de fusion de courriel, c'est génial pour insérer des données uniques à chaque utilisateur dans tes courriels - on va en parler plus en détail ailleurs. Tu peux insérer une date dans ta ligne d'objet ou ta campagne en utilisant la balise [DATE]. Petite note : tu ne peux pas utiliser la balise [DATE] comme partie d'un lien.

## Pourquoi c'est important

Ce petit élément dynamique aide à garder l'engagement en rendant tes courriels personnalisés et à point, tout en réduisant l'effort manuel pour mettre à jour le contenu lié aux dates dans tes campagnes récurrentes. C'est particulièrement utile pour les annonces d'événements, les aubaines à durée limitée et les communications régulièrement programmées.

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
Ça détermine comment la date s'affiche. La date est formatée selon les **conventions PHP**. Tu peux trouver la liste complète des formats en ligne sur le site de PHP.

**Note :** Les dates en format long (Lundi, 10 juin) sont disponibles en anglais seulement.

## Exemples

Si la date actuelle est le 10 juin 2013 :

### Exemples de dates futures :
- `[DATE|86400|m.d.y]` va afficher **06.11.13** (parce que 86 400 secondes = 24 heures)

### Exemples de dates passées :
- `[DATE|-259200|F j,Y]` va afficher **June 07, 2013** (parce que 259 200 secondes = 3 jours)

![Interface de champ](/images/campaign-creation/campaigns-adding-a-date-merge-tag-333.png)

## Options de format populaires

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

- **Dates d'infolettre** : Afficher la date actuelle dans les en-têtes de courriel
- **Rappels d'événements** : Référencer les dates d'événements à venir
- **Avis d'échéance** : Afficher le compte à rebours vers des dates importantes
- **Contenu saisonnier** : Mettre à jour automatiquement les références saisonnières
- **Contenu dynamique** : Créer des messages sensibles au temps

## Notes importantes

- Ne peut pas être utilisé comme partie d'un hyperlien
- Les dates en format long sont en anglais seulement
- Utilise les conventions de formatage de date PHP
- Calcule depuis le moment où le courriel est envoyé

## Dépannage

**La date s'affiche mal ou pas du tout**

- Check que ta syntaxe suit [DATE|secondes|format] exactement
- Vérifie que les barres verticales (|) séparent bien tes paramètres
- Assure-toi que ta chaîne de format utilise des codes de format de date PHP valides
- Teste avec des formats simples d'abord (Y-m-d) avant les plus complexes

**Mauvais fuseau horaire qui s'affiche**

- Note que les dates utilisent le fuseau horaire du serveur, pas celui du destinataire
- Pense à ajouter l'info de fuseau horaire dans ton contenu
- Tiens compte des changements d'heure d'été
- Teste tes campagnes à différents moments pour vérifier la cohérence

**Les calculs de date marchent pas**

- Double-check tes calculs de secondes (86400 = 1 jour)
- Utilise des nombres négatifs pour les dates passées, positifs pour le futur
- Vérifie que tu ne dépasses pas des plages de dates raisonnables
- Teste tes calculs avec des convertisseurs d'époque en ligne

**Le format de date s'affiche comme du code**

- Assure-toi que ton paramètre de format utilise des caractères de date PHP valides
- Check les fautes de frappe dans ta chaîne de format (sensible à la casse)
- Évite les espaces dans les crochets de balise de fusion
- Rappelle-toi que les dates en format long marchent qu'en anglais

## Articles connexes

- [Ajouter des balises de fusion à une campagne](/fr-qc/docs/personalization/adding-merge-tags-to-a-campaign) - Autres balises de fusion
- [Utiliser les balises de fusion et solutions de repli](/fr-qc/docs/personalization/using-merge-tags-and-fallbacks) - Bases des balises de fusion
- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Attributs de date
- [Utiliser le contenu dynamique](/fr-qc/docs/personalization/using-dynamic-content) - Dates dynamiques
- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Utiliser dans les campagnes