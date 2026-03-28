---
source: >-
  https://support.cakemail.com/hc/fr/articles/6666175668763-Créer-une-automation-avec-des-conditions-de-branchement
---

# Créer une automation avec des conditions de branchement

<Callout type="info" title="Fonctionnalité Premium">
  Les conditions de branchement dans les automations sont disponibles exclusivement avec les forfaits Premium. Mettez à niveau votre forfait pour créer des parcours courriel sophistiqués basés sur le comportement.
</Callout>

## Description

En utilisant les conditions de branchement dans l'automation, vous pouvez sélectionner le contenu à envoyer aux contacts qui ont cliqué sur un lien dans un courriel par rapport aux contacts qui n'ont pas cliqué sur ce lien ou qui ont cliqué sur un autre. Cet article vous montrera comment configurer cette automation conditionnelle.

## Pourquoi c'est important
Vous pouvez rendre vos communications plus pertinentes pour vos utilisateurs en leur envoyant du contenu différent basé sur leurs actions. En retour, cela résultera en une meilleure expérience pour eux qui est plus adaptée à leurs besoins, et vous pouvez utiliser ceci pour améliorer votre flux d'automation.

## Instructions étape par étape

Voici les étapes que vous devrez suivre pour compléter cette automation :

<Stepper>

1. Cliquez sur Automations.

1. Cliquez sur le signe + en haut à droite de la page.

1. Dans le menu **Sélectionner un point de départ**, vous pouvez utiliser l'automation prédéfinie, créer un nouveau gabarit à partir de zéro, ou utiliser un que vous avez déjà enregistré
![Options de point de départ](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Choisissez la liste à laquelle cette automation devrait être liée
![Sélectionner la liste pour l'automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Choisissez un nom pour votre automation (ce nom n'apparaîtra que dans la plateforme)
![Nommez votre automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Vous pouvez sélectionner un objectif marketing dans la liste ci-dessous (afin que nous puissions faire de meilleures recommandations pour vous)
![Sélectionner l'objectif marketing](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Vous serez ensuite sur la page **Création de flux**
Il y a deux sous-divisions trouvées ici :
- Sélectionner une condition
- Sélectionner une action
</Stepper>

### Sélectionner une condition.

<Stepper>

1. Cliquez sur le signe **+** pour sélectionner la condition dans le flux d'automation
![Ajouter une condition au flux d'automation](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Sélectionnez l'option **Si / Sinon** pour configurer l'automation avec des conditions de branchement
![Sélectionner la condition de branchement Si/Sinon](/images/automations/C90C90CA-E6E4-43EF-BE6A-8185894D0ACD_4_5005_c.jpeg)
Selon les conditions, les contacts peuvent suivre un chemin différent dans le flux d'automation.
![Exemple de flux d'automation avec branchement](/images/automations/C0B004B3-584F-4282-8609-FB951B82493B.png)
Cliquez sur le bouton bascule en haut si vous êtes dans un flux, ou allez à la page Automations pour activer cette automation.
![Automation complète avec chemins de branchement](/images/automations/8BE1A670-0AE2-4891-B40E-1E7C23963F2F_4_5005_c.jpeg)
Vous avez maintenant complété votre automation ! Des statistiques seront recueillies pour chaque courriel dans votre flux, que vous pourrez utiliser pour l'optimiser. Visitez notre article sur l'automation pour un aperçu complet de l'outil.
</Stepper>

## Dépannage

**Les contacts ne suivent pas la branche attendue**

- Vérifiez que la logique de condition est configurée correctement (opérateurs ET vs OU)
- Assurez-vous que le suivi est activé pour les liens et les ouvertures
- Accordez suffisamment de temps pour l'engagement du courriel avant le branchement

**Les deux branches s'exécutent**

- Assurez-vous que les branches sont mutuellement exclusives
- Vérifiez la logique Si/Sinon pour les conditions qui se chevauchent
- Testez avec un seul contact pour tracer le chemin du flux

**Les conditions ne s'évaluent pas correctement**

- Confirmez que les champs de données existent et sont remplis pour les contacts
- Vérifiez les conditions de date/heure par rapport aux paramètres de fuseau horaire du contact
- Vérifiez que les valeurs d'attributs personnalisés correspondent au format attendu

**Problèmes de performance avec des branchements complexes**

- Limitez les branches imbriquées à 3-4 niveaux de profondeur
- Utilisez des conventions de nommage claires pour chaque branche
- Considérez diviser les automations complexes en plusieurs flux plus simples

## Articles connexes

- [Comprendre l'automation de courriel](/fr-ca/docs/automations/understanding-email-automation) - Fondamentaux de l'automation
- [Créer une automation en boucle](/fr-ca/docs/automations/creating-a-looping-automation) - Flux de travail répétitifs
- [Créer un segment](/fr-ca/docs/audience/creating-dynamic-segments) - Brancher par segments
- [Ajouter des attributs à votre liste](/fr-ca/docs/audience/adding-attributes-to-your-list) - Brancher par attributs
- [Déterminer le parcours client](/fr-ca/docs/automations/tracking-customer-journeys-with-custom-attributes) - Suivre les chemins de branchement