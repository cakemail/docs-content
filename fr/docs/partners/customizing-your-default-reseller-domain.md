---
source: >-
  https://support.cakemail.com/hc/en-us/articles/22433306396443-Customize-your-default-reseller-domain
---

# Personnaliser votre domaine revendeur par défaut

## Description

Suite aux nouvelles exigences annoncées par Gmail et Yahoo, qui entreront en vigueur en février, Cakemail a dû intégrer de nouvelles fonctionnalités pour assurer la livraison des emails des clients qui n'ont pas encore procédé à l'authentification DMARC, incluant ceux envoyés avec une adresse d'expéditeur fournie par un service gratuit (ex. gmail.com).

## Pourquoi c'est important

Cakemail fournit à vos clients un domaine authentifié générique : cmtd1.com.
Mais si votre domaine revendeur est déjà authentifié, les emails seront envoyés avec ce domaine. Nous vous encourageons fortement à authentifier votre domaine. Cela vous permettra d'offrir un domaine d'envoi plus personnalisé à vos clients qui n'ont pas encore authentifié.

## Instructions étape par étape.

<Stepper>

1. Allez au portail revendeur et cliquez sur l'onglet Next-gen App Toolset.
Vous pouvez aussi vous connecter directement à https://app.wbsrvcx.com (utilisez vos identifiants de compte partenaire).

1. Cliquez sur l'onglet Expéditeurs et domaines dans votre menu.

1. Vous aurez un rapport sur le statut de validation de vos liens de retour et de rebond qui doivent maintenant être configurés.
Note : en raison des nouvelles exigences, un domaine qui était indiqué comme vérifié peut maintenant ne plus être vérifié parce que le nouveau processus de vérification est plus élaboré.
![](/images/partners/78e7d017-3ec6-40c9-85ae-e2056394b2b0.png)

1. Si votre lien est en jaune, votre domaine n'est pas complètement ou partiellement authentifié.
Cliquez sur Authentifier le domaine à droite pour afficher les codes à copier et coller sur votre serveur. Vous pouvez aussi cliquer pour télécharger les instructions et les envoyer par email à votre administrateur.

1. Une fois que vous avez entré toutes les informations sur votre serveur, votre domaine devrait être identifié comme authentifié.
Cela peut prendre de quelques minutes à 24 heures. NOTE : la plupart des erreurs surviennent pendant l'étape de copier-coller. Évitez d'ajouter des espaces et entrez exactement ce qui est requis.
Les instructions pour valider les domaines pour tous les utilisateurs finaux de vos clients sont disponibles dans leurs comptes sous Expéditeurs.
</Stepper>

## Dépannage

**L'authentification du domaine continue d'échouer**

- Vérifiez à nouveau les enregistrements DNS pour toute faute de frappe ou espace supplémentaire
- Assurez-vous d'ajouter les enregistrements à la bonne zone DNS
- Attendez 24-48 heures pour la propagation DNS avant de re-vérifier
- Utilisez des outils de recherche DNS pour confirmer que les enregistrements sont correctement publiés

**Le domaine de retour ne fonctionne pas pour les clients**

- Vérifiez que votre domaine revendeur est entièrement authentifié
- Vérifiez si les comptes clients sont correctement liés à votre compte revendeur
- Assurez-vous que les paramètres de domaine de retour sont activés dans le portail revendeur
- Contactez le support si le domaine générique cmtd1.com est toujours utilisé

**Enregistrements DNS copiés mais affichés comme invalides**

- Supprimez tout espace de fin ou saut de ligne lors de la copie
- Vérifiez que les enregistrements TXT ne dépassent pas les limites de caractères
- Vérifiez si des guillemets sont nécessaires autour des valeurs d'enregistrement TXT
- Assurez-vous que les enregistrements CNAME n'ont pas de points de fin sauf si requis

**Les clients éprouvent toujours des problèmes de livraison**

- Confirmez que les enregistrements SPF et DKIM sont correctement configurés
- Vérifiez si la politique DMARC est configurée correctement
- Examinez si les adresses d'expéditeur des clients correspondent aux domaines authentifiés
- Surveillez les rapports d'authentification pour des messages d'erreur spécifiques

## Articles connexes

- [Configurer et personnaliser les emails système](/fr/docs/partners/system-email-customization) - Emails système de marque
- [Gérer les couleurs de votre marque](/fr/docs/account-settings/configuring-your-brand) - Image de marque complète
- [Partager des modèles de email](/fr/docs/partners/client-template-sharing) - Modèles de marque
- [Authentifier mon domaine](/fr/docs/senders/authenticating-domains) - Configuration de domaine
- [Mettre à jour mon profil d'entreprise](/fr/docs/account-settings/updating-my-company-profile) - Profil partenaire