import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";
import LoginForm from "./LoginForm";
import { DispatchFromProps, StateFromProps, OwnProps } from "./LoginFormProps";

const mapStateToProps = (state: AppState) => ({
    userRoles: state.authorization.user ? state.authorization.user.roles : undefined
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    loginUser: (loginDto) => dispatch(loginUser(loginDto))
});

export default connect<StateFromProps, DispatchFromProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)