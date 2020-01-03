import { client } from './base/client';
import IRegisterDto from '../../models/authorization/dto/IRegisterDto';
import ILoginDto from '../../models/authorization/dto/ILoginDto';

export const registerUser = async (registerDto: IRegisterDto) => {
    return await client.post('api/Register', registerDto);
};

export const loginUser = async (loginForm: ILoginDto) => {
    return await client.post('api/Login', loginForm);
};
