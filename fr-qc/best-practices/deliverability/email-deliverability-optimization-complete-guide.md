# La délivrabilité - comment faire pour que tes courriels se rendent

La délivrabilité, c'est LA base. T'as beau écrire le meilleur courriel du monde, si personne le reçoit, ça sert à rien. Fait que, on va voir comment maximiser tes chances d'atterrir dans la boîte de réception, pas dans les spams.

## C'est quoi la délivrabilité, au juste?

En gros, c'est ta capacité à livrer tes courriels dans la boîte de réception de ton monde. Pas dans les spams, pas bloqués, pas perdus - direct dans l'inbox.

Pis c'est pas simple. Les filtres anti-spam sont de plus en plus sévères (avec raison - y'a beaucoup trop de saloperies qui circulent).

## Les facteurs qui comptent

### 1. Ta réputation d'expéditeur

C'est comme ton crédit. Plus t'es fiable, plus les ISP te font confiance. Ça dépend de:
- Ton historique d'envoi
- Les plaintes de spam
- Les taux de bounce
- L'engagement de ta liste

**Comment checker ta réputation:**
- Google Postmaster Tools
- Microsoft SNDS
- Ton ESP devrait te donner des insights

### 2. L'authentification technique

Les acronymes plates mais essentiels:

**SPF (Sender Policy Framework)**
- Dit qui peut envoyer des courriels pour ton domaine
- Protège contre l'usurpation

**DKIM (DomainKeys Identified Mail)**
- Signe tes courriels digitalement
- Prouve qu'ils ont pas été modifiés

**DMARC (Domain-based Message Authentication)**
- Combine SPF et DKIM
- Dit quoi faire si l'authentification échoue

Ça a l'air compliqué? Ton ESP devrait t'aider avec ça. Sinon, parle à ton équipe technique.

### 3. La qualité de ta liste

Une bonne liste = bonne délivrabilité. Simple de même.

**Ce qui aide:**
- Double opt-in
- Nettoyage régulier
- Segmentation intelligente
- Engagement élevé

**Ce qui nuit:**
- Vieilles adresses inactives
- Listes achetées (JAMAIS!)
- Pas de nettoyage
- Envoyer à tout le monde pareil

### 4. Ton contenu

Les filtres checkent tout:

**Les red flags:**
- Trop d'images, pas assez de texte
- Mots spam ("Gratuit", "Gagner", "$$$")
- Liens louches
- Code HTML brisé

**Ce qui marche:**
- Ratio texte/image équilibré
- Langage naturel
- Liens vers des sites fiables
- Code propre

### 5. Tes habitudes d'envoi

La constance, c'est la clé:
- Envoie régulièrement
- Même volume (pas 100 aujourd'hui, 10,000 demain)
- Même jour/heure si possible
- Préchauffage graduel pour nouvelles adresses IP

## Comment optimiser ta délivrabilité

### Étape 1 : nettoie ta liste

**Enlève:**
- Les hard bounces (tout de suite!)
- Les inactifs depuis 6 mois+
- Les adresses rôle (info@, admin@)
- Les pièges à spam connus

**Garde:**
- Les engagés récents
- Ceux qui ouvrent/cliquent
- Les acheteurs actifs

### Étape 2 : configure ton authentification

1. **SPF** - Ajoute l'enregistrement à ton DNS
2. **DKIM** - Active dans ton ESP
3. **DMARC** - Commence avec p=none, augmente graduellement

Pas sûr comment? Demande de l'aide. C'est trop important pour improviser.

### Étape 3 : améliore ton contenu

**L'objet:**
- Court et clair
- Pas de MAJUSCULES
- Pas de spam words
- Personnalisé si possible

**Le contenu:**
- Valeur dès le début
- Call-to-action clair
- Texte alternatif pour les images
- Lien de désabonnement visible

### Étape 4 : surveille tes métriques

**Check régulièrement:**
- Taux de livraison (95%+ minimum)
- Taux de bounce (moins de 2%)
- Plaintes spam (moins de 0.1%)
- Engagement (ouvertures, clics)

**Si ça baisse:**
- Analyse ce qui a changé
- Nettoie ta liste
- Ajuste ton contenu
- Réduis la fréquence temporairement

## Les erreurs qui tuent ta délivrabilité

1. **Envoyer sans permission** - Game over direct
2. **Ignorer les bounces** - Les ISP détestent ça
3. **Changer d'adresse IP souvent** - Ça sent louche
4. **Négliger les plaintes** - Prends-les au sérieux
5. **Pas tester avant d'envoyer** - Rookie mistake

## Trucs de pro

### Le préchauffage d'IP

Nouvelle adresse IP ? Commence doucement :
- Jour 1: 50 courriels
- Jour 2: 100
- Jour 3: 500
- Double à chaque jour jusqu'à ton volume normal

### La segmentation intelligente

Envoie en priorité à:
- Tes plus engagés
- Les récents inscrits
- Ceux qui ont acheté récemment

Ça boost ta réputation.

### Le réengagement

Avant de supprimer les inactifs:
1. Campagne "On se manque?"
2. Offre exclusive
3. Dernière chance

Pas de réponse? Bye bye.

## Outils pour t'aider

- **Mail-tester.com** - Check ton spam score
- **MXToolbox** - Vérifie tes configurations
- **250ok** - Monitoring avancé
- **Litmus** - Preview dans différents clients

## Pour finir

La délivrabilité, c'est pas sexy, mais c'est vital. C'est comme l'entretien de ton char - tu peux l'ignorer un bout, mais un moment donné, tu vas le regretter.

Prends le temps de bien faire les choses. Configure ton authentification, garde ta liste propre, envoie du bon contenu. Les résultats vont suivre.

Pis souviens-toi: c'est mieux d'envoyer à 1000 personnes qui reçoivent vraiment tes courriels qu'à 10,000 dont la moitié finit dans les spams.

## Pour approfondir

- [Choisir la bonne adresse d'expéditeur](/fr-qc/best-practices/deliverability/choosing-the-right-sender-email-address)
- [Pourquoi utiliser ton propre domaine](/fr-qc/best-practices/deliverability/why-you-should-use-your-own-domain-for-sending)
- [Éviter les adresses noreply@](/fr-qc/best-practices/deliverability/avoiding-noreply-email-addresses)