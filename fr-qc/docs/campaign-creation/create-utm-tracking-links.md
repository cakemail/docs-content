---
source: >-
  https://support.cakemail.com/hc/en-us/articles/14778456102427-Creating-and-Using-UTM-Codes-to-track-click-conversions
---

# Créer des liens de suivi UTM

## Description

Les paramètres UTM sont un outil essentiel pour suivre l'efficacité de tes campagnes de marketing par courriel. En ajoutant des codes uniques aux URLs dans tes campagnes, tu peux suivre les clics et conversions vers ton site web depuis des campagnes spécifiques. Dans cet article, on va te montrer comment utiliser efficacement les paramètres UTM dans tes campagnes, incluant les meilleures pratiques à garder en tête, comment créer des liens UTM, et comment les ajouter à tes campagnes.

Un lien UTM est un lien régulier avec du code supplémentaire ajouté pour suivre d'où viennent les clics. Ce code inclut des détails comme la source, le medium, et le nom de campagne. En utilisant des liens UTM, tu peux suivre l'efficacité de ta campagne marketing et d'où vient le trafic sur ton site web. Par exemple, si tu vois des clics venant d'un lien UTM avec la source "Facebook" et le nom de campagne "vente", tu sauras que ta promotion de vente sur Facebook fonctionne.

## Pourquoi c'est important

En utilisant des liens UTM, tu peux obtenir des insights précieux sur la performance de tes campagnes marketing. Tu peux voir quelles sources et canaux génèrent le plus de trafic et de conversions, quelles variantes d'annonces performent le mieux, et quels mots-clés dirigent le plus de trafic de moteur de recherche. Cette information peut t'aider à optimiser tes campagnes pour de meilleurs résultats.

## Processus étape par étape

Voici un exemple de comment tu pourrais utiliser les liens UTM. Disons que tu mènes une campagne courriel pour promouvoir un nouveau produit. En ajoutant des paramètres UTM aux liens dans tes courriels, tu peux suivre combien de personnes ont cliqué sur ces liens et combien d'entre eux se sont finalement convertis en clients. Voici comment tu peux faire :

<Stepper>

1. Créer ta campagne
Avant de pouvoir ajouter des liens UTM, tu devras créer ta campagne courriel.

1. Dans la dernière étape du processus de création de campagne, sélectionne Paramètres UTM de campagne pour accéder aux champs de paramètres.
![Add interface screenshot](/images/analytics/utm-parameters-1.png)

1. Remplir les champs de paramètres UTM
Une fois que tu as accédé aux champs de paramètres UTM, tu peux commencer à les remplir. Les paramètres clés que tu voudras inclure sont :
- **Source :** Ceci réfère à la source de trafic ou plateforme où ta campagne roule. Par exemple, puisque tu mènes une campagne courriel, ta source pourrait être "cakemail".
- **Medium :** Ceci réfère au canal marketing que tu utilises. Pour une campagne courriel, ton medium serait "email".
- **Nom de campagne :** Ceci réfère au nom de ta campagne. Dans notre exemple, ça pourrait être "lancement_produit".
- **Contenu :** Ceci réfère au contenu spécifique ou variante d'annonce sur laquelle l'utilisateur a cliqué. Ça peut être utile pour tester différentes variantes d'annonces pour voir laquelle performe le mieux.
- **Terme :** Ceci réfère aux mots-clés utilisés par l'utilisateur dans un moteur de recherche. Ça peut être utile pour suivre l'efficacité des campagnes de recherche payée.
![Create interface screenshot](/images/analytics/utm-parameters-2.png)

1. Créer ton lien UTM.
</Stepper>

## Suivre les meilleures pratiques

**La cohérence est clé :** Assure-toi d'être cohérent avec l'orthographe et la capitalisation. Les paramètres UTM sont sensibles à la casse, donc utiliser différentes variations du même mot peut causer des problèmes avec le suivi. Aussi, n'utilise pas d'espaces dans tes paramètres UTM, car ça peut briser le lien.

**Utilise des noms descriptifs :** Sois descriptif dans tes conventions de nommage pour qu'il soit facile de comprendre à quelle campagne ou canal un paramètre UTM est associé. Par exemple, utilise "utm_campaign=vente_printemps" au lieu de "utm_campaign=12345."

**N'en fait pas trop :** Bien que les paramètres UTM puissent être bénéfiques, n'exagère pas. Trop de paramètres UTM peuvent encombrer tes URLs et rendre difficile le suivi et l'analyse des données efficacement.

**Garde un œil sur la qualité des données :** Révise régulièrement tes données UTM pour t'assurer qu'elles sont précises et pertinentes. Si tu remarques des écarts ou incohérences, enquête sur le problème et fais les ajustements nécessaires à tes campagnes.

**Raccourcir les liens UTM :** Considère utiliser un raccourcisseur d'URL pour rendre tes liens UTM moins conspicues. Ces liens peuvent devenir très longs, surtout si tu ajoutes plusieurs paramètres, donc raccourcir le lien peut le rendre plus facile à utiliser dans tes campagnes de marketing par courriel.

## Résolution de problèmes

**Les paramètres UTM ne se suivent pas dans les analytiques**

- Vérifie que les paramètres UTM sont correctement formatés sans espaces ou caractères spéciaux
- Vérifie que ta plateforme d'analytiques (Google Analytics, etc.) est correctement configurée
- Assure-toi que l'URL de destination est valide et que le code de suivi est installé sur la page de destination
- Attends 24-48 heures pour que les données apparaissent dans les rapports d'analytiques

**Les liens se brisent après avoir ajouté des paramètres UTM**

- Utilise seulement des caractères alphanumériques : lettres et chiffres
- Teste tous les liens avant d'envoyer la campagne pour t'assurer qu'ils fonctionnent correctement
- Utilise un outil de validation d'URL pour vérifier les erreurs de syntaxe
- Évite d'utiliser des espaces dans les valeurs UTM - utilise des tirets bas ou des traits d'union à la place

**Données de campagne incohérentes dans les rapports**

- Maintiens un document de convention de nommage UTM pour ton équipe
- Utilise des minuscules pour tous les paramètres UTM pour éviter les problèmes de sensibilité à la casse
- Crée un tableur pour suivre toutes les combinaisons UTM utilisées à travers les campagnes
- Audite régulièrement ton utilisation UTM pour assurer la cohérence à travers les équipes

## Articles connexes

- [Suivre l'activité de taux de clic](/fr-qc/docs/analytics/tracking-click-rate-activity) - Surveiller l'engagement des liens
- [Comprendre les taux de clic courriel](/fr-qc/docs/analytics/email-click-rates) - Analyser la performance des clics
- [Suivre la performance de campagne](/fr-qc/docs/analytics/tracking-campaign-performance) - Analytiques complètes
- [Utiliser l'intégration Zapier](/fr-qc/docs/integrations/connecting-cakemail-with-zapier) - Connecter aux outils d'analytiques
- [Comprendre les statistiques de campagne](/fr-qc/docs/analytics/understanding-campaign-reports) - Aperçu des métriques de campagne