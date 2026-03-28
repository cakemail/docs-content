---
source: >-
  https://support.cakemail.com/hc/fr/articles/4405267001371-Créer-un-email-de-bienvenue-automatisé
---

# Créer un courriel de bienvenue automatisé

<iframe src="https://player.vimeo.com/video/739075809" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Description

Un courriel de confirmation ou de bienvenue est un message envoyé à une personne après qu'elle ait effectué une action spécifique, comme s'abonner à une liste de diffusion. Notre application vous permet d'automatiser cette action et de la personnaliser selon votre image de marque.

## Pourquoi c'est important

Vos courriels de bienvenue constitueront la première impression que vos abonnés auront de votre infolettre. C'est également un bon endroit pour saluer les clients et leur demander d'ajouter votre adresse courriel à leur liste d'expéditeurs sûrs. De plus, personnaliser votre courriel de confirmation aidera votre communication à paraître plus humaine.

## Instructions étape par étape

Vous pouvez automatiser votre courriel de confirmation, ce qui permettra un contact immédiat et fluide avec vos abonnés. Voici comment procéder :

<Stepper>

1. Cliquez sur Automations.

1. Cliquez sur le signe + en haut à droite de la page.
   - Vous pouvez également le créer à partir du bouton Créer

1. Sélectionnez une liste existante et cliquez sur **Continuer** pour connecter la nouvelle automation
![2712CFD6-BF46-436D-8A15-5D1BAB67B6BD_4_5005_c.jpeg](/images/automations/89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png)

1. Dans l'onglet **Automations prédéfinies**, sélectionnez le panneau **Accueillir les nouveaux contacts**. Vous serez ensuite dirigé vers la page de modification de l'automation
![Capture d'écran 1](/images/automations/2712CFD6-BF46-436D-8A15-5D1BAB67B6BD_4_5005_c.jpeg)

1. Spécifiez le délai pour l'action dans la condition de modification
![9850B35A-8AE0-4494-8A79-B119DB6065BC_4_5005_c.jpeg](/images/automations/Automation_Delay.gif)

1. Sélectionnez l'action **Envoyer un email** dans l'affichage du flux de travail

1. Cliquez sur **Modifier** pour personnaliser le email
![89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png](/images/automations/Automate%20Edit%20Email.gif)
![89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png](/images/automations/59EE30EF-6DA5-4A68-A351-104179BCE48D_4_5005_c.jpeg)

1. Utilisez le concepteur de email pour personnaliser votre email de confirmation. Trouvez une description de cet outil ici.

1. Lorsque vous avez terminé de modifier le email, cliquez sur **Enregistrer et quitter**
![Automate_Edit_Email.gif](/images/automations/9850B35A-8AE0-4494-8A79-B119DB6065BC_4_5005_c.jpeg)

1. Activez l'automation en sélectionnant le bouton en haut à droite image: Activation de l'automation
![Automation_Turn_On.gif](/images/automations/Automation_Turn_On.gif)
![Automation_Delay.gif](/images/automations/8BE1A670-0AE2-4891-B40E-1E7C23963F2F_4_5005_c.jpeg)

1. Sélectionnez **Enregistrer et quitter**
Un email avec votre message de bienvenue personnalisé sera envoyé automatiquement à votre nouveau destinataire chaque fois qu'il s'abonne à votre contenu après le délai déterminé.
</Stepper>

## Dépannage

**Le email de bienvenue ne s'envoie pas**

- Confirmez que l'automation est activée (le bouton bascule doit être sur ON)
- Vérifiez que le déclencheur est défini sur « Le contact s'abonne à la liste »
- Assurez-vous que les nouveaux contacts sont ajoutés à la bonne liste

**Le email va dans les pourriels**

- Incluez des instructions d'authentification dans votre email de bienvenue
- Demandez aux abonnés d'ajouter votre adresse d'expéditeur à leurs contacts
- Évitez les mots déclencheurs de pourriels dans les lignes d'objet et le contenu

**Problèmes de délai**

- Vérifiez les paramètres de délai dans le flux de travail de l'automation
- Définissez le délai à « immédiatement » pour les emails de bienvenue instantanés
- Considérez les fuseaux horaires si vous utilisez des délais programmés

**La personnalisation ne fonctionne pas**

- Assurez-vous que les balises de fusion sont correctement formatées (ex : `[prénom]`)
- Vérifiez que les données de l'abonné incluent les champs que vous essayez de personnaliser
- Testez avec un contact d'exemple qui possède tous les champs requis remplis

## Articles connexes

- [Comprendre l'automation de email](/fr/docs/automations/understanding-email-automation) - Bases de l'automation
- [Configurer un email de confirmation d'abonnement](/fr/docs/audience-building/subscription-confirmation-email) - Confirmation pré-bienvenue
- [Créer une automation en boucle](/fr/docs/automations/creating-a-looping-automation) - Automation avancée
- [Premiers pas](/fr/docs/first-steps) - Guide de démarrage