---
source: 'https://support.cakemail.com/hc/en-us/articles/4403130193819-Dynamic-Content'
---

# Utiliser le contenu dynamique

## Description

Premièrement : Pour bien utiliser la fonctionnalité de contenu dynamique, tu vas devoir être à l'aise avec HTML, travailler en mode 'code source' dans l'éditeur HTML, et écrire un peu de code en cours de route.

## Pourquoi c'est important

Le contenu dynamique, c'est un outil de personnalisation super puissant qui te permet de livrer des messages hautement ciblés dans une seule campagne de courriel. En créant des blocs de contenu conditionnels qui changent basés sur les données d'abonnés, le comportement ou les préférences, tu peux booster significativement les taux d'engagement et les conversions. Cette fonctionnalité avancée permet une segmentation sophistiquée sans créer multiple campagnes séparées, te faisant sauver du temps tout en livrant du contenu plus pertinent. C'est particulièrement précieux pour les recommandations de produits, les aubaines basées sur la localisation, et les déclencheurs comportementaux qui nécessitent différents messages pour différents segments d'audience.

## Instructions étape par étape

Tout contenu dynamique est inséré dans les courriels en ajoutant du code entre [crochets]. Ton contenu dynamique peut être formaté avec HTML, mais toutes les instructions pour le contenu dynamique doivent être contenues dans des crochets comme ceux-ci pour fonctionner correctement : [ ]

Cet échantillon rapide va te donner une idée :
```html
Ceci va rester ici exactement comme c'est écrit.
[Le contenu dynamique va ici]

Ceci va rester ici exactement comme c'est écrit, aussi.
```

Une expression de contenu dynamique de base est généralement configurée comme suit :

```
[IF variable opérateur constante]
<Code HTML pour afficher le résultat>
[ELSEIF variable opérateur constante]
<Code HTML pour afficher le résultat alternatif>
[ELSE]
<Code HTML pour afficher quand aucun résultat ne correspond>
[ENDIF]
```

Cette documentation rapide va décrire les règles pour les variables, opérateurs, constantes et expressions, qui vont t'aider à commencer à écrire les tiens. Le contenu dynamique supporte un nombre de différents types de données, signifiant qu'il y a quelques façons avec lesquelles tu peux créer des expressions pour les variables qui décident quel contenu sera affiché.

### Type de données supporté

Le contenu dynamique supporte un nombre de différents types de données, signifiant qu'il y a quelques façons avec lesquelles tu peux créer des expressions pour les variables qui décident quel contenu sera affiché.

#### Les types de données supportés sont :

- booléen – VRAI ou FAUX
- entier – Tout nombre entier allant de -8388608 à 8388608
- chaîne – Une chaîne alphanumérique jusqu'à un maximum de 255 caractères
- date – Date avec le format "AAAA-MM-JJ HH-MM-SS"
Les heures doivent être écrites en horloge 24 heures (donc 18:30 au lieu de 6:30 PM)

#### Variables

Les variables sont les critères sur lesquels tu bases ton contenu. Ça peut inclure des champs de liste comme prénom, nom, ou tout autre champ de données que tes abonnés ont soumis du contenu. Ça peut aussi inclure l'activité de campagne, te permettant d'envoyer du contenu spécifique seulement à ceux qui ont cliqué sur un lien ou ouvert une campagne de courriel précédente.

#### Champs de liste

