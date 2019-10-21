import * as api from '../infrastructure/api/authorization';
import IRegisterDto from '../models/authorization/dto/IRegisterDto';

export const registerUser = async (login: string, password: string) => {
    const registerForm = {login: login, password: password} as IRegisterDto;
    return await api.registerUser(registerForm);
};