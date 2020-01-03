import { Dispatch } from 'redux';
import { AuthorizationState } from '../authorizationState';
import { LoginUserActions } from './loginUserTypes';
import { LOGIN_USER_SUCCESS } from '../authorizationTypes';
import * as authorizationService from '../../../services/authorizationService';
import ILoginDto from '../../../models/authorization/dto/ILoginDto';
import jwt_decode  from 'jwt-decode';
import { setUserToken } from '../../../infrastructure/api/base/tokenManagement';

const loginUserSuccess = (newState: AuthorizationState): LoginUserActions => ({
    type: LOGIN_USER_SUCCESS,
    payload: newState
});


export const loginUser = (loginDto: ILoginDto) =>
    async (dispatch: Dispatch<LoginUserActions>): Promise<boolean> => {

        const response = await authorizationService.loginUser(loginDto);
        if (response.status === 200) {
            var decoded = jwt_decode(response.data.token) as any;
            var authState : AuthorizationState = {
                loggedIn: true,
                token: response.data.token,
                user: {
                    name: decoded.username,
                    roles: [decoded.account_type],
                    lastName: decoded.lastName,
                    firstName: decoded.firstName,
                    username: decoded.username,
                    email: decoded.email,
                    id: decoded.sub
                }
            }

            setUserToken(response.data.token);
            
            dispatch(loginUserSuccess(authState));
            return true;
        }

        return false;
    }
