import { registerUser } from "../../../store/authorization/registerUser/registerUserActions";

export interface DispatchFromProps {
    registerUser: typeof registerUser
}

export type RegisterFormProps = DispatchFromProps;