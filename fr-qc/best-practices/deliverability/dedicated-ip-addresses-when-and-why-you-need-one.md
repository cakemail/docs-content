---
source: "https://support.cakemail.com/hc/fr-ca/articles/360058100213-Dedicated-sending-IP-address"
---

# Les adresses IP dédiées : quand et pourquoi t'en as besoin

## Le défi

Une adresse IP dédiée, c'est une adresse juste pour toi. Ta compagnie est la seule qui peut envoyer depuis cette IP. Comme ça, les autres expéditeurs peuvent pas scrapper ta réputation - tu contrôles tout.

## L'impact

Le gros avantage d'avoir ta propre IP:
- Tu contrôles ta réputation
- Tu contrôles ta délivrabilité
- Les FAI te font plus confiance

Les FAI aiment mieux les IPs qui:
- Sont statiques (changent pas)
- Envoient depuis longtemps
- Ont une bonne réputation

Quand plusieurs expéditeurs partagent une IP, les FAI doivent checker chaque courriel plus attentivement parce que l'expéditeur change tout le temps.

## La solution

### Est-ce qu'une IP dédiée est pour toi?

**Attention !** Une IP dédiée, c'est pas pour tout le monde. Si tu respectes pas les critères, ta réputation va être pire pis tu vas retourner sur le pool partagé.

### Les exigences d'envoi

Faut que t'aies:
- Taux d'ouverture d'au moins 15%
- Hard bounces max 5%
- Plaintes pourriel max 0.1%
- Désabonnements max 1%

### Les exigences de volume

Faut que tu:
- Envoies minimum 30,000 courriels par mois
- Dépasses pas 1 million par jour (par IP)
- Envoies régulièrement (au moins 1 fois par semaine)

### Combien ça coûte

- Setup: Gratuit
- 99$ USD par IP par mois

### Comment ça marche

**Ce que tu dois faire :**
- Créer un enregistrement A et MX dans ton DNS
- Pointer vers l'IP qu'on te donne

**Ce qu'on fait pour toi :**
- Configuration initiale
- Vérification DNS
- Tests complets
- Setup des feedback loops
- Whitelisting
- Warm-up de l'IP
- Throttling

**Timeline :**
- Setup: minimum 7 jours ouvrables
- Warm-up: 2-4 semaines avant le plein volume
- Plus vite si t'envoies chaque jour avec une bonne réputation

## Les résultats

Avec une IP dédiée bien gérée:
- **Contrôle total** - Ta réputation dépend juste de toi
- **Meilleure délivrabilité** - Les FAI te font plus confiance
- **Priorité d'envoi** - Tes courriels passent mieux
- **Diagnostics clairs** - Tu vois exactement tes problèmes
- **Flexibilité accrue** - Tu gères ton volume comme tu veux

## Checklist pour une IP dédiée

**Avant de demander une IP :**
- [ ] Vérifie que tu respectes tous les critères
- [ ] Confirme ton volume mensuel
- [ ] Planifie des envois réguliers
- [ ] Prépare ton DNS

**Pour maintenir ta réputation :**
- [ ] Envoie régulièrement
- [ ] Garde tes stats clean
- [ ] Respecte les bonnes pratiques
- [ ] Surveille tes métriques

## Articles connexes

- [Optimisation de la délivrabilité : guide complet](/fr-qc/best-practices/deliverability/email-deliverability-optimization-complete-guide)
- [Pourquoi utiliser ton propre domaine pour l'envoi](/fr-qc/best-practices/deliverability/why-you-should-use-your-own-domain-for-sending)
- [Comment réduire les plaintes de pourriel](/fr-qc/best-practices/deliverability/how-to-reduce-spam-complaints-prevention-strategies)