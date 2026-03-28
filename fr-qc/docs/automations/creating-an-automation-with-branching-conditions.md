---
source: "https://support.cakemail.com/hc/en-us/articles/15376996731931-Creating-an-Automation-with-Branching-Conditions"
---

# Créer une automatisation avec des conditions de branchement

## Description

Les automatisations avec conditions de branchement te permettent de créer des parcours personnalisés pour tes contacts basés sur leur comportement, leurs attributs, ou leurs interactions. C'est comme créer un arbre de décision qui guide chaque contact vers le contenu le plus pertinent pour lui.

## Pourquoi c'est important

Les conditions de branchement transforment tes automatisations basiques en parcours clients sophistiqués. Elles te permettent de délivrer le bon message au bon moment à la bonne personne, améliorant considérablement l'engagement et les conversions. C'est la différence entre envoyer le même courriel à tout le monde et créer une expérience vraiment personnalisée.

## Instructions étape par étape

<Stepper>

1. Crée une nouvelle automatisation
   - Va dans l'onglet **Automatisations**
   - Clique sur **Créer une automatisation**
   - Sélectionne **Automatisation vide**

1. Configure ton déclencheur initial
   - Choisis comment les contacts entrent dans l'automatisation
   - Ex: "Contact ajouté à la liste", "Date d'anniversaire", etc.

1. Ajoute ta première action
   - Clique sur le "+" sous le déclencheur
   - Ajoute un courriel de bienvenue ou une action initiale

1. Ajoute une condition de branchement
   - Clique sur "+" pour ajouter une nouvelle action
   - Sélectionne **"Condition"**
   - Définis tes critères de branchement

1. Configure tes branches
   **Branche OUI (condition remplie) :**
   - Définis les actions pour les contacts qui répondent à la condition
   - Ajoute des courriels spécifiques ou d'autres actions
   **Branche NON (condition non remplie) :**
   - Définis les actions pour les contacts qui ne répondent pas
   - Crée un parcours alternatif

1. Ajoute des conditions multiples si nécessaire
   - Tu peux imbriquer plusieurs conditions
   - Crée des parcours complexes avec plusieurs branches

1. Teste ton automatisation
   - Utilise des contacts de test
   - Vérifie que chaque branche fonctionne correctement
   - Assure-toi que les conditions sont bien évaluées
</Stepper>

## Types de conditions de branchement

### Comportement de courriel
- A ouvert un courriel spécifique
- A cliqué sur un lien
- N'a pas ouvert depuis X jours
- A forwardé un courriel

### Attributs de contact
- Localisation géographique
- Âge ou date de naissance
- Titre de poste
- Revenus ou budget

### Activité sur le site web
- A visité une page spécifique
- A téléchargé un document
- Temps passé sur le site
- Source de trafic

### Historique d'achat
- A acheté un produit spécifique
- Montant total des achats
- Date du dernier achat
- Fréquence d'achat

## Exemples d'automatisations avec branchement

### Onboarding personnalisé
1. **Condition :** Type d'entreprise
2. **Branche A :** Guide pour PME
3. **Branche B :** Guide pour grandes entreprises

### Réactivation d'engagement
1. **Condition :** A ouvert un courriel dans les 30 derniers jours
2. **Branche A :** Série d'engagement normal
3. **Branche B :** Campagne de réactivation

### Nurturing de prospects
1. **Condition :** Score d'engagement
2. **Branche A :** Contenu éducatif (faible score)
3. **Branche B :** Offres commerciales (score élevé)

## Meilleures pratiques

### Planification :
- Dessine ton parcours sur papier d'abord
- Définis clairement tes objectifs pour chaque branche
- Garde tes conditions simples et claires

### Contenu :
- Personnalise le contenu pour chaque branche
- Assure-toi que chaque parcours a de la valeur
- Teste différents messages pour chaque segment

### Performance :
- Surveille les taux de conversion de chaque branche
- Optimise les branches qui performent moins bien
- A/B teste tes conditions de branchement

## Dépannage

**Les contacts ne suivent pas les bonnes branches**

- Vérifie la logique de tes conditions
- Assure-toi que les données d'attributs sont correctes
- Teste avec des contacts dont tu connais les caractéristiques
- Vérifie les opérateurs de comparaison (=, &gt;, &lt;, etc.)

**Les conditions ne s'évaluent pas correctement**

- Check le format des données (dates, nombres, texte)
- Vérifie les espaces dans les valeurs de texte
- Assure-toi que les attributs existent pour tous les contacts
- Teste les conditions avec des valeurs connues

**L'automatisation est trop complexe**

- Simplifie en réduisant le nombre de branches
- Divise en plusieurs automatisations plus simples
- Utilise des étiquettes pour simplifier les conditions
- Documente ton parcours pour référence future

**Performance lente**

- Réduis le nombre de conditions imbriquées
- Optimise tes requêtes de données
- Évite les conditions trop complexes
- Contacte le support pour les gros volumes

## Articles connexes

- [Comprendre l'automatisation de courriel](/fr-qc/docs/automations/understanding-email-automation) - Bases de l'automatisation
- [Ajouter des attributs à ta liste](/fr-qc/docs/audience/adding-attributes-to-your-list) - Données pour conditions
- [Utiliser les étiquettes](/fr-qc/docs/audience/using-tags-to-track-engagement) - Simplifier les conditions
- [Suivre les parcours clients](/fr-qc/docs/automations/tracking-customer-journeys-with-custom-attributes) - Mesurer l'efficacité
- [Créer des segments](/fr-qc/docs/audience/creating-dynamic-segments) - Segmentation avancée