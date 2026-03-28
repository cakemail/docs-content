---
source: "https://support.cakemail.com/hc/en-us/articles/360058233633-Complaints-bounces-and-unsubscribes"
---

# Rebonds de courriel : comprendre et gérer

## Description
Les plaintes, rebonds et désabonnements, ça te donne un portrait direct de la santé et de la qualité globale de ta liste.

## Pourquoi c'est important
C'est une représentation directe de la satisfaction de tes destinataires à recevoir tes courriels et ça affecte ta réputation d'expéditeur.

Si tu envoies régulièrement du contenu engageant à une liste de personnes qui ont hâte d'ouvrir ton courriel, ces chiffres devraient être de 0 (ou très proche). Chaque plainte ou rebond ferme que tu génères, c'est une marque contre toi.

## Où trouver cette info
Tu vas trouver cette information représentée comme totaux ou pourcentage dans le rapport de ta campagne, mais aussi à côté de chacun de tes contacts.

## Rebonds

**Un rebond "ferme" :** l'adresse n'existe plus (pire, peut-être qu'elle n'a jamais existé... As-tu envoyé un courriel de confirmation ?). Si c'est pas adressé, ça peut avoir des conséquences dramatiques pour ton compte, allant parfois jusqu'à le faire suspendre. En conséquence, tous les rebonds fermes vont être supprimés de la liste automatiquement.

**Un rebond "doux" :** le courriel n'est actuellement pas disponible pour une raison "temporaire". **S'il y a 4 rebonds doux sur une seule adresse de courriel, l'adresse de courriel va être automatiquement supprimée de la liste.**

Tes rapports vont te fournir des informations super détaillées sur les rebonds de tes courriels, incluant plusieurs types différents de rebonds comme : Boîte de réception pleine, courriel bloqué ou échec DNS.

### Formule du taux de rebond :
```
Total des rebonds / Nombre total de personnes à qui tu as envoyé ton courriel
```

**Résultats attendus :** 0% – 1%

**Le taux de rebonds fermes devrait toujours être inférieur à 1%**

### Variables qui affectent ton taux :
- Type d'industrie
- À quel point ta liste est-elle à jour ?
- À quelle fréquence tu envoies à ta liste ? Plus souvent tu envoies, plus bas le taux pour chaque campagne

## Désabonnements

```
Nombre total de désabonnements / Nombre total de personnes à qui le courriel a été envoyé
```

Tu peux t'attendre à un certain nombre de désabonnements chaque fois que tu envoies une campagne. Le problème, c'est un pic soudain. Comprends bien qu'il est beaucoup mieux pour quelqu'un de se désabonner que de te signaler comme spam. Ça a moins de conséquences pour ta réputation.

**Tu devrais t'attendre à un taux de désabonnement inférieur à 1%.**

## Plaintes de spam

```
Nombre total de plaintes / Nombre total de courriels envoyés aux fournisseurs de service Internet spécifiques
```

Dès que quelqu'un te marque comme spam, il est définitivement supprimé de la liste.

**Résultats attendus :** 0% – 0,1%

Utilise les meilleures pratiques pour éviter les plaintes et envoie un test à toi-même (regarde où il atterrit) avant d'envoyer ta campagne. Ça devrait jamais dépasser 0,25% (1 sur 400 courriels envoyés).

Garde en tête que les FSI regardent ces chiffres aussi. Si tu as constamment des niveaux de rebond/spam moyens à critiques, c'est juste une question de temps avant que tes courriels soient envoyés dans le dossier spam d'un destinataire et/ou soient bloqués de façon permanente.

## Dépannage

**Taux de rebond ferme élevé (au-dessus de 1%)**

- Révise immédiatement ta source de liste - les listes achetées ont souvent des taux de rebond élevés
- Implémente le double opt-in pour vérifier les adresses de courriel lors de l'inscription
- Utilise un service de validation de courriel pour nettoyer ta liste avant l'envoi
- Supprime les abonnés inactifs qui n'ont pas engagé en 6-12 mois

**Pic soudain de plaintes de spam**

- Révise les changements récents à ton contenu de courriel ou fréquence
- Assure-toi que ton lien de désabonnement est clairement visible et fonctionne
- Vérifie si tu suis les pratiques appropriées de marketing basé sur les permissions
- Considère des campagnes de ré-engagement avant d'augmenter la fréquence d'envoi

**Rebonds doux qui se convertissent en rebonds fermes**

- Surveille les raisons des rebonds doux (boîte de réception pleine, problèmes de serveur, etc.)
- Essaie de renvoyer aux rebonds doux à différents moments de la journée
- Vérifie si certains domaines rebondissent doucement de façon constante
- Révise ta réputation d'envoi avec les FSI majeurs

**Lien de désabonnement qui ne fonctionne pas**

- Teste la balise de fusion [UNSUBSCRIBE] en mode aperçu
- Vérifie que la page de désabonnement est accessible et fonctionne
- Check si les URL de désabonnement personnalisées sont correctement configurées
- Assure-toi que le désabonnement en un clic est activé pour une meilleure expérience utilisateur

## Articles connexes

- [Utilisation de la liste de suppression](/fr-qc/docs/account-settings/suppression-lists) - Gérer les contacts désabonnés
- [Comprendre les courriels basés sur les rôles](/fr-qc/docs/delivery-troubleshooting/role-based-emails) - Éviter les déclencheurs de plaintes
- [Maîtriser les bases de la délivrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Améliorer la livraison des courriels
- [Gérer les rebonds de courriel](/fr-qc/docs/delivery-troubleshooting/email-bounces) - Gérer les problèmes de rebond
- [Inclure un lien de désabonnement](/fr-qc/docs/campaign-creation/adding-unsubscribe-links) - Exigences de conformité