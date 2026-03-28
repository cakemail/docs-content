---
source: "https://support.cakemail.com/hc/en-us/articles/1260804575629-Using-merge-tags-and-fallbacks"
---

# Utiliser les balises de fusion et les solutions de repli

## Description

En plus des balises de fusion, vous pouvez ajouter toutes les étiquettes personnalisées que vous pourriez avoir configurées pour une liste d'abonnés. Les entreprises utilisent ces étiquettes personnalisées dans les emails pour être plus pertinentes envers les clients et leur donner une meilleure expérience. Vous pouvez spécifier une étiquette de personnalisation lors de l'ajout d'une étiquette personnalisée. Une fois que vous ajoutez les étiquettes à une campagne et l'envoyez à cette liste, ces étiquettes seront automatiquement populées avec les informations des abonnés.

## Pourquoi c'est important

Il est crucial de personnaliser le marketing par email pour s'assurer que vos destinataires sentent que vous leur parlez de manière authentique. En conséquence, vous pouvez inclure du contenu pertinent qui parle directement à chaque client en utilisant des champs de personnalisation dans vos messages de email.

## Instructions étape par étape

### Syntaxe de base
```
[nom du champ,solution de repli]
```

- **"nom du champ"** peut être substitué par, "prenom", pour cet exemple
- **"solution de repli"** peut être substitué par n'importe quel mot que vous choisissez, dans ce cas entrons le mot "ami"

### Exemples

**Exemple 1 :**
```
Bonjour [prenom,ami]
```
- Choisirait le champ [prenom] et le populeraient avec l'information disponible sur votre liste
- Si vide, utiliserait "ami" à la place
- Donc `Bonjour [prenom,ami]` se lirait soit : **'Bonjour Julia,'** ou **'Bonjour ami'**

**Exemple 2 :**
```
Bonjour [prenom,cher client]
```
- Choisirait l'étiquette [prenom] et la populeraient avec l'information disponible sur votre liste
- Si vide, utiliserait "cher client" à la place
- Donc `Bonjour [prenom,cher client]` se lirait soit : **'Bonjour Alex,'** ou **'Bonjour cher client,'**

## Avantages

Si vous n'avez pas de données pertinentes, un mot de solution de repli sera substitué. Plus vous les utilisez, plus vos campagnes seront dynamiques et plus vous enrichirez votre performance en termes d'engagement.

## Dépannage

**Les valeurs de solution de repli ne s'affichent pas quand le champ est vide**

- Vérifiez la syntaxe : assurez-vous que la virgule sépare le nom du champ et la solution de repli
- Vérifiez qu'il n'y a pas d'espaces avant ou après la virgule
- Confirmez que les crochets sont correctement fermés [champ,solution de repli]
- Testez avec des champs connus vides pour vérifier la fonctionnalité

**Mauvais texte de solution de repli qui apparaît**

- Examinez si le nom du champ est épelé correctement (sensible à la casse)
- Vérifiez si le champ contient réellement des données (pourrait sembler vide mais avoir des espaces)
- Assurez-vous d'utiliser le bon nom de champ de votre liste de contacts
- Vérifiez qu'il n'y a pas de caractères cachés dans votre syntaxe de balise de fusion

**Les virgules dans le texte de solution de repli causent des problèmes**

- Évitez d'utiliser des virgules dans le texte de solution de repli car elles sont des séparateurs de syntaxe
- Utilisez une ponctuation alternative si nécessaire
- Considérez utiliser des balises de fusion sans solutions de repli pour du texte complexe
- Testez minutieusement quand la solution de repli contient des caractères spéciaux

**Les solutions de repli fonctionnent en aperçu mais pas dans les emails envoyés**

- Vérifiez que les données de contact n'ont pas changé entre l'aperçu et l'envoi
- Vérifiez si le processus d'importation est terminé pour tous les contacts
- Assurez-vous qu'aucune mise à jour de liste de dernière minute n'a affecté les données
- Testez avec un petit segment avant l'envoi complet

## Articles connexes

- [Ajouter des balises de fusion à une campagne](/fr/docs/personalization/adding-merge-tags-to-a-campaign) - Guide d'implémentation
- [Ajouter des attributs à votre liste](/fr/docs/audience/adding-attributes-to-your-list) - Créer des champs de fusion
- [Ajouter votre adresse physique](/fr/docs/campaign-creation/adding-your-physical-address) - Balise de fusion d'adresse
- [Importer des contacts](/fr/docs/audience/importing-contacts-into-your-lists) - Importer des données de fusion
- [Utiliser le concepteur d'email](/fr/docs/campaign-creation/using-the-email-designer) - Insérer des balises de fusion