import { Dispatch } from 'redux';
import { AuthorizationState } from '../authorizationState';
import { LoginUserActions } from './loginUserTypes';
import { LOGIN_USER_SUCCESS } from '../authorizationTypes';
import { toast } from "react-toastify";


const loginUserSuccess = (newState: AuthorizationState): LoginUserActions => ({
    type: LOGIN_USER_SUCCESS,
    payload: newState
});


export const loginUser = (login: string, password: string) =>
    async (dispatch: Dispatch<LoginUserActions>): Promise<boolean> => {
        // call api
        const newState = {} as AuthorizationState;
        newState.loggedIn = true;
        newState.username = login;

        toast.error("Error!", {
            position: toast.POSITION.TOP_RIGHT
        });

        dispatch(loginUserSuccess(newState));
        return true;
    }
