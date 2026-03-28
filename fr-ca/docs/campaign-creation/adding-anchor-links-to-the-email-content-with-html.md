---
source: >-
  https://support.cakemail.com/hc/en-us/articles/13089282197915-Adding-anchor-links-to-the-Email-Content-with-HTML
---

# Ajouter des liens d'ancrage au contenu du courriel avec HTML

## Description

Cet article utilise le code HTML pour expliquer comment ajouter un lien d'ancrage au bas du contenu du courriel. Cette fonctionnalité peut aider les lecteurs à naviguer dans le contenu du courriel et prendre des mesures, comme s'inscrire à une infolettre ou suivre un lien vers un site web.

Par exemple, ajouter un lien d'ancrage au bas d'un contenu de courriel peut efficacement engager les lecteurs et les diriger vers une action spécifique. En fournissant un appel à l'action clair et en facilitant le suivi pour les lecteurs, vous pouvez augmenter la probabilité d'atteindre vos objectifs marketing ou de communication.

## Pourquoi c'est important

Les liens d'ancrage sont essentiels pour améliorer la navigation des courriels, surtout dans les infolettres plus longues ou les courriels de type digest. Ils améliorent l'expérience utilisateur en permettant aux lecteurs de passer directement aux sections d'intérêt, réduisant la fatigue de défilement et augmentant l'engagement avec votre contenu. Cette fonctionnalité est particulièrement précieuse pour les courriels avec plusieurs sujets, des vitrines de produits ou des horaires d'événements, car elle aide les lecteurs à trouver rapidement des informations pertinentes.

## Instructions étape par étape.

#### 1 : Créer un bloc HTML
- Créez un bloc HTML dans votre courriel
- Faites défiler jusqu'au bas de votre contenu de courriel.

#### 2 : Insérer la balise d'ancrage
Insérez une balise d'ancrage en tapant le code HTML suivant :
```html
<a name="bottom"></a>
```
Ce code crée un emplacement vers lequel le lien naviguera lorsqu'on clique dessus.

#### 3 : Créer le texte du lien
- Tapez le texte que vous voulez utiliser comme lien, par exemple, « Cliquez ici pour plus d'informations. »
- Surlignez votre texte tapé et cliquez sur le bouton « Insérer un lien » dans votre éditeur HTML.

#### 4 : Définir la destination du lien
- Dans le champ « URL » de la boîte de dialogue du lien, tapez « #bottom »
- Ceci créera un lien et naviguera vers l'emplacement que vous avez créé avec la balise d'ancrage
- Cliquez sur « OK » pour créer le lien.

#### 5 : Sauvegarder et envoyer
Sauvegardez votre contenu de courriel et envoyez le courriel à vos destinataires.

### Exemple de code HTML

Voici un exemple de ce à quoi pourrait ressembler le code HTML pour le contenu de courriel avec un lien au bas :

```html
<p>Ceci est le contenu de votre courriel.</p>
<p>Cliquez <a href="#bottom">ici</a> pour plus d'informations.</p>
<a name="bottom"></a>
```

Dans cet exemple, la balise d'ancrage crée l'emplacement vers lequel le lien naviguera et l'attribut href dans la balise de lien pointe vers cet emplacement. Quand le lecteur clique sur le lien, cela l'amène au bas du contenu du courriel, où se trouve la balise d'ancrage.

## Dépannage

**Les liens d'ancrage ne fonctionnent pas**

- Assurez-vous que les noms d'ancrage ne contiennent pas d'espaces ou de caractères spéciaux
- Utilisez des noms d'ancrage uniques pour chaque destination de lien
- Testez dans plusieurs clients de courriel car certains peuvent ne pas supporter les ancrages

**Les liens sautent au mauvais emplacement**

- Vérifiez que href="#nomancrage" correspond exactement au nom d'ancrage
- Vérifiez les noms d'ancrage dupliqués dans votre courriel
- Placez les ancrages avant le contenu vers lequel vous voulez créer un lien

**Compatibilité des clients de courriel**

- Certains clients de courriel (comme Gmail) peuvent supprimer la fonctionnalité d'ancrage
- Fournissez des méthodes de navigation alternatives pour les clients incompatibles
- Testez minutieusement dans les clients de courriel principaux de votre audience cible

**Le code HTML ne s'affiche pas**

- Utilisez le bloc de contenu HTML, pas un bloc de texte
- Assurez-vous d'une syntaxe HTML appropriée avec des balises de fermeture
- Prévisualisez dans l'éditeur de courriel avant d'envoyer

**Problèmes de navigation mobile**

- Testez les liens d'ancrage sur les appareils mobiles
- Considérez la taille d'écran réduite lors de la planification des points d'ancrage
- Gardez le texte du lien d'ancrage assez grand pour les touches mobiles

## Articles connexes

- [Utiliser le concepteur de courriel](/fr-ca/docs/campaign-creation/using-the-email-designer) - Mode d'édition HTML
- [Importer votre code HTML](/fr-ca/docs/email-templates/importing-your-html-code) - Travailler avec HTML
- [Ajouter un sondage à une campagne](/fr-ca/docs/campaign-creation/integrating-survey-forms) - Lien vers les sections
- [Créer des campagnes](/fr-ca/docs/campaign-creation/creating-campaigns) - Bases des campagnes
- [Tester votre campagne](/fr-ca/docs/campaign-creation/testing-your-campaign) - Tester les liens d'ancrage