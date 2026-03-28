---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360048927034-Email-deliverability
---

# Délivrabilité de courriel : comment faire arriver tes courriels à destination

## Description

La délivrabilité, c'est la capacité de tes courriels à se rendre dans la boîte de réception de tes destinataires (et non dans le dossier spam !). C'est un peu comme la livraison de pizza de chez St-Hubert - tu veux que ton message arrive chaud, à temps et à la bonne adresse, même s'il neige à plein ciel ! Dans cet article, on va démystifier la délivrabilité et te donner tous les trucs pour que tes courriels arrivent où ils doivent arriver.

## Pourquoi c'est important

Imagine que tu envoies 1000 courriels et que seulement 500 se rendent dans les boîtes de réception. C'est comme si tu jetais la moitié de ton budget marketing par les fenêtres - pire qu'acheter des billets pour un match des Expos ! Une bonne délivrabilité, c'est ce qui fait la différence entre une campagne qui performe et une campagne qui tombe dans le vide. Plus tes courriels arrivent à destination, plus tu as de chances d'avoir des ouvertures, des clics et ultimement des conversions.

## Les facteurs qui affectent ta délivrabilité

### 1. Ta réputation d'expéditeur

Ta réputation d'expéditeur, c'est comme ton crédit score dans le monde du courriel ! Les fournisseurs de courriel (Gmail, Outlook, etc.) te donnent une note basée sur - un peu comme si Gilles Duceppe jugeait tes performances politiques :

- **Taux de bounce** : Moins tu as de bounces, mieux c'est
- **Plaintes de spam** : Si le monde marque tes courriels comme spam, ça fait mal - plus mal qu'une défaite des Canadiens en séries
- **Engagement** : Plus tes destinataires ouvrent et cliquent, mieux ta réputation - comme avoir une bonne cote d'écoute à Radio-Canada
- **Volume d'envoi** : Des changements drastiques peuvent être suspects - comme passer de 100 à 10 000 courriels du jour au lendemain, ça lève des drapeaux rouges plus vite qu'à la Saint-Jean !

### 2. L'authentification de ton domaine

C'est comme avoir une pièce d'identité pour tes courriels ! Il y a trois protocoles principaux :

- **SPF (Sender Policy Framework)** : Dit quels serveurs peuvent envoyer des courriels pour ton domaine
- **DKIM (DomainKeys Identified Mail)** : Signe digitalement tes courriels
- **DMARC (Domain-based Message Authentication)** : Dit quoi faire avec les courriels qui échouent SPF/DKIM

### 3. La qualité de ta liste

Une liste propre, c'est la base ! Ça inclut :

- **Adresses valides** : Pas de typos ou d'adresses inventées
- **Engagement récent** : Des contacts qui interagissent avec tes courriels
- **Double opt-in** : Confirmation que les gens veulent vraiment recevoir tes courriels
- **Nettoyage régulier** : Suppression des adresses inactives

### 4. Le contenu de tes courriels

Le contenu, c'est important aussi :

- **Évite les mots-déclencheurs de spam** : "GRATUIT!!!", "URGENT!!!", etc.
- **Ratio texte/images équilibré** : Pas juste des images
- **Liens légitimes** : Évite les raccourcisseurs d'URL suspects
- **Format HTML propre** : Code bien écrit et valide

## Comment améliorer ta délivrabilité

### 1. Authentifie ton domaine

C'est la première chose à faire ! Va dans les paramètres de ton compte et configure :

1. **SPF** : Ajoute l'enregistrement SPF fourni à ton DNS
2. **DKIM** : Active et configure DKIM pour ton domaine
3. **DMARC** : Configure une politique DMARC (commence par "none" puis progresse)

### 2. Réchauffe ton IP (pour les gros volumes)

Si tu envoies de gros volumes, réchauffe ton IP graduellement :

- Commence avec un petit volume
- Augmente progressivement sur plusieurs semaines
- Surveille tes métriques de près

### 3. Segmente ton audience

Envoie des courriels pertinents :

- **Segmente par engagement** : Envoie plus souvent aux actifs
- **Personnalise le contenu** : Messages adaptés à chaque groupe
- **Respecte les préférences** : Fréquence et type de contenu

### 4. Monitore tes métriques

Garde l'œil sur :

- **Taux de délivrabilité** : % de courriels délivrés
- **Taux de bounce** : Idéalement moins de 2%
- **Taux de plaintes** : Moins de 0.1%
- **Taux d'engagement** : Ouvertures et clics

## Meilleures pratiques

### Pour le contenu

- **Écris des objets accrocheurs mais honnêtes** : Pas de clickbait
- **Utilise un équilibre texte/images** : 60/40 ou 70/30
- **Inclus toujours un lien de désabonnement** : C'est obligatoire !
- **Teste tes courriels** : Utilise des outils de test de spam

### Pour la liste

- **Nettoie régulièrement** : Supprime les bounces et inactifs
- **Utilise le double opt-in** : Confirme l'intention des abonnés
- **Respecte les désabonnements** : Immédiatement et sans questions
- **Segmente intelligemment** : Messages pertinents = meilleur engagement

### Pour l'envoi

- **Envoie de façon consistante** : Régularité > gros volumes sporadiques
- **Évite les heures de pointe** : Moins de compétition
- **Teste différents jours/heures** : Trouve ce qui marche pour ton audience
- **Utilise une adresse d'expéditeur reconnaissable** : Pas de "noreply"

## Signaux d'alarme à surveiller

### Taux de bounce élevé (plus de 5%)

Causes possibles :
- Liste pas nettoyée
- Adresses invalides
- Problème d'authentification

### Taux de plaintes élevé (plus de 0.1%)

Causes possibles :
- Contenu non pertinent
- Fréquence d'envoi trop élevée
- Manque de segmentation

### Taux d'ouverture qui chute

Causes possibles :
- Réputation qui se dégrade
- Atterrissage en spam
- Contenu moins engageant

## Dépannage

**Mes courriels vont tous en spam**

1. Vérifie ton authentification de domaine
2. Check ton contenu pour des mots-déclencheurs
3. Réduis ta fréquence d'envoi temporairement
4. Nettoie ta liste de contacts
5. Contact notre équipe de délivrabilité

**Mon taux de bounce est élevé**

1. Supprime les adresses qui bounced
2. Vérifie la qualité de tes sources de contacts
3. Utilise la validation d'adresse courriel
4. Implémente le double opt-in

**Ma réputation se dégrade**

1. Pause les envois si nécessaire
2. Segmente pour cibler les plus engagés
3. Améliore ton contenu
4. Nettoie agressivement ta liste
5. Réchauffe graduellement

## Outils et ressources

### Outils de test

- **Mail Tester** : Teste le score spam de tes courriels
- **GlockApps** : Teste la délivrabilité sur différents fournisseurs
- **250ok** : Monitoring de réputation avancé

### Ressources d'apprentissage

- Blog de Return Path
- Documentation des fournisseurs (Gmail, Outlook)
- Communautés de délivrabilité
- Formations spécialisées

## Articles connexes

- [Authentifier ton domaine](/fr-qc/docs/senders/authenticating-domains) - Configuration technique
- [Gérer tes listes de contacts](/fr-qc/docs/audience/managing-contact-lists) - Qualité de liste
- [Comprendre les bounces](/fr-qc/docs/analytics/email-bounces) - Types et solutions
- [Liste de suppression](/fr-qc/docs/audience/suppression-lists) - Gestion des désabonnements
- [Réputation d'expéditeur](/fr-qc/docs/delivery-troubleshooting/sender-reputation) - Monitoring avancé