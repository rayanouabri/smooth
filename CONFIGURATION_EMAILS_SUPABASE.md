# 📧 Configuration des Emails Supabase

## 🎯 Personnaliser les Emails d'Inscription et d'Authentification

### Étape 1 : Accéder aux Templates Email

1. Allez dans **Supabase Dashboard** → Votre projet
2. **Authentication** → **Email Templates**
3. Vous verrez plusieurs templates :
   - **Confirm signup** : Email de confirmation d'inscription
   - **Magic Link** : Email de lien magique
   - **Change Email Address** : Changement d'email
   - **Reset Password** : Réinitialisation de mot de passe
   - **Invite user** : Invitation utilisateur

### Étape 2 : Personnaliser l'Email de Confirmation d'Inscription

**Template : Confirm signup**

```html
<h2>Bienvenue sur FrancePrep Academy ! 🎓</h2>

<p>Bonjour {{ .Name }},</p>

<p>Merci de vous être inscrit(e) sur FrancePrep Academy, votre plateforme d'accompagnement pour réussir votre intégration en France !</p>

<p>Pour activer votre compte, cliquez sur le lien ci-dessous :</p>

<p><a href="{{ .ConfirmationURL }}" style="background-color: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Confirmer mon email</a></p>

<p>Si le bouton ne fonctionne pas, copiez-collez ce lien dans votre navigateur :</p>
<p>{{ .ConfirmationURL }}</p>

<p><strong>À très bientôt sur FrancePrep Academy !</strong></p>

<p>L'équipe FrancePrep Academy</p>
```

**Variables disponibles** :
- `{{ .Name }}` : Nom de l'utilisateur
- `{{ .ConfirmationURL }}` : Lien de confirmation
- `{{ .Email }}` : Email de l'utilisateur
- `{{ .Token }}` : Token de confirmation
- `{{ .TokenHash }}` : Hash du token
- `{{ .SiteURL }}` : URL de votre site

### Étape 3 : Personnaliser l'Email de Réinitialisation de Mot de Passe

**Template : Reset Password**

```html
<h2>Réinitialisation de votre mot de passe 🔐</h2>

<p>Bonjour {{ .Name }},</p>

<p>Vous avez demandé à réinitialiser votre mot de passe sur FrancePrep Academy.</p>

<p>Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe :</p>

<p><a href="{{ .ConfirmationURL }}" style="background-color: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Réinitialiser mon mot de passe</a></p>

<p>Si le bouton ne fonctionne pas, copiez-collez ce lien :</p>
<p>{{ .ConfirmationURL }}</p>

<p><strong>⚠️ Ce lien est valable pendant 1 heure.</strong></p>

<p>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>

<p>Cordialement,<br>
L'équipe FrancePrep Academy</p>
```

### Étape 4 : Personnaliser l'Email Magic Link

**Template : Magic Link**

```html
<h2>Connexion à FrancePrep Academy ✨</h2>

<p>Bonjour {{ .Name }},</p>

<p>Vous avez demandé à vous connecter sans mot de passe sur FrancePrep Academy.</p>

<p>Cliquez sur le lien ci-dessous pour vous connecter :</p>

<p><a href="{{ .ConfirmationURL }}" style="background-color: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Me connecter</a></p>

<p>Si le bouton ne fonctionne pas, copiez-collez ce lien :</p>
<p>{{ .ConfirmationURL }}</p>

<p><strong>Ce lien est valable pendant 1 heure.</strong></p>

<p>Si vous n'avez pas demandé cette connexion, ignorez cet email.</p>

<p>À bientôt !<br>
L'équipe FrancePrep Academy</p>
```

### Étape 5 : Personnaliser le Sujet des Emails

Pour chaque template, vous pouvez également personnaliser le **Subject** (sujet) :

**Confirm signup** :
```
Bienvenue sur FrancePrep Academy - Confirmez votre email
```

**Reset Password** :
```
Réinitialisation de votre mot de passe - FrancePrep Academy
```

**Magic Link** :
```
Connexion à FrancePrep Academy - Lien magique
```

### Étape 6 : Personnaliser l'Email Sender (Expéditeur)

1. Allez dans **Settings** → **Auth**
2. Dans **SMTP Settings**, vous pouvez :
   - Configurer votre propre serveur SMTP
   - Personnaliser le nom de l'expéditeur
   - Personnaliser l'adresse email d'envoi

**Configuration SMTP personnalisée** (optionnel) :

```
SMTP Host: smtp.votre-domaine.com
SMTP Port: 587
SMTP User: noreply@franceprepacademy.fr
SMTP Password: votre-mot-de-passe
Sender Email: noreply@franceprepacademy.fr
Sender Name: FrancePrep Academy
```

### Étape 7 : Redirection après Confirmation

1. Allez dans **Authentication** → **URL Configuration**
2. **Redirect URLs** : Ajoutez :
   ```
   https://votre-site.vercel.app/auth/callback
   https://votre-site.vercel.app/Dashboard
   ```

## ✅ Checklist

- [ ] Email de confirmation personnalisé
- [ ] Email de réinitialisation personnalisé
- [ ] Email Magic Link personnalisé
- [ ] Sujets des emails personnalisés
- [ ] SMTP configuré (optionnel)
- [ ] URLs de redirection configurées
- [ ] Test d'envoi d'email réussi

## 🧪 Tester les Emails

1. Créez un compte de test
2. Vérifiez que vous recevez bien l'email personnalisé
3. Cliquez sur le lien de confirmation
4. Vérifiez la redirection vers Dashboard

Tous vos emails sont maintenant personnalisés avec le branding FrancePrep Academy ! 🎉

