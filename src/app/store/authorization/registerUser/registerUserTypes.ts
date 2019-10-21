import { AuthorizationState } from "../authorizationState";
import { REGISTER_USER_SUCCESS } from "../authorizationTypes";

export interface RegisterUserSuccess {
    type: typeof REGISTER_USER_SUCCESS
    payload: AuthorizationState
    message?: string,
    code?: string
}

export type RegisterUserActions = RegisterUserSuccess;