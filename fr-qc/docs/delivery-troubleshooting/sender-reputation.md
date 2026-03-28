---
source: "https://support.cakemail.com/hc/en-us/articles/4473616161307-Using-a-private-email-address-domain"
---

# Réputation d'expéditeur

## Description

La partie d'une adresse courriel qui suit le symbole @ est connue comme le domaine. Les fournisseurs courriel les plus populaires pour les courriels personnels sont Gmail, Outlook, et Yahoo. Les organisations et marques, cependant, ont habituellement leurs propres domaines courriel dans un contexte commercial ou institutionnel.

## Pourquoi c'est important

Du point de vue de ton destinataire, la première impression que tu donnes avec une adresse courriel comme "@gmail.com" n'est pas précieuse pour ton organisation ou marque. De même, c'est difficile de reconnaître l'expéditeur du message d'un coup d'œil avec un courriel comme ça. De plus, tu ne peux pas prouver ton identité, ce qui rend difficile pour toi de bâtir la confiance avec ton audience.

**Exemple concret :** Si tu reçois un courriel de "info@gmail.com" vs "info@cirquedusoleil.com", lequel tu fais plus confiance ? Exactement ! C'est comme la différence entre quelqu'un qui sonne à ta porte en uniforme de Purolator vs quelqu'un en linge de tous les jours - tu sais tout de suite à qui tu as affaire.

Une adresse Gmail ou Outlook peut être créée par n'importe qui à n'importe quel moment. Donc, en essence, c'est clairement impratique pour un client potentiel de vérifier que tu es qui tu prétends être sans voir une adresse courriel qui prouve ton identité. Par exemple, si tu utilises une adresse courriel d'expéditeur qui finit en @yahoo.com pour envoyer une infolettre à travers un service de marketing courriel, Yahoo! considère que tu imites la compagnie, même si tu es le propriétaire légitime.

## Problèmes de livrabilité causés lors d'utilisation d'adresses courriel gratuites

Yahoo! et AOL ont demandé aux récepteurs de rejeter tout courriel qui n'est pas envoyé à travers leur propre client courriel ou par leurs employés, causant les courriels que tu envoies à rebondir. Similairement, d'autres adresses webmail gratuites pourraient rediriger les courriels qui ne sont pas envoyés de leurs employés vers les dossiers POURRIEL et Indésirable.

## Utiliser ton propre domaine d'adresse courriel privé

1. **Décide sur un domaine et enregistre-le**

Garde une identité cohérente avec tes destinataires en t'assurant qu'il se rapporte à ta marque et ton site web. Tu amélioreras ta livrabilité courriel en utilisant une adresse courriel avec un domaine que tu possèdes.

**Exemples québécois :**
- Restaurant : "bonjour@chezpauline.qc.ca"
- Comptable : "info@fiscalitelaval.com"
- Boutique : "aubaines@modemontrealaise.ca"

2. **Choisis le bon fournisseur de domaine lors de l'achat d'une adresse courriel de domaine**

Trouve celui qui est bon pour toi. Voici quelques conseils qui pourraient s'avérer utiles lors du choix d'où l'enregistrer :

- Tu devrais chercher un domaine avec un support client utile pour t'aider avec la configuration de ton domaine et adresse courriel
- Assure-toi qu'il inclut la confidentialité WHOIS pour que tes informations de contact soient sécurisées
- Assure-toi d'avoir le contrôle complet sur ton nom de domaine, au cas où tu souhaiterais changer de services

3. **Authentifie ton domaine**

Pour prouver qui tu es, assure-toi d'authentifier ton adresse courriel.

4. **Change ton domaine d'expéditeur**

Avec un domaine reconnaissable et authentifié qui t'appartient, tu peux maintenant changer en sécurité l'adresse courriel d'expéditeur pour les campagnes.

## Résolution de problèmes

**Je ne peux pas vérifier la propriété de mon domaine**

- Vérifie deux fois que tu as ajouté les enregistrements DNS exactement comme fourni (aucun espace ou caractère supplémentaire)
- Permets 24-48 heures pour la propagation DNS avant de réessayer la vérification
- Utilise des outils de recherche DNS pour confirmer que tes enregistrements sont visibles
- Contacte le support de ton registraire de domaine si les enregistrements ne se sauvegardent pas correctement

**Mes courriels rebondissent après avoir changé de Gmail à mon domaine**

- Assure-toi que les enregistrements SPF, DKIM, et DMARC sont correctement configurés
- Réchauffe ton nouveau domaine d'envoi graduellement avec de petits volumes (comme un moteur l'hiver, faut y aller doucement !)
- Vérifie que ton adresse "de" existe vraiment et peut recevoir des réponses
- Vérifie que ton domaine n'est pas tout neuf (moins de 30 jours) - les FSI font pas confiance aux nouveaux domaines

**L'authentification de domaine continue d'échouer**

- Confirme que tu ajoutes les enregistrements à la bonne zone DNS
- Vérifie les fautes de frappe dans les enregistrements d'authentification (c'est full important, pas de place pour les erreurs !)
- Assure-toi de ne pas avoir d'enregistrements SPF conflictuels
- Enlève tout enregistrement d'authentification ancien ou dupliqué

**Mon fournisseur de domaine ne supporte pas l'hébergement courriel**

- Utilise un service d'hébergement courriel séparé (Google Workspace, Microsoft 365, etc.)
- Configure la redirection courriel vers une autre adresse que tu contrôles
- Considère utiliser un sous-domaine spécifiquement pour le marketing courriel (genre "infolettre.tonbusiness.com")
- Assure-toi que les enregistrements MX sont correctement configurés pour ton hôte courriel - c'est malade comme technologie mais ça marche !

## Articles connexes

- [Authentifier mon domaine avec SPF DKIM et DMARC](/fr-qc/docs/senders/authenticating-domains) - Configuration complète
- [Configurer et gérer les courriels d'expéditeur](/fr-qc/docs/senders/managing-senders) - Configurer les expéditeurs
- [Maîtriser les bases de livrabilité](/fr-qc/docs/delivery-troubleshooting/email-deliverability) - Aperçu de livrabilité
- [Réparer les courriels qui vont aux indésirables](/fr-qc/docs/delivery-troubleshooting/spam-and-promotions-tab) - Améliorer la réputation
- [Premiers pas](/fr-qc/docs/first-steps) - Configuration initiale