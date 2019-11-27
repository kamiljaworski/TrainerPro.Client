import * as types from './authorizationTypes';
import { AuthorizationState } from './authorizationState'
import { LoginUserActions } from './loginUser/loginUserTypes';
import IUserDto from '../../models/user/IUserDto';

const initialState: AuthorizationState = {
    loggedIn: false,
    token: '',
    user: {} as IUserDto
}

type AuthorizationActions = LoginUserActions;

export function authorizationReducer(state = initialState, action: AuthorizationActions) : AuthorizationState {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}