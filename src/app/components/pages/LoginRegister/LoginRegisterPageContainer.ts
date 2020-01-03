import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";
import LoginRegisterPage from "./LoginRegisterPage";
import { DispatchFromProps, OwnProps, StateFromProps } from "./LoginRegisterPageProps";


const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    authorization: state.authorization,
    text: ownProps.text
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    loginUser: (loginUserDto) => dispatch(loginUser(loginUserDto))
});

export default connect<StateFromProps, DispatchFromProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(LoginRegisterPage)