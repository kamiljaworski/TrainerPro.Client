import { AuthorizationState } from "../authorizationState";
import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../authorizationTypes";

export interface LoginUserRequest {
  type: typeof LOGIN_USER_REQUEST
  message?: string,
  code?: string
}

export interface LoginUserFailure {
    type: typeof LOGIN_USER_FAILURE
    message?: string,
    code?: string
}

export interface LoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS
    payload: AuthorizationState
    message?: string,
    code?: string
}

export type LoginUserActions = LoginUserRequest | LoginUserFailure | LoginUserSuccess;