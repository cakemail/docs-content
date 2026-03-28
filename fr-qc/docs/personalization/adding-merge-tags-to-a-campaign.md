---
source: "https://support.cakemail.com/hc/en-us/articles/1260806908690-Adding-merge-tags-to-a-campaign"
---

# Ajouter des balises de fusion à une campagne

## Description

Les balises de fusion te permettent de personnaliser tes courriels en insérant automatiquement des informations spécifiques à chaque contact, comme leur nom, leur entreprise, ou d'autres données que tu as collectées. C'est un moyen puissant de rendre tes courriels plus personnels et engageants.

## Pourquoi c'est important

La personnalisation améliore considérablement l'engagement de tes courriels. Quand tes abonnés voient leur nom ou des informations pertinentes à leur situation, ils sont plus susceptibles d'ouvrir, lire et cliquer sur tes courriels. Les balises de fusion te permettent de créer cette personnalisation à grande échelle sans effort manuel.

C'est comme quand tu reçois une carte de noël avec ton nom dessus vs une circulaire générique du Canadian Tire - laquelle tu regardes en premier ? Exactement ! Avec les balises de fusion, chaque courriel devient personnel, même si tu en envoies à des milliers de personnes. C'est full hot pour l'engagement !

## Instructions étape par étape

<Stepper>

1. Crée ou modifie ta campagne
   - Va dans **Campagnes**
   - Sélectionne une campagne existante ou crée-en une nouvelle
   - Clique sur **Modifier le courriel**

1. Positionne ton curseur
   - Clique exactement là où tu veux insérer la balise de fusion
   - Cela peut être dans l'objet, le pré-en-tête, ou le corps du courriel

1. Accède aux balises de fusion
   - Clique sur l'icône **Balises de fusion** dans la barre d'outils
   - Ou utilise le raccourci clavier si disponible

1. Sélectionne ta balise
   **Balises standards :**
   - `\{first_name}` - Prénom du contact
   - `\{last_name}` - Nom de famille
   - `\{email}` - Adresse courriel
   - `\{company}` - Nom de l'entreprise
   **Balises d'attributs personnalisés :**
   - Utilise les attributs que tu as créés pour ta liste
   - Ex: `\{job_title}`, `\{city}`, `\{purchase_date}`

1. Ajoute une valeur de substitution
   - Définis ce qui s'affiche si l'information est manquante
   - Ex: `\{first_name | Cher client}` affichera "Cher client" si le prénom est vide

1. Teste ta personnalisation
   - Utilise la fonction d'aperçu pour voir le résultat
   - Envoie un courriel de test à toi-même
   - Vérifie que les balises s'affichent correctement
</Stepper>

## Types de balises de fusion

### Informations de contact
- `\{first_name}` - Prénom
- `\{last_name}` - Nom de famille
- `\{full_name}` - Nom complet
- `\{email}` - Adresse courriel
- `\{phone}` - Numéro de téléphone

### Informations d'entreprise
- `\{company}` - Nom de l'entreprise
- `\{job_title}` - Titre de poste
- `\{industry}` - Secteur d'activité

### Localisation
- `\{city}` - Ville
- `\{state}` - Province/État
- `\{country}` - Pays
- `\{postal_code}` - Code postal

### Dates importantes
- `\{birth_date}` - Date de naissance
- `\{signup_date}` - Date d'inscription
- `\{last_purchase}` - Dernier achat

## Meilleures pratiques

### Utilisation judicieuse :
- N'abuse pas de la personnalisation
- Assure-toi que c'est pertinent au contexte
- Teste avec différents types de contacts

### Valeurs de substitution :
- Toujours inclure une valeur de substitution
- Rends la substitution naturelle dans le contexte
- Évite les substitutions génériques comme "[Nom]"

### Qualité des données :
- Vérifie la qualité de tes données régulièrement
- Nettoie les données avant l'importation
- Utilise des formulaires bien conçus pour collecter les infos

## Exemples d'utilisation

### Dans l'objet :
- "Salut \{first_name | là}, ta commande est prête !"
- "\{company | Ton entreprise} pourrait économiser 30%"
- "Spécial \{city | Québec} : 20% de rabais ce fds !"

### Dans le contenu :
- "Bonjour \{first_name | cher client},"
- "Comme tu es de \{city | ta région}, voici une offre spéciale..."
- "Félicitations pour ton nouveau poste de \{job_title | professionnel} !"
- "Salut \{first_name | gang} ! As-tu vu notre nouveau menu d'été ?"

### Exemples québécois concrets :
- "Hey \{first_name | là} ! Le nouveau Cora de \{city | ta ville} ouvre bientôt !"
- "Spécial Saint-Jean pour \{company | ton équipe} : 25% sur nos forfaits !"
- "Livraison gratuite à \{city | Montréal} - ça torche !"

### Appels à l'action :
- "Voir les produits pour \{company | ton entreprise}"
- "Planifier une démo pour \{industry | ton secteur}"
- "Réserver ta place au bureau de \{city | Québec}"

## Dépannage

**Les balises n'apparaissent pas dans l'aperçu**

- Vérifie que la syntaxe est correcte (accolades et orthographe)
- Assure-toi que l'attribut existe pour ce contact
- Vérifie que tu es dans le bon mode d'édition
- Rafraîchis l'aperçu

**Les balises s'affichent comme texte brut**

- Vérifie l'orthographe exacte de la balise
- Assure-toi d'utiliser les bonnes accolades `\{}`
- Vérifie que l'attribut existe dans ta liste
- Teste avec un contact qui a cette information

**Les valeurs de substitution ne fonctionnent pas**

- Vérifie la syntaxe : `\{attribut | substitution}`
- Assure-toi d'utiliser le bon caractère de séparation `|`
- Évite les espaces supplémentaires autour du `|`
- Teste avec des contacts qui ont des données manquantes

**La personnalisation casse la mise en page**

- Prévois différentes longueurs de texte (pense à "Jo" vs "Jean-François-Xavier")
- Teste avec des noms très courts et très longs - au Québec, on a tout !
- Ajuste l'espacement et la mise en page en conséquence
- Utilise des substitutions appropriées - "gang" marche bien comme substitution universelle

## Articles connexes

- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Créer des champs personnalisés
- [Utiliser les balises de fusion et les substitutions](/fr-qc/docs/personalization/using-merge-tags-and-fallbacks) - Guide détaillé
- [Conditions d'affichage](/fr-qc/docs/personalization/display-conditions) - Personnalisation avancée
- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Utiliser dans tes campagnes
- [Importer des contacts](/fr-qc/docs/audience/importing-contacts-into-your-lists) - Inclure des données personnalisées