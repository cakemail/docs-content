---
source: >-
  https://support.cakemail.com/hc/en-us/articles/1260806670909-Including-an-unsubscribe-link-into-a-campaign
---

# Ajouter des liens de désinscription

## Description

Tes campagnes devraient inclure un lien de désinscription, qui permet à tes destinataires d'arrêter de recevoir tes courriels. Évidemment, c'est pas dans ton intérêt, mais ça pourrait arriver, alors assure-toi de suivre la procédure appropriée sur la façon de gérer ces situations et rappelle-toi : envoyer des courriels à quelqu'un qui s'est désinscrit, c'est illégal et ça constitue du spam.

## Pourquoi c'est important

Il se peut que les destinataires décident qu'ils veulent plus recevoir de courriels de ta part - c'est correct, mais tu devrais leur donner l'option de se désinscrire, sinon ils pourraient marquer tes courriels comme spam. Tu peux toujours maintenir une bonne réputation quand les abonnés se retirent de ta liste à travers un lien de désinscription valide dans ton message, c'est pourquoi c'est préférable de l'inclure comme un lien de **« Désinscription instantanée »** qui nécessite qu'un seul clic pour que les destinataires se désinscrivent.

## Instructions étape par étape

Tu peux le faire soit dans le concepteur de courriel ou l'éditeur HTML. Deux options sont disponibles :

### Ajouter ton lien de désinscription avec le concepteur de courriel
Quand le système reconnaît pas le champ de fusion du lien de désinscription dans la campagne, il va l'ajouter automatiquement au bas. C'est préférable de surligner et d'ajouter `[UNSUBSCRIBE]` comme un hyperlien pour éviter ça.

<Stepper>

1. Sélectionne ta campagne.
![Surligner le texte de désinscription dans l'éditeur HTML](/images/campaign-creation/DD222A1A-C2FC-4946-97D9-77F6BB8BD302_4_5005_c.jpeg)

1. Va à l'éditeur.
![Sélectionner Campagne depuis le menu Créer](/images/campaign-creation/9D032549-76D6-42DB-8D33-48BF1A4A9B71_4_5005_c.jpeg)

1. Sélectionne ton texte de désinscription.
![Ajouter l'URL UNSUBSCRIBE dans la boîte de dialogue de lien](/images/campaign-creation/F6C73565-D275-4B35-8A26-D58AF41FA57A_4_5005_c.jpeg)

1. Sélectionne l'option Insérer un lien dans le menu de l'éditeur.
![Interface de l'éditeur de code HTML](/images/campaign-creation/D9B97767-9A59-40A7-B9E0-5A332A42E0F9_4_5005_c.jpeg)

1. Lie ton champ de désinscription à l'URL [UNSUBSCRIBE]
![Onglet Commencer à partir de zéro](/images/campaign-creation/AF9F3BF5-2D0E-4EA0-A4BF-BC26A44EE74D.png)

1. Alternativement, tu pourrais l'ajouter et le formater directement depuis la petite barre d'outils comme montré ici :
![Onglet Commencer à partir de zéro](/images/campaign-creation/GIF%20UNSUBSCRIBE.gif)
Sur la petite barre d'outils de texte, sélectionne Liens spéciaux > Abonnement > Désinscription
</Stepper>

### Ajouter ton lien de désinscription dans l'éditeur HTML 

En sélectionnant l'option commencer à partir de zéro, tu peux créer ton gabarit à partir de ton propre code HTML. Pour ajouter correctement le champ de désinscription avec cette option, suis ces étapes :

 
<Stepper>

1. Sélectionne Créer dans le menu du haut.
![Entrer UNSUBSCRIBE dans le champ URL](/images/campaign-creation/6208D820-32F4-4547-B8CA-5D9F75C2FE29_4_5005_c.jpeg)

1. Clique sur « Campagne » dans le nouveau menu qui apparaît.
![Menu de liens spéciaux montrant l'option de désinscription](/images/campaign-creation/7D56F11C-29E9-40E3-9D83-03F10FF6AC93_4_5005_c.jpeg)

1. Sélectionne l'onglet Commencer à partir de zéro.
![Sélectionner une campagne de la liste](/images/campaign-creation/2234E183-9EA0-4A50-BC6D-5759A1CB5159_4_5005_c.jpeg)

1. Clique sur Sélectionner sous l'option Commencer avec ton propre code.
![Surligner le texte de désinscription dans l'éditeur](/images/campaign-creation/37BA470F-8AD5-4FBF-A1A3-DC4257B920E8.png)

1. Colle/écris ton code sur la partie gauche de la page.

1. En haut à droite, clique sur Télécharger et modifier.
![Bouton Insérer un lien dans la barre d'outils](/images/campaign-creation/354BF584-D33E-4725-B566-F5CCE03BCEF2.png)

1. Surligne le champ Désinscription.
![Bouton Cliquer modifier le courriel](/images/campaign-creation/0982228B-E876-422A-97FE-32ABEB639811_4_5005_c.jpeg)

1. Lie ton champ de désinscription à l'URL [UNSUBSCRIBE] en utilisant l'option de lien dans le menu d'édition.
![Sélectionner l'option Commencer avec votre propre code](/images/campaign-creation/C2D6A986-9FA7-4012-997B-874A70DEE32F_4_5005_c.jpeg)
</Stepper>

## L'option est maintenant disponible

Tu vas éviter le désagrément de voir ton contenu marqué comme spam si ton destinataire décide d'arrêter de recevoir ton contenu. Comme toujours, notre équipe de support va être plus qu'heureuse de suggérer des façons d'améliorer tes pratiques et ton contenu si t'en as besoin.

## Dépannage

**Le lien de désinscription marche pas**

- Vérifie que la balise de fusion [UNSUBSCRIBE] est correctement formatée
- Teste le lien avant d'envoyer la campagne
- Assure-toi que la balise de fusion soit convertie en hyperlien

**La campagne s'envoie pas sans désinscription**

- Le système exige un lien de désinscription pour la conformité
- Vérifie le pied de page pour un lien de désinscription ajouté automatiquement
- Ajoute manuellement la balise [UNSUBSCRIBE] si elle manque

**Lien ajouté deux fois**

- Supprime le lien de désinscription manuel si le système en ajoute un automatiquement
- Vérifie à la fois le pré-en-tête et le pied de page pour les liens dupliqués
- Utilise le mode aperçu pour vérifier une seule instance

**Problèmes de formatage**

- Garde le lien de désinscription visible et facile à trouver
- Utilise des couleurs contrastantes pour la visibilité du lien
- Assure-toi d'une taille de police minimale de 10px pour la lisibilité

## Articles connexes

- [Ajouter ton adresse physique](/fr-qc/docs/campaign-creation/adding-your-physical-address) - Exigences légales
- [Utiliser la liste de suppression](/fr-qc/docs/account-settings/suppression-lists) - Gérer les désinscriptions
- [Comprendre les plaintes, rebonds et désinscriptions](/fr-qc/docs/analytics/email-bounces) - Métriques de désinscription
- [Configurer ton centre de préférences d'abonné](/fr-qc/docs/audience-building/subscriber-preference-center) - Préférences avancées
- [Créer des campagnes](/fr-qc/docs/campaign-creation/creating-campaigns) - Conformité des campagnes