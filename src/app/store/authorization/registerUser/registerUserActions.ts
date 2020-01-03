import { Dispatch } from 'redux';
import { RegisterUserActions } from './registerUserTypes';
import { REGISTER_USER_SUCCESS } from '../authorizationTypes';
import * as authorizationService from '../../../services/authorizationService';
import IRegisterDto from '../../../models/authorization/dto/IRegisterDto';
import { toast } from 'react-toastify';


const registerUserSuccess = (): RegisterUserActions => ({
    type: REGISTER_USER_SUCCESS
});


export const registerUser = (registerDto: IRegisterDto) =>
    async (dispatch: Dispatch<RegisterUserActions>): Promise<boolean> => {

        const response = await authorizationService.registerUser(registerDto);
        if (response.status === 200) {
            toast.success("Registration successfull, You can now log in!", {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(registerUserSuccess());
            return true;
        }

        return false;
    }
