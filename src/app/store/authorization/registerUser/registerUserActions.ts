import { Dispatch } from 'redux';
import { RegisterUserActions } from './registerUserTypes';
import { REGISTER_USER_SUCCESS } from '../authorizationTypes';
import * as authorizationService from '../../../services/authorizationService';
import IRegisterDto from '../../../models/authorization/dto/IRegisterDto';


const registerUserSuccess = (): RegisterUserActions => ({
    type: REGISTER_USER_SUCCESS
});


export const registerUser = (registerDto: IRegisterDto) =>
    async (dispatch: Dispatch<RegisterUserActions>): Promise<boolean> => {

        const response = await authorizationService.registerUser(registerDto);
        if (response.status === 200) {
            dispatch(registerUserSuccess());
            return true;
        }

        return false;
    }
