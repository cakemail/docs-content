---
source: "https://support.cakemail.com/hc/en-us/articles/360058152913-Understanding-image-display-in-emails"
---

# Problèmes d'affichage d'images

## Description

Dans le paysage actuel du marketing par email, les images visuelles sont fondamentales pour attirer l'attention de votre destinataire. Dans cet article, nous vous montrerons :
- Comment choisir le bon format d'image pour vos campagnes
- Pourquoi les images peuvent ne pas s'afficher, et comment détecter la source de ce problème

## Pourquoi c'est important

La plupart des destinataires ne parcourent les emails que pendant quelques secondes, donc s'ils ne voient que des paragraphes après paragraphes de contenu, ils pourraient simplement l'ignorer. À cause de cela, il est important de comprendre ce qui peut causer le non-affichage de vos images dans votre email.

Du côté plus technique des choses, spécifiquement pour vos statistiques, les ouvertures sont calculées quand les images sont affichées, donc si les images ne sont pas montrées, vos statistiques seront inexactes.

## Formats d'image

### Format JPEG
Le format de fichier JPEG est le plus largement utilisé sur Internet. Ce format peut être compressé très facilement, ce qui vous permet d'envoyer des photographies avec une taille de fichier plus petite, donc votre email se chargera plus rapidement. La compression d'image peut aussi causer une perte de qualité d'image.

### Format PNG
Le format PNG n'est pas affecté par la compression et il peut supporter des images avec arrière-plan transparent. La taille du fichier peut être significativement plus grande qu'une image au format JPG.

## Problèmes courants et solutions

### Les images sont bloquées
Il est possible que le client de email ait bloqué le chargement des images ; cela ne changera pas jusqu'à ce que le destinataire clique pour toujours afficher ou vous ajoute à leurs Expéditeurs sûrs, liste de Contacts ou Carnet d'adresses. Assurez-vous de faire savoir à vos abonnés de cliquer pour toujours permettre l'affichage de votre contenu ou encouragez-les à ajouter votre adresse D'expéditeur pour éviter ce problème à l'avenir.

### Emails composés uniquement d'images
Incluez du texte (pas seulement des images) dans votre email. Les emails composés uniquement d'images ne s'ouvriront pas correctement et seront signalés comme spam presque 100% du temps. Selon la loi anti-spam, tous les emails doivent contenir une forme de texte (même si c'est un simple « bonjour »), mais vous devriez viser à inclure plus de texte que d'images.

### Problèmes d'URL
Assurez-vous d'utiliser des URL absolues. Les URL relatives sont l'équivalent de dire « en bas de la rue, côté gauche, marchez encore quelques maisons, vous ne pouvez pas la manquer » quand quelqu'un vous demande une adresse.

Les URL absolues sont l'équivalent de dire « 31 rue Emily, Chicago, Illinois, États-Unis, Amérique du Nord, Planète Terre » à la place. Pour que tout le monde puisse voir les images de votre email, vous devez utiliser l'URL absolue (et les images doivent être stockées quelque part en ligne qui soit accessible à tous, aussi).

**Exemples :**
- URL relative : `/image.jpg`
- URL absolue : `http://www.mydummyaccount.com/images/image.jpg`

### Images d'arrière-plan
Les images d'arrière-plan ne s'affichent pas sur certains clients de email : Utilisez toujours une couleur d'arrière-plan solide comme solution de rechange.

## Contenu connexe

## Dépannage

**Les images s'affichent comme des liens brisés ou X rouge**

- Vérifiez que les URL d'images sont absolues, non relatives (doivent inclure http:// ou https://)
- Vérifiez si le serveur d'hébergement d'images est accessible et ne bloque pas les requêtes
- Assurez-vous que les fichiers d'images n'ont pas été déplacés ou supprimés du serveur
- Testez les URL d'images directement dans un navigateur pour confirmer qu'elles fonctionnent

**Les images s'affichent dans l'aperçu mais pas dans les emails envoyés**

- Confirmez que vous n'utilisez pas de chemins de fichiers locaux (C:\\ ou file://)
- Vérifiez si votre hébergement d'images nécessite une authentification ou a une protection de lien direct
- Vérifiez que les images sont hébergées sur un serveur public, non localhost ou réseau interne
- Assurez-vous que votre hébergement n'a pas de limites de bande passante qui bloquent les images

**Les images d'arrière-plan ne s'affichent pas**

- Utilisez une couleur solide de rechange car plusieurs clients de email ne supportent pas les images d'arrière-plan
- Considérez utiliser des cellules de tableau avec des couleurs d'arrière-plan à la place
- Testez dans plusieurs clients de email car le support varie largement
- Utilisez du CSS en ligne pour une meilleure compatibilité entre les clients

**Les images sont trop grosses et lentes à charger**

- Compressez les images avant le téléversement (visez moins de 100 Ko par image)
- Utilisez les dimensions appropriées - ne comptez pas sur HTML pour redimensionner
- Choisissez le bon format : JPEG pour les photos, PNG pour les graphiques avec transparence
- Considérez utiliser des outils d'optimisation d'images avant le téléversement

## Articles connexes

- [Utiliser le concepteur de email](/fr/docs/campaign-creation/using-the-email-designer) - Ajouter des images correctement
- [Créer une version mobile et ordinateur de bureau](/fr/docs/campaign-creation/creating-mobile-and-desktop-campaign-versions) - Images responsives
- [Tester votre campagne](/fr/docs/campaign-creation/testing-your-campaign) - Tester l'affichage des images
- [Téléverser du contenu dans votre bibliothèque](/fr/docs/campaign-creation/uploading-to-the-file-manager) - Hébergement d'images
- [Ajouter une vidéo à une campagne](/fr/docs/campaign-creation/adding-a-video-to-a-campaign) - Miniatures vidéo