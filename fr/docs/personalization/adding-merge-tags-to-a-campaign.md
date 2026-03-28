---
source: "https://support.cakemail.com/hc/en-us/articles/360058069693-Adding-merge-tags-to-a-campaign"
---

# Ajouter des balises de fusion à une campagne

## Description

Les balises de fusion sont utilisées pour insérer des données utilisateur uniques, liées à une valeur unique, de votre liste de diffusion dans les emails. Par exemple, vous pourriez inclure le nom de vos contacts dans votre email en utilisant la balise de fusion *[Prenom]* dans votre contenu. Elles sont aussi connues sous le nom de chaînes de substitution, champs de personnalisation ou étiquettes de personnalisation. Pour résumer, chaque fois que vous insérez une balise de fusion dans une campagne, elle sera remplacée par les données stockées dans le champ.

## Champs par défaut

Les champs par défaut suivants sont automatiquement créés avec toutes les listes, et ne peuvent pas être modifiés ou supprimés :
- **ID de contact**
- **Adresse email**
- **Date d'abonnement**

Ce sont les champs par défaut disponibles de notre système. Cette information par défaut provient des informations de compte ou des informations qui sont automatiquement incluses dans une liste de contacts.

Dans les paramètres de liste, des attributs peuvent être ajoutés, et vous pouvez aussi collecter des informations via votre formulaire lié à cette liste. Ces attributs seront visibles dans le formulaire généré après les avoir ajoutés. Découvrez comment ajouter des attributs à votre liste.

## Pourquoi c'est important

Inclure des champs personnalisés dans vos campagnes vous aidera à cibler votre audience plus directement et efficacement afin que vous gardiez leur attention. Gardez à l'esprit, les gens veulent être traités comme des individus, c'est pourquoi la personnalisation est essentielle aux pratiques marketing. En conséquence, les emails qui sont personnalisés sont plus susceptibles d'être ouverts et cliqués. En bref, envoyer des emails personnalisés au bon client au bon moment renforce les expériences client.

## Instructions étape par étape

### Ajouter des champs personnalisés

<Stepper>

1. Sélectionnez Contacts dans le menu du haut
   ![Naviguer vers l'onglet Contacts](/images/personalization/Contacts.png)

1. Dans Contacts, accédez à la liste que vous voulez utiliser
   ![Sélectionner votre liste de contacts](/images/personalization/My_default_list.png)

1. Cliquez sur la roue dentée dans le menu de droite
   ![Cliquer sur la roue dentée des paramètres](/images/personalization/Cogwheel.png)

1. Vous verrez maintenant le menu d'options Gérer les attributs de contact
   Lors de l'inscription, les champs par défaut (ID de contact, Email, Date d'inscription) sont automatiquement créés et ajoutés ici basés sur vos informations d'enregistrement de compte. Le système les utilise pour suivre les informations d'abonnés et ne peuvent pas être supprimés ou modifiés.

1. Il y a aussi un champ qui a été créé quand la liste a été faite
   ![Vue des attributs de liste par défaut](/images/personalization/Screen_Shot_2021-04-13_at_3.33.29_PM.png)

1. Créez un nouveau champ en cliquant sur Entrer le nom d'attribut et sélectionner le Type de valeur

1. Cliquez sur sauvegarder
   (Les champs personnalisés ne peuvent pas contenir des signes de ponctuation, caractères spéciaux, ou espaces.)
   ![Sauvegarder le nouvel attribut](/images/personalization/Attributes.png)

1. Selon le type de champ, vous pourrez nommer et sélectionner un type de champ :
   - **Texte** – Noms et autres informations texte (Le nom de champ et le contenu du champ ne peuvent pas dépasser 255 caractères, incluant les espaces), numéros de téléphone, etc.
   - **Nombre** – numéro d'identification, âge, etc.
   - **Date heure** – Anniversaire, anniversaire de mariage, etc.
</Stepper>

### Utiliser un champ personnalisé dans une campagne

