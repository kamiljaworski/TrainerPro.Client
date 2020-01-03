import IUserDto from "../../../models/user/IUserDto";

export interface StateFromProps {
    user: IUserDto
}

export interface DispatchFromProps {
}

export interface OwnProps {
}

type HomeProps = StateFromProps & DispatchFromProps & OwnProps;

export default HomeProps;