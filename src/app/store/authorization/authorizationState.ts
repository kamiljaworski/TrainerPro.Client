import IUserDto from "../../models/user/IUserDto";

export interface AuthorizationState {
    loggedIn: boolean,
    token: string,
    user: IUserDto
}