Votre champ personnalisé peut être utilisé comme contenu personnalisé dans votre campagne une fois qu'il est créé. Il peut être inclus soit dans la ligne d'objet ou le contenu. Si vous voulez ajouter des champs personnalisés à votre campagne, vous devrez les taper manuellement.

**Veuillez vous rappeler de faire correspondre l'étiquette exactement au nom du champ.**

```"Bonjour [Prenom] Voici votre mise à jour hebdomadaire !"```

deviendrait :

```"Bonjour John, Voici votre mise à jour hebdomadaire !"```

Vous pouvez aussi utiliser l'étiquette [email], qui prendra l'adresse email du destinataire et l'insérera dans la campagne :

```"Ce email a été envoyé à [email], comme demandé."```
deviendrait :
```"Ce email a été envoyé à email@domaine.com, comme demandé."```

Vous pouvez aussi utiliser des champs de solution de repli si aucune donnée n'est actuellement disponible.

#### Information de campagne

L'information pour ces étiquettes provient de l'information de campagne que vous avez entrée lors de la création de votre campagne.

Les étiquettes suivantes peuvent être utilisées :

```[SUBJECT] "Bonjour, Ce email concerne [SUBJECT]"```

#### Information d'expéditeur

L'information pour ces étiquettes provient des détails remplis dans la section compte.

```"Ce email a été envoyé par [SENDER_NAME]" [SENDER_EMAIL]```

```"Pour plus d'informations, veuillez envoyer un email à [SENDER_EMAIL]"```

#### Information client

L'information pour ces étiquettes provient des détails remplis lors de la création de votre compte. Pour modifier l'information, allez à votre onglet Paramètres > Profil d'entreprise

Les étiquettes suivantes peuvent être utilisées :

[CLIENTS.COMPANY_NAME]

[CLIENTS.ADDRESS]

Votre adresse physique doit apparaître dans tous les emails envoyés via un fournisseur de services de marketing par email pour être conforme CAN SPAM.

[CLIENTS.CITY]

[CLIENTS.PROVINCE]

[CLIENTS.POSTAL_CODE]

[CLIENTS.COUNTRY]

[CLIENTS.WEBSITE]

[CLIENTS.PHONE]

Ces étiquettes peuvent être utilisées comme partie de votre pied de page de email pour fournir au destinataire l'information de qui leur envoie des emails (ceci est obligatoire comme partie de nos Conditions d'utilisation) :

```"Ce message a été envoyé de [CLIENTS.COMPANY_NAME],[CLIENTS.ADDRESS]"```
qui se lira comme :
```"Ce message a été envoyé de Mon Entreprise, 123 Avenue Michigan, Detroit, MI, USA"```

#### Information de liste

Ajoute l'information de liste à la campagne. Pour modifier, accédez à votre liste et changez les détails.

Les étiquettes suivantes peuvent être utilisées :

[LISTNAME]

```"Vous recevez ce email car vous faites partie de notre liste [LISTNAME]"```

#### Actions

Ces étiquettes permettent aux lecteurs de partager votre campagne avec d'autres, visualiser le email dans une fenêtre de navigateur et utiliser plusieurs options d'abonnement et de désabonnement. Ces étiquettes peuvent être ajoutées comme partie de votre en-tête ou pied de page de email.

Les étiquettes suivantes peuvent être utilisées :

[FORWARD]

Permet à un abonné de transférer la campagne à un ami

[SUBSCRIBE]

Permet à quelqu'un de s'abonner à votre liste – utile pour les emails transférés

[UNSUBSCRIBE]

Permet à un abonné de se désabonner de votre liste

[GLOBAL_UNSUBSCRIBE]

Permet à un abonné de se désabonner de toutes les listes dans votre compte

[SHOWEMAIL]

Utilisé dans un email où vous voulez permettre aux abonnés de visualiser une version HTML du email dans une fenêtre de navigateur. C'est souvent utile pour des situations où les images pourraient ne pas être affichées, ou les gens pourraient recevoir un email texte par défaut.

