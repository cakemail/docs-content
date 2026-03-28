---
source: >-
  https://support.cakemail.com/hc/fr/articles/9323601859867-Créer-une-automation-en-boucle
---

# Créer une automation en boucle

<Callout type="info" title="Fonctionnalité Premium">
  Les automations en boucle sont disponibles exclusivement avec les forfaits Premium. Débloquez cette fonctionnalité pour créer des séquences de courriels répétitives puissantes qui maximisent l'engagement.
</Callout>

## Description

Une boucle vous permet de répéter une action plusieurs fois. Vous pouvez utiliser ceci à diverses fins, comme envoyer un courriel non ouvert trois fois au même client ou l'envoyer jusqu'à ce qu'il soit ouvert. De plus, vous pourriez envoyer des rappels concernant des événements à venir ou toute autre communication qui nécessite une livraison répétée. Enfin, les boucles peuvent également être combinées avec différentes conditions et actions pour les réitérer. Nous vous montrerons comment automatiser ceci avec notre application, qui peut être utilisée selon vos besoins.

## Pourquoi c'est important

Les automations en boucle sont essentielles pour maximiser les taux d'engagement et de conversion en atteignant de manière persistante les abonnés à des intervalles optimaux. Cette fonctionnalité vous permet de créer des séquences de suivi sophistiquées qui s'adaptent au comportement des abonnés, s'assurant que les messages importants ne sont pas manqués tout en respectant les préférences d'engagement. Cette persistance stratégique mène souvent à des taux de conversion plus élevés et une meilleure rétention des clients.

## Instructions étape par étape

<Stepper>

1. Cliquez sur Automations.

1. Cliquez sur le signe + en haut à droite de la page.
   - Vous pouvez également le créer à partir du bouton Créer
![886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg](/images/automations/886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg)

1. Dans le menu **Sélectionner un point de départ**, vous pouvez utiliser l'automation prédéfinie, créer un nouveau gabarit à partir de zéro, ou utiliser un que vous avez déjà enregistré
![D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choisissez la liste à laquelle cette automation devrait être liée
![Screen_Shot_2021-05-31_at_2.30.21_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choisissez un nom pour votre automation (ce nom n'apparaîtra que dans la plateforme)
![0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Vous pouvez sélectionner un objectif marketing dans la liste ci-dessous (afin que nous puissions faire de meilleures recommandations pour vous)
![Screen_Shot_2021-05-31_at_2.31.10_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Vous serez ensuite sur la page **Création de flux**. Cliquez sur le signe **+** pour créer une nouvelle étape et sélectionner la condition ou l'action dans le flux d'automation
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Pour cet exemple, nous créerons une action de courriel en boucle. Choisissez l'option **Envoyer un courriel** dans l'onglet Sélectionner une action
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/017E6AE4-F6F3-4E94-B79D-822E7C609FAE.png)

1. Modifiez le courriel à votre goût.

1. Cliquez sur le signe **+** pour créer une nouvelle étape après l'action Envoyer un courriel dans le flux d'automation
![Capture d'écran de l'action de boucle](/images/automations/D207D69D-7797-47A9-BD51-F1B2C41ACA50.png)

1. Dans l'onglet sélectionner une action, choisissez l'action **Boucle**
![Capture d'écran de l'action de boucle](/images/automations/83E82569-10A5-4BC8-9E94-085324249D9B.png)

1. Cliquez sur **Sélectionner un type d'événement** et choisissez **Envoyer un courriel**
![Capture d'écran de l'action de boucle](/images/automations/B2C3AF36-2847-46ED-AB7F-2A8B92077D22.png)

1. Sélectionnez le paramètre **Répétition de boucle**
Vous pouvez faire boucler le courriel continuellement ou un nombre spécifique de fois
![Capture d'écran de l'action de boucle](/images/automations/6E946072-2C90-42AB-B941-83B482059E10.png)

1. Dans le dernier paramètre de boucle, définissez le **délai entre chaque répétition**
![Capture d'écran de l'action de boucle](/images/automations/6B111329-2BE5-4BAB-AF63-EC873AE42031.png)

1. Cliquez sur **Réviser et activer** pour activer votre automation
![Capture d'écran de l'action de boucle](/images/automations/5ABCC781-FD80-4E3A-96BC-94AEBB839303.png)
Votre automation en boucle est maintenant activée ! Vous devriez la tester en vous abonnant à votre liste de contacts ou en ajoutant manuellement un contact à l'automation.
</Stepper>

## Dépannage

**L'automation ne se déclenche pas**

- Vérifiez que l'automation est activée (vérifiez le bouton bascule de statut)
- Assurez-vous que les contacts répondent aux conditions de déclenchement pour l'automation
- Vérifiez que la liste sélectionnée a des abonnés actifs

**Les courriels s'envoient trop fréquemment**

- Vérifiez le délai entre les répétitions dans les paramètres de boucle
- Considérez ajouter des conditions pour vérifier l'engagement avant d'envoyer
- Utilisez les conditions « ouvert » ou « cliqué » pour éviter de submerger les abonnés

**La boucle ne s'arrête pas**

- Vérifiez que le nombre de répétitions de boucle est défini correctement (pas « continu »)
- Ajoutez des conditions de sortie basées sur les actions des abonnés (ouvertures, clics, conversions)
- Vérifiez si des conditions conflictuelles empêchent la boucle de se terminer

**Problèmes de performance avec de grandes listes**

- Considérez segmenter votre liste en groupes plus petits
- Échelonnez les heures de début d'automation pour distribuer la charge du serveur
- Surveillez vos limites d'envoi et ajustez la fréquence de boucle en conséquence

## Articles connexes

- [Comprendre l'automation de courriel](/fr-ca/docs/automations/understanding-email-automation) - Bases de l'automation
- [Créer une automation avec des conditions de branchement](/fr-ca/docs/automations/creating-an-automation-with-branching-conditions) - Logique d'automation avancée
- [Créer un courriel de bienvenue automatisé](/fr-ca/docs/automations/creating-an-automated-welcome-email) - Exemple d'automation simple
- [Déterminer le parcours client](/fr-ca/docs/automations/tracking-customer-journeys-with-custom-attributes) - Suivre les progrès de l'automation
- [Créer un segment](/fr-ca/docs/audience/creating-dynamic-segments) - Cibler les destinataires d'automation