---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360056294574-Authenticating-my-domain-with-SPF-DKIM-and-DMARC-protocols
---

# Authentifier les domaines

<iframe src="//player.vimeo.com/video/740494345" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Description

Oubliez les jours d'envoi de emails sans se soucier de savoir s'ils seront livrés. Le SPAM existe depuis aussi longtemps que le email lui-même, rendant difficile pour les destinataires de dire ce qui est réel. Et si les expéditeurs légitimes pouvaient se démarquer et s'assurer que leurs emails atteignent la boîte de réception ? C'est là qu'intervient l'authentification des emails.

Il est important de noter que certains fournisseurs comme Gmail et Yahoo exigent maintenant que les utilisateurs d'un domaine soient authentifiés pour être autorisés à envoyer vers leurs domaines. Dans cet article, nous vous guiderons sur comment vous assurer que vos emails atterrissent en sécurité là où ils appartiennent.

## Pourquoi c'est important

L'authentification empêche les spammeurs d'utiliser votre domaine pour envoyer des emails sans votre permission en employant des protocoles comme SPF, DKIM et DMARC pour valider la légitimité de vos emails et améliorer la fiabilité de livraison. Il est crucial de noter qu'envoyer depuis un domaine non authentifié est connu pour causer des problèmes de livraison significatifs avec tous les fournisseurs de email, empêchant de nombreux destinataires de recevoir vos emails dans leur boîte de réception.

Si vous n'authentifiez pas votre domaine, le message suivant apparaîtra pour les récepteurs Gmail :

