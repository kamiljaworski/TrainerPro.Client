import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import Home from "./Home";
import { DispatchFromProps, OwnProps, StateFromProps } from "./HomeProps";
import IUserDto from '../../../models/user/IUserDto';


const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    user: state.authorization.user as IUserDto
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
});

export default connect<StateFromProps, DispatchFromProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Home)