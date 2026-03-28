---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360057127894-Setting-up-a-subscription-confirmation-email
---

# Courriel de confirmation d'abonnement

[PROBLÈME]

## Description

Utiliser la confirmation d'abonnement pour votre liste garantira que votre liste est propre et que tous les destinataires ont donné leur consentement pour recevoir vos campagnes.

## Pourquoi c'est important

Cette approche est une meilleure pratique pour la délivrabilité lors de l'utilisation d'une liste de contacts à qui vous n'avez pas envoyé depuis longtemps. Ce processus améliorera la livraison en diminuant les plaintes, supprimant les adresses invalides, et augmente l'engagement global pour votre liste.

## Instructions étape par étape

Si vous créez une liste double opt-in et téléchargez la liste de contacts vous-même, il y a deux options pour reconfirmer leur abonnement :

### Option 1 : Créer une nouvelle liste de confirmation.

<Stepper>

1. **Créez une nouvelle liste double opt-in**, vous pouvez la nommer "Emails confirmés"
![Créer une nouvelle liste double opt-in](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-113.png)

1. **Créez un formulaire d'abonnement** pour cette liste
![Créer un formulaire d'abonnement](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-114.png)

1. **Copiez le lien URL du nouveau formulaire**
![Copier l'URL du formulaire](/images/manage-contacts/manage-contacts-setting-up-a-subscription-confirmation-email-115.png)
</Stepper>

### Option 2 : Campagne avec lien de confirmation

**Créez une campagne** avec un lien vers le formulaire demandant aux gens de cliquer s'ils veulent s'inscrire.

#### Exigences de campagne

Votre campagne devrait inclure les éléments essentiels suivants :

- **Votre logo** (idéalement, dans le coin supérieur gauche)
- **Votre adresse physique**
- **Un lien de désabonnement**

### Note importante sur le texte de prévisualisation :

Si vous avez votre logo dans le coin supérieur gauche de votre email, le texte alt sur votre logo sera le texte de prévisualisation, qui s'affiche dans l'aperçu du email pour de nombreux clients de email. Sinon, le texte de prévisualisation sera la première phrase de votre contenu de email.

## Avantages de la confirmation d'abonnement

- **Délivrabilité améliorée** grâce aux plaintes réduites
- **Maintenance de liste propre** en supprimant les adresses invalides
- **Engagement plus élevé** des abonnés intéressés confirmés
- **Assurance de conformité** avec le marketing basé sur le consentement
- **Meilleure réputation d'expéditeur** avec les fournisseurs de services de email

## Meilleures pratiques

- Utilisez des lignes d'objet claires et convaincantes pour les emails de confirmation
- Rendez le processus de confirmation simple et rapide
- Expliquez les avantages de rester abonné
- Définissez les attentes pour la fréquence et le type de contenu des emails

## Dépannage

**Les emails de confirmation ne sont pas envoyés**

- Vérifiez que le double opt-in est activé pour votre liste
- Vérifiez si les emails de confirmation vont dans les dossiers de spam
- Assurez-vous que l'adresse email de l'expéditeur est vérifiée et authentifiée
- Examinez si votre compte a des restrictions d'envoi

**Taux de confirmation faibles**

- Rendez la ligne d'objet de votre email de confirmation claire et urgente
- Envoyez les emails de confirmation immédiatement après l'inscription
- Incluez des instructions claires pour vérifier le dossier spam sur la page d'inscription
- Considérez raccourcir le temps d'expiration du lien de confirmation

**Les abonnés disent qu'ils n'ont jamais reçu la confirmation**

- Vérifiez si leur fournisseur de email bloque les emails automatisés
- Vérifiez que l'adresse email a été entrée correctement
- Recherchez les emails de confirmation retournés dans vos rapports
- Testez avec différents fournisseurs de email pour identifier des patterns

**Les liens de confirmation ne fonctionnent pas**

- Assurez-vous que les liens n'ont pas expiré (vérifiez vos paramètres)
- Vérifiez que le lien n'a pas été modifié par les filtres de sécurité de email
- Vérifiez si le lien est cliqué plusieurs fois
- Testez les liens avant d'envoyer à toute votre liste

## Articles connexes

- [Créer un email de bienvenue automatisé](/fr/docs/automations/creating-an-automated-welcome-email) - Post-confirmation
- [Gérer l'adresse d'expéditeur par défaut](/fr/docs/audience-building/default-sender-address-and-language) - Paramètres d'expéditeur
- [Personnaliser les pages de redirection d'abonnement](/fr/docs/audience-building/customizing-subscription-redirection-pages) - Pages de confirmation
- [Premiers pas](/fr/docs/first-steps) - Configuration initiale