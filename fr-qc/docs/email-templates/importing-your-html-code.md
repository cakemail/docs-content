---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4406228554523-Importing-your-HTML-code
---

# Importer ton code HTML

## Description

Si tu as du code HTML écrit en dehors de notre outil et que tu veux l'importer, tu peux le coller directement dans notre éditeur avec cette option. Ton courriel peut ensuite être modifié en utilisant l'éditeur HTML.

## Pourquoi c'est important

Tu peux designer ton propre modèle HTML et l'importer dans l'éditeur pour avoir plus d'options sur le look de tes courriels. Une fois que tu as importé un modèle personnalisé, tu peux le modifier et l'utiliser dans tes campagnes futures pour garder ce look familier que tu veux pour ta marque.

## Processus étape par étape :

<Stepper>

1. **Sélectionne l'option "Commencer avec ton propre code"** quand tu crées une nouvelle campagne.

1. **Colle ton code** dans la partie noire de la page.

1. **Clique sur "Télécharger et modifier"**
![](/images/email-templates/Paste_your_code.png)
</Stepper>

## Avantages de l'importation HTML

- **Contrôle total du design** : Utilise tes propres modèles HTML personnalisés
- **Cohérence de marque** : Garde un aspect familier dans toutes tes campagnes
- **Fonctionnalités avancées** : Inclus des CSS personnalisés et des éléments HTML avancés
- **Modèles professionnels** : Importe des modèles designés professionnellement
- **Réutilisabilité du code** : Sauvegarde et réutilise des modèles personnalisés pour tes futures campagnes

## Meilleures pratiques

- **Teste ton HTML** avant l'importation pour t'assurer que c'est compatible
- **Utilise du HTML propre et valide** pour de meilleurs résultats
- **Inclus des éléments de design réactif** pour la compatibilité mobile
- **Valide la compatibilité CSS** avec les clients de courriel
- **Garde des tailles de fichier raisonnables** pour un chargement plus rapide

## Après l'importation

Une fois ton HTML importé :
- Tu peux le modifier en utilisant l'éditeur HTML
- Apporte les modifications nécessaires
- Sauvegarde comme modèle pour un usage futur
- Teste sur différents clients de courriel

## Dépannage

**Mon HTML a l'air différent après l'importation**

- Check si ton CSS est en ligne - plusieurs clients de courriel ne supportent pas les feuilles de style externes
- Vérifie que tu n'utilises pas des fonctionnalités HTML5 ou CSS3 non supportées
- Enlève JavaScript car ce n'est pas supporté dans les courriels
- Teste avec un outil d'internalisation CSS avant l'importation

**Le bouton d'importation est désactivé ou ne fonctionne pas**

- Assure-toi que ton code HTML n'est pas vide
- Check les balises HTML non fermées qui pourraient briser l'analyseur
- Vérifie que le code ne dépasse pas les limites de taille (typiquement 100KB)
- Essaie d'enlever les caractères spéciaux ou l'encodage non standard

**Les images sont brisées après l'importation**

- Utilise des URLs absolues pour toutes les images (https://... pas /images/...)
- Assure-toi que le serveur d'hébergement d'images permet le hotlinking
- Vérifie que les URLs d'images ne nécessitent pas d'authentification
- Check que les images sont dans des formats compatibles web (JPG, PNG, GIF)

**Le design réactif ne fonctionne pas**

- Confirme que les requêtes média sont correctement formatées
- Vérifie si le client de courriel supporte les requêtes média
- Utilise des mises en page basées sur les tableaux comme solution de repli
- Teste sur de vrais appareils, pas seulement le mode réactif du navigateur

## Articles connexes

- [Utiliser le concepteur de courriel](/fr-qc/docs/campaign-creation/using-the-email-designer) - Mode d'édition HTML
- [Ajouter des liens d'ancrage](/fr-qc/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Techniques HTML
- [Sauvegarder une campagne comme modèle](/fr-qc/docs/email-templates/saving-campaigns-as-templates) - Sauvegarder des modèles HTML
- [Utiliser les modèles intelligents](/fr-qc/docs/email-templates/working-with-smart-templates) - Alternative au HTML
- [Tester ta campagne](/fr-qc/docs/campaign-creation/testing-your-campaign) - Tester le rendu HTML