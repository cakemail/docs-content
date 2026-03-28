---
source: "https://support.cakemail.com/hc/fr-ca/articles/360058100333-Sender-reputation"
---

# La réputation d'expéditeur de courriels : comment la construire et la maintenir

En tant qu'expéditeur, tu vas progressivement bâtir une réputation au fil de tes envois de messages. La combinaison du contenu, de la fréquence à laquelle les destinataires signalent tes courriels comme indésirables, des pièges à pourriel et de ton taux de rebond contribuent tous à cette réputation.

Une bonne réputation a un impact considérable sur l'efficacité de tes efforts marketing. Une mauvaise réputation fait exactement l'inverse et peut empêcher tes courriels d'atteindre ton audience.

## Cultive et entretiens ta réputation en :

- Maintenant une bonne hygiène des listes
- Envoyant du contenu de valeur
- Gardant ton audience captivée

## Plusieurs facteurs ont un impact sur la réputation d'un expéditeur :

### Géré par les expéditeurs

#### Réclamations

Il s'agit du taux de plaintes formelles, ou du nombre de destinataires marquant les messages comme pourriel. Éviter les plaintes repose sur l'envoi de contenu de qualité aux abonnés qui ont choisi de recevoir tes courriels.

#### Rebonds définitifs

Le taux de rebonds durs représente le pourcentage de courriels que tu envoies à des adresses expirées ou inactives. Cela peut être géré en maintenant une liste d'abonnés à jour et en s'assurant qu'il est facile pour les gens de se désabonner ou de modifier leurs informations lorsque leurs coordonnées ou leur situation changent.

#### Nombre de détections de piège anti-pourriel

Les pièges à pourriel sont des adresses courriel intentionnellement conçues pour identifier les spammeurs qui récoltent des adresses sur Internet et/ou les expéditeurs qui ont de mauvaises pratiques d'hygiène de liste ou d'opt-in. Pour éviter cela, assure-toi que ton processus d'opt-in est une liste à inscription avec confirmation qui oblige les personnes à confirmer leur adresse de courriel avant d'être ajoutées à ta liste et nettoie ta liste régulièrement.

#### Indice de pourriel

C'est l'élément de la livrabilité des courriels sur lequel les expéditeurs ont le plus de contrôle et pourtant c'est souvent le plus négligé. Ce qui importe plus que les mots qui pourraient déclencher les filtres anti-pourriel, c'est le mauvais contenu qui incite le destinataire à supprimer ton message, se désabonner des messages futurs, te bloquer complètement, ou pire encore, se plaindre à son FAI en signalant ton message comme pourriel.

#### Conformité de l'expéditeur

Ceci est mesuré par ton niveau de conformité aux exigences ci-dessus. Chaque point négatif affectera la gestion de tes futurs courriels. La façon dont chaque FAI gère cela peut être différente – certains ont des seuils plus élevés que d'autres, tu dois donc rester conforme dans tous les domaines afin d'éviter les problèmes.

### Géré par ton fournisseur de services de messagerie

#### Conformité technique

Mieux connu sous le nom de RFC (Request for Comments), qui est un ensemble de normes pour l'internet, tel que décidé par l'IETF (Internet Engineering Task Force). Au plus haut niveau, la conformité RFC est uniquement la responsabilité de ton Fournisseur de Services de Messagerie et sans elle, la plupart (sinon la totalité) de tes courriels ne passeront jamais la connexion initiale.

#### Authentification

Les spammeurs se faisant souvent passer pour des expéditeurs légitimes (prétendant que leurs courriels proviennent d'une vraie entreprise), les destinataires se tournent souvent vers l'authentification pour vérifier si l'expéditeur est vraiment celui qu'il prétend être. Ceci est particulièrement important lors de l'utilisation d'un fournisseur de services de courriel, car ils peuvent (ou non) être autorisés à envoyer des messages au nom de ton domaine. Il existe quatre protocoles principaux utilisés aujourd'hui (SPF/Sender ID, Domain Keys et DKIM), mais comme aucun de ces protocoles n'est dominant, toute plateforme de courriel réputée les mettra tous à disposition de leurs clients pour optimiser la livrabilité.

#### Accréditation

Certains expéditeurs obtiennent l'approbation d'organisations anti-pourriel et de fournisseurs de réputation tiers pour des certifications telles que Goodmail, SenderScore Certified de Return Path et la Safelist Habaes. Cela signifie qu'ils sont des expéditeurs pré-approuvés ou « en liste blanche » et les FAI qui utilisent ces services d'accréditation accorderont un traitement préférentiel à ces expéditeurs en permettant plus de courriels dans la boîte de réception et, très souvent, ils contourneront les formes plus heuristiques de filtrage du pourriel comme le filtrage de contenu, la limitation du débit ou la désactivation par défaut des liens/images.

#### Listes noires

Une liste noire est une liste utilisée par les réseaux de réception pour évaluer la réputation d'une adresse IP et/ou d'un domaine expéditeur. Ces listes sont gérées par des groupes anti-pourriel et la plupart des inscriptions sur liste noire résultent de l'envoi de courriels en masse non sollicités (UBE) à des adresses qui ne l'ont jamais demandé. Il existe plusieurs fournisseurs de listes noires et certains ont plus de poids dans la communauté que d'autres, il est donc très important de maintenir tes listes propres sinon tu auras des problèmes.

#### Listes blanches

À l'instar de l'accréditation où la réputation est acquise par le biais d'une source externe, plusieurs FAI maintiennent également leurs propres listes blanches internes. Elles sont composées d'adresses IP ou de domaines qui génèrent très peu de plaintes, de rebonds et qui ont un niveau élevé d'engagement avec leurs destinataires. Cela peut également se produire lorsqu'un destinataire ajoute ton adresse d'expédition à sa liste de contacts ou d'expéditeurs approuvés, ou lorsqu'il va dans son dossier Courrier indésirable pour indiquer au FAI que ton courriel n'est PAS du pourriel.

## Articles connexes

- [L'optimisation de la livrabilité des courriels : guide complet](/fr-qc/best-practices/deliverability/email-deliverability-optimization-complete-guide)
- [Comment éviter les pièges à pourriel et protéger ta réputation d'expéditeur](/fr-qc/best-practices/deliverability/how-to-avoid-spam-traps-and-protect-your-reputation)
- [L'hygiène des listes : maintenir une base de données de courriels saine](/fr-qc/best-practices/list-building/list-hygiene-maintaining-a-healthy-email-database)