import { Dispatch } from 'redux';
import { AuthorizationState } from '../authorizationState';
import { LoginUserActions } from './loginUserTypes';
import { LOGIN_USER_SUCCESS } from '../authorizationTypes';
import * as authorizationService from '../../../services/authorizationService';
import ILoginDto from '../../../models/authorization/dto/ILoginDto';

const loginUserSuccess = (newState: AuthorizationState): LoginUserActions => ({
    type: LOGIN_USER_SUCCESS,
    payload: newState
});


export const loginUser = (loginDto: ILoginDto) =>
    async (dispatch: Dispatch<LoginUserActions>): Promise<boolean> => {

        const response = await authorizationService.loginUser(loginDto);
        if (response.status === 200) {
            dispatch(loginUserSuccess(response.data));
            return true;
        }

        return false;
    }
