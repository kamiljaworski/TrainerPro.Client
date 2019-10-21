import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";

export interface DispatchFromProps {
    loginUser: typeof loginUser
}

export type LoginFormProps = DispatchFromProps