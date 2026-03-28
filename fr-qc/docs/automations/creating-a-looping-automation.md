---
source: "https://support.cakemail.com/hc/en-us/articles/15376996731547-Creating-a-Looping-Automation"
---

# Créer une automatisation en boucle

## Description

Une automatisation en boucle te permet de créer des séquences de courriels qui se répètent automatiquement selon un calendrier défini. C'est parfait pour les contenus éducatifs, les rappels réguliers, ou tout contenu que tu veux envoyer de façon cyclique à tes abonnés.

## Pourquoi c'est important

Les automatisations en boucle sont idéales pour maintenir un engagement constant avec ton audience sans effort manuel répétitif. Elles sont particulièrement utiles pour les séries éducatives, les conseils hebdomadaires, les rappels mensuels, ou tout contenu que tu veux partager de façon récurrente avec de nouveaux abonnés.

## Instructions étape par étape

<Stepper>

1. Va dans l'onglet **Automatisations**

1. Clique sur **Créer une automatisation**

1. Sélectionne **Automatisation vide** pour commencer de zéro

1. Configure le déclencheur
   - **Contact ajouté à la liste :** Pour commencer quand quelqu'un s'abonne
   - **Date spécifique :** Pour commencer à une date précise
   - **Attribut personnalisé :** Basé sur des données de contact

1. Ajoute tes courriels à la séquence
   - Clique sur le "+" pour ajouter une action
   - Sélectionne "Envoyer un courriel"
   - Crée ou choisis ton courriel
   - Définis le délai avant l'envoi

1. Configure la boucle
   - Ajoute une action "Attendre"
   - Définis la durée du cycle (ex: 7 jours, 30 jours)
   - Ajoute une condition pour redémarrer la séquence

1. Définis les conditions de sortie
   - **Limite de temps :** Arrête après X mois
   - **Nombre d'itérations :** Limite le nombre de cycles
   - **Désabonnement :** Retire automatiquement si désabonné
   - **Inactivité :** Arrête si pas d'engagement

1. Teste ton automatisation
   - Utilise un contact de test
   - Vérifie les délais et la séquence
   - Assure-toi que la boucle fonctionne correctement

1. Active l'automatisation
   - Revérifie tous les paramètres
   - Clique sur "Publier"
   - Surveille les premiers contacts qui entrent
</Stepper>

## Types d'automatisations en boucle

### Série éducative
- Conseils hebdomadaires
- Cours par courriel
- Contenu éducatif récurrent

### Engagement régulier
- Newsletter mensuelle
- Mises à jour de produit
- Rappels de maintenance

### Nurturing de prospects
- Témoignages clients
- Études de cas
- Offres spéciales récurrentes

## Meilleures pratiques

### Contenu :
- Varie le contenu pour éviter la répétition
- Garde chaque courriel pertinent et utile
- Adapte le ton à la fréquence d'envoi

### Timing :
- Évite les fréquences trop élevées
- Respecte les préférences de tes abonnés
- Teste différents intervalles

### Segmentation :
- Cible des groupes spécifiques
- Personnalise selon les intérêts
- Utilise des étiquettes pour organiser

## Dépannage

**La boucle ne redémarre pas**

- Vérifie les conditions de boucle
- Assure-toi que les délais sont correctement configurés
- Check les conditions de sortie qui pourraient bloquer
- Teste avec un contact de test

**Trop de désabonnements**

- Réduis la fréquence d'envoi
- Améliore la pertinence du contenu
- Offre des options de fréquence
- Segmente mieux ton audience

**Les courriels ne s'envoient pas au bon moment**

- Vérifie les fuseaux horaires
- Confirme les paramètres de délai
- Check les conditions qui pourraient retarder l'envoi
- Vérifie les limites d'envoi quotidiennes

**Les contacts sortent prématurément de la boucle**

- Revérifie les conditions de sortie
- Vérifie les règles d'inactivité
- Check les erreurs de livraison
- Assure-toi que les contacts restent dans la liste

## Articles connexes

- [Comprendre l'automatisation de courriel](/fr-qc/docs/automations/understanding-email-automation) - Bases de l'automatisation
- [Créer un courriel de bienvenue automatisé](/fr-qc/docs/automations/creating-an-automated-welcome-email) - Automatisation simple
- [Suivre les parcours clients](/fr-qc/docs/automations/tracking-customer-journeys-with-custom-attributes) - Personnalisation avancée
- [Utiliser les étiquettes](/fr-qc/docs/audience/using-tags-to-track-engagement) - Organisation des contacts
- [Créer des segments](/fr-qc/docs/audience/creating-dynamic-segments) - Ciblage des automatisations