Les champs de liste peuvent être utilisés comme critères. La valeur de ces champs change généralement avec chaque abonné de liste. Les variables sont entourées par le caractère apostrophe ( ` )

Les champs de liste peuvent être de tout type de données entier, chaîne ou date/heure.

#### Activité de campagne précédente

On peut aussi se référer à l'action qu'un abonné a prise pour une campagne de courriel précédente incluant l'ouverture du message, ou cliquer sur tout lien dans le courriel lui-même. Pour se référer à une campagne spécifique, tu vas devoir trouver l'ID de mailing et t'y référer en utilisant MAILING(id), où id est une référence au numéro de campagne. Pour se référer à un lien spécifique, tu vas devoir trouver l'ID de lien et t'y référer en utilisant LINK(id), où id est une référence au numéro de lien.

Exemple : MAILING(43243) LINK(3245364)

Une campagne de courriel a deux statuts différents : CLICKED et OPENED Un lien peut être : CLICKED

### Comment trouver un id de campagne de courriel dans ton site de marque.

#### Sélectionne l'onglet Campagnes.
#### Trouve la campagne spécifique à laquelle tu veux te référer.
#### Visualise les statistiques pour cette campagne.
L'ID de mailing sera inclus dans l'URL qui s'affiche dans la barre d'adresse de ton navigateur. Utilise seulement le nombre à 6 ou 7 chiffres qui apparaît à la fin de l'URL : http://mail.tonnomdeccompte.com/ui/mailings/stats/560416

### Comment trouver un id de lien dans ton site de marque.

#### Sélectionne l'onglet Campagnes.
#### Trouve la campagne spécifique à laquelle tu veux te référer.
#### Visualise les statistiques pour cette campagne.
#### Accède au rapport de clics pour la campagne.
#### Visualise les statistiques détaillées pour le lien que tu veux utiliser comme variable.
L'ID de lien sera inclus dans l'URL qui s'affiche dans la barre d'adresse de ton navigateur. Utilise seulement le nombre à 7 ou 8 chiffres qui apparaît après le texte "link=" : http://mail.toncompte.com/ui/mailings/stats/560416?page=logs&link=7224929

### Opérateurs

Les opérateurs suivants sont supportés : Pour les champs de liste qui sont des chaînes de texte

- LIKE – Correspond
- NOT LIKE – Ne correspond pas

Pour les champs de liste qui sont des entiers ou datetime
- = – Égal à
- != – Pas égal à
- &lt; – Moins que
- &lt;= – Moins que ou égal à
- &gt; – Plus grand que
- &gt;= – Plus grand que ou égal à

Pour l'activité de campagne (liens ou mailings)
- IS
- IS NOT

Pour les expressions
- AND
- OR

#### Constantes

Les constantes doivent être entourées de guillemets doubles ' " ' si elles sont de types de données chaînes de texte, datetime ou entier.

Exemples :

"QC"
"2010-08-02 10:00:00"
"5"

#### Expressions

Le contenu dynamique supporte les expressions booléennes (VRAI / FAUX). Les expressions peuvent être créées en combinant une variable, un opérateur et une constante.

Exemple :

`courriel` LIKE "%hotmail%"
(leur adresse courriel contient le texte "hotmail")

Exemple :

`id` > "1000"
(l'ID de liste est plus grand que 1000)

Exemple :

MAILING(34342) IS OPENED
(l'abonné a ouvert la campagne #34342)

La variable et la constante doivent être du même type de données.

Les expressions peuvent être combinées ensemble pour devenir des expressions plus larges et plus complexes en utilisant des parenthèses.

Exemple :

(`courriel` LIKE "%hotmail%") AND (MAILING(34342) IS OPENED)
(leur adresse courriel contient le texte "hotmail" ET ils ont ouvert la campagne #34342)

### Structures de contrôle

Une structure de contrôle donne l'énoncé de départ pour l'expression, et peut être imbriquée pour des expressions plus complexes.

#### IF

[IF expression]
Code HTML à afficher
Affiche le code HTML si l'expression est VRAIE

#### ELSEIF

[ELSEIF expression]
Code HTML à afficher
Suit un énoncé [IF]. Affiche le code HTML indiqué si l'expression [IF] précédente est FAUSSE mais l'expression de [ELSEIF] est VRAIE. Il peut y avoir plusieurs énoncés [ELSEIF].

#### ELSE

[ELSE]
Code HTML à afficher
Affiche le code HTML si les expressions des [IF] et [ELSEIF] précédents (s'il y en a) sont FAUSSES.

#### ENDIF

[ENDIF]
Ferme un énoncé [IF].

### Fonctions

Les fonctions suivantes sont supportées : MOD

#### MOD(N,M)

C'est une opération Modulo. Retourne le reste de N divisé par M.

Exemple :
```
[IF MOD(`id`,10) = 5]
<p>Tu es un gagnant !</p>
[ELSE]
<p>Désolé ! Essaie encore !</p>
[ENDIF]
```

## Dépannage

**Le contenu dynamique s'affiche comme texte brut/code**

- Assure-toi que tout contenu dynamique est dans des crochets []
- Vérifie que tu modifies en mode HTML/code source
- Vérifie que tous les énoncés IF ont un ENDIF correspondant
- Cherche des crochets manquants ou mal appariés

**Les conditions s'évaluent pas correctement**

- Confirme que les noms de variables correspondent exactement aux noms de champs (sensible à la casse)
- Utilise des backticks (`) autour des noms de variables
- Vérifie que les types de données correspondent (compare pas texte à nombres)
- Teste avec des données d'abonnés connues pour déboguer la logique

**Les blocs ELSEIF et ELSE marchent pas**

- Assure-toi de l'imbrication et l'ordre appropriés : IF, ELSEIF, ELSE, ENDIF
- Vérifie que chaque bloc contient du HTML valide
- Vérifie qu'il n'y a pas d'erreurs de syntaxe dans les conditions précédentes
- Teste chaque branche de condition séparément

**Les expressions complexes échouent**

- Commence avec des conditions simples et construis la complexité graduellement
- Utilise des parenthèses pour grouper des expressions booléennes complexes
- Vérifie que tous les opérateurs sont valides pour les types de données utilisés
- Vérifie l'espacement approprié autour des opérateurs

## Articles connexes

- [Personnaliser avec les conditions d'affichage](/fr-qc/docs/personalization/display-conditions) - Affichage conditionnel
- [Ajouter des balises de fusion à une campagne](/fr-qc/docs/personalization/adding-merge-tags-to-a-campaign) - Champs dynamiques
- [Ajouter un flux RSS](/fr-qc/docs/campaign-creation/adding-rss-feeds) - RSS dynamique
- [Créer un segment](/fr-qc/docs/audience/creating-dynamic-segments) - Segments dynamiques
- [Utiliser l'IA pour créer du contenu](/fr-qc/docs/ai/creating-content-with-ai) - Contenu IA dynamique