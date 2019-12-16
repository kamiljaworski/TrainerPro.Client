import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { StateFromProps } from './NavigationBarProps';
import NavigationBar from "./NavigationBar";

const mapStateToProps = (state: AppState) => ({
    user: state.authorization.user,
})

export default connect<StateFromProps, any, any, AppState>(
    mapStateToProps,
    null
)(NavigationBar);
