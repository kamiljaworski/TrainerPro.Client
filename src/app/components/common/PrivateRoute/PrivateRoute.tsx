import React from 'react';
import { Route, Redirect } from 'react-router';
import PrivateRouteProps from './PrivateRouteProps';
import Unathorized from '../Unauthorized/Unathorized';
import { isUserInRole } from '../../../helpers/UserHelper';

const PrivateRoute: React.SFC<PrivateRouteProps> = ({ children, authorization, requiredRole, redirectPath, ...rest }) => {
    const isAuthenticated = requiredRole ? isUserInRole(authorization.user.roles, requiredRole) : authorization.loggedIn;

    var redirect = redirectPath && !isAuthenticated ? <Redirect to={redirectPath} /> : null;
    var route = isAuthenticated
        ? <Route {...rest}> {children} </Route>
        : <Unathorized />

    return (
        redirect ? redirect : route
    );
}

export default PrivateRoute;
