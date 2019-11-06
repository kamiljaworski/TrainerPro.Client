import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";
import UserRoles from "../../../../shared-js/enums/UserRoles";

export interface StateFromProps {
    userRoles?: UserRoles[];
}

export interface DispatchFromProps {
    loginUser: typeof loginUser
}

export interface OwnProps { }


type LoginFormProps = DispatchFromProps & OwnProps & StateFromProps;
export default LoginFormProps;