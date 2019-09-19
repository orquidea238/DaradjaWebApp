const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
  },

  app: {
    title: 'Daradja',
  },

  entities: {
    etudiant: {
      name: 'etudiant',
      label: 'Etudiants',
      menu: 'Etudiants',
      exporterFileName: 'etudiant_export',
      list: {
        menu: 'Etudiants',
        title: 'Etudiants',
      },
      create: {
        success: 'Etudiant saved successfully',
      },
      update: {
        success: 'Etudiant saved successfully',
      },
      destroy: {
        success: 'Etudiant deleted successfully',
      },
      destroyAll: {
        success: 'Etudiant(s) deleted successfully',
      },
      edit: {
        title: 'Edit Etudiant',
      },
      fields: {
        id: 'Id',
        'nom': 'Nom',
        'prenom': 'Prenom',
        'mentor': 'Mentor',
        'adresse': 'Adresse',
        'ageRange': 'Age',
        'age': 'Age',
        'genre': 'Genre',
        'diplomes': 'Diplomes',
        'domaineetudes': 'Domaine d"etudes',
        'entreeenfranceRange': 'Entrée en France',
        'entreeenfrance': 'Entrée en France',
        'paysobtentionbac': 'Pays obtention bac',
        'metiervise': 'Metier visé',
        'dateentreechezdaradjaRange': 'Date entrée chez daradja',
        'dateentreechezdaradja': 'Date entrée chez Daradja',
        'jobetudiant': 'Job etudiant',
        'langues': 'Langues',
        'niveaufrancais': 'Niveau francais',
        'stages': 'Stages',
        'debutmentoratRange': 'Debut mentorat',
        'debutmentorat': 'Debut mentorat',
        'finmentoratRange': 'Fin mentorat',
        'finmentorat': 'Fin mentorat',
        'telephoneRange': 'Téléphone',
        'telephone': 'Téléphone',
        'imageprofil': 'Image profil',
        'bookings': 'Rendez-vous',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'genre': {
          'homme': 'Homme',
          'femme': 'Femme',
        },
        'niveaufrancais': {
          'debutant': 'Debutant',
          'intermediaire': 'Intermediaire',
          'confirme': 'Confirme',
        },
      },
      new: {
        title: 'New Etudiant',
      },
      view: {
        title: 'View Etudiant',
      },
      importer: {
        title: 'Import Etudiants',
        fileName: 'etudiant_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    booking: {
      name: 'Agenda',
      label: 'Agenda',
      menu: 'Agenda',
      exporterFileName: 'booking_export',
      list: {
        menu: 'Agenda',
        title: 'Agenda',
      },
      create: {
        success: 'Booking saved successfully',
      },
      update: {
        success: 'Booking saved successfully',
      },
      destroy: {
        success: 'Booking deleted successfully',
      },
      destroyAll: {
        success: 'Booking(s) deleted successfully',
      },
      edit: {
        title: 'Edit Agenda',
      },
      fields: {
        id: 'Id',
        'mentor': 'Mentor',
        'etudiant': 'Etudiant',
        'debutRange': 'Debut',
        'debut': 'Debut',
        'finRange': 'Fin',
        'fin': 'Fin',
        'commentaires': 'Commentaires',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'avenir': 'A venir',
          'passe': 'Passé',
          'annule': 'Annulé',
        },
      },
      new: {
        title: 'New Booking',
      },
      view: {
        title: 'View Booking',
      },
      importer: {
        title: 'Import Bookings',
        fileName: 'booking_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Remember me',
    forgotPassword: 'Mot de passe oublie?',
    signin: 'Se connecter',
    signup: "S'inregistrer",
    signout: 'Se déconnecter',
    alreadyHaveAnAccount:
      'Déjà un compte? Connectez-vous.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'total access a tous les resources',
    },
    membreDaradja: {
      label: 'Membre Daradja',
      description: 'access partiel à tous les resources',
    },
    mentor: {
      label: 'Mentor',
      description: 'Access mentor',
    },
    etudiant: {
      label: 'Etudiant',
      description: 'Etudiant observateur',
    },
    universite: {
      label: 'Université',
      description: 'Universités partenaires',
    },
    intervenant: {
      label: 'Intervenant',
      description: 'Intervenant partenaire',
    },
  },

  iam: {
    title: 'Gestion des utilisateurs',
    menu: 'ADMIN',
    disable: 'Inactif',
    disabled: 'Inactif',
    enabled: 'Actif',
    enable: 'Actif',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'Nom',
      lastName: 'Prénom',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Numero de téléphone',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `Daradja, 64 rue Vauvenargues, Paris 75018`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