#### Date

Vous pouvez insérer une date dynamique dans votre campagne ou ligne d'objet en utilisant le champ de fusion [DATE]. Voici comment il peut être utilisé.

[DATE|0|format]

Pour plus d'informations, veuillez vous référer à l'article dédié.

### Utiliser des champs de fusion comme partie d'un lien

Vous pouvez utiliser des champs de fusion comme partie d'un lien Google Analytics personnalisé qui incorpore l'information utilisateur. De cette façon, votre département marketing obtient des résultats de suivi hautement spécifiques.

Voici comment :

- Prenez votre lien de suivi Google Analytics, par exemple : http://www.mondomaine.com/?utmsource=newsletter&utmmedium=email&utm_campaign=nouvellesseptembre
- Pour suivre le trafic basé sur le nom d'entreprise, vous prendriez l'étiquette [CLIENTS.COMPANY_NAME] et l'inséreriez dans votre lien : http://www.domaine.com/?utmsource=**[CLIENTS.COMPANYNAME]**&utmmedium=email&utmcampaign=nouvellesseptembre
- Quand cette campagne sera envoyée, l'URL ressemblera à : http://www.domaine.com/?utmsource=MonNomEntreprise&utmmedium=email&utm_campaign=nouvellesseptembre
- Si vous voulez voir les sources de trafic du site par adresse email individuelle : http://www.domaine.com/?utmsource=[email]&utmmedium=email&utm_campaign=nouvellesseptembre
- Quand cette campagne sera envoyée, l'URL ressemblera à : http://www.domaine.com/?utmsource=bonjour@monemail.com&utmmedium=email&utm_campaign=nouvellesseptembre

Ces données apparaîtront dans votre compte Google Analytics sous "Sources de trafic."

## Dépannage

**Les balises de fusion s'affichent comme texte brut au lieu de données**

- Vérifiez que la syntaxe de balise de fusion correspond exactement (sensible à la casse)
- Vérifiez que les crochets sont utilisés correctement [NomEtiquette]
- Assurez-vous qu'il n'y a pas d'espaces ou caractères spéciaux dans les crochets
- Confirmez que l'attribut existe dans votre liste de contacts

**Certains contacts affichent des espaces vides au lieu de données personnalisées**

- Vérifiez si ces contacts ont des données dans le champ spécifié
- Ajoutez des valeurs de solution de repli pour gérer les champs vides
- Vérifiez que les données ont été correctement importées pour tous les contacts
- Examinez si certains caractères dans les données causent des problèmes

**Les balises de fusion ne fonctionnent pas dans les lignes d'objet**

- Confirmez que votre plan supporte les balises de fusion dans les lignes d'objet
- Utilisez la même syntaxe exacte que dans le corps du email
- Testez avec l'aperçu avant d'envoyer à toute la liste
- Vérifiez si les caractères spéciaux dans les données affectent l'affichage de la ligne d'objet

**Les attributs personnalisés n'apparaissent pas comme balises de fusion**

- Assurez-vous que les attributs sont sauvegardés après création
- Vérifiez que les noms d'attributs ne contiennent pas d'espaces ou caractères spéciaux
- Vérifiez que vous utilisez le nom de champ interne, pas le nom d'affichage
- Rafraîchissez l'éditeur de campagne après avoir ajouté de nouveaux attributs

## Articles connexes

- [Utiliser les balises de fusion et solutions de repli](/fr/docs/personalization/using-merge-tags-and-fallbacks) - Guide des balises de fusion
- [Ajouter des attributs à votre liste](/fr/docs/audience/adding-attributes-to-your-list) - Créer des champs de fusion
- [Ajouter une balise de fusion de date](/fr/docs/personalization/adding-a-date-merge-tag) - Formatage de date
- [Utiliser le concepteur d'email](/fr/docs/campaign-creation/using-the-email-designer) - Insérer des balises de fusion
- [Utiliser le contenu dynamique](/fr/docs/personalization/using-dynamic-content) - Personnalisation avancée