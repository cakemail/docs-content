---
source: "https://support.cakemail.com/hc/en-us/articles/360056250714-Feedback-loops"
---

# Boucles de rétroaction

**Extrait :** 2025-06-12

---

## Description

Une boucle de rétroaction est un flux de données établi par les fournisseurs de services Internet (FAI) qui transmet les plaintes provenant de leurs utilisateurs à l'expéditeur du message original. Ces données de plainte sont ensuite traitées par l'expéditeur afin qu'il puisse retirer et/ou désinscrire définitivement l'utilisateur de la ou des listes en question. Cela aide à éviter les plaintes futures, qui peuvent sérieusement affecter la livraison.

## Pourquoi c'est important

Les boucles de rétroaction donnent aux ESP (fournisseurs de services de courriel) la capacité de suivre combien de plaintes sont reçues pour un client donné (ou une campagne) afin qu'ils puissent prendre l'action appropriée.

Les gens qui génèrent beaucoup de plaintes peuvent causer de nombreux problèmes avec la livraison, surtout s'ils font partie d'un pool d'IP partagées utilisé par plusieurs clients.

## Seuil de taux de plainte

**En moyenne, un taux de plainte supérieur à 0,25 % (1 sur 400) à tout FAI donné pour un envoi donné, est considéré comme un problème.**

## Surveiller les boucles de rétroaction

Sous vos activités de contacts dans votre campagne livrée, vous pourrez filtrer les FBL par fournisseurs. Ceux-ci incluent :

### Principaux FAI avec boucles de rétroaction :
- **Microsoft**
- **Comcast** 
- **Hotmail**
- **Yahoo!**
- **AOL**
- **Gmail**
- **Google Apps**
- **Verizon**
- **Office 365**

### Fournisseurs internationaux :
- **LaPoste**
- **Yahoo! UK**
- **Mail.ru**
- **Terra Brasil**
- **Seznam.cz**
- **Yahoo! HK**
- **Libero.it**
- **Yandex**
- **Ziggo**
- **Free.fr**
- **Globo**
- **Yahoo! TW**
- **Videotron**

### Autres fournisseurs :
- **Rackspace**
- **United Online**
- **Rogers**
- **Hover**
- **FastMail**
- **Tucows (OpenSRS)**
- **BOL**
- **Earthlink**
- **Cox**
- **ItaliaOnLine**
- **WindStream**
- **BlueTie**
- **USA.net**
- **BigPond**
- **RCN**
- **WOW!**
- **Cincinnati Bell**
- **Cable ONE**
- **Virgin**
- **Synacor**
- **Pourriel Experts**
- **EdgeWave**
- **McAfee**
- **GoDaddy**
- **Barracuda**
- **Symantec**
- **ATT**

## Meilleures pratiques

- **Surveillez les taux de plainte** régulièrement sur tous les FAI
- **Gardez les taux de plainte sous 0,25 %** (1 sur 400 courriels)
- **Retirez automatiquement les plaignants** des futurs envois
- **Analysez les modèles de plainte** pour identifier les problèmes de contenu ou de timing
- **Maintenez l'hygiène de liste** pour prévenir les taux élevés de plainte
- **Utilisez le double abonnement** pour assurer que les abonnés veulent vos courriels

## Impact sur la délivrabilité

Des taux élevés de plainte peuvent résulter en :
- **Courriels bloqués** au niveau des FAI
- **Placement réduit en boîte de réception** 
- **Dommage à la réputation d'IP partagée** affectant les autres utilisateurs
- **Suspension de compte** dans les cas graves
- **Mise sur liste noire permanente** des principaux FAI

## Dépannage

**Mon taux de plainte a soudainement augmenté**

- Révisez le contenu de la campagne qui a déclenché les plaintes
- Vérifiez si vous avez changé votre style de ligne d'objet ou nom d'expéditeur
- Vérifiez que vous n'avez pas accidentellement inclus des contacts non engagés ou anciens
- Analysez si l'augmentation provient d'un FAI spécifique ou de tous les fournisseurs

**Je ne peux pas voir les données FBL pour certains fournisseurs**

- Tous les FAI ne participent pas aux boucles de rétroaction (certains utilisent d'autres méthodes)
- Gmail utilise son propre système de rapport via Google Postmaster Tools
- Certains fournisseurs ne rapportent qu'aux ESP, pas aux expéditeurs individuels
- Vérifiez si le fournisseur nécessite un enregistrement FBL séparé

**Le taux de plainte est élevé mais le contenu semble correct**

- Vérifiez que les abonnés se souviennent d'avoir consenti (utilisez le double abonnement)
- Vérifiez si votre fréquence d'envoi a augmenté récemment
- Révisez si les attentes établies lors de l'inscription correspondent à votre contenu
- Considérez envoyer une campagne de réengagement pour confirmer l'intérêt

**Comment réduire les futurs taux de plainte**

- Rendez les liens de désinscription proéminents et faciles à utiliser
- Établissez des attentes claires pendant le processus d'inscription
- Segmentez votre liste pour envoyer du contenu plus pertinent
- Surveillez l'engagement et retirez régulièrement les abonnés inactifs

## Articles connexes

- [Comprendre les plaintes, rebonds et désinscriptions](/fr-ca/docs/analytics/email-bounces) - Gestion des plaintes
- [Mise sur liste noire de mon domaine](/fr-ca/docs/delivery-troubleshooting/domain-blacklisting) - FBL prévient la mise sur liste noire
- [Maîtriser les bases de la délivrabilité](/fr-ca/docs/delivery-troubleshooting/email-deliverability) - Importance des FBL
- [Utiliser la liste de suppression](/fr-ca/docs/account-settings/suppression-lists) - Suppressions FBL
- [Inclure un lien de désinscription](/fr-ca/docs/campaign-creation/adding-unsubscribe-links) - Réduire les plaintes