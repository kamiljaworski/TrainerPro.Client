import UserRoles from "../../../shared-js/enums/UserRoles";

export default interface IUserDto {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    roles: UserRoles[]
}