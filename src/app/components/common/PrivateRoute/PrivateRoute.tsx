import React from 'react';
import { Route, Redirect } from 'react-router';
import PrivateRouteProps from './PrivateRouteProps';
import Unathorized from '../Unauthorized/Unathorized';
import { isUserInRole } from '../../../helpers/UserHelper';

const PrivateRoute: React.SFC<PrivateRouteProps> = ({ children, authorization, requiredRole, redirectPath, ...rest }) => {
    const isAuthenticated = requiredRole ? isUserInRole(authorization.user.roles, requiredRole) : authorization.loggedIn;
console.log('requiredRole', requiredRole);
    return (
        <React.Fragment>
            {redirectPath && !isAuthenticated && <Redirect to={redirectPath} />}
            {isAuthenticated ?
                <Route {...rest}> {children} </Route>
                : <Unathorized />
            }
        </React.Fragment>
    );
}

export default PrivateRoute;
