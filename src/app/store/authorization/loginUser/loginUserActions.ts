import { Dispatch } from 'redux';
import { AuthorizationState } from '../authorizationState';
import { LoginUserActions } from './loginUserTypes';
import { LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE } from '../authorizationTypes';

const loginUserRequest = (): LoginUserActions => ({
    type: LOGIN_USER_REQUEST
});

const loginUserSuccess = (newState: AuthorizationState): LoginUserActions => ({
    type: LOGIN_USER_SUCCESS,
    payload: newState
});

const loginUserFailure = (): LoginUserActions => ({
    type: LOGIN_USER_FAILURE
});


export const loginUser = (login: string, password: string) =>
    async (dispatch: Dispatch<LoginUserActions>): Promise<void> => {
        // call api
        const newState = {} as AuthorizationState;
        newState.loggedIn = true;
        newState.username = login;
        dispatch(loginUserRequest());
        dispatch(loginUserSuccess(newState));
    }
