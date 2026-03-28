---
source: 'https://support.cakemail.com/hc/en-us/articles/360057252894-Importing-contacts'
---

# Importer des contacts dans vos listes

<iframe src="//www.youtube-nocookie.com/embed/km1j1Xwi4Bs" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Description

Vous pouvez importer des contacts à partir d'un fichier CSV (fichier de valeurs séparées par des virgules) ou les ajouter manuellement à votre liste de contacts. Comme toujours, nous adhérons à une politique anti-pourriel stricte, ce qui signifie que vous devez avoir le consentement des contacts avant de les ajouter à votre liste de contacts.

## Pourquoi c'est important

Notre application vous permet d'envoyer des courriels à une liste que vous avez acquise avec votre travail acharné et votre prospection. Vous pouvez utiliser cette fonctionnalité pour importer facilement la précieuse liste que vous avez compilée dans notre système. Nous couvrirons comment ajouter des contacts à vos listes dans cet article.

## Instructions étape par étape

### Importer un fichier CSV

<Stepper>

1. **Convertir Excel en CSV** (si nécessaire) :
   - Pour importer une liste de contacts Excel dans notre système, vous devez d'abord la convertir en utilisant le logiciel que vous avez installé sur votre ordinateur
   - Ouvrez le fichier de liste de contacts avec Excel
   - Cliquez sur **Fichier** puis **Enregistrer sous**
   - Choisissez un nom pour votre liste de contacts. Dans la liste **Type de fichier**, choisissez **CSV (délimité par des virgules)**
   - Cliquez sur **Enregistrer**

