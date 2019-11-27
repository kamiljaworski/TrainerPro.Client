
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { StateFromProps } from './PrivateRouteProps';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state: AppState) => ({
    authorization: state.authorization,
})

export default connect<StateFromProps, any, any, AppState>(
    mapStateToProps,
    null
)(PrivateRoute);