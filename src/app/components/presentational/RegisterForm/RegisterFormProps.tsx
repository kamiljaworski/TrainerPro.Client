import { registerUser } from "../../../store/authorization/registerUser/registerUserActions";

export interface StateFromProps {
}

export interface DispatchFromProps {
    registerUser: typeof registerUser
}

export interface OwnProps {
    onSuccessSubmitCallback?: any
}

type RegisterFormProps = DispatchFromProps & OwnProps & StateFromProps;
export default RegisterFormProps;