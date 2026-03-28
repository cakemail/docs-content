# Rebonds de courriel

## Description
Un rebond se produit lorsqu'une tentative de livraison de courriel échoue. Un rebond « temporaire » est une erreur temporaire qui ne retire pas le destinataire de la liste de diffusion, mais retarde la livraison à cette personne. Lorsqu'une adresse courriel ou un domaine a été déterminé comme étant inatteignable après une seule tentative, le message est considéré comme un « rebond définitif ».

## Pourquoi c'est important

Il existe plusieurs types de notifications de rebond différents tels que rebonds définitifs, rebonds temporaires, courriel bloqué, etc. Comprendre chacun de ces types vous aidera à identifier la meilleure façon de les traiter et à prendre le meilleur plan d'action pour la santé de vos listes.

### Types de rebonds et conséquences.

#### Rebond temporaire (bounce_sb)
Lorsqu'un message courriel atteint le serveur de messagerie du destinataire mais est retourné comme non livré, il est considéré comme un rebond temporaire. Dans certains cas, la boîte de réception du destinataire pourrait être pleine, donc il pourrait être livré plus tard. Trois tentatives de livraison résulteront en un rebond définitif.

#### Rebond transitoire (bounce_tr)
Souvent, le serveur de courriel de l'expéditeur génère un rebond transitoire, informant l'expéditeur que le message n'a pas été livré mais que le serveur essaie à nouveau ; cela continuera jusqu'à ce que deux jours se soient écoulés depuis l'envoi du message. Cependant, il n'y a généralement pas lieu de s'inquiéter des rebonds transitoires. Aussi, vous pourriez recevoir le message suivant : Avertissement : message encore non livré après 4 heures.

#### Changement d'adresse (bounce_ac)
Une réponse de Changement d'adresse indique que le destinataire a changé son adresse et notifie les expéditeurs du changement.

#### Réponse automatique (bounce_ar)
Le client de courriel du destinataire envoie généralement une réponse automatique (généralement sous la forme d'un avis d'absence du bureau). Ces réponses indiquent qu'un destinataire de courriel est temporairement indisponible, contrairement aux rebonds. Ces notifications sont utiles lors de l'envoi d'informations sensibles au temps, car elles vous alertent que le destinataire pourrait ne pas le voir avant plus tard. Sinon, elles peuvent être ignorées en toute sécurité.

#### Défi/Réponse (bounce_cr)
Une réponse Défi/Réponse est un message envoyé par un logiciel de filtrage spécial qui ne permet qu'aux messages d'expéditeurs connus d'être acceptés. Ce type de filtre envoie automatiquement une réponse avec un défi (une question ou action requise) à l'expéditeur du courriel. Le message ne sera pas livré si le défi n'est pas complété correctement.

#### Échec DNS (bounce_df)
Cela indique qu'un problème DNS a temporairement empêché la livraison de courriel à une adresse.

#### Rebond définitif (bounce_hb)
Un rebond définitif est un message courriel retourné à l'expéditeur en raison d'une adresse de destinataire invalide. Le nom de domaine pourrait ne pas exister ou le destinataire pourrait ne pas être connu, résultant en un rebond définitif.

#### Courriel bloqué (bounce_mb)
Cela indique que le serveur de courriel du destinataire bloque votre courriel. Vous pourriez voir les messages suivants :

– 550 Message REFUSÉ par le pair

– 552 Bloqué par les filtres.

#### Boîte de réception pleine (bounce_fm)
Une boîte de courriel de destinataire pleine empêche le serveur de courriel de livrer le message au destinataire.

#### Rebond aucun (bounce_none)
Un type de rebond hérité qui n'est plus en usage. Il était utilisé lorsque le rebond était inconnu.

## Dépannage

**Mon taux de rebonds définitifs a soudainement augmenté**

- Vérifiez si vous avez récemment importé une nouvelle liste qui n'était pas correctement validée
- Recherchez les fautes de frappe dans les adresses courriel saisies manuellement
- Vérifiez que votre liste n'a pas été compromise avec de fausses ou anciennes adresses
- Passez votre liste par un service de validation de courriel avant votre prochain envoi

**Les rebonds temporaires continuent de se produire pour les mêmes adresses**

- Surveillez si ces adresses se convertissent en rebonds définitifs après trois tentatives
- Vérifiez si des domaines spécifiques rebondissent temporairement de façon constante (peut indiquer un blocage)
- Considérez retirer les adresses qui rebondissent temporairement pour plus de 3-4 campagnes
- Vérifiez que le serveur de courriel du destinataire ne vous traite pas comme pourriel

**Je reçois fréquemment des rebonds « boîte de réception pleine »**

- Ces destinataires ont peut-être abandonné leurs comptes courriel
- Considérez envoyer une campagne de réengagement pour vérifier l'intérêt
- Retirez les adresses qui montrent constamment « boîte de réception pleine » pendant 30+ jours
- Surveillez si cela arrive plus avec certains fournisseurs de courriel (pourrait indiquer un blocage)

**Les rebonds Défi/Réponse empêchent la livraison**

- Complétez manuellement les défis seulement pour les destinataires de grande valeur
- Considérez des méthodes de communication alternatives pour ces contacts
- Ajoutez une note dans votre CRM concernant ces exigences spéciales
- Évaluez si maintenir ces contacts vaut l'effort manuel

## Articles connexes

- [Comprendre les plaintes, rebonds et désabonnements](/fr-ca/docs/analytics/email-bounces) - Métriques de rebond
- [Utiliser la liste de suppression](/fr-ca/docs/account-settings/suppression-lists) - Gérer les contacts qui rebondissent
- [Maîtriser les bases de la délivrabilité](/fr-ca/docs/delivery-troubleshooting/email-deliverability) - Réduire les rebonds
- [Comprendre le statut des contacts](/fr-ca/docs/audience/contact-status) - Statut de rebond
- [Importer des contacts](/fr-ca/docs/audience/importing-contacts-into-your-lists) - Imports de listes propres