---
source: "https://support.cakemail.com/hc/fr-ca/articles/360056294614-Use-my-own-domain-in-the-sender-email-address-why"
---

# Pourquoi utiliser ton propre domaine pour envoyer

## Le défi

Envoyer tes infolettres avec un @yahoo.com ou @gmail.com via un ESP ? Mauvaise idée. Même si c'est vraiment ton courriel, Yahoo pis Google voient ça comme du spoofing. C'est leur domaine, pas le tien.

Tu penses que c'est plus simple, mais check ben: ça peut scrapper ta délivrabilité avec TOUS les providers. Tes courriels vont finir dans les spams ou disparaître complètement.

## Le problème d'authentification

Pas d'authentification = porte ouverte aux scammers. Sans SPF, DKIM pis DMARC, n'importe qui peut faker ton domaine. Les fournisseurs de courriel deviennent méfiants pis traitent tes messages comme du pourriel.

L'authentification, c'est ta preuve que t'es légitime. Sans ça, même tes meilleurs courriels peuvent pas se rendre.

## Pourquoi ton domaine améliore tout

Avec ton propre domaine authentifié:
- T'es reconnu comme expéditeur légitime
- Ta crédibilité monte en flèche
- Tes courriels se rendent dans l'inbox
- Tu bâtis ta propre réputation

C'est pas juste une question technique - c'est ta réputation d'affaires qui est en jeu.

## Best practices pour ton domaine

**Quand tu choisis ton domaine d'envoi :**

- **Match ton site web**: Le domaine doit être le même que là où le monde s'inscrit
- **Configure ton DNS**: SPF/DKIM obligatoires
- **Courriels de contact**: postmaster@ et abuse@ doivent marcher
- **WHOIS public**: Pas de registration privée
- **Longueur max**: 30 caractères
- **Âge minimum**: 30 jours (les nouveaux domaines = suspects)
- **Évite les tirets pis points inutiles**: info@this-courriel-is-from-our.marketing.department.abc.com = bad

## Setup technique

**Les 3 piliers de l'authentification :**

1. **SPF** - Dit qui peut envoyer pour ton domaine
2. **DKIM** - Signe tes courriels pour prouver qu'ils ont pas été modifiés
3. **DMARC** - Combine les deux pis dit quoi faire avec les fails

**Timeline typique :**
- Jour 1: Configure SPF
- Jour 2: Ajoute DKIM
- Jour 7: Active DMARC en monitoring
- Jour 30: Passe DMARC en enforcement

## Impact sur tes résultats

**Avec domaine générique :**
- 20-30% moins de délivrabilité
- Taux d'ouverture dans le plancher
- Risque constant de blacklist
- Zéro contrôle sur ta réputation

**Avec ton propre domaine :**
- 95%+ inbox placement
- Taux d'ouverture qui double
- Protection contre les spammers
- Tu build ta propre autorité

## Erreurs à éviter

1. **Utiliser un sous-domaine random**: newsletter.company.com c'est mieux que xyz123.company.com
2. **Changer de domaine souvent**: Stick avec un pis build sa réputation
3. **Pas monitorer**: Check tes rapports DMARC régulièrement
4. **Ignorer les bounces**: Ça affecte ta réputation de domaine

## Action steps

1. **Si t'as pas de domaine**: Achète-en un qui match ta business
2. **Si t'utilises Gmail/Yahoo**: Switch ASAP
3. **Configure l'authentification**: SPF → DKIM → DMARC
4. **Warm up**: Commence doucement pour bâtir ta réputation
5. **Monitor**: Track ta délivrabilité from day one

## Pour les nouveaux domaines

**Stratégie de préchauffage :**
- Semaine 1: 50 courriels/jour
- Semaine 2: 100 courriels/jour
- Semaine 3: 250 courriels/jour
- Semaine 4: 500 courriels/jour
- Mois 2: Double chaque semaine

**Focus sur :**
- Tes contacts les plus engagés first
- Contenu de haute qualité
- Monitoring serré des métriques

## Bottom line

Utiliser ton propre domaine, c'est pas optionnel en 2024. Gmail et Yahoo l'exigent, pis tes compétiteurs le font déjà. Chaque jour que tu attends, c'est des courriels dans les spams pis des ventes perdues.

## Articles connexes

- [Choisir la bonne adresse d'expéditeur](/fr-qc/best-practices/deliverability/choosing-the-right-sender-email-address)
- [Optimiser ta délivrabilité](/fr-qc/best-practices/deliverability/email-deliverability-optimization-complete-guide)
- [Éviter les adresses noreply@](/fr-qc/best-practices/deliverability/avoiding-noreply-email-addresses)