1. Allez à **Contacts**
![Navigation vers l'onglet Contacts](/images/audience/6179a82c226f1.jpeg)
Cliquez sur le bouton circulaire avec le **signe +**
![Bouton d'ajout de contact](/images/audience/6179a82c7aea0.jpeg)

1. Si vous avez plusieurs listes, sélectionnez la liste appropriée dans laquelle importer
Suivez l'assistant d'importation pour associer vos champs CSV aux attributs de contact.

1. Sélectionnez Importer des contacts
![Sélection de liste de contacts](/images/audience/6179a82cd61ab.jpeg)

1. Sélectionnez Importer un fichier CSV

1. Cliquez sur Parcourir pour un fichier à télécharger pour trouver le fichier de liste de contacts sur votre ordinateur
![Option d'importation de fichier CSV](/images/audience/6179a82d3b4fa.png)

1. Une fois le fichier sélectionné, vous pouvez décocher les champs que vous souhaitez retirer de votre importation de liste
Si les champs personnalisés ne sont pas déjà dans votre liste, vous pouvez créer de nouveaux champs à cette étape et copier leurs noms des colonnes d'en-tête de votre CSV. Cliquez sur Continuer.
![Option d'importation de contacts](/images/audience/6179a82de54fd.jpeg)

1. Cliquez sur Continuer pour confirmer que vous avez le consentement pour ajouter cette liste
![Dialogue de navigateur de fichiers](/images/audience/6179a82e7f2f0.jpeg)
Vous serez alerté une fois le processus terminé. Une fois terminé, vous pourrez voir vos nouveaux contacts sous la liste des abonnés actifs. Pour le moment, les champs qui incluent des dates/heures doivent être ajoutés dans un format aaaa-mm-jj hh:mm:ss, sinon le champ sera remplacé par N/A.
![Interface d'association de champs](/images/audience/6179a82f2d3ec.jpeg)
![Dialogue de confirmation de consentement](/images/audience/6179a82fc8157.png)
</Stepper>

### Importer un contact individuel

![Processus d'importation de contact individuel](/images/audience/import_a_contact.gif)

<Stepper>

1. Allez à Contacts

1. Cliquez sur le bouton circulaire avec le signe +

1. Cliquez sur Ajouter un contact
![Navigation vers Contacts](/images/audience/6179a83108dc6.jpeg)

1. Remplissez les informations de contact ci-dessous et cliquez sur Enregistrer. Tous les attributs qui se trouvent dans la liste seront disponibles à remplir
![Option d'ajout de contact unique](/images/audience/6179a8316584b.png)

1. Alternativement, cliquez sur Enregistrer et ajouter un autre, pour importer un nouveau contact
</Stepper>

## Conseils et recommandations
Nous ne voulons pas exagérer, mais cela ne peut être assez souligné ; vos destinataires doivent s'être abonnés à votre liste en ligne et avoir choisi de recevoir un ou plusieurs types de emails. Avec tout en ordre, il est maintenant temps de commencer à envoyer des emails à vos contacts !

#### Conseil Excel #1
Certains programmes importeront vos données et combineront des champs comme le prénom et le nom de famille dans la même colonne. Si cela vous arrive, assurez-vous de sélectionner les séparateurs "espace" et "virgule" dans les options fournies lors de l'ouverture d'un CSV d'une source externe. Cela séparera vos données en différentes colonnes au lieu de regrouper toutes les informations dans un seul champ.

#### Conseil Excel #2
Remplacer (Ctrl + h pour les utilisateurs Windows, CMD+SHIFT+H pour les utilisateurs mac). Parfois les importations peuvent se bloquer parce que vos fichiers sont pleins de ponctuation indésirable. Pensez à Remplacer comme chercher et détruire pour les caractères errants. Dans le menu Édition, sélectionnez Remplacer ou appuyez sur Ctrl + h sur votre clavier (CMD+SHIFT+H pour mac), dans le champ "Rechercher :" tapez ce que vous voulez remplacer en masse, laissez le champ "Remplacer par" vide et cliquez sur "Remplacer tout".

#### Conseil Excel #3
Enregistrez votre fichier CSV au format Unicode UTF-8, car c'est la valeur par défaut pour la plupart des bases de données en ligne.

## Notes importantes
- **Conformité anti-pourriel** : Vous devez avoir le consentement explicite de tous les contacts avant de les ajouter à votre liste
- **Qualité des données** : Assurez-vous que votre fichier CSV est correctement formaté avec des adresses email correctes
- **Association de champs** : Assurez-vous d'associer correctement vos colonnes CSV aux champs de contact appropriés lors de l'importation

## Dépannage

**L'importation CSV échoue ou affiche des erreurs**

- Assurez-vous que le fichier est enregistré en CSV, pas au format Excel
- Vérifiez les caractères spéciaux ou les sauts de ligne dans les données
- Vérifiez que les adresses email sont correctement formatées
- Supprimez toute ligne ou colonne vide du fichier

**L'importation bloquée au traitement**

- Les gros fichiers peuvent prendre 30+ minutes à traiter
- Vérifiez si la taille du fichier dépasse la limite de 10 Mo
- Essayez de diviser les grandes importations en lots plus petits
- Assurez-vous d'une connexion internet stable pendant le téléchargement

**Les contacts n'apparaissent pas après l'importation**

- Vérifiez si les emails existent déjà comme désabonnés
- Vérifiez que l'importation s'est terminée avec succès
- Cherchez les contacts dans la liste de suppression
- Révisez le rapport d'importation pour les contacts ignorés

**Problèmes d'association de champs**

- Assurez-vous que les en-têtes CSV correspondent aux noms d'attributs
- Vérifiez les espaces supplémentaires dans les en-têtes de colonnes
- Créez les attributs manquants avant l'importation
- Utilisez des en-têtes simples sans caractères spéciaux

**Des contacts en double sont créés**

- Les adresses email sont sensibles à la casse
- Vérifiez les espaces en fin dans la colonne email
- Assurez-vous d'un formatage cohérent entre les importations
- Révisez les contacts existants avant l'importation

**Les champs de date ne s'importent pas correctement**

- Utilisez le format AAAA-MM-JJ pour les dates
- Vérifiez que les paramètres régionaux ne sont pas en conflit
- Assurez-vous que les colonnes de date sont correctement associées
- Vérifiez que les dates sont valides (pas de dates de naissance futures)

## Articles connexes

- [Créer et gérer une liste de contacts](/fr/docs/audience/managing-contact-lists) - Créer des listes pour les importations
- [Ajouter des attributs à votre liste](/fr/docs/audience/adding-attributes-to-your-list) - Importer des champs personnalisés
- [Créer et utiliser des étiquettes](/fr/docs/audience/using-tags-to-track-engagement) - Étiqueter les contacts importés
- [Configurer un email de confirmation d'abonnement](/fr/docs/audience-building/subscription-confirmation-email) - Confirmer les contacts importés  
- [Premiers pas](/fr/docs/first-steps) - Guide de démarrage