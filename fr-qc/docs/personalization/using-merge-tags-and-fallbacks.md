---
source: "https://support.cakemail.com/hc/en-us/articles/1260804575629-Using-merge-tags-and-fallbacks"
---

# Utiliser les balises de fusion et solutions de rechange

## Description
En plus des balises de fusion, tu peux ajouter toutes les balises personnalisées que tu pourrais avoir configurées pour une liste d'abonnés. Les compagnies utilisent ces balises personnalisées dans les courriels pour être plus pertinentes aux clients et leur donner une meilleure expérience. Tu peux spécifier une balise de personnalisation lors de l'ajout d'une balise personnalisée. Une fois que tu ajoutes les balises à une campagne et l'envoies à cette liste, ces balises seront automatiquement peuplées avec les informations d'abonné.

C'est comme personnaliser ton menu de cabane à sucre selon les goûts de chaque client - certains préfèrent la tire d'érable, d'autres le jambon à l'érable !

## Pourquoi c'est important

C'est crucial de personnaliser le marketing courriel pour assurer que tes destinataires sentent que tu leur parles d'une façon authentique. En conséquence, tu peux inclure du contenu pertinent qui parle directement à chaque client en utilisant des champs de personnalisation dans tes messages courriel.

Pense à ça comme quand Réjean Lavoie te salue par ton nom au Jean Coutu - ça fait toute la différence dans l'expérience client !

## Instructions étape par étape

### Syntaxe de base
```
[nom du champ,solution de rechange]
```

- **"nom du champ"** peut être substitué par, "firstname", pour cet exemple
- **"solution de rechange"** peut être substituée avec n'importe quel mot que tu choisis, dans ce cas entrons le mot "ami"

### Exemples

**Exemple 1:**
```
Salut [firstname,ami]
```
- Choisirait le champ [firstname] et le peuplerait avec l'information disponible sur ta liste
- Si vide, utiliserait "ami" à la place
- Donc `Salut [firstname,ami]` se lirait soit : **'Salut Julia,'** ou **'Salut ami'**

*Parfait pour un courriel de Couche-Tard qui annonce les nouveaux cafés de saison !*

**Exemple 2:**
```
Bonjour [firstname,toi]
```
- Choisirait la balise [firstname] et la peuplerait avec l'information disponible sur ta liste
- Si vide, utiliserait "toi" à la place  
- Donc `Bonjour [firstname,toi]` se lirait soit : **'Bonjour Alex,'** ou **'Bonjour toi,'**

*Idéal pour les invitations au Festival d'été de Québec ou au Grand Prix de Montréal !*

## Avantages

Si tu n'as pas de données pertinentes, un mot de solution de rechange sera substitué. Plus tu utilises ceux-ci, plus tes campagnes seront dynamiques et plus tu enrichiras ta performance en termes d'engagement.

C'est comme avoir un plan B quand il pleut pendant les festivités de la Saint-Jean - ton party continue pareil, juste un peu différent !

## Balises de fusion communes

### Informations de base:
- `[firstname,ami]` - Prénom du contact
- `[lastname,là]` - Nom de famille du contact  
- `[email]` - Adresse courriel
- `[company,votre compagnie]` - Nom de compagnie
- `[city,Montréal]` - Ville du contact
- `[region,Québec]` - Province ou région

### Informations de liste:
- `[list_name]` - Nom de la liste d'abonnement
- `[subscription_date]` - Date d'abonnement
- `[unsubscribe_link]` - Lien de désabonnement
- `[clients.address]` - Adresse physique de ta compagnie

### Informations de campagne:
- `[campaign_name]` - Nom de la campagne
- `[today_date]` - Date d'aujourd'hui
- `[sender_name]` - Nom de l'expéditeur

## Meilleures pratiques

**Choix de solutions de rechange appropriées:**
- Utilise des termes inclusifs et amicaux ("ami", "collègue", "voisin")
- Évite les solutions de rechange trop génériques comme "client" ou "destinataire"
- Considère le ton de ta marque dans les solutions de rechange
- Teste avec différentes solutions de rechange pour voir ce qui fonctionne mieux
- Pense local : "gang" fonctionne bien au Québec, "équipe" est plus universel

**Placement stratégique:**
- Utilise la personnalisation dans la ligne d'objet pour améliorer les taux d'ouverture
- Personnalise le salut d'ouverture pour un impact immédiat
- Inclus des détails personnalisés dans le corps du courriel
- Évite la sur-personnalisation qui peut sembler artificielle
- Adapte selon la région : "Salut [firstname,gang]" pour les Laurentides, "Bonjour [firstname,tout le monde]" pour les Cantons-de-l'Est

## Résolution de problèmes

**Les valeurs de solution de rechange ne s'affichent pas quand le champ est vide**

- Vérifie la syntaxe : assure-toi que la virgule sépare le nom du champ et la solution de rechange
- Vérifie qu'il n'y a pas d'espaces avant ou après la virgule
- Confirme que les crochets sont correctement fermés [champ,solution de rechange]
- Teste avec des champs vides connus pour vérifier la fonctionnalité

**Mauvais texte de solution de rechange qui apparaît**

- Révise si le nom du champ est épelé correctement (sensible à la casse)
- Vérifie si le champ contient vraiment des données (pourrait sembler vide mais avoir des espaces)
- Assure-toi d'utiliser le bon nom de champ de ta liste de contacts
- Vérifie qu'il n'y a pas de caractères cachés dans ta syntaxe de balise de fusion

**Personnalisation ne fonctionne pas dans certains clients courriel**

- Teste tes balises de fusion dans différents clients courriel
- Assure-toi que les champs existent dans ta liste de contacts
- Vérifie que les données de contact sont dans le bon format
- Évite les caractères spéciaux dans les noms de champs

**Balises qui s'affichent littéralement dans les courriels**

- Vérifie que la syntaxe des crochets est correcte
- Assure-toi d'utiliser les noms de champ exacts de ta liste
- Confirme que les données sont correctement mappées
- Teste la campagne avant l'envoi complet

## Articles connexes

- [Ajouter des balises de fusion à une campagne](/fr-qc/docs/personalization/adding-merge-tags-to-a-campaign) - Application pratique
- [Ajouter une balise de fusion de date](/fr-qc/docs/personalization/adding-a-date-merge-tag) - Dates dynamiques
- [Utiliser le contenu dynamique](/fr-qc/docs/personalization/using-dynamic-content) - Personnalisation avancée
- [Conditions d'affichage](/fr-qc/docs/personalization/display-conditions) - Contenu conditionnel
- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Créer des champs personnalisés