![Avertissement d'expéditeur non authentifié Gmail](/images/delivery-troubleshooting/delivery-troubleshooting-authenticating-my-domain-with-spf-dkim-and-dmarc-protocols-124.png)

## Instructions étape par étape

Pour faire ceci, vous devrez accéder aux enregistrements DNS pour votre domaine avec son fournisseur d'hébergement et ajouter les paramètres DNS corrects. Vous pouvez suivre ce guide pour configurer l'authentification.

Pour découvrir où votre domaine est géré, contactez la personne ou l'équipe qui gère votre site web ou adresse email.

<Stepper>

1. Cliquez sur le nom de votre entreprise/adresse email dans le coin supérieur droit (ceci ouvre un menu déroulant), puis cliquez sur Expéditeurs

1. Assurez-vous d'avoir entré votre domaine d'expéditeur.
Il devrait apparaître dans une barre jaune, signifiant qu'il n'est PAS authentifié. Si vous n'avez pas encore entré votre expéditeur, il est temps de le choisir et de l'entrer.

1. Cliquez sur Authentifier le domaine dans le menu.

1. Les instructions apparaîtront sur la page.
Vous pouvez aussi copier/coller les instructions pour les partager avec votre responsable informatique.

1. Vous, ou le responsable informatique, devez entrer le code dans les champs pertinents du serveur où votre domaine est hébergé.
C'est une opération délicate. Assurez-vous que le code est **EXACTEMENT** celui qui est requis. Tout espace ou "." ou changement non pertinent le fera ne pas fonctionner.

1. Attendez quelques heures pour le laisser se propager.
Parfois, cela prend jusqu'à 24 heures.

1. Revenez et vérifiez votre code.
La barre devrait être bleue. Si elle est encore jaune, veuillez communiquer avec l'équipe de support avec une capture d'écran du serveur où vous avez entré les entrées.
</Stepper>

## Plus d'informations sur SPF, DKIM et DMARC

### SPF (Sender Policy Framework)

Sender Policy Framework (SPF) est un standard d'authentification qui existe depuis 2003 et fonctionne en publiant une liste d'adresses IP qui sont autorisées à envoyer au nom de votre domaine. Les serveurs de messagerie récepteurs utiliseront SPF pour vérifier que les messages envoyés depuis votre domaine ont été envoyés par une de ces adresses IP.

### DKIM (Domain Keys Identified Mail)

DKIM fournit un moyen de valider que le contenu du message n'a pas été altéré et qu'il a effectivement été envoyé par le domaine qu'il prétend être.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)

Le principal avantage de DMARC est que c'est l'expéditeur qui contrôle ce qui arrive au spam envoyé en utilisant leur domaine, pas le récepteur. Donc vous pouvez dire au récepteur de bloquer le courrier que vous n'avez pas envoyé, et mieux encore, vous obtenez un rapport du courrier qui utilise votre domaine sans votre permission - donc DMARC est très puissant et est le standard d'excellence en usage aujourd'hui.

## Aperçus rapides

- [Cliquez ici pour un aperçu rapide de comment SPF fonctionne par DMARCIAN](https://dmarcian.com/spf-explained/)
- [Cliquez ici pour un aperçu rapide de comment DKIM fonctionne par DMARCIAN](https://dmarcian.com/dkim-explained/)
- [Cliquez ici pour un aperçu rapide de comment DMARC fonctionne par DMARCIAN](https://dmarcian.com/dmarc-explained/)

## Dépannage

**La validation d'enregistrement SPF échoue**

- Vérifiez les enregistrements SPF dupliqués (seulement un enregistrement SPF par domaine autorisé)
- Assurez-vous que l'enregistrement SPF commence avec "v=spf1" et se termine avec "-all" ou "~all"
- Vérifiez qu'il n'y a pas d'erreurs de syntaxe ou d'espaces supplémentaires dans l'enregistrement SPF
- Confirmez que vous ne dépassez pas la limite de 10 recherches DNS
- Utilisez des outils de validation SPF pour tester votre configuration

**La signature DKIM ne se vérifie pas**

- Assurez-vous que l'enregistrement DKIM est publié sur le bon sous-domaine
- Vérifiez les sauts de ligne ou espaces lors de la copie de la clé DKIM
- Vérifiez que le nom du sélecteur correspond à ce qui est configuré dans Cakemail
- Attendez 24-48 heures pour la propagation DNS après avoir ajouté les enregistrements
- Testez avec des validateurs DKIM pour identifier des problèmes spécifiques

**La politique DMARC n'est pas reconnue**

- Confirmez que l'enregistrement DMARC est ajouté à "_dmarc.votredomaine.com"
- Commencez avec la politique p=none avant de passer à quarantine ou reject
- Assurez-vous de la syntaxe appropriée : "v=DMARC1; p=none; rua=mailto:..."
- Vérifiez que les adresses email dans l'enregistrement DMARC sont valides
- Utilisez des analyseurs DMARC pour valider votre politique

**L'authentification passe mais les emails vont encore au spam**

- L'authentification est un facteur ; le contenu et la réputation comptent aussi
- Examinez vos pratiques d'envoi et l'hygiène de liste
- Vérifiez si votre IP ou domaine est sur des listes noires
- Assurez-vous de suivre les meilleures pratiques de email
- Surveillez les rapports DMARC pour l'usage non autorisé de votre domaine

**Les changements DNS ne prennent pas effet**

- Accordez jusqu'à 48 heures pour une propagation DNS complète
- Videz votre cache DNS ou utilisez différents serveurs DNS pour tester
- Vérifiez les changements avec plusieurs outils de recherche DNS
- Vérifiez si votre fournisseur DNS a des couches de mise en cache supplémentaires
- Assurez-vous d'avoir sauvegardé les changements correctement dans votre panneau de gestion DNS

**Plusieurs domaines ont besoin d'authentification**

- Chaque domaine d'envoi nécessite sa propre configuration d'authentification
- Les sous-domaines peuvent nécessiter une configuration séparée selon la configuration
- Considérez utiliser des énoncés include dans SPF pour plusieurs domaines
- Planifiez les sélecteurs DKIM soigneusement pour les configurations multi-domaines
- Implémentez DMARC graduellement à travers tous les domaines

## Articles connexes

- [Configurer et gérer les emails d'expéditeur](/fr/docs/senders/managing-senders) - Configurer les expéditeurs
- [Renforcer la délivrabilité](/fr/docs/delivery-troubleshooting/email-sender-reputation-how-to-build-and) - Pourquoi authentifier
- [Maîtriser les bases de délivrabilité](/fr/docs/delivery-troubleshooting/email-deliverability) - Guide de délivrabilité
- [Corriger les emails allant au courrier indésirable](/fr/docs/delivery-troubleshooting/spam-and-promotions-tab) - L'authentification aide
- [Premiers pas](/fr/docs/first-steps) - Configuration initiale