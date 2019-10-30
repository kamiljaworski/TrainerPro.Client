import UserRoles from "../../../shared-js/enums/UserRoles";

export interface AuthorizationState {
    loggedIn: boolean,
    token?: string,
    user?: {
        id?: number,
        name?: string,
        roles?: UserRoles[]
    }
}