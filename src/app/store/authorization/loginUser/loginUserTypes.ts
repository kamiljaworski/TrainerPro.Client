import { AuthorizationState } from "../authorizationState";
import {  LOGIN_USER_SUCCESS } from "../authorizationTypes";

export interface LoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS
    payload: AuthorizationState
    message?: string,
    code?: string
}

export type LoginUserActions =  LoginUserSuccess;