import { RouteProps } from 'react-router';
import UserRoles from '../../../../shared-js/enums/UserRoles';
import { AuthorizationState } from '../../../store/authorization/authorizationState';

export interface OwnProps extends RouteProps {
    requiredRole?: UserRoles;
    redirectPath?: string;
}

export interface StateFromProps {
    authorization: AuthorizationState;
}

type PrivateRouteProps = OwnProps & StateFromProps;

export default PrivateRouteProps;