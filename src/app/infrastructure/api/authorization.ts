import { client } from './base/client';
import IRegisterDto from '../../models/authorization/dto/IRegisterDto';
import ILoginDto from '../../models/authorization/dto/ILoginDto';

export const registerUser = async (registerForm: IRegisterDto) => {
    return await client.post('api/Accounts/Register', registerForm);
};

export const loginUser = async (loginForm: ILoginDto) => {
    return await client.post('api/token', loginForm);
};
