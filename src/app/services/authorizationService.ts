import * as api from '../infrastructure/api/authorization';
import IRegisterDto from '../models/authorization/dto/IRegisterDto';
import ILoginDto from '../models/authorization/dto/ILoginDto';

export const registerUser = async (registerDto: IRegisterDto) => {
    return await api.registerUser(registerDto);
};

export const loginUser = async (loginDto: ILoginDto) => {
    return await api.loginUser(loginDto);
};