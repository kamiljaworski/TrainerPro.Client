import UserRoles from "../../shared-js/enums/UserRoles";
import IUserDto from "../models/user/IUserDto";

export function isUserInRole(user: IUserDto | undefined, requiredRole: UserRoles | undefined) {
    if(!user || !user.roles) {
        return false;
    }
    if (user.roles && requiredRole) {
        if (user.roles.length > 0) {
            return user.roles.findIndex(x => x === requiredRole) !== -1;
        }
    }
    return false;
}