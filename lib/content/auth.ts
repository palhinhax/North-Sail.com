import type { Locale } from "@/lib/i18n/config";

/**
 * Localized copy for the authentication pages (`/{locale}/auth/*`). These pages
 * are client components, so every visible string — including form-validation
 * messages and API-failure fallbacks — lives here keyed by locale instead of
 * being hardcoded in the page.
 */
export interface AuthCopy {
  /** Shared form field labels / placeholders. */
  shared: {
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
  };
  /** Zod / form validation messages. */
  validation: {
    emailInvalid: string;
    passwordRequired: string;
    passwordMin: string;
    nameMin: string;
    passwordsNoMatch: string;
  };
  login: {
    metaTitle: string;
    title: string;
    subtitle: string;
    forgotLink: string;
    submit: string;
    noAccount: string;
    startNow: string;
    errorInvalid: string;
    errorUnexpected: string;
  };
  register: {
    metaTitle: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    confirmLabel: string;
    submit: string;
    haveAccount: string;
    login: string;
    errorFallback: string;
  };
  forgot: {
    metaTitle: string;
    title: string;
    subtitle: string;
    remembered: string;
    login: string;
    submit: string;
    errorFallback: string;
    doneTitle: string;
    doneSubtitle: string;
    /** "{minutes}" is interpolated with the expiry window. */
    doneBody: string;
    backToLogin: string;
  };
  reset: {
    metaTitle: string;
    title: string;
    subtitle: string;
    newPasswordLabel: string;
    confirmLabel: string;
    submit: string;
    backToLogin: string;
    errorFallback: string;
    invalidTitle: string;
    invalidSubtitle: string;
    invalidBody: string;
    requestNew: string;
    doneTitle: string;
    doneSubtitle: string;
    doneBody: string;
    goToLogin: string;
  };
}

const en: AuthCopy = {
  shared: {
    emailLabel: "Email",
    emailPlaceholder: "name@email.com",
    passwordLabel: "Password",
  },
  validation: {
    emailInvalid: "Invalid email",
    passwordRequired: "Password is required",
    passwordMin: "Password must be at least 8 characters",
    nameMin: "Name must be at least 2 characters",
    passwordsNoMatch: "Passwords do not match",
  },
  login: {
    metaTitle: "Sign in — NorthSail",
    title: "Sign in",
    subtitle: "Access your NorthSail account",
    forgotLink: "Forgot it?",
    submit: "Sign in",
    noAccount: "Don't have an account yet?",
    startNow: "Get started",
    errorInvalid: "Invalid email or password",
    errorUnexpected: "An unexpected error occurred",
  },
  register: {
    metaTitle: "Create account — NorthSail",
    title: "Create account",
    subtitle: "Start using NorthSail in minutes",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    confirmLabel: "Confirm password",
    submit: "Create account",
    haveAccount: "Already have an account?",
    login: "Sign in",
    errorFallback: "Failed to create account",
  },
  forgot: {
    metaTitle: "Reset password — NorthSail",
    title: "Reset password",
    subtitle: "Enter your email and we'll send a link to set a new password.",
    remembered: "Remembered it?",
    login: "Sign in",
    submit: "Send link",
    errorFallback: "We couldn't send the email.",
    doneTitle: "Check your email",
    doneSubtitle:
      "If an account exists with that email, we've sent a link to reset your password.",
    doneBody:
      "The link expires in {minutes} minutes. Didn't get it? Check your spam folder or try again in a few minutes.",
    backToLogin: "Back to sign in",
  },
  reset: {
    metaTitle: "New password — NorthSail",
    title: "New password",
    subtitle: "Choose a new password for your account.",
    newPasswordLabel: "New password",
    confirmLabel: "Confirm password",
    submit: "Save password",
    backToLogin: "Back to sign in",
    errorFallback: "We couldn't reset the password.",
    invalidTitle: "Invalid link",
    invalidSubtitle: "This reset link is incomplete or has expired.",
    invalidBody: "Request a new reset email and try again.",
    requestNew: "Request a new link",
    doneTitle: "Password updated",
    doneSubtitle: "You can now sign in with your new password.",
    doneBody: "Redirecting…",
    goToLogin: "Go to sign in",
  },
};

const pt: AuthCopy = {
  shared: {
    emailLabel: "Email",
    emailPlaceholder: "nome@email.com",
    passwordLabel: "Password",
  },
  validation: {
    emailInvalid: "Email inválido",
    passwordRequired: "Password obrigatória",
    passwordMin: "A password deve ter pelo menos 8 caracteres",
    nameMin: "O nome deve ter pelo menos 2 caracteres",
    passwordsNoMatch: "As passwords não coincidem",
  },
  login: {
    metaTitle: "Entrar — NorthSail",
    title: "Entrar",
    subtitle: "Aceda à sua conta NorthSail",
    forgotLink: "Esqueceste-te?",
    submit: "Entrar",
    noAccount: "Ainda não tens conta?",
    startNow: "Começar agora",
    errorInvalid: "Email ou password inválidos",
    errorUnexpected: "Ocorreu um erro inesperado",
  },
  register: {
    metaTitle: "Criar conta — NorthSail",
    title: "Criar conta",
    subtitle: "Comece a usar a NorthSail em minutos",
    nameLabel: "Nome",
    namePlaceholder: "O seu nome",
    confirmLabel: "Confirmar password",
    submit: "Criar conta",
    haveAccount: "Já tens conta?",
    login: "Entrar",
    errorFallback: "Falha ao criar conta",
  },
  forgot: {
    metaTitle: "Repor password — NorthSail",
    title: "Repor password",
    subtitle:
      "Indica o teu email e enviamos um link para criares uma nova password.",
    remembered: "Lembraste-te?",
    login: "Entrar",
    submit: "Enviar link",
    errorFallback: "Não foi possível enviar o email.",
    doneTitle: "Verifica o teu email",
    doneSubtitle:
      "Se existir uma conta com esse email, enviámos um link para repor a password.",
    doneBody:
      "O link expira em {minutes} minutos. Não recebeste? Verifica o spam ou tenta novamente dentro de alguns minutos.",
    backToLogin: "Voltar a entrar",
  },
  reset: {
    metaTitle: "Nova password — NorthSail",
    title: "Nova password",
    subtitle: "Escolhe uma nova password para a tua conta.",
    newPasswordLabel: "Nova password",
    confirmLabel: "Confirmar password",
    submit: "Guardar password",
    backToLogin: "Voltar a entrar",
    errorFallback: "Não foi possível repor a password.",
    invalidTitle: "Link inválido",
    invalidSubtitle: "Este link de reposição está incompleto ou expirou.",
    invalidBody: "Pede um novo email de reposição e tenta de novo.",
    requestNew: "Pedir um novo link",
    doneTitle: "Password atualizada",
    doneSubtitle: "Já podes entrar com a tua nova password.",
    doneBody: "A redirecionar…",
    goToLogin: "Ir para o login",
  },
};

const es: AuthCopy = {
  shared: {
    emailLabel: "Email",
    emailPlaceholder: "nombre@email.com",
    passwordLabel: "Contraseña",
  },
  validation: {
    emailInvalid: "Email no válido",
    passwordRequired: "La contraseña es obligatoria",
    passwordMin: "La contraseña debe tener al menos 8 caracteres",
    nameMin: "El nombre debe tener al menos 2 caracteres",
    passwordsNoMatch: "Las contraseñas no coinciden",
  },
  login: {
    metaTitle: "Iniciar sesión — NorthSail",
    title: "Iniciar sesión",
    subtitle: "Accede a tu cuenta NorthSail",
    forgotLink: "¿La olvidaste?",
    submit: "Iniciar sesión",
    noAccount: "¿Aún no tienes cuenta?",
    startNow: "Empezar ahora",
    errorInvalid: "Email o contraseña no válidos",
    errorUnexpected: "Se produjo un error inesperado",
  },
  register: {
    metaTitle: "Crear cuenta — NorthSail",
    title: "Crear cuenta",
    subtitle: "Empieza a usar NorthSail en minutos",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    confirmLabel: "Confirmar contraseña",
    submit: "Crear cuenta",
    haveAccount: "¿Ya tienes cuenta?",
    login: "Iniciar sesión",
    errorFallback: "No se pudo crear la cuenta",
  },
  forgot: {
    metaTitle: "Restablecer contraseña — NorthSail",
    title: "Restablecer contraseña",
    subtitle:
      "Indica tu email y te enviaremos un enlace para crear una nueva contraseña.",
    remembered: "¿La recordaste?",
    login: "Iniciar sesión",
    submit: "Enviar enlace",
    errorFallback: "No se pudo enviar el email.",
    doneTitle: "Revisa tu email",
    doneSubtitle:
      "Si existe una cuenta con ese email, te hemos enviado un enlace para restablecer la contraseña.",
    doneBody:
      "El enlace caduca en {minutes} minutos. ¿No lo recibiste? Revisa el spam o inténtalo de nuevo en unos minutos.",
    backToLogin: "Volver a iniciar sesión",
  },
  reset: {
    metaTitle: "Nueva contraseña — NorthSail",
    title: "Nueva contraseña",
    subtitle: "Elige una nueva contraseña para tu cuenta.",
    newPasswordLabel: "Nueva contraseña",
    confirmLabel: "Confirmar contraseña",
    submit: "Guardar contraseña",
    backToLogin: "Volver a iniciar sesión",
    errorFallback: "No se pudo restablecer la contraseña.",
    invalidTitle: "Enlace no válido",
    invalidSubtitle:
      "Este enlace de restablecimiento está incompleto o ha caducado.",
    invalidBody:
      "Solicita un nuevo email de restablecimiento e inténtalo de nuevo.",
    requestNew: "Solicitar un nuevo enlace",
    doneTitle: "Contraseña actualizada",
    doneSubtitle: "Ya puedes iniciar sesión con tu nueva contraseña.",
    doneBody: "Redirigiendo…",
    goToLogin: "Ir a iniciar sesión",
  },
};

const fr: AuthCopy = {
  shared: {
    emailLabel: "Email",
    emailPlaceholder: "nom@email.com",
    passwordLabel: "Mot de passe",
  },
  validation: {
    emailInvalid: "Email invalide",
    passwordRequired: "Le mot de passe est requis",
    passwordMin: "Le mot de passe doit comporter au moins 8 caractères",
    nameMin: "Le nom doit comporter au moins 2 caractères",
    passwordsNoMatch: "Les mots de passe ne correspondent pas",
  },
  login: {
    metaTitle: "Connexion — NorthSail",
    title: "Connexion",
    subtitle: "Accédez à votre compte NorthSail",
    forgotLink: "Oublié ?",
    submit: "Se connecter",
    noAccount: "Vous n'avez pas encore de compte ?",
    startNow: "Commencer",
    errorInvalid: "Email ou mot de passe invalide",
    errorUnexpected: "Une erreur inattendue est survenue",
  },
  register: {
    metaTitle: "Créer un compte — NorthSail",
    title: "Créer un compte",
    subtitle: "Commencez à utiliser NorthSail en quelques minutes",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    confirmLabel: "Confirmer le mot de passe",
    submit: "Créer un compte",
    haveAccount: "Vous avez déjà un compte ?",
    login: "Se connecter",
    errorFallback: "Échec de la création du compte",
  },
  forgot: {
    metaTitle: "Réinitialiser le mot de passe — NorthSail",
    title: "Réinitialiser le mot de passe",
    subtitle:
      "Indiquez votre email et nous vous enverrons un lien pour créer un nouveau mot de passe.",
    remembered: "Vous vous en souvenez ?",
    login: "Se connecter",
    submit: "Envoyer le lien",
    errorFallback: "Nous n'avons pas pu envoyer l'email.",
    doneTitle: "Vérifiez votre email",
    doneSubtitle:
      "Si un compte existe avec cet email, nous avons envoyé un lien pour réinitialiser le mot de passe.",
    doneBody:
      "Le lien expire dans {minutes} minutes. Vous ne l'avez pas reçu ? Vérifiez vos spams ou réessayez dans quelques minutes.",
    backToLogin: "Retour à la connexion",
  },
  reset: {
    metaTitle: "Nouveau mot de passe — NorthSail",
    title: "Nouveau mot de passe",
    subtitle: "Choisissez un nouveau mot de passe pour votre compte.",
    newPasswordLabel: "Nouveau mot de passe",
    confirmLabel: "Confirmer le mot de passe",
    submit: "Enregistrer le mot de passe",
    backToLogin: "Retour à la connexion",
    errorFallback: "Nous n'avons pas pu réinitialiser le mot de passe.",
    invalidTitle: "Lien invalide",
    invalidSubtitle: "Ce lien de réinitialisation est incomplet ou a expiré.",
    invalidBody: "Demandez un nouvel email de réinitialisation et réessayez.",
    requestNew: "Demander un nouveau lien",
    doneTitle: "Mot de passe mis à jour",
    doneSubtitle:
      "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.",
    doneBody: "Redirection…",
    goToLogin: "Aller à la connexion",
  },
};

const de: AuthCopy = {
  shared: {
    emailLabel: "E-Mail",
    emailPlaceholder: "name@email.com",
    passwordLabel: "Passwort",
  },
  validation: {
    emailInvalid: "Ungültige E-Mail",
    passwordRequired: "Passwort ist erforderlich",
    passwordMin: "Das Passwort muss mindestens 8 Zeichen lang sein",
    nameMin: "Der Name muss mindestens 2 Zeichen lang sein",
    passwordsNoMatch: "Die Passwörter stimmen nicht überein",
  },
  login: {
    metaTitle: "Anmelden — NorthSail",
    title: "Anmelden",
    subtitle: "Greife auf dein NorthSail-Konto zu",
    forgotLink: "Vergessen?",
    submit: "Anmelden",
    noAccount: "Noch kein Konto?",
    startNow: "Jetzt starten",
    errorInvalid: "Ungültige E-Mail oder Passwort",
    errorUnexpected: "Ein unerwarteter Fehler ist aufgetreten",
  },
  register: {
    metaTitle: "Konto erstellen — NorthSail",
    title: "Konto erstellen",
    subtitle: "Starte in wenigen Minuten mit NorthSail",
    nameLabel: "Name",
    namePlaceholder: "Dein Name",
    confirmLabel: "Passwort bestätigen",
    submit: "Konto erstellen",
    haveAccount: "Hast du bereits ein Konto?",
    login: "Anmelden",
    errorFallback: "Konto konnte nicht erstellt werden",
  },
  forgot: {
    metaTitle: "Passwort zurücksetzen — NorthSail",
    title: "Passwort zurücksetzen",
    subtitle:
      "Gib deine E-Mail ein und wir senden dir einen Link, um ein neues Passwort zu erstellen.",
    remembered: "Wieder eingefallen?",
    login: "Anmelden",
    submit: "Link senden",
    errorFallback: "Die E-Mail konnte nicht gesendet werden.",
    doneTitle: "Prüfe deine E-Mail",
    doneSubtitle:
      "Falls ein Konto mit dieser E-Mail existiert, haben wir einen Link zum Zurücksetzen des Passworts gesendet.",
    doneBody:
      "Der Link läuft in {minutes} Minuten ab. Nicht erhalten? Prüfe deinen Spam-Ordner oder versuche es in ein paar Minuten erneut.",
    backToLogin: "Zurück zur Anmeldung",
  },
  reset: {
    metaTitle: "Neues Passwort — NorthSail",
    title: "Neues Passwort",
    subtitle: "Wähle ein neues Passwort für dein Konto.",
    newPasswordLabel: "Neues Passwort",
    confirmLabel: "Passwort bestätigen",
    submit: "Passwort speichern",
    backToLogin: "Zurück zur Anmeldung",
    errorFallback: "Das Passwort konnte nicht zurückgesetzt werden.",
    invalidTitle: "Ungültiger Link",
    invalidSubtitle: "Dieser Reset-Link ist unvollständig oder abgelaufen.",
    invalidBody: "Fordere eine neue Reset-E-Mail an und versuche es erneut.",
    requestNew: "Neuen Link anfordern",
    doneTitle: "Passwort aktualisiert",
    doneSubtitle: "Du kannst dich jetzt mit deinem neuen Passwort anmelden.",
    doneBody: "Weiterleitung…",
    goToLogin: "Zur Anmeldung",
  },
};

export const AUTH_COPY: Record<Locale, AuthCopy> = {
  en,
  pt,
  es,
  fr,
  de,
};

export function getAuthCopy(locale: Locale): AuthCopy {
  return AUTH_COPY[locale];
}
