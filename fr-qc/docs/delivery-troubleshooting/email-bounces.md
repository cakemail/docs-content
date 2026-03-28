# Rebonds de courriel

## Description
Un rebond se produit quand une tentative de livraison de courriel échoue. Un rebond « temporaire », c'est une erreur temporaire qui retire pas le destinataire de la liste de diffusion, mais retarde la livraison à cette personne. Quand une adresse courriel ou un domaine a été déterminé comme étant inatteignable après une seule tentative, le message est considéré comme un « rebond définitif ».

## Pourquoi c'est important

Il existe plusieurs types de notifications de rebond différents tels que rebonds définitifs, rebonds temporaires, courriel bloqué, etc. Comprendre chacun de ces types va t'aider à identifier la meilleure façon de les traiter et à prendre le meilleur plan d'action pour la santé de tes listes.

### Types de rebonds et conséquences.

#### Rebond temporaire (bounce_sb)
Quand un message courriel atteint le serveur de messagerie du destinataire mais est retourné comme pas livré, il est considéré comme un rebond temporaire. Dans certains cas, la boîte de réception du destinataire pourrait être pleine, donc il pourrait être livré plus tard. Trois tentatives de livraison vont résulter en un rebond définitif.

#### Rebond transitoire (bounce_tr)
Souvent, le serveur de courriel de l'expéditeur génère un rebond transitoire, informant l'expéditeur que le message a pas été livré mais que le serveur essaie à nouveau ; ça va continuer jusqu'à ce que deux jours se soient écoulés depuis l'envoi du message. Cependant, il y a généralement pas lieu de s'inquiéter des rebonds transitoires. Aussi, tu pourrais recevoir le message suivant : Avertissement : message encore pas livré après 4 heures.

#### Changement d'adresse (bounce_ac)
Une réponse de Changement d'adresse indique que le destinataire a changé son adresse et notifie les expéditeurs du changement.

#### Réponse automatique (bounce_ar)
Le client de courriel du destinataire envoie généralement une réponse automatique (généralement sous la forme d'un avis d'absence du bureau). Ces réponses indiquent qu'un destinataire de courriel est temporairement indisponible, contrairement aux rebonds. Ces notifications sont utiles lors de l'envoi d'infos sensibles au temps, car elles t'alertent que le destinataire pourrait pas le voir avant plus tard. Sinon, elles peuvent être ignorées en toute sécurité.

#### Défi/Réponse (bounce_cr)
Une réponse Défi/Réponse, c'est un message envoyé par un logiciel de filtrage spécial qui permet qu'aux messages d'expéditeurs connus d'être acceptés. Ce type de filtre envoie automatiquement une réponse avec un défi (une question ou action requise) à l'expéditeur du courriel. Le message sera pas livré si le défi est pas complété correctement.

#### Échec DNS (bounce_df)
Ça indique qu'un problème DNS a temporairement empêché la livraison de courriel à une adresse.

#### Rebond définitif (bounce_hb)
Un rebond définitif, c'est un message courriel retourné à l'expéditeur en raison d'une adresse de destinataire invalide. Le nom de domaine pourrait pas exister ou le destinataire pourrait pas être connu, résultant en un rebond définitif.

#### Courriel bloqué (bounce_mb)
Ça indique que le serveur de courriel du destinataire bloque ton courriel. Tu pourrais voir les messages suivants :

– 550 Message REFUSÉ par le pair

– 552 Bloqué par les filtres.

#### Boîte de réception pleine (bounce_fm)
Une boîte de courriel de destinataire pleine empêche le serveur de courriel de livrer le message au destinataire.

#### Rebond aucun (bounce_none)
Un type de rebond hérité qui est plus en usage. Il était utilisé quand le rebond était inconnu.

## Dépannage

**Mon taux de rebonds définitifs a soudainement augmenté**

- Vérifie si tu as récemment importé une nouvelle liste qui était pas correctement validée
- Cherche les fautes de frappe dans les adresses courriel saisies manuellement
- Vérifie que ta liste a pas été compromise avec de fausses ou anciennes adresses
- Passe ta liste par un service de validation de courriel avant ton prochain envoi

**Les rebonds temporaires continuent de se produire pour les mêmes adresses**

- Surveille si ces adresses se convertissent en rebonds définitifs après trois tentatives
- Vérifie si des domaines spécifiques rebondissent temporairement de façon constante (peut indiquer un blocage)
- Pense à retirer les adresses qui rebondissent temporairement pour plus de 3-4 campagnes
- Vérifie que le serveur de courriel du destinataire te traite pas comme spam

**Je reçois fréquemment des rebonds « boîte de réception pleine »**

- Ces destinataires ont peut-être abandonné leurs comptes courriel
- Pense à envoyer une campagne de réengagement pour vérifier l'intérêt
- Retire les adresses qui montrent constamment « boîte de réception pleine » pendant 30+ jours
- Surveille si ça arrive plus avec certains fournisseurs de courriel (pourrait indiquer un blocage)

**Les rebonds Défi/Réponse empêchent la livraison**

- Complète manuellement les défis seulement pour les destinataires de grande valeur
- Pense à des méthodes de communication alternatives pour ces contacts
- Ajoute une note dans ton CRM concernant ces exigences spéciales
- Évalue si maintenir ces contacts vaut l'effort manuel

## Articles connexes

- [Comprendre les plaintes, rebonds et désabonnements](/fr-qc/docs/analytics/email-bounces) - Métriques de rebond
- [Utiliser la liste de suppression](/fr-qc/docs/account-settings/suppression-lists) - Gérer les contacts qui rebondissent
- [Maîtriser les bases de la délivrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Réduire les rebonds
- [Comprendre le statut des contacts](/fr-qc/docs/audience/contact-status) - Statut de rebond
- [Importer des contacts](/fr-qc/docs/audience/importing-contacts-into-your-lists) - Imports de listes propres