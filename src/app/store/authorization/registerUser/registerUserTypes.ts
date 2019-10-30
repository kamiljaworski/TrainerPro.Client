import { REGISTER_USER_SUCCESS } from "../authorizationTypes";

export interface RegisterUserSuccess {
    type: typeof REGISTER_USER_SUCCESS
}

export type RegisterUserActions = RegisterUserSuccess;