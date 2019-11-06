import UserRoles from "../../../../shared-js/enums/UserRoles";

export default interface IUserDto {
    id: number,
    name: string,
    roles: UserRoles[]
}