---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360056294574-Authenticating-my-domain-with-SPF-DKIM-and-DMARC-protocols
---

# Authentifier tes domaines : la clé pour des courriels qui se rendent !

<iframe src="//player.vimeo.com/video/740494345" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Description

Oublie les jours d'envoi de courriels sans te soucier de savoir s'ils vont être livrés ! Le spam existe depuis aussi longtemps que le courriel lui-même, rendant difficile pour les destinataires de dire ce qui est réel. Et si les expéditeurs légitimes pouvaient se démarquer et s'assurer que leurs courriels atteignent la boîte de réception ? C'est là qu'intervient l'authentification des courriels.

C'est comme avoir un passeport valide quand tu traverses la frontière américaine à Saint-Armand - sans ça, tu passes pas !

C'est important de noter que certains fournisseurs comme Gmail et Yahoo exigent maintenant que les utilisateurs d'un domaine soient authentifiés pour être autorisés à envoyer vers leurs domaines. Dans cet article, on va te guider sur comment t'assurer que tes courriels atterrissent en sécurité là où ils appartiennent.

## Pourquoi c'est important

L'authentification empêche les spammeurs d'utiliser ton domaine pour envoyer des courriels sans ta permission en employant des protocoles comme SPF, DKIM et DMARC pour valider la légitimité de tes courriels et améliorer la fiabilité de livraison. C'est crucial de noter qu'envoyer depuis un domaine non authentifié, c'est connu pour causer des problèmes de livraison significatifs avec tous les fournisseurs de courriel, empêchant de nombreux destinataires de recevoir tes courriels dans leur boîte de réception.

Imagine si quelqu'un pouvait usurper l'identité de La Presse ou du Journal de Montréal pour envoyer de fausses nouvelles - l'authentification, c'est ta protection contre ça !

Si tu n'authentifies pas ton domaine, le message suivant va apparaître pour les récepteurs Gmail :

