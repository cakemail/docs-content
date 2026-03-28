# Informations sur la sécurité

**Source:** [Support Cakemail](https://support.cakemail.com/hc/en-us/articles/360056359394-Information-on-security)  
**Auteur :** Alessandro De Civita
**Dernière mise à jour :** il y a 4 ans

## Informations sur la sécurité

Nous prenons la sécurité très au sérieux. En fait, c'est la considération la plus importante dans tout ce que nous faisons. Nous avons décidé d'utiliser Stripe comme fournisseur de traitement des paiements. Nous ne stockons aucune information de carte de crédit - Stripe s'en charge. Stripe a été audité par un auditeur certifié PCI et est certifié PCI Service Provider Level 1. C'est le niveau de certification le plus strict disponible.

## Comment Stripe stocke-t-il les numéros de carte bancaire ?

Tous les numéros de carte sont chiffrés sur le disque avec AES-256. Les clés de déchiffrement sont stockées sur des machines distinctes. Aucun des serveurs et démons internes de Stripe ne peut obtenir les numéros de carte en clair ; ils peuvent seulement demander que les cartes soient envoyées à un fournisseur de services sur une liste blanche statique. L'infrastructure de Stripe pour stocker, déchiffrer et transmettre les numéros de carte fonctionne dans un centre de données distinct et ne partage aucune information d'identification avec les services principaux de Stripe (API, site web, etc.).

## Vous avez une préoccupation ? Besoin de signaler un incident ?

Contactez l'équipe d'assistance si vous avez remarqué un abus, une mauvaise utilisation ou si vous avez subi un incident sur votre compte.

## Articles connexes

- Gestion de votre facturation
- Bienvenue sur la nouvelle page de statut
- Conformité CAN-SPAM
- Comprendre et configurer des adresses email privées d'expéditeur
- Configuration de votre fuseau horaire

---

*Ce contenu a été extrait de la documentation d'aide de Cakemail et formaté à des fins de référence.*