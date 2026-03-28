---
source: >-
  https://support.cakemail.com/hc/en-us/articles/14778456102427-Creating-and-Using-UTM-Codes-to-track-click-conversions
---

# Créer des liens de suivi UTM

## Description

Les paramètres UTM sont un outil essentiel pour suivre l'efficacité de vos campagnes de marketing par email. En ajoutant des codes uniques aux URL dans vos campagnes, vous pouvez suivre les clics et conversions vers votre site web depuis des campagnes spécifiques. Dans cet article, nous vous montrerons comment utiliser efficacement les paramètres UTM dans vos campagnes, incluant les meilleures pratiques à garder en tête, comment créer des liens UTM, et comment les ajouter à vos campagnes.

Un lien UTM est un lien régulier avec du code supplémentaire ajouté pour suivre d'où viennent les clics. Ce code inclut des détails comme la source, le médium et le nom de la campagne. En utilisant des liens UTM, vous pouvez suivre l'efficacité de votre campagne marketing et d'où vient le trafic de votre site web. Par exemple, si vous voyez des clics venant d'un lien UTM avec la source « Facebook » et le nom de campagne « vente », vous saurez que votre promotion de vente sur Facebook fonctionne.

## Pourquoi c'est important

En utilisant des liens UTM, vous pouvez obtenir des perspectives précieuses sur la performance de vos campagnes marketing. Vous pouvez voir quelles sources et canaux génèrent le plus de trafic et de conversions, quelles variantes de publicité performent le mieux, et quels mots-clés dirigent le plus de trafic de moteur de recherche. Cette information peut vous aider à optimiser vos campagnes pour de meilleurs résultats.

## Processus étape par étape

Voici un exemple de comment vous pourriez utiliser des liens UTM. Disons que vous lancez une campagne de email pour promouvoir un nouveau produit. En ajoutant des paramètres UTM aux liens dans vos emails, vous pouvez suivre combien de personnes ont cliqué sur ces liens et combien d'entre elles se sont finalement converties en clients. Voici comment vous pouvez le faire :

<Stepper>

1. Créez votre campagne
Avant de pouvoir ajouter des liens UTM, vous devrez créer votre campagne de email.

1. Dans la dernière étape du processus de création de campagne, sélectionnez Paramètres UTM de campagne pour accéder aux champs de paramètres.
![Capture d'écran de l'interface d'ajout](/images/analytics/utm-parameters-1.png)

1. Remplissez les champs de paramètres UTM
Une fois que vous avez accédé aux champs de paramètres UTM, vous pouvez commencer à les remplir. Les paramètres clés que vous voudrez inclure sont :
- **Source :** Ceci fait référence à la source de trafic ou plateforme où votre campagne fonctionne. Par exemple, puisque vous lancez une campagne de email, votre source pourrait être « cakemail ».
- **Médium :** Ceci fait référence au canal marketing que vous utilisez. Pour une campagne de email, votre médium serait « email ».
- **Nom de campagne :** Ceci fait référence au nom de votre campagne. Dans notre exemple, ce pourrait être « lancement_produit ».
- **Contenu :** Ceci fait référence au contenu spécifique ou variante de publicité sur laquelle l'utilisateur a cliqué. Ceci peut être utile pour tester différentes variantes de publicité pour voir laquelle performe le mieux.
- **Terme :** Ceci fait référence aux mots-clés utilisés par l'utilisateur dans un moteur de recherche. Ceci peut être utile pour suivre l'efficacité des campagnes de recherche payées.
![Capture d'écran de l'interface de création](/images/analytics/utm-parameters-2.png)

1. Créez votre lien UTM.
</Stepper>

## Suivre les meilleures pratiques

**La cohérence est clé :** Assurez-vous d'être cohérent avec l'orthographe et la capitalisation. Les paramètres UTM sont sensibles à la casse, donc utiliser différentes variations du même mot peut causer des problèmes avec le suivi. Aussi, n'utilisez pas d'espaces dans vos paramètres UTM, car cela peut briser le lien.

**Utilisez des noms descriptifs :** Soyez descriptif dans vos conventions de nommage pour qu'il soit facile de comprendre à quelle campagne ou canal un paramètre UTM est associé. Par exemple, utilisez « utm_campaign=vente_printemps » au lieu de « utm_campaign=12345 ».

**N'exagérez pas :** Bien que les paramètres UTM puissent être bénéfiques, n'en faites pas trop. Trop de paramètres UTM peuvent encombrer vos URL et rendre difficile le suivi et l'analyse efficace des données.

**Gardez un œil sur la qualité des données :** Révisez régulièrement vos données UTM pour vous assurer qu'elles sont exactes et pertinentes. Si vous notez des divergences ou inconsistances, enquêtez sur le problème et faites les ajustements nécessaires à vos campagnes.

**Raccourcissez les liens UTM :** Considérez utiliser un raccourcisseur d'URL pour rendre vos liens UTM moins visibles. Ces liens peuvent devenir très longs, surtout si vous ajoutez plusieurs paramètres, donc raccourcir le lien peut faciliter son utilisation dans vos campagnes de marketing par email.

## Dépannage

**Les paramètres UTM ne se suivent pas dans l'analytique**

- Vérifiez que les paramètres UTM sont correctement formatés sans espaces ou caractères spéciaux
- Vérifiez que votre plateforme d'analytique (Google Analytics, etc.) est correctement configurée
- Assurez-vous que l'URL de destination est valide et que le code de suivi est installé sur la page d'atterrissage
- Attendez 24-48 heures pour que les données apparaissent dans les rapports d'analytique

**Les liens se brisent après avoir ajouté des paramètres UTM**

- Utilisez seulement des caractères alphanumériques : lettres et chiffres
- Testez tous les liens avant d'envoyer la campagne pour vous assurer qu'ils fonctionnent correctement
- Utilisez un outil de validation d'URL pour vérifier les erreurs de syntaxe
- Évitez d'utiliser des espaces dans les valeurs UTM - utilisez des traits de soulignement ou des tirets à la place

**Données de campagne inconsistantes dans les rapports**

- Maintenez un document de convention de nommage UTM pour votre équipe
- Utilisez des minuscules pour tous les paramètres UTM pour éviter les problèmes de sensibilité à la casse
- Créez une feuille de calcul pour suivre toutes les combinaisons UTM utilisées à travers les campagnes
- Auditez régulièrement votre utilisation UTM pour assurer la cohérence à travers les équipes

## Articles connexes

- [Suivre l'activité du taux de clics](/fr/docs/analytics/tracking-click-rate-activity) - Surveiller l'engagement des liens
- [Comprendre les taux de clics des emails](/fr/docs/analytics/email-click-rates) - Analyser la performance des clics
- [Suivre la performance des campagnes](/fr/docs/analytics/tracking-campaign-performance) - Analytique complète
- [Utiliser l'intégration Zapier](/fr/docs/integrations/connecting-cakemail-with-zapier) - Se connecter aux outils d'analytique
- [Comprendre les statistiques de campagne](/fr/docs/analytics/understanding-campaign-reports) - Aperçu des métriques de campagne