![Avertissement d'expéditeur non authentifié Gmail](/images/delivery-troubleshooting/delivery-troubleshooting-authenticating-my-domain-with-spf-dkim-and-dmarc-protocols-124.png)

## Instructions étape par étape

Pour faire ça, tu vas devoir accéder aux enregistrements DNS pour ton domaine avec son fournisseur d'hébergement et ajouter les paramètres DNS corrects. Tu peux suivre ce guide pour configurer l'authentification.

Pour découvrir où ton domaine est géré, contacte la personne ou l'équipe qui gère ton site web ou adresse courriel.

<Stepper>

1. Clique sur le nom de ton entreprise/adresse courriel dans le coin supérieur droit (ça ouvre un menu déroulant), puis clique sur Expéditeurs

1. Assure-toi d'avoir entré ton domaine d'expéditeur.
Il devrait apparaître dans une barre jaune, signifiant qu'il n'est PAS authentifié. Si tu n'as pas encore entré ton expéditeur, c'est le temps de le choisir et de l'entrer.

1. Clique sur Authentifier le domaine dans le menu.

1. Les instructions vont apparaître sur la page.
Tu peux aussi copier/coller les instructions pour les partager avec ton responsable informatique.

1. Toi, ou le responsable informatique, devez entrer le code dans les champs pertinents du serveur où ton domaine est hébergé.
C'est une opération délicate. Assure-toi que le code est **EXACTEMENT** celui qui est requis. Tout espace ou « . » ou changement non pertinent va le faire ne pas fonctionner.

1. Attends quelques heures pour le laisser se propager.
Parfois, ça prend jusqu'à 24 heures.

1. Reviens et vérifie ton code.
La barre devrait être bleue. Si elle est encore jaune, communique avec l'équipe de support avec une capture d'écran du serveur où tu as entré les entrées.
</Stepper>

## Plus d'infos sur SPF, DKIM et DMARC

### SPF (Sender Policy Framework)

Sender Policy Framework (SPF), c'est un standard d'authentification qui existe depuis 2003 et fonctionne en publiant une liste d'adresses IP qui sont autorisées à envoyer au nom de ton domaine. Les serveurs de messagerie récepteurs vont utiliser SPF pour vérifier que les messages envoyés depuis ton domaine ont été envoyés par une de ces adresses IP.

### DKIM (Domain Keys Identified Mail)

DKIM fournit un moyen de valider que le contenu du message n'a pas été altéré et qu'il a effectivement été envoyé par le domaine qu'il prétend être.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)

Le principal avantage de DMARC, c'est que c'est l'expéditeur qui contrôle ce qui arrive aux spams envoyés en utilisant leur domaine, pas le récepteur. Donc tu peux dire au récepteur de bloquer le courrier que tu n'as pas envoyé, et mieux encore, tu obtiens un rapport du courrier qui utilise ton domaine sans ta permission - donc DMARC est très puissant et c'est le standard d'excellence en usage aujourd'hui.

*C'est comme avoir ton propre service de sécurité à l'Île d'Orléans - tu décides qui peut utiliser ton nom et tu reçois un rapport si quelqu'un essaie de se faire passer pour toi !*

## Aperçus rapides

- [Clique ici pour un aperçu rapide de comment SPF fonctionne par DMARCIAN](https://dmarcian.com/spf-explained/)
- [Clique ici pour un aperçu rapide de comment DKIM fonctionne par DMARCIAN](https://dmarcian.com/dkim-explained/)
- [Clique ici pour un aperçu rapide de comment DMARC fonctionne par DMARCIAN](https://dmarcian.com/dmarc-explained/)

## Dépannage

**La validation d'enregistrement SPF échoue**

- Vérifie les enregistrements SPF dupliqués (seulement un enregistrement SPF par domaine autorisé)
- Assure-toi que l'enregistrement SPF commence avec « v=spf1 » et se termine avec « -all » ou « ~all »
- Check qu'il n'y a pas d'erreurs de syntaxe ou d'espaces supplémentaires dans l'enregistrement SPF
- Confirme que tu ne dépasses pas la limite de 10 recherches DNS
- Utilise des outils de validation SPF pour tester ta configuration

**La signature DKIM ne se vérifie pas**

- Assure-toi que l'enregistrement DKIM est publié sur le bon sous-domaine
- Vérifie les sauts de ligne ou espaces lors de la copie de la clé DKIM
- Check que le nom du sélecteur correspond à ce qui est configuré dans Cakemail
- Attends 24-48 heures pour la propagation DNS après avoir ajouté les enregistrements
- Teste avec des validateurs DKIM pour identifier des problèmes spécifiques

**La politique DMARC n'est pas reconnue**

- Confirme que l'enregistrement DMARC est ajouté à « _dmarc.tondomaine.com »
- Commence avec la politique p=none avant de passer à quarantine ou reject
- Assure-toi de la syntaxe appropriée : « v=DMARC1; p=none; rua=mailto:... »
- Vérifie que les adresses courriel dans l'enregistrement DMARC sont valides
- Utilise des analyseurs DMARC pour valider ta politique

**L'authentification passe mais les courriels vont encore aux spams**

- L'authentification est un facteur ; le contenu et la réputation comptent aussi
- Examine tes pratiques d'envoi et l'hygiène de liste
- Check si ton IP ou domaine est sur des listes noires
- Assure-toi de suivre les meilleures pratiques de courriel
- Surveille les rapports DMARC pour l'usage non autorisé de ton domaine

**Les changements DNS ne prennent pas effet**

- Donne jusqu'à 48 heures pour une propagation DNS complète
- Vide ton cache DNS ou utilise différents serveurs DNS pour tester
- Vérifie les changements avec plusieurs outils de recherche DNS
- Check si ton fournisseur DNS a des couches de mise en cache supplémentaires
- Assure-toi d'avoir sauvegardé les changements correctement dans ton panneau de gestion DNS

**Plusieurs domaines ont besoin d'authentification**

- Chaque domaine d'envoi nécessite sa propre configuration d'authentification
- Les sous-domaines peuvent nécessiter une configuration séparée selon la configuration
- Considère utiliser des énoncés include dans SPF pour plusieurs domaines
- Planifie les sélecteurs DKIM soigneusement pour les configurations multi-domaines
- Implémente DMARC graduellement à travers tous les domaines

## Articles connexes

- [Configurer et gérer les courriels d'expéditeur](/fr-qc/docs/senders/managing-senders) - Configurer les expéditeurs
- [Renforcer la délivrabilité](/fr-qc/docs/delivery-troubleshooting/sender-reputation) - Pourquoi authentifier
- [Maîtriser les bases de délivrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Guide de délivrabilité
- [Corriger les courriels allant au courrier indésirable](/fr-qc/docs/delivery-troubleshooting/spam-and-promotions-tab) - L'authentification aide
- [Comment bien commencer](/fr-qc/docs/first-steps) - Configuration initiale