import UserRoles from "../../shared-js/enums/UserRoles";

export function isUserInRole(userRoles: UserRoles[] | undefined, requiredRole: UserRoles | undefined) {
    if (userRoles && requiredRole) {
        if (userRoles.length > 0) {
            return userRoles.findIndex(x => x === requiredRole) !== -1;
        }
    }
    return false;
}