import IUserDto from "../../../models/user/IUserDto";

export interface StateFromProps {
    user: IUserDto;
}

type PrivateRouteProps = StateFromProps;

export default PrivateRouteProps;