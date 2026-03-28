---
source: "https://support.cakemail.com/hc/en-us/articles/360058233633-Complaints-bounces-and-unsubscribes"
---

# Rebonds de courriel

## Description
Les plaintes, rebonds et désabonnements indiquent tous la santé et la qualité globale de votre liste.
## Pourquoi c'est important
Ils sont une représentation directe de la satisfaction de vos destinataires à recevoir vos courriels et affectent votre réputation d'expéditeur.

Si vous envoyez régulièrement du contenu engageant à une liste de personnes qui attendent d'ouvrir votre courriel, ces chiffres devraient être de 0 (ou très proche). Chaque plainte ou rebond ferme que vous générez est une marque contre vous.

## Où trouver cette information
Vous trouverez cette information représentée comme totaux ou pourcentage dans le rapport de votre campagne, mais aussi à côté de chacun de vos contacts.

## Rebonds

**Un rebond "ferme" :** l'adresse n'existe plus (pire, peut-être qu'elle n'a jamais existé... Avez-vous envoyé un courriel de confirmation ?). Si pas adressé, ceux-ci peuvent avoir des conséquences dramatiques pour votre compte, allant parfois jusqu'à le faire suspendre. En conséquence, tous les rebonds fermes seront supprimés de la liste.

**Un rebond "doux" :** le courriel n'est actuellement pas disponible pour une raison "temporaire". **S'il y a 4 rebonds doux sur une seule adresse de courriel, l'adresse de courriel sera automatiquement supprimée de la liste.**

Vos rapports vous fourniront des informations très détaillées sur les rebonds de vos courriels, incluant plusieurs types différents de rebonds tels que : Boîte de réception pleine, courriel bloqué ou échec DNS.

### Formule du taux de rebond :
```
Total des rebonds / Nombre total de personnes à qui vous avez envoyé votre courriel
```

**Résultats attendus :** 0% – 1%

**Le taux de rebonds fermes devrait toujours être inférieur à 1%**

### Variables :
- Type d'industrie
- À quel point votre liste est-elle actuelle ?
- À quelle fréquence envoyez-vous à votre liste ? Plus souvent vous envoyez, plus bas le taux pour chaque campagne

## Désabonnements

```
Nombre total de désabonnements / Nombre total de personnes à qui le courriel a été envoyé
```

Vous pouvez vous attendre à un certain nombre de désabonnements chaque fois que vous envoyez une campagne. Le problème est un pic soudain. Comprenez qu'il est beaucoup mieux pour quelqu'un de se désabonner que de vous signaler comme pourriel. Cela a moins de conséquences pour votre réputation.

**Vous devriez vous attendre à un taux de désabonnement inférieur à 1%.**

## Plaintes de pourriel

```
Nombre total de plaintes / Nombre total de courriels envoyés aux fournisseurs de service Internet spécifiques
```

Dès que quelqu'un vous marque comme pourriel, il est définitivement supprimé de la liste.

**Résultats attendus :** 0% – 0,1%

Utilisez les meilleures pratiques pour éviter les plaintes et envoyez un test à vous-même (voyez où il atterrit) avant d'envoyer votre campagne. Ne devrait jamais dépasser 0,25% (1 sur 400 courriels envoyés).

Gardez à l'esprit que les FSI regardent ces chiffres aussi. Si vous avez constamment des niveaux de rebond/pourriel moyens à critiques, ce n'est qu'une question de temps avant que vos courriels soient envoyés dans le dossier pourriels d'un destinataire et/ou soient bloqués de façon permanente.

## Dépannage

**Taux de rebond ferme élevé (au-dessus de 1%)**

- Révisez immédiatement votre source de liste - les listes achetées ont souvent des taux de rebond élevés
- Implémentez le double opt-in pour vérifier les adresses de courriel lors de l'inscription
- Utilisez un service de validation de courriel pour nettoyer votre liste avant l'envoi
- Supprimez les abonnés inactifs qui n'ont pas engagé en 6-12 mois

**Pic soudain de plaintes de pourriel**

- Révisez les changements récents à votre contenu de courriel ou fréquence
- Assurez-vous que votre lien de désabonnement est clairement visible et fonctionne
- Vérifiez si vous suivez les pratiques appropriées de marketing basé sur les permissions
- Considérez des campagnes de ré-engagement avant d'augmenter la fréquence d'envoi

**Rebonds doux se convertissant en rebonds fermes**

- Surveillez les raisons des rebonds doux (boîte de réception pleine, problèmes de serveur, etc.)
- Essayez de renvoyer aux rebonds doux à différents moments de la journée
- Vérifiez si certains domaines rebondissent doucement de façon constante
- Révisez votre réputation d'envoi avec les FSI majeurs

**Lien de désabonnement ne fonctionne pas**

- Testez la balise de fusion [UNSUBSCRIBE] en mode aperçu
- Vérifiez que la page de désabonnement est accessible et fonctionne
- Vérifiez si les URL de désabonnement personnalisées sont correctement configurées
- Assurez-vous que le désabonnement en un clic est activé pour une meilleure expérience utilisateur

## Articles connexes

- [Utilisation de la liste de suppression](/fr-ca/docs/account-settings/suppression-lists) - Gérer les contacts désabonnés
- [Comprendre les courriels basés sur les rôles](/fr-ca/docs/delivery-troubleshooting/role-based-emails) - Éviter les déclencheurs de plaintes
- [Maîtriser les bases de la délivrabilité](/fr-ca/docs/delivery-troubleshooting/email-deliverability) - Améliorer la livraison des courriels
- [Gérer les rebonds de courriel](/fr-ca/docs/delivery-troubleshooting/email-bounces) - Gérer les problèmes de rebond
- [Inclure un lien de désabonnement](/fr-ca/docs/campaign-creation/adding-unsubscribe-links) - Exigences de conformité