import IUserDto from "../../models/user/dto/IUserDto";

export interface AuthorizationState {
    loggedIn: boolean,
    token?: string,
    user?: IUserDto
}