const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.admin,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.admin,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.admin,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.admin,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.admin,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [
          roles.admin,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
      },
      etudiantImport: {
        id: 'etudiantImport',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
        ],
      },
      etudiantCreate: {
        id: 'etudiantCreate',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
        ],
        allowedStorageFolders: ['etudiant'],
      },
      etudiantEdit: {
        id: 'etudiantEdit',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
        ],
        allowedStorageFolders: ['etudiant'],
      },
      etudiantDestroy: {
        id: 'etudiantDestroy',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
        ],
        allowedStorageFolders: ['etudiant'],
      },
      etudiantRead: {
        id: 'etudiantRead',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
          roles.etudiant,
          roles.intervenant,

        ],
      },
      etudiantAutocomplete: {
        id: 'etudiantAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
          roles.etudiant,
        ],
      },

      bookingImport: {
        id: 'bookingImport',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
        ],
      },
      bookingCreate: {
        id: 'bookingCreate',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingEdit: {
        id: 'bookingEdit',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingDestroy: {
        id: 'bookingDestroy',
        allowedRoles: [
          roles.admin,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingRead: {
        id: 'bookingRead',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
          roles.etudiant,
          roles.intervenant,
        ],
      },
      bookingAutocomplete: {
        id: 'bookingAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.membreDaradja,
          roles.mentor,
          roles.etudiant,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
