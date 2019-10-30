import { RouteProps } from 'react-router';
import UserRoles from '../../../../shared-js/enums/UserRoles';

export interface OwnProps extends RouteProps {
    requiredRole: UserRoles;
    redirectPath?: string;
}

export interface StateFromProps {
    userRoles?: UserRoles[];
}

type PrivateRouteProps = OwnProps & StateFromProps;

export default PrivateRouteProps;