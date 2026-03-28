---
source: >-
  https://support.cakemail.com/hc/en-us/articles/1260806670909-Including-an-unsubscribe-link-into-a-campaign
---

# Ajouter des liens de désinscription

## Description

Les campagnes devraient inclure un lien de désinscription, qui permet à vos destinataires d'arrêter de recevoir vos courriels. Évidemment, ce n'est pas dans votre intérêt, mais cela pourrait arriver, alors assurez-vous de suivre la procédure appropriée sur la façon de gérer ces situations et rappelez-vous : envoyer des courriels à quelqu'un qui s'est désinscrit est illégal et constitue du pourriel.

## Pourquoi c'est important

Il est possible que les destinataires décident qu'ils ne veulent plus recevoir de courriels de votre part - c'est correct, mais vous devriez leur donner l'option de se désinscrire, sinon ils pourraient marquer vos courriels comme pourriel. Vous pouvez toujours maintenir une bonne réputation quand les abonnés se retirent de votre liste à travers un lien de désinscription valide dans votre message, c'est pourquoi il est préférable de l'inclure comme un lien de **« Désinscription instantanée »** qui ne nécessite qu'un seul clic pour que les destinataires se désinscrivent.

## Instructions étape par étape

Vous pouvez le faire soit dans le concepteur de email ou l'éditeur HTML. Deux options sont disponibles :

### Ajouter votre lien de désabonnement avec le concepteur de email
Quand le système ne reconnaît pas le champ de fusion du lien de désabonnement dans la campagne, il l'ajoutera automatiquement au bas. Il est préférable de surligner et d'ajouter `[UNSUBSCRIBE]` comme un hyperlien pour éviter cela.

<Stepper>

1. Sélectionnez votre campagne.
![Surligner le texte de désabonnement dans l'éditeur HTML](/images/campaign-creation/DD222A1A-C2FC-4946-97D9-77F6BB8BD302_4_5005_c.jpeg)

1. Allez à l'éditeur.
![Sélectionner Campagne depuis le menu Créer](/images/campaign-creation/9D032549-76D6-42DB-8D33-48BF1A4A9B71_4_5005_c.jpeg)

1. Sélectionnez votre texte de désabonnement.
![Ajouter l'URL UNSUBSCRIBE dans la boîte de dialogue de lien](/images/campaign-creation/F6C73565-D275-4B35-8A26-D58AF41FA57A_4_5005_c.jpeg)

1. Sélectionnez l'option Insérer un lien dans le menu de l'éditeur.
![Interface de l'éditeur de code HTML](/images/campaign-creation/D9B97767-9A59-40A7-B9E0-5A332A42E0F9_4_5005_c.jpeg)

1. Liez votre champ de désabonnement à l'URL [UNSUBSCRIBE]
![Onglet Commencer à partir de zéro](/images/campaign-creation/AF9F3BF5-2D0E-4EA0-A4BF-BC26A44EE74D.png)

1. Alternativement, vous pourriez l'ajouter et le formater directement depuis la petite barre d'outils comme montré ici :
![Onglet Commencer à partir de zéro](/images/campaign-creation/GIF%20UNSUBSCRIBE.gif)
Sur la petite barre d'outils de texte, sélectionnez Liens spéciaux > Abonnement > Désabonnement
</Stepper>

### Ajouter votre lien de désabonnement dans l'éditeur HTML 

En sélectionnant l'option commencer à partir de zéro, vous pouvez créer votre modèle à partir de votre propre code HTML. Pour ajouter correctement le champ de désabonnement avec cette option, suivez ces étapes :

 
<Stepper>

1. Sélectionnez Créer dans le menu du haut.
![Entrer UNSUBSCRIBE dans le champ URL](/images/campaign-creation/6208D820-32F4-4547-B8CA-5D9F75C2FE29_4_5005_c.jpeg)

1. Cliquez sur « Campagne » dans le nouveau menu qui apparaît.
![Menu de liens spéciaux montrant l'option de désabonnement](/images/campaign-creation/7D56F11C-29E9-40E3-9D83-03F10FF6AC93_4_5005_c.jpeg)

1. Sélectionnez l'onglet Commencer à partir de zéro.
![Sélectionner une campagne de la liste](/images/campaign-creation/2234E183-9EA0-4A50-BC6D-5759A1CB5159_4_5005_c.jpeg)

1. Cliquez sur Sélectionner sous l'option Commencer avec votre propre code.
![Surligner le texte de désabonnement dans l'éditeur](/images/campaign-creation/37BA470F-8AD5-4FBF-A1A3-DC4257B920E8.png)

1. Collez/écrivez votre code sur la partie gauche de la page.

1. En haut à droite, cliquez sur Télécharger et modifier.
![Bouton Insérer un lien dans la barre d'outils](/images/campaign-creation/354BF584-D33E-4725-B566-F5CCE03BCEF2.png)

1. Surlignez le champ Désabonnement.
![Bouton Cliquer modifier le email](/images/campaign-creation/0982228B-E876-422A-97FE-32ABEB639811_4_5005_c.jpeg)

1. Liez votre champ de désabonnement à l'URL [UNSUBSCRIBE] en utilisant l'option de lien dans le menu d'édition.
![Sélectionner l'option Commencer avec votre propre code](/images/campaign-creation/C2D6A986-9FA7-4012-997B-874A70DEE32F_4_5005_c.jpeg)
</Stepper>

## L'option est maintenant disponible

Vous éviterez le désagrément de voir votre contenu marqué comme spam si votre destinataire décide d'arrêter de recevoir votre contenu. Comme toujours, notre équipe de support sera plus qu'heureuse de suggérer des façons d'améliorer vos pratiques et votre contenu si vous en avez besoin.

## Dépannage

**Le lien de désabonnement ne fonctionne pas**

- Vérifiez que la balise de fusion [UNSUBSCRIBE] est correctement formatée
- Testez le lien avant d'envoyer la campagne
- Assurez-vous que la balise de fusion soit convertie en hyperlien

**La campagne ne s'enverra pas sans désabonnement**

- Le système exige un lien de désabonnement pour la conformité
- Vérifiez le pied de page pour un lien de désabonnement ajouté automatiquement
- Ajoutez manuellement la balise [UNSUBSCRIBE] si elle manque

**Lien ajouté deux fois**

- Supprimez le lien de désabonnement manuel si le système en ajoute un automatiquement
- Vérifiez à la fois l'en-tête et le pied de page pour les liens dupliqués
- Utilisez le mode aperçu pour vérifier une seule instance

**Problèmes de formatage**

- Gardez le lien de désabonnement visible et facile à trouver
- Utilisez des couleurs contrastantes pour la visibilité du lien
- Assurez-vous d'une taille de police minimale de 10px pour la lisibilité

## Articles connexes

- [Ajouter votre adresse physique](/fr/docs/campaign-creation/adding-your-physical-address) - Exigences légales
- [Utiliser la liste de suppression](/fr/docs/account-settings/suppression-lists) - Gérer les désabonnements
- [Comprendre les plaintes, rebonds et désabonnements](/fr/docs/analytics/email-bounces) - Métriques de désabonnement
- [Configurer votre centre de préférences d'abonné](/fr/docs/audience-building/subscriber-preference-center) - Préférences avancées
- [Créer des campagnes](/fr/docs/campaign-creation/creating-campaigns) - Conformité des campagnes