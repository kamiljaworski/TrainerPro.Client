import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";
import LoginForm from "./LoginForm";
import { DispatchFromProps } from "./LoginFormProps";

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    loginUser: (loginDto) => dispatch(loginUser(loginDto))
});

export default connect<null, DispatchFromProps, any, AppState>(
    null,
    mapDispatchToProps
)(LoginForm)