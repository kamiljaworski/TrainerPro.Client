import { AuthorizationState } from "../../../store/authorization/authorizationState";
import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";

export interface StateFromProps {
    authorization: AuthorizationState
}

export interface DispatchFromProps {
    loginUser: typeof loginUser
}

export interface OwnProps {
    text?: string
}

export type LoginRegisterProps = StateFromProps & DispatchFromProps & OwnProps;