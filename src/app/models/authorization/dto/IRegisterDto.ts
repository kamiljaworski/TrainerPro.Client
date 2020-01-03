export default interface IRegisterDto { 
    firstName: string | null,
    lastName: string | null,
    email: string,
    username: string,
    password: string,
    repeatPassword: string,
    accountTypeId: number
}