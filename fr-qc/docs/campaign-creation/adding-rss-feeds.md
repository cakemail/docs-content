---
source: "https://support.cakemail.com/hc/en-us/articles/36116222346651-Add-an-RSS-Feed-to-Your-Email-Campaign"
---

# Ajouter des flux RSS

## Description
Garde automatiquement ton audience à jour avec du contenu frais en intégrant un flux RSS dans ta infolettre. Si tu as déjà un flux RSS, l'ajouter à ta campagne courriel est simple et efficace.

## Pourquoi c'est important

L'intégration de flux RSS change complètement la donne pour le marketing courriel axé sur le contenu, te permettant de remplir automatiquement tes infolettres avec du contenu frais et dynamique sans mises à jour manuelles. Cette fonctionnalité fait économiser un temps considérable aux éditeurs, blogueurs et créateurs de contenu qui partagent régulièrement des mises à jour avec leur audience. En automatisant la distribution de contenu, tu t'assures que tes abonnés reçoivent toujours tes derniers articles, billets de blogue ou nouvelles, maintenant l'engagement et dirigeant un trafic constant vers ton site web tout en réduisant le risque d'envoyer de l'information périmée.

## Instructions étape par étape
Suis ces étapes pour insérer des mises à jour RSS dans le contenu de ton courriel :

#### Ajouter un bloc de contenu
Dans l'éditeur de courriel, insère un bloc de contenu Paragraphe où tu veux que le contenu RSS apparaisse.

#### Insérer le code RSS
Copie et colle le modèle de code RSS dans ton bloc de contenu.

#### Remplacer l'URL de substitution
Remplace yourRSSwebsiteURL dans le code avec l'URL réelle de ton flux RSS.

#### Prévisualiser et tester
Après avoir inséré ton flux RSS, prévisualise le courriel avant d'envoyeur. Tu peux aussi t'envoyer un courriel de test pour confirmer que le contenu apparaît comme prévu.

💡 **Note :** Le contenu RSS s'affichera en quittant le concepteur de courriel ou dans l'aperçu du courriel de test.

## Syntaxe du code RSS et explication

Le contenu RSS commence avec :
```
[RSS=yourRSSwebsiteURL]
```

Le contenu RSS se termine avec :
```
[ENDRSS]
```

À l'intérieur de la section RSS, chaque élément du flux est référencé en utilisant un index :

- `[RSS-0-*]` réfère à l'élément le plus récent
- `[RSS-1-*]` réfère au deuxième élément le plus récent, et ainsi de suite

Tu peux inclure les éléments suivants de ton flux :

| Balise | Description |
|-----|-------------|
| `[RSS-0-title]` | Titre de l'article |
| `[RSS-0-description]` | Résumé ou texte d'aperçu |
| `[RSS-0-link]` | Lien direct vers l'article |
| `[RSS-0-dc:creator]` | Auteur de l'article |
| `[RSS-0-pubDate]` | Date de publication |
| `[RSS-0-media:content]` ou `[RSS-0-media:content-attributes:url]` | Image de l'article |
| `[RSS-0-media:credit]` | Crédit image |
| `[RSS-0-media:description]` | Description de l'image |

Nous utilisons les balises les plus communes, mais tu devrais vérifier le code de ton propre flux RSS pour t'assurer que les balises ont les bons noms.

Par exemple :
- `<title>` devient `[RSS-#-title]`
- `<link>` devient `[RSS-#-link]`

## Styliser le contenu de ton flux RSS

Tu peux personnaliser comment le contenu RSS apparaît dans ton courriel :

- Mettre en gras ou en italique le texte en utilisant les options de formatage dans l'éditeur
- Assortir les couleurs de ta marque en ajustant les couleurs de texte et de lien
- Pour mettre en évidence les titres, utilise un bloc de contenu Titre pour augmenter la taille et le poids de police
- Pour ajouter une image, utilise un bloc de contenu Image, sélectionne Image dynamique, et insère ce code dans le champ : `[RSS-0-media:content-attributes:url]`

![Add interface screenshot](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-246.png)

## Exemple : Intégrer les 3 articles les plus récents

Tu peux copier et coller le code suivant pour l'utiliser comme modèle simple pour afficher ton RSS :

```
Découvre les 3 dernières nouvelles de notre site web :

[RSS=yourRSSwebsiteURL]
 
[RSS-0-title]
[RSS-0-description]
[RSS-0-link]
[RSS-0-media:content:url]
 
[RSS-1-title]
[RSS-1-description]
[RSS-1-link]
 
[RSS-2-title]
[RSS-2-description]
[RSS-2-link]
 
[ENDRSS]
```

Remplace yourRSSwebsiteURL avec l'URL réelle de ton flux (par exemple, https://rss.nytimes.com/services/xml/rss/nyt/World.xml).

## Comprendre les balises RSS (avec exemple)

Voici un exemple de RSS du flux RSS du New York Times :

```xml
<item>
<title>Europe Seeks a Direct Line to Trump</title>
<link>https://www.nytimes.com/.../europe-trump-trade-defense.html</link>
<description>Despite Europe's size...</description>
<dc:creator>Steven Erlanger</dc:creator>
<pubDate>Thu, 17 Apr 2025 10:19:39 +0000</pubDate>
<media:content url="https://static01.nyt.com/..." />
<media:credit>Eric Lee/The New York Times</media:credit>
<media:description>In President Trump's White House...</media:description>
</item>
```

Tu utiliserais le code suivant :

```
[RSS=yourRSSwebsiteURL]
[RSS-0-title]
[RSS-0-link]
[RSS-0-description]
[RSS-0-dc:creator]
[RSS-0-pubDate]
[RSS-0-media:content-attributes:url]
[RSS-0-media:credit]
[RSS-0-media:description]
[ENDRSS]
```

![Add interface screenshot](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-247.png)

![An Rss Feed To Your Email Campaign 248](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-248.png)

## Résolution de problèmes

**Le flux RSS ne s'affiche pas**

- Vérifie que l'URL RSS est correcte et publiquement accessible
- Vérifie que le flux est en format XML valide en utilisant un validateur RSS
- Assure-toi que les balises RSS correspondent à la structure réelle de ton flux

**Le contenu s'affiche comme code**

- Sors du concepteur de courriel pour voir le contenu rendu
- Envoie un courriel de test pour prévisualiser le contenu RSS réel
- Vérifie s'il manque des balises fermantes comme [ENDRSS]

**Les images ne se chargent pas**

- Vérifie que ton flux RSS inclut des balises de contenu média
- Vérifie le format d'URL d'image dans ton flux
- Utilise la syntaxe de balise correcte : [RSS-0-media:content-attributes:url]

**Du contenu périmé apparaît**

- Vide le cache de ton navigateur et actualise
- Vérifie si le flux RSS lui-même se met à jour correctement
- Donne du temps aux mises à jour de flux pour se propager (habituellement 15-30 minutes)

**Problèmes de formatage**

- Utilise des blocs de contenu séparés pour les titres et le texte du corps
- Applique le formatage après avoir inséré les balises RSS
- Teste différentes combinaisons de balises RSS pour un affichage optimal

## Articles connexes

- [Utiliser le contenu dynamique](/fr-qc/docs/personalization/using-dynamic-content) - Contenu RSS dynamique
- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Bases de création de campagne
- [Créer une automation en boucle](/fr-qc/docs/automations/creating-a-looping-automation) - Automatiser les campagnes RSS
- [Utiliser le concepteur de courriel](/fr-qc/docs/campaign-creation/using-the-email-designer) - Concevoir des mises en page RSS
- [Tester ta campagne](/fr-qc/docs/campaign-creation/testing-your-campaign) - Tester les flux RSS