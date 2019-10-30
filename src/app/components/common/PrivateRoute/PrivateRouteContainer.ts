
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { OwnProps, StateFromProps } from './PrivateRouteProps';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state: AppState) => ({
    userRoles: state.authorization.user ? state.authorization.user.roles : undefined,
})

export default connect<StateFromProps, any, OwnProps, AppState>(
    mapStateToProps,
    null
)(PrivateRoute);