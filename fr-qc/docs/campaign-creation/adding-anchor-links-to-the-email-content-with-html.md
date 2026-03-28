---
source: >-
  https://support.cakemail.com/hc/en-us/articles/13089282197915-Adding-anchor-links-to-the-Email-Content-with-HTML
---

# Ajouter des liens d'ancrage au contenu courriel avec HTML

## Description

Cet article utilise du code HTML pour t'expliquer comment ajouter un lien d'ancrage au bas du contenu de ton courriel. Cette fonctionnalité peut aider tes lecteurs à naviguer dans le contenu de ton courriel et passer à l'action, comme s'inscrire à une infolettre ou suivre un lien vers ton site web.

Par exemple, ajouter un lien d'ancrage au bas d'un contenu courriel peut efficacement engager tes lecteurs et les diriger vers une action spécifique. En fournissant un appel à l'action clair et en rendant facile pour tes lecteurs de donner suite, tu peux augmenter les chances d'atteindre tes objectifs de marketing ou de communication.

## Pourquoi c'est important

Les liens d'ancrage sont essentiels pour améliorer la navigation dans tes courriels, surtout dans les infolettres plus longues ou les courriels de style digest. Ils améliorent l'expérience utilisateur en permettant aux lecteurs de sauter directement aux sections qui les intéressent, réduisant la fatigue de défilement et augmentant l'engagement avec ton contenu. Cette fonctionnalité est particulièrement précieuse pour les courriels avec plusieurs sujets, des vitrines de produits, ou des horaires d'événements, car elle aide les lecteurs à trouver rapidement l'information pertinente.

## Instructions étape par étape

#### 1 : Créer un bloc HTML
- Crée un bloc HTML dans ton courriel
- Fais défiler jusqu'au bas du contenu de ton courriel.

#### 2 : Insérer une balise d'ancrage
Insère une balise d'ancrage en tapant le code HTML suivant :
```html
<a name="bottom"></a>
```
Ce code crée un emplacement vers lequel le lien naviguera quand on clique dessus.

#### 3 : Créer le texte du lien
- Tape le texte que tu veux utiliser comme lien, par exemple, "Clique ici pour plus d'informations."
- Surligne ton texte tapé et clique sur le bouton "Insérer un lien" dans ton éditeur HTML.

#### 4 : Définir la destination du lien
- Dans le champ "URL" de la boîte de dialogue de lien, tape "#bottom"
- Ceci va lier et naviguer à l'emplacement que tu as créé avec la balise d'ancrage
- Clique sur "OK" pour créer le lien.

#### 5 : Sauvegarder et envoyer
Sauvegarde le contenu de ton courriel et envoie le courriel à tes destinataires.

### Exemple de code HTML

Voici un exemple de ce à quoi le code HTML pourrait ressembler pour un contenu courriel avec un lien au bas :

```html
<p>Ceci est le contenu de ton courriel.</p>
<p>Clique <a href="#bottom">ici</a> pour plus d'informations.</p>
<a name="bottom"></a>
```

Dans cet exemple, la balise d'ancrage crée l'emplacement vers lequel le lien navigue et l'attribut href dans la balise de lien pointe vers cet emplacement. Quand le lecteur clique sur le lien, ça l'amène au bas du contenu courriel, où la balise d'ancrage est située.

## Résolution de problèmes

**Les liens d'ancrage ne fonctionnent pas**

- Assure-toi que les noms d'ancrage ne contiennent pas d'espaces ou de caractères spéciaux
- Utilise des noms d'ancrage uniques pour chaque destination de lien
- Teste dans plusieurs clients courriel car certains pourraient ne pas supporter les ancres

**Les liens sautent au mauvais endroit**

- Vérifie que le href="#nomancrage" correspond exactement au nom d'ancrage
- Vérifie s'il y a des noms d'ancrage dupliqués dans ton courriel
- Place les ancres avant le contenu vers lequel tu veux lier

**Compatibilité avec les clients courriel**

- Certains clients courriel (comme Gmail) pourraient supprimer la fonctionnalité d'ancrage
- Fournis des méthodes de navigation alternatives pour les clients incompatibles
- Teste minutieusement dans les clients courriel principaux de ton public cible

**Le code HTML ne s'affiche pas**

- Utilise le bloc de contenu HTML, pas un bloc de texte
- Assure-toi d'avoir une syntaxe HTML appropriée avec des balises fermantes
- Prévisualise dans l'éditeur courriel avant d'envoyer

**Problèmes de navigation mobile**

- Teste les liens d'ancrage sur les appareils mobiles
- Considère la taille d'écran réduite lors de la planification des points d'ancrage
- Garde le texte des liens d'ancrage assez grand pour le tapotement mobile

## Articles connexes

- [Utiliser le concepteur de courriel](/fr-qc/docs/campaign-creation/using-the-email-designer) - Mode d'édition HTML
- [Importer ton code HTML](/fr-qc/docs/email-templates/importing-your-html-code) - Travailler avec HTML
- [Ajouter un sondage à une campagne](/fr-qc/docs/campaign-creation/integrating-survey-forms) - Lier aux sections
- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Bases des campagnes
- [Tester ta campagne](/fr-qc/docs/campaign-creation/testing-your-campaign) - Tester les liens d'ancrage