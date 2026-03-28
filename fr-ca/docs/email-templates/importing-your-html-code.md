---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4406228554523-Importing-your-HTML-code
---

# Importer votre code HTML

## Description

Si vous voulez importer du code HTML écrit en dehors de notre outil, vous pouvez le coller dans notre éditeur avec cette option. Le courriel peut être modifié en utilisant un éditeur HTML.

## Pourquoi c'est important

Vous pouvez concevoir votre propre gabarit HTML et l'importer dans l'éditeur pour vous donner plus d'options sur l'apparence de vos courriels. Une fois que vous avez importé un gabarit personnalisé, vous pouvez le modifier et l'utiliser dans les campagnes futures pour maintenir cet aspect familier que vous voulez pour votre marque.

## Processus étape par étape :

<Stepper>

1. **Sélectionnez l'option "Commencer avec votre propre code"** lors de la création d'une nouvelle campagne.

1. **Collez votre code** dans la partie noire de la page.

1. **Cliquez sur "Télécharger et modifier"**
![](/images/email-templates/Paste_your_code.png)
</Stepper>

## Avantages de l'importation HTML

- **Contrôle complet du design** : Utilisez vos propres gabarits HTML personnalisés
- **Cohérence de marque** : Maintenez un aspect familier dans toutes les campagnes
- **Fonctionnalités avancées** : Incluez des CSS personnalisés et des éléments HTML avancés
- **Gabarits professionnels** : Importez des gabarits conçus professionnellement
- **Réutilisabilité du code** : Sauvegardez et réutilisez des gabarits personnalisés pour les campagnes futures

## Meilleures pratiques

- **Testez votre HTML** avant l'importation pour assurer la compatibilité
- **Utilisez du HTML propre et valide** pour de meilleurs résultats
- **Incluez des éléments de design réactif** pour la compatibilité mobile
- **Validez la compatibilité CSS** avec les clients de courriel
- **Gardez des tailles de fichier raisonnables** pour un chargement plus rapide

## Après l'importation

Une fois votre HTML importé :
- Vous pouvez le modifier en utilisant l'éditeur HTML
- Apportez les modifications nécessaires
- Sauvegardez comme gabarit pour un usage futur
- Testez sur différents clients de courriel

## Dépannage

**Mon HTML semble différent après l'importation**

- Vérifiez si votre CSS est en ligne - de nombreux clients de courriel ne supportent pas les feuilles de style externes
- Vérifiez que vous n'utilisez pas des fonctionnalités HTML5 ou CSS3 non supportées
- Supprimez JavaScript car il n'est pas supporté dans les courriels
- Testez avec un outil d'internalisation CSS avant l'importation

**Le bouton d'importation est désactivé ou ne fonctionne pas**

- Assurez-vous que votre code HTML n'est pas vide
- Vérifiez les balises HTML non fermées qui pourraient casser l'analyseur
- Vérifiez que le code ne dépasse pas les limites de taille (typiquement 100KB)
- Essayez de supprimer les caractères spéciaux ou l'encodage non standard

**Les images sont cassées après l'importation**

- Utilisez des URLs absolues pour toutes les images (https://... pas /images/...)
- Assurez-vous que le serveur d'hébergement d'images permet le hotlinking
- Vérifiez que les URLs d'images ne nécessitent pas d'authentification
- Vérifiez que les images sont dans des formats compatibles web (JPG, PNG, GIF)

**Le design réactif ne fonctionne pas**

- Confirmez que les requêtes média sont correctement formatées
- Vérifiez si le client de courriel supporte les requêtes média
- Utilisez des mises en page basées sur les tableaux comme solution de repli
- Testez sur de vrais appareils, pas seulement le mode réactif du navigateur

## Articles connexes

- [Utiliser le concepteur de courriel](/fr-ca/docs/campaign-creation/using-the-email-designer) - Mode d'édition HTML
- [Ajouter des liens d'ancrage](/fr-ca/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Techniques HTML
- [Sauvegarder une campagne comme gabarit](/fr-ca/docs/email-templates/saving-campaigns-as-templates) - Sauvegarder des gabarits HTML
- [Utiliser les gabarits intelligents](/fr-ca/docs/email-templates/working-with-smart-templates) - Alternative au HTML
- [Tester votre campagne](/fr-ca/docs/campaign-creation/testing-your-campaign) - Tester le rendu HTML