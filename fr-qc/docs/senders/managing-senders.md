---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360059256113-Setting-up-and-managing-sender-emails
---

# Gérer les expéditeurs

## Description

Dans cet article, on va discuter comment choisir ton nom d'expéditeur et adresse courriel tout en restant cohérent avec ta marque, ce qui affectera directement la livraison de tes campagnes et ton image. En conséquence, chaque message inclut les adresses de l'expéditeur et du destinataire.

## Pourquoi c'est important

Le serveur courriel d'envoi voit le domaine "expéditeur" lors de l'initiation de la session et tes destinataires verront ton adresse "de". Utiliser le même domaine d'expéditeur que le domaine De améliore la livraison. Rappelle-toi toujours, livrer les courriels avec succès dépend d'une chose - envoyer des courriels aux bonnes personnes de façon cohérente avec ta marque.

## Instructions étape par étape

Ajouter un expéditeur vérifié—connu comme l'adresse "De"—à tes campagnes marketing est une étape importante. Voici comment c'est fait :

<Stepper>

1. Clique sur ton nom de compagnie/adresse courriel dans le coin supérieur droit (ça ouvre un menu déroulant), puis clique sur Expéditeurs

1. Clique sur **+ Ajouter expéditeur**
Après vérification, toute adresse courriel ajoutée à la liste d'expéditeur peut être utilisée. Prends un moment pour lire l'article suivant avant de changer ton adresse courriel d'expéditeur : Changer mon adresse courriel d'expéditeur.
**Rappel important :** Pour assurer une livrabilité optimale et protéger ta réputation d'expéditeur, c'est crucial d'envoyer des courriels d'un domaine authentifié. Pour un guide détaillé sur la configuration d'authentification de domaine, réfère-toi à notre guide d'authentification de domaine.
</Stepper>

## Configuration d'expéditeur

### Informations requises :
- **Nom d'expéditeur** : Le nom qui apparaîtra dans la boîte de réception du destinataire
- **Adresse courriel** : L'adresse courriel d'expéditeur (doit être vérifiable)
- **Adresse de réponse** : Où les réponses seront dirigées (optionnel)

### Meilleures pratiques :
- **Utilise un nom reconnaissable** : Les destinataires devraient reconnaître immédiatement qui envoie
- **Reste cohérent** : Utilise le même nom et adresse à travers toutes les campagnes
- **Évite noreply@** : Utilise une vraie adresse qui peut recevoir des réponses
- **Domaine de marque** : Utilise ton propre domaine plutôt qu'un fournisseur gratuit

## Authentification d'expéditeur

Pour améliorer la livrabilité, assure-toi que ton domaine d'expéditeur est authentifié avec :
- **SPF (Sender Policy Framework)** : Autorise ton serveur courriel
- **DKIM (DomainKeys Identified Mail)** : Signe numériquement tes courriels
- **DMARC (Domain-based Message Authentication)** : Politique d'authentification

## Résolution de problèmes

**Courriel de vérification d'expéditeur non reçu**

- Vérifie les dossiers pourriel/indésirable pour le courriel de vérification
- Assure-toi que l'adresse courriel est tapée correctement sans espaces
- Attends 10-15 minutes car les courriels peuvent être retardés
- Demande un nouveau courriel de vérification des paramètres d'expéditeur

**Impossible d'ajouter un courriel d'expéditeur de fournisseurs gratuits**

- Gmail, Yahoo, et autres fournisseurs courriel gratuits nécessitent l'authentification de domaine
- Utilise une adresse courriel de domaine professionnel à la place
- Si tu dois utiliser un fournisseur gratuit, assure-toi que ton compte a l'authentification appropriée
- Considère améliorer vers une solution courriel d'affaires

**Courriel d'expéditeur s'affiche comme "non vérifié"**

- Complète le processus de vérification courriel en cliquant le lien dans le courriel de vérification
- Vérifie si le lien de vérification a expiré (habituellement 24-48 heures)
- Enlève et rajoute le courriel d'expéditeur si la vérification continue d'échouer
- Contacte le support si le courriel reste non vérifié après plusieurs tentatives

**Les destinataires voient un nom d'expéditeur différent de celui configuré**

- Vide le cache de ton client courriel car il pourrait afficher d'anciennes informations d'expéditeur
- Vérifie que le nom d'expéditeur ne contient pas de caractères spéciaux qui pourraient ne pas s'afficher correctement
- Vérifie si les clients courriel remplacent les noms d'affichage avec les informations de contact
- Assure-toi d'utiliser le bon profil d'expéditeur pour ta campagne

**Impossible de changer le courriel d'expéditeur par défaut**

- Vérifie que le nouveau courriel d'expéditeur est déjà ajouté et vérifié
- Vérifie les permissions de compte si tu utilises un compte d'équipe ou revendeur
- Assure-toi qu'aucune campagne active n'utilise l'expéditeur par défaut actuel
- Essaie de te déconnecter et reconnecter pour actualiser les paramètres de compte

## Articles connexes

- [Authentifier mon domaine](/fr-qc/docs/senders/authenticating-domains) - Authentifier les expéditeurs
- [Mettre à jour mon profil de compagnie](/fr-qc/docs/account-settings/updating-my-company-profile) - Information d'expéditeur par défaut
- [Réputation d'expéditeur](/fr-qc/docs/delivery-troubleshooting/sender-reputation) - Domaines privés
- [Maîtriser les bases de livrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Livraison optimale
- [Adresse d'expéditeur et langue par défaut](/fr-qc/docs/audience-building/default-sender-address-and-language) - Configuration de liste