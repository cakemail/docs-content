---
source: "https://support.cakemail.com/hc/en-us/articles/360058100213-Dedicated-sending-IP-address"
---

# Les adresses IP dédiées : quand et pourquoi en avoir besoin

## Description

Une adresse IP dédiée est attribuée exclusivement à un expéditeur. Par conséquent, ladite entreprise serait la seule marque à pouvoir envoyer depuis cette adresse IP. Ainsi, une adresse IP dédiée ne sera pas affectée par d'autres expéditeurs et ils auront le contrôle de leur réputation.

## En quoi c'est utile

Le principal avantage d'utiliser votre propre adresse IP (ou adresses) est que vous avez le contrôle de votre réputation et finalement de votre distribution. Les FAI ont tendance à accorder un traitement "préférentiel" si le courriel provenant d'une adresse IP est statique, que cette IP envoie depuis longtemps et qu'elle a une bonne réputation. S'ils voient plusieurs expéditeurs utiliser la même adresse IP, ils n'ont d'autre choix que d'examiner de plus près les courriels envoyés car l'expéditeur change constamment.

## Comment configurer votre adresse IP d'envoi dédiée

### Configuration IP dédiée

Pour qu'un client puisse bénéficier d'une adresse IP dédiée, certains critères doivent être remplis. Les IP dédiées peuvent ne pas convenir à tout le monde. Si l'expéditeur ne répond pas aux critères (ci-dessous), sa réputation sera mauvaise, il ne pourra probablement pas envoyer efficacement des courriels et sera probablement replacé dans le pool partagé.

### Exigences d'envoi

- Taux d'ouverture d'au moins 15 %
- Taux de rebond définitif ne dépassant pas 5 %
- Taux de pollupostage inférieur ou égal à 0,1%
- Taux de désabonnement ne dépassant pas 1 %

### Exigences de volume

- Un volume mensuel minimum de 30 000 courriels
- Un volume quotidien maximum de 1 000 000 courriels (par IP)
- Le client doit envoyer de manière régulière (au moins une fois par semaine)

### Coût

- Frais d'installation : 0 €
- 99 $ USD par IP / par mois

### Configuration

Un enregistrement A et MX devra être créé dans le DNS du domaine du client qui redirige vers l'IP (fournie par nous).

Nous nous occuperons de la configuration initiale, de la confirmation DNS, des tests, de la configuration FBL, du whitelisting, du warm-up IP et du throttling. Le processus de configuration prend au minimum 7 jours ouvrés et l'IP devra être préchauffée pendant une période d'environ 2 à 4 semaines avant de pouvoir envoyer à plein volume. La phase de warm-up peut être accélérée si le client envoie tous les jours et maintient une bonne réputation.

Si le client envoie régulièrement, respecte les bonnes pratiques et a un niveau d'engagement élevé avec un faible nombre de rebonds et de plaintes - leur livraison sera toujours meilleure sur leur propre IP et la période de préchauffage sera plus courte.

## Adresses IP dédiées : bonnes pratiques

L'envoi régulier, le respect des bonnes pratiques et un niveau élevé d'engagement avec un faible taux de rebond et de plaintes assureront une meilleure distribution sur votre propre IP.

## Articles connexes

- [La réputation d'expéditeur de courriels : comment la construire et la maintenir](/fr-ca/best-practices/advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Optimisation de la délivrabilité des courriels : guide complet](/fr-ca/best-practices/deliverability/email-deliverability-optimization-complete-guide)
- [Pourquoi vous devriez utiliser votre propre domaine pour l'envoi de courriels](/fr-ca/best-practices/deliverability/why-you-should-use-your-own-domain-for-sending)