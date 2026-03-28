---
source: "https://support.cakemail.com/hc/en-us/articles/36116222346651-Add-an-RSS-Feed-to-Your-Email-Campaign"
---

# Ajouter des flux RSS

## Description
Gardez automatiquement votre audience à jour avec du contenu frais en intégrant un flux RSS dans votre infolettre. Si vous avez déjà un flux RSS, l'ajouter à votre campagne de courriel est simple et efficace.

## Pourquoi c'est important

L'intégration de flux RSS est un changeur de donne pour le marketing par courriel axé sur le contenu, permettant de remplir automatiquement vos infolettres avec du contenu frais et dynamique sans mises à jour manuelles. Cette fonctionnalité permet d'économiser un temps considérable pour les éditeurs, blogueurs et créateurs de contenu qui partagent régulièrement des mises à jour avec leur audience. En automatisant la distribution de contenu, vous vous assurez que les abonnés reçoivent toujours vos derniers articles, billets de blog ou éléments de nouvelles, maintenant l'engagement et dirigeant un trafic constant vers votre site web tout en réduisant le risque d'envoyer des informations obsolètes.

## Instructions étape par étape
Suivez ces étapes pour insérer des mises à jour RSS dans votre contenu de courriel :

#### Ajouter un bloc de contenu
Dans l'éditeur de courriel, insérez un bloc de contenu Paragraphe où vous aimeriez que le contenu RSS apparaisse.

#### Insérer le code RSS
Copiez et collez le gabarit de code RSS dans votre bloc de contenu.

#### Remplacer l'URL de remplacement
Remplacez votreSiteWebRSSURL dans le code avec votre URL de flux RSS réelle.

#### Aperçu et test
Après avoir inséré votre flux RSS, prévisualisez le courriel avant d'envoyer. Vous pouvez également vous envoyer un courriel de test pour confirmer que le contenu apparaît comme prévu.

💡 **Note :** Le contenu RSS s'affichera lors de la sortie du concepteur de courriel ou dans l'aperçu du courriel de test.

## Syntaxe et explication du code RSS

Le contenu RSS commence par :
```
[RSS=votreSiteWebRSSURL]
```

Le contenu RSS se termine par :
```
[ENDRSS]
```

À l'intérieur de la section RSS, chaque élément du flux est référencé en utilisant un index :

- `[RSS-0-*]` fait référence à l'élément le plus récent
- `[RSS-1-*]` fait référence au deuxième élément le plus récent, et ainsi de suite

Vous pouvez inclure les éléments suivants de votre flux :

| Balise | Description |
|-----|-------------|
| `[RSS-0-title]` | Titre de l'article |
| `[RSS-0-description]` | Résumé ou texte d'aperçu |
| `[RSS-0-link]` | Lien direct vers l'article |
| `[RSS-0-dc:creator]` | Auteur de l'article |
| `[RSS-0-pubDate]` | Date de publication |
| `[RSS-0-media:content]` ou `[RSS-0-media:content-attributes:url]` | Image de l'article |
| `[RSS-0-media:credit]` | Crédit d'image |
| `[RSS-0-media:description]` | Description d'image |

Nous utilisons les balises les plus communes, mais vous devriez vérifier le code de votre propre flux RSS pour vous assurer que les balises ont les noms corrects.

Par exemple :
- `<title>` devient `[RSS-#-title]`
- `<link>` devient `[RSS-#-link]`

## Styliser votre contenu de flux RSS

Vous pouvez personnaliser la façon dont le contenu RSS apparaît dans votre courriel :

- Mettez en gras ou en italique le texte en utilisant les options de formatage dans l'éditeur
- Assortissez les couleurs de marque en ajustant les couleurs de texte et de lien
- Pour mettre en évidence les titres, utilisez un bloc de contenu Titre pour augmenter la taille et le poids de la police
- Pour ajouter une image, utilisez un bloc de contenu Image, sélectionnez Image dynamique, et insérez ce code dans le champ : `[RSS-0-media:content-attributes:url]`

![Capture d'écran de l'interface d'ajout](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-246.png)
## Exemple : Intégrer les 3 articles les plus récents

Vous pouvez copier et coller le code suivant à utiliser comme gabarit simple pour afficher votre RSS :

```
Découvrez les 3 dernières nouvelles de notre site web :

[RSS=votreSiteWebRSSURL]
 
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

Remplacez votreSiteWebRSSURL avec votre URL de flux réelle (ex., https://rss.nytimes.com/services/xml/rss/nyt/World.xml).

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

Vous utiliseriez le code suivant :

```
[RSS=votreSiteWebRSSURL]
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

![Capture d'écran de l'interface d'ajout](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-247.png)

![An Rss Feed To Your Email Campaign 248](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-248.png)
## Dépannage

**Le flux RSS ne s'affiche pas**

- Vérifiez que l'URL RSS est correcte et publiquement accessible
- Vérifiez que le flux est en format XML valide en utilisant un validateur RSS
- Assurez-vous que les balises RSS correspondent à la structure réelle de votre flux

**Le contenu s'affiche comme du code**

- Sortez du concepteur de courriel pour voir le contenu rendu
- Envoyez un courriel de test pour prévisualiser le contenu RSS réel
- Vérifiez les balises de fermeture manquantes comme [ENDRSS]

**Les images ne se chargent pas**

- Vérifiez que votre flux RSS inclut des balises de contenu média
- Vérifiez le format de l'URL d'image dans votre flux
- Utilisez la syntaxe de balise correcte : [RSS-0-media:content-attributes:url]

**Du contenu obsolète apparaît**

- Videz le cache de votre navigateur et actualisez
- Vérifiez si le flux RSS lui-même se met à jour correctement
- Accordez du temps pour que les mises à jour de flux se propagent (habituellement 15-30 minutes)

**Problèmes de formatage**

- Utilisez des blocs de contenu séparés pour les titres et le texte du corps
- Appliquez le formatage après avoir inséré les balises RSS
- Testez différentes combinaisons de balises RSS pour un affichage optimal

## Articles connexes

- [Utiliser du contenu dynamique](/fr-ca/docs/personalization/using-dynamic-content) - Contenu RSS dynamique
- [Créer des campagnes](/fr-ca/docs/campaign-creation/creating-campaigns) - Bases de création de campagne
- [Créer une automation en boucle](/fr-ca/docs/automations/creating-a-looping-automation) - Automatiser les campagnes RSS
- [Utiliser le concepteur de courriel](/fr-ca/docs/campaign-creation/using-the-email-designer) - Concevoir des mises en page RSS
- [Tester votre campagne](/fr-ca/docs/campaign-creation/testing-your-campaign) - Tester les flux RSS