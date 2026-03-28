---
source: "https://support.cakemail.com/hc/fr-ca/articles/4411800007451-Optimizing-your-deliverability"
---

# Optimiser ta délivrabilité

## Le deal

La délivrabilité, c'est l'art de faire arriver tes courriels dans la boîte de réception. Pas dans les pourriels, pas dans les promotions - direct dans la boîte principale où ton monde va les voir. Notre job comme ESP, c'est de gérer la technique pour que toi tu puisses focuser sur l'important: créer du contenu hot pis bâtir des relations avec tes clients.

## Pourquoi c'est crucial

Les polluposteurs deviennent de plus en plus intelligents, faque les FAI, Gmail, Outlook pis tous les filtres anti-pourriel resserrent leurs règles. Améliorer ta réputation pis ta délivrabilité, c'est pas juste important - c'est vital pour ton business.

Personne peut te garantir 100% de délivrabilité (méfie-toi de ceux qui promettent ça), mais optimiser tes pratiques va clairement améliorer tes résultats, campagne après campagne.

## Comment booster ta délivrabilité

Quatre piliers à master:

### 1. L'authentification (super important)

SPF, DKIM, DMARC - ces acronymes bizarres sont tes meilleurs amis. C'est ta carte d'identité numérique qui prouve aux FAI que t'es légitime.

**Setup obligatoire :**
- **SPF**: Dit qui peut envoyer pour ton domaine
- **DKIM**: Signe tes courriels pour prouver qu'ils sont authentiques
- **DMARC**: Combine les deux pis dit quoi faire avec les fails

Mais attention: authentification ≠ permission d'envoyer. Tu peux être authentifié pis quand même envoyer du pourriel.

### 2. Ta réputation d'expéditeur

Ta réputation, c'est ta cote de crédit dans le monde du courriel. Basée sur ton IP pis ton domaine, elle peut monter comme descendre selon tes actions.

**Facteurs qui l'affectent :**
- Taux d'engagement (ouvertures, clics)
- Plaintes pourriel
- Hard bounces
- Consistance d'envoi
- Âge de ton domaine

**Comment la protéger :**
- Envoie juste à ceux qui veulent recevoir
- Garde tes listes propres
- Monitor tes métriques religieusement
- Warm up les nouveaux domaines/IPs

### 3. Gestion de tes listes

Tes listes, c'est ton fondation. Mal gérées = délivrabilité dans le tapis.

**Best practices :**
- **Double opt-in obligatoire**: Confirme chaque inscription
- **Nettoyage régulier**: Scrap les inactifs, bounces, plaintes
- **Segmentation intelligente**: Envoie du contenu pertinent
- **Hygiène constante**: Use les outils pour détecter les problèmes

Avec un bon gestionnaire de listes, les doublons, retours, désabonnements pis plaintes pourriel sont gérés automatiquement.

### 4. Ton contenu

Le contenu, c'est ce que ton monde voit en premier. Fais ça mal pis même la meilleure technique va pas te sauver.

**Règles d'or :**
- Balance texte/images (pas juste des images)
- Évite les mots triggers (GRATUIT!!!, URGENT!!!)
- Design responsive
- Appels à l'action clairs
- Valeur ajoutée réelle

## Stratégies par type d'envoi

### Courriels marketing en masse

**Plus difficile** parce que :
- Volume élevé
- Moins d'engagement naturel
- Plus scruté par les filtres

**Solutions :**
- Segmente comme un pro
- Teste tes subject lines
- Monitor engagement closely
- Ajuste fréquence selon réaction

### Courriels transactionnels

**Plus facile** parce que :
- Attendus par le client
- Engagement naturellement high
- Moins de volume

**Mais attention :**
- Garde-les séparés du marketing
- Use un domaine/IP dédié si possible
- Respect les attentes de timing

## Monitoring et métriques

**Surveille religieusement :**
- Inbox placement rate (vise 90%+)
- Spam folder rate (sous 10%)
- Bounce rate (sous 2%)
- Complaint rate (sous 0.1%)
- Engagement rates (ouvertures 20%+, clics 3%+)

**Outils essentiels :**
- Rapports ESP detaillés
- Google Postmaster Tools
- Microsoft SNDS
- Monitors délivrabilité tiers

## Red flags à éviter

1. **Listes achetées/louées**: Never, ever
2. **Envois sans permission**: Recipe for disaster
3. **Ignorer les unsubscribes**: Plaintes pourriel instantanées
4. **Subject lines clickbait**: "Tu vas pas croire ça!!!"
5. **Design tout en images**: Pas de texte = dossier pourriel
6. **Pas de préchauffage**: Nouveau domaine/IP = suspect

## Action plan

**Semaine 1 :**
- [ ] Configure SPF, DKIM, DMARC
- [ ] Audit tes listes actuelles
- [ ] Setup monitoring tools

**Semaine 2 :**
- [ ] Clean tes listes (bounces, inactifs)
- [ ] Segment par engagement
- [ ] Test tes templates actuels

**Semaine 3 :**
- [ ] Lance campagne test segmentée
- [ ] Monitor results closely
- [ ] Ajuste selon feedback

**En continu :**
- [ ] Review métriques weekly
- [ ] Clean listes monthly
- [ ] Test nouveau contenu constantly

## Pour finir

La délivrabilité, c'est pas de la magie - c'est de la science. Respecte les rules, monitor tes métriques, pis ajuste tes tactics selon les résultats. Les FAI récompensent ceux qui envoient du contenu de qualité à des gens qui veulent le recevoir.

## Articles connexes

- [Pourquoi utiliser ton propre domaine](/fr-qc/best-practices/deliverability/why-you-should-use-your-own-domain-for-sending)
- [Éviter les pièges à pourriel](/fr-qc/best-practices/deliverability/how-to-avoid-spam-traps-and-protect-your-reputation)
- [Comment réduire les plaintes de pourriel](/fr-qc/best-practices/deliverability/how-to-reduce-spam-complaints-prevention-strategies)
- [Choisir la bonne adresse d'expéditeur](/fr-qc/best-practices/deliverability/choosing-the-right-sender-email-address)