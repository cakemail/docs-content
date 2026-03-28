---
source: >-
  https://support.cakemail.com/hc/en-us/articles/22433306396443-Customize-your-default-reseller-domain
---

# Personnaliser ton domaine revendeur par défaut

## Description

Suite aux nouvelles exigences annoncées par Gmail et Yahoo, qui entreront en vigueur en février, Cakemail a dû intégrer de nouvelles fonctionnalités pour assurer la livraison des courriels des clients qui n'ont pas encore procédé à l'authentification DMARC, incluant ceux envoyés avec une adresse d'expéditeur fournie par un service gratuit (ex. gmail.com).

## Pourquoi c'est important

Cakemail fournit à tes clients un domaine authentifié générique : cmtd1.com.
Mais si ton domaine revendeur est déjà authentifié, les courriels seront envoyés avec ce domaine. On t'encourage fortement à authentifier ton domaine. Ça va te permettre d'offrir un domaine d'envoi plus personnalisé à tes clients qui n'ont pas encore authentifié.

## Instructions étape par étape.

<Stepper>

1. Va au portail revendeur et clique sur l'onglet Next-gen App Toolset.
Tu peux aussi te connecter directement à https://app.wbsrvcx.com (utilise tes identifiants de compte partenaire).

1. Clique sur l'onglet Expéditeurs et domaines dans ton menu.

1. Tu auras un rapport sur le statut de validation de tes liens de retour et de rebond qui doivent maintenant être configurés.
Note : en raison des nouvelles exigences, un domaine qui était indiqué comme vérifié peut maintenant ne plus être vérifié parce que le nouveau processus de vérification est plus élaboré.
![](/images/partners/78e7d017-3ec6-40c9-85ae-e2056394b2b0.png)

1. Si ton lien est en jaune, ton domaine n'est pas complètement ou partiellement authentifié.
Clique sur Authentifier le domaine à droite pour afficher les codes à copier et coller sur ton serveur. Tu peux aussi cliquer pour télécharger les instructions et les envoyer par courriel à ton administrateur.

1. Une fois que tu as entré toutes les informations sur ton serveur, ton domaine devrait être identifié comme authentifié.
Ça peut prendre de quelques minutes à 24 heures. NOTE : la plupart des erreurs surviennent pendant l'étape de copier-coller. Évite d'ajouter des espaces et entre exactement ce qui est requis.
Les instructions pour valider les domaines pour tous les utilisateurs finaux de tes clients sont disponibles dans leurs comptes sous Expéditeurs.
</Stepper>

## Dépannage

**L'authentification du domaine continue d'échouer**

- Vérifie à nouveau les enregistrements DNS pour toute faute de frappe ou espace supplémentaire
- Assure-toi d'ajouter les enregistrements à la bonne zone DNS
- Attends 24-48 heures pour la propagation DNS avant de re-vérifier
- Utilise des outils de recherche DNS pour confirmer que les enregistrements sont correctement publiés

**Le domaine de retour ne fonctionne pas pour les clients**

- Vérifie que ton domaine revendeur est entièrement authentifié
- Check si les comptes clients sont correctement liés à ton compte revendeur
- Assure-toi que les paramètres de domaine de retour sont activés dans le portail revendeur
- Contacte le support si le domaine générique cmtd1.com est toujours utilisé

**Enregistrements DNS copiés mais affichés comme invalides**

- Supprime tout espace de fin ou saut de ligne lors de la copie
- Vérifie que les enregistrements TXT ne dépassent pas les limites de caractères
- Check si des guillemets sont nécessaires autour des valeurs d'enregistrement TXT
- Assure-toi que les enregistrements CNAME n'ont pas de points de fin sauf si requis

**Les clients éprouvent toujours des problèmes de livraison**

- Confirme que les enregistrements SPF et DKIM sont correctement configurés
- Vérifie si la politique DMARC est configurée correctement
- Examine si les adresses d'expéditeur des clients correspondent aux domaines authentifiés
- Surveille les rapports d'authentification pour des messages d'erreur spécifiques

## Articles connexes

- [Configurer et personnaliser les courriels système](/fr-qc/docs/partners/system-email-customization) - Courriels système de marque
- [Gérer les couleurs de ta marque](/fr-qc/docs/account-settings/configuring-your-brand) - Image de marque complète
- [Partager des modèles de courriel](/fr-qc/docs/partners/client-template-sharing) - Modèles de marque
- [Authentifier mon domaine](/fr-qc/docs/senders/authenticating-domains) - Configuration de domaine
- [Mettre à jour mon profil d'entreprise](/fr-qc/docs/account-settings/updating-my-company-profile) - Profil partenaire