// const Roles = require('../../security/roles');

// module.exports = class UserRoleChecker {
    
//     // on verifie si c un mentor
//     static isMentor(currentUser) {
    //si l'user est null ou s'il n'a pas de roles returne false
//        if(!currentUser || !currentUser.roles) {
//            return false;
//        }

//        return !currentUser.roles.some((role) => {
//            return [
//                Roles.values.admin,
//                Roles.values.membreDaradja,
//                Roles.values.universite,
//                Roles.values.etudiant,
//                Roles.values.intervenant,
//            ].includes(role);
//        })
//     }

//     // On verifie si c l'admin
//     static isAdmin(currentUser) {
//         if(!currentUser || !currentUser.roles) {
//             return false;
//         }
    //si l'user a déjà le role manager on ajoute pas un autre role manager
//         return currentUser.roles.some((role) => {
//             return role === Roles.values.admin;
//         });
//     }

//     // On verifie si c un membreDaradja
//     static isMembreDaradja() {
//         if(!currentUser || !currentUser.roles) {
//             return false;
//         }
        
//         return (!this.isAdmin(currentUser) && !this.isMentor(currentUser));
//     }

//     // on verifie si c un étudiant
//     static isEtudiant(currentUser) {
//         if(!currentUser || !currentUser.roles) {
//             return false;
//         }
 
//         return (!this.isAdmin(currentUser) && !this.isMentor(currentUser) && !this.isMembreDaradja(currentUser));
//     }

//     // on verifie si c un intervenant
//     static isIntervenant(currentUser) {
//         if(!currentUser || !currentUser.roles) {
//             return false;
//         }
 
//         return (!this.isAdmin(currentUser) && !this.isMentor(currentUser) && !this.isMembreDaradja(currentUser) && !this.isEtudiant(currentUser));
//     }

//     // on verifie si c une université
//     static isUniversite(currentUser) {
//         if(!currentUser || !currentUser.roles) {
//             return false;
//         }
 
//         return (!this.isAdmin(currentUser) && !this.isMentor(currentUser) && !this.isMembreDaradja(currentUser) && !this.isEtudiant(currentUser) && !this.isIntervenant(currentUser));
//     }

    